/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetViewer
// ====================================================

export interface GetViewer_getViewer {
  __typename: "Viewer";
  id: string;
  name: string | null;
  email: string | null;
  phoneNo: string | null;
  profileSrc: string | null;
}

export interface GetViewer {
  getViewer: GetViewer_getViewer;
}
