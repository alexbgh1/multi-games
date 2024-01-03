import { TURNS } from "../constants/TicTacToe/turns";

type Board = [Square, Square, Square, Square, Square, Square, Square, Square, Square];
type Square = "X" | "O" | null;
type Turn = typeof TURNS.X | typeof TURNS.O;

export type { Board, Square, Turn };
