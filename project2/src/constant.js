export const SERVER = {
    AUTH_MISSING: 'Authentication missing',
    AUTH_INSUFFICIENT: 'Authentication insufficient',
    REQUIRED_USERNAME: 'Username required',
    REQUIRED_MESSAGE: 'Message required',
  };
  
  export const CLIENT = {
    NETWORK_ERROR: 'Network error',
    NO_SESSION: 'No session',
  };
  
  export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'There seems to be a problem with the network. Please try again.',
    [SERVER.AUTH_INSUFFICIENT]: 'The username/password combination does not match our records. Please try again.',
    [SERVER.REQUIRED_USERNAME]: 'Please enter a valid username (only letters and/or numbers are allowed).',
    [SERVER.REQUIRED_MESSAGE]: 'Please enter a message to send.',
    default: 'An unexpected error occurred. Please try again.',
  };