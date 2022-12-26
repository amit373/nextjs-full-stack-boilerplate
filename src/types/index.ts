import type { NextPage } from 'next';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authenticationRequired?: boolean;
};

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface ChangePasswordUserInput {
  oldPassword: string;
  newPassword: string;
}

export interface PasswordChangeResponse {
  success: boolean;
  message: string;
}

export interface ForgotPasswordUserInput {
  email: string;
}

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export interface ResetPasswordUserInput {
  email: string;
  token: string;
  password: string;
}
