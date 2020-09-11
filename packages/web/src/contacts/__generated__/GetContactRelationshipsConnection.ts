/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetContactRelationshipsConnection
// ====================================================

export interface GetContactRelationshipsConnection_getContactRelationshipsConnection_edges {
  __typename: "Contact";
  id: string;
  name: string | null;
  email: string | null;
  phoneNo: string | null;
  profileSrc: string | null;
}

export interface GetContactRelationshipsConnection_getContactRelationshipsConnection {
  __typename: "ContactConnection";
  total: number;
  cursor: string | null;
  edges: GetContactRelationshipsConnection_getContactRelationshipsConnection_edges[] | null;
}

export interface GetContactRelationshipsConnection {
  /**
   * Get Contacts Relationships Connection
   */
  getContactRelationshipsConnection: GetContactRelationshipsConnection_getContactRelationshipsConnection;
}

export interface GetContactRelationshipsConnectionVariables {
  limit?: number | null;
  cursor?: string | null;
}
