import Cookies from 'universal-cookie';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

export const TOKEN_LIFETIME_COOKIE = 'token_lifetime';

export const isTokenValidOrUndefined = (cookie: string): 'not-present' | 'expired' | 'valid' => {
  let status: 'not-present' | 'expired' | 'valid' = 'not-present';
  const uc = new Cookies(cookie);
  const tokenLifetimeCookie = uc.get(TOKEN_LIFETIME_COOKIE);
  if (tokenLifetimeCookie) {
    status = dayjs(tokenLifetimeCookie.accessTokenExpiresAt).format('x') > dayjs().format('x') ? 'valid' : 'expired';
  }
  return status;
};
