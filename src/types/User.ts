import { Dispatch, ReactNode } from "react";

export type AuthUser = {
  username: string;
  password: string;
}

export type UseAuthType = {
  userConnected: Users | null;
  setUserConnected: Dispatch<Users>;
  error: boolean;
  setError: Dispatch<boolean>;
  allUser: AllUser | null;
  setAllUser: Dispatch<AllUser>;
  loading: boolean;
  setLoading: Dispatch<boolean>;
  isAuthenticated: boolean;
  logout: () => void;
}

export type UseAuthProviderType = {
  children: ReactNode;
  userData?: any;
}

export type AllUser = {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
      color: string;
      type: string;
    };
    domain: string;
    ip: string;
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      },
      postalCode: string;
      state: string;
    };
    macAddress: string;
    university: string;
    bank: {
      cardExpire: string;
      cardNumber: string;
      cardType: string;
      currency: string;
      iban: string;
    };
    company: {
      address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        }
        postalCode: string;
        state: string;
      }
      department: string;
      name: string;
      title: string;
    }
    ein: string;
    ssn: string;
    userAgent: string;
  }[]
  total: number;
  skip: number;
  limit: number;
}

export type Users = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}