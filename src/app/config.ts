export interface Config {
  baseUrl: string;
}

const getConfig = (): Config => {
  const key = 'REACT_APP_BACKEND_URL';
  const value = process.env[key];
  if (!value) {
    throw new Error(`The environment variable '${key}' is missing!`);
  }
  return {
    baseUrl: value,
  };
};

export const config = getConfig();
