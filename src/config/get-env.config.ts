type EnvVariables = {
  readonly ENV: 'production' | 'staging' | 'development' | 'test';
  readonly NODE_ENV: 'production' | 'development';
  readonly NEXT_PUBLIC_REST_API_ENDPOINT: string;
  readonly NEXT_PUBLIC_DEFAULT_LANGUAGE: string;
  readonly NEXTAUTH_URL: string;
};
export function getEnv(
  name: keyof EnvVariables
): EnvVariables[keyof EnvVariables] {
  const val = process.env[name];
  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }
  return val;
}
