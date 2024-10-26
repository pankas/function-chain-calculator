import { InitialInput } from "./home-screen.type";

export const initialState:InitialInput = {
  initialInput: 2,
  equations: {
    1: 'x^2',
    2: '2*x+4',
    3: 'x^2+20',
    4: 'x-2',
    5: 'x/2',
  },
  output: 0,
};