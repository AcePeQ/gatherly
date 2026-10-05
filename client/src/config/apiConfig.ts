const NODE_ENV = import.meta.env.VITE_NODE_ENV
export const API_URL = NODE_ENV === "development" ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD;