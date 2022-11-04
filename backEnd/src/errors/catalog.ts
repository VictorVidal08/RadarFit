export enum ErrorTypes {
    EntityNotFound = 'EntityNotFound',
    ObjectNotFound = 'ObjectNotFound',
  }
    
    type ErrorResponseObject = { 
      message: string;
      httpStatus: number
    };
    
  export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;
    
  export const errorCatalog: ErrorCatalog = {
    EntityNotFound: {
      message: 'Something went wrong',
      httpStatus: 400,
    },
    ObjectNotFound: {
      message: 'Object not found',
      httpStatus: 404,
    },
  };
  