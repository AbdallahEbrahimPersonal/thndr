/**
 * Error status codes
 */
export enum ERROR_STATUS_CODES {
  RATE_LIMIT_EXCEEDED = 429,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
}

export const ERROR_MESSAGES = {
  [ERROR_STATUS_CODES.RATE_LIMIT_EXCEEDED]:
    'Rate limit exceeded, please try again later.',
  [ERROR_STATUS_CODES.BAD_REQUEST]: 'Bad request, please try again.',
  [ERROR_STATUS_CODES.UNAUTHORIZED]: 'Unauthorized, please try again.',
  [ERROR_STATUS_CODES.FORBIDDEN]: 'Forbidden, please try again.',
  [ERROR_STATUS_CODES.NOT_FOUND]: 'Not found, please try again.',
};
