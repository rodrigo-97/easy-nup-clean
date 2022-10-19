import { AuthProviders } from "../enums/authProviders";
import { Client } from "./client";
import { Company } from "./company";

export type User = {
  id: number;
  email: string | undefined;
  password?: string;
  avatarUrl?: string | null;
  confirmAccountToken?: string | null;
  resetPasswordToken?: string | null;
  emailVerified?: boolean;
  providerId: string;
  provider: AuthProviders;
  name: string;
  nickName: string;
  createdAt: Date;
  updatedAt: Date;
  client: Client;
  company: Company;
};
