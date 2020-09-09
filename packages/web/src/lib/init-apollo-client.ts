import { ApolloClient, InMemoryCache, NormalizedCacheObject, from, HttpLink, ApolloLink } from '@apollo/client';
import fetch from 'isomorphic-unfetch';
import { onError } from '@apollo/client/link/error';
import { createPersistedQueryLink } from '@apollo/link-persisted-queries';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Initialize Apollo Cient Outside Functions
let apolloClient: ApolloClient<{}> | null = null;

// Create Apollo Client
function create(initialState: NormalizedCacheObject | null, cookie?: string) {
  const isBrowser: boolean = typeof window !== 'undefined';
  if (!isBrowser) {
    const enchancedFetch = async (url: RequestInfo, init: RequestInit) => {
      const response = await fetch(url, {
        ...init,
        headers: {
          ...init.headers,
          Cookie: cookie,
        },
      });
      return response;
    };
    (global as any).fetch = enchancedFetch;
  }
  const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL ? process.env.NEXT_PUBLIC_SERVER_URL : '';
  const NEXT_PUBLIC_GRAPHQL_URI = process.env.NEXT_PUBLIC_GRAPHQL_URI ? process.env.NEXT_PUBLIC_GRAPHQL_URI : '';
  const graphqlUrl = NEXT_PUBLIC_SERVER_URL + NEXT_PUBLIC_GRAPHQL_URI;
  const persistedLink = createPersistedQueryLink();
  const httpLink = new HttpLink({
    uri: graphqlUrl,
    credentials: 'include',
  });
  let links: ApolloLink[] = [persistedLink, httpLink];
  if (process.env.NODE_ENV !== 'production') {
    links = [errorLink, ...links];
  }
  return new ApolloClient({
    connectToDevTools: isBrowser && process.env.NODE_ENV !== 'production',
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: from(links),
    cache: new InMemoryCache({}).restore(initialState || {}),
  });
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
export default function initApolloClient(initialState?: NormalizedCacheObject, cookie?: string) {
  const isBrowser: boolean = typeof window !== 'undefined';
  if (!isBrowser) {
    return create(initialState, cookie);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
