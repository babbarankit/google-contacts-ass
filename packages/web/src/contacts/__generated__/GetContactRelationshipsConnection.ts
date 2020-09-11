/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetContactRelationshipsConnection
// ====================================================

export interface GetContactRelationshipsConnection_data_edges {
  __typename: "Contact";
  id: string;
  name: string | null;
  email: string | null;
  phoneNo: string | null;
  profileSrc: string | null;
}

export interface GetContactRelationshipsConnection_data {
  __typename: "ContactConnection";
  total: number;
  cursor: string | null;
  edges: GetContactRelationshipsConnection_data_edges[] | null;
}

export interface GetContactRelationshipsConnection {
  /**
   * Get Contacts Relationships Connection
   */
  data: GetContactRelationshipsConnection_data;
}

export interface GetContactRelationshipsConnectionVariables {
  limit?: number | null;
  cursor?: string | null;
}
