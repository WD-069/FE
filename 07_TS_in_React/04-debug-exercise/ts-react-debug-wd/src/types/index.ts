import type { Dispatch, RefObject, SetStateAction } from 'react';

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  latitude: number;
  longitude: number;
  organizerId: number;
  createdAt: string;
  updatedAt: string;
};

type EventsRespone = {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  results: Event[];
};

type User = {
  id: number;
  name: null | string;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

type RegisterActionType =
  | {
      success: boolean;
      error?: undefined;
    }
  | {
      error: string;
      success?: undefined;
    };

type LoginResponse = {
  user: Pick<User, 'id' | 'email'>;
  token: string;
};

type LoginActionType =
  | {
      success: boolean;
      user: {
        id: number;
        email: string;
      };
      token: string;
      error?: undefined;
    }
  | {
      error: string;
      success?: undefined;
      user?: undefined;
      token?: undefined;
    };

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (token: string | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
};

type EventsListProps = {
  events: Event[];
  setHighlightedEvent: Dispatch<SetStateAction<Event | null>>;
};

type CreateEventModalProps = {
  refreshForNewEvent: () => void;
  modalRef: RefObject<HTMLDialogElement | null>;
};

type CreateEventActionType =
  | {
      success: boolean;
      message: string;
      error?: undefined;
    }
  | {
      error: string;
      success?: undefined;
      message?: undefined;
    };

export type {
  Event,
  EventsRespone,
  User,
  RegisterActionType,
  LoginActionType,
  LoginResponse,
  AuthContextType,
  EventsListProps,
  CreateEventModalProps,
  CreateEventActionType
};
