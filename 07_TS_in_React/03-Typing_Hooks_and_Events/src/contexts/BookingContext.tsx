import { createContext, use, useReducer } from 'react';

// # State & Context Types
// * Define the shape of the state and the context value (data + functions).
export type BookingState = {
  destinations: string[];
  premium: boolean;
};

export type BookingContextType = {
  bookingState: BookingState;
  addDestination: (destination: string) => void;
  removeDestination: (destinationSlug: string) => void;
};

const initalState: BookingState = {
  destinations: [],
  premium: false,
};

// * Initialize Context with the defined type.
// ! The initial value matches the shape but has dummy functions (they will be overwritten by the Provider).
const BookingContext = createContext<BookingContextType>({
  bookingState: initalState,
  addDestination: () => {},
  removeDestination: () => {},
});

// # Action Types (Discriminated Union)
// * Define all possible actions for the reducer.
// * 'type' acts as a discriminator to narrow down the payload type in the reducer.
type AddAction = {
  type: 'ADD_BOOKING';
  payload: string;
};

type RemoveAction = { type: 'REMOVE_DESTINATION'; payload: string };

type BookingAction = AddAction | RemoveAction;

// # Reducer Function
// * The reducer receives the current state and an action, returning the new state.
// * TypeScript ensures 'action' matches one of the defined types in 'BookingAction'.
function reducer(bookingState: BookingState, action: BookingAction) {
  //   console.log({ bookingState, action });

  switch (action.type) {
    case 'ADD_BOOKING': {
      // * TS knows 'action.payload' is a string because we checked type === 'ADD_BOOKING'.
      const newDestination = [...bookingState.destinations, action.payload];
      const premium = newDestination.length >= 3;
      return {
        ...bookingState,
        destinations: newDestination,
        premium,
      };
    }
    case 'REMOVE_DESTINATION': {
      const destinations = bookingState.destinations.filter((d) => d !== action.payload);
      const premium = destinations.length >= 3;
      return { ...BookingContext, destinations, premium };
    }
    default:
      // ! Ideally, use a 'never' check here to ensure all cases are covered.
      throw new Error(`Unkown action: ${JSON.stringify(action)}`);
  }
}

// # Context Provider
// * Typing 'children' as React.ReactNode allows any valid JSX content to be passed.
export default function BookingContextProvider({ children }: { children: React.ReactNode }) {
  // * useReducer is generic, but often infers types from the reducer function and initial state.
  const [bookingState, dispatch] = useReducer(reducer, initalState);
  console.log(bookingState);

  function addDestination(destination: string) {
    dispatch({
      type: 'ADD_BOOKING',
      payload: destination,
    });
  }

  function removeDestination(destinationSlug: string) {
    dispatch({
      type: 'REMOVE_DESTINATION',
      payload: destinationSlug,
    });
  }

  //   dispatch({ type: 'ADD_BOOKING', payload: 'berlin' });
  return (
    <BookingContext value={{ bookingState, addDestination, removeDestination }}>
      {children}
    </BookingContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBooking() {
  // * 'use' (React 19) or 'useContext' consumes the context with the correct type.
  return use(BookingContext);
}
