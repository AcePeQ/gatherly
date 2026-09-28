const NODE_ENV = import.meta.env.NODE_ENV
export const API_URL = NODE_ENV === "development" ? import.meta.env.API_URL_DEV : import.meta.env.API_URL_PROD;