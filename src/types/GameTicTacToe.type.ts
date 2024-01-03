import { TURNS } from "../constants/TicTacToe/turns";
import { WIN_CONDITIONS } from "../constants/TicTacToe/winCondition";

type Board = [Square, Square, Square, Square, Square, Square, Square, Square, Square];
type Square = typeof TURNS.X | typeof TURNS.O | null;
type Turn = typeof TURNS.X | typeof TURNS.O;
type Winner = true | false | null;
type WinnerCondition = (typeof WIN_CONDITIONS)[number] | null;

export type { Board, Square, Turn, Winner, WinnerCondition };
