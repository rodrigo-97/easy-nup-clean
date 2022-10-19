import { Client } from "./client";
import { Contract } from "./contract";
import { User } from "./user";

export type Company = {
  id: number;
  socialCode: string;
  socialName: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  contracts: Contract[];
  clients: Client[];
};
