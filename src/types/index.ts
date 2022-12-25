import type { NextPage } from 'next';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authenticationRequired?: boolean;
};

export interface LoginUserInput {
  email: string;
  password: string;
}
