const X = "⨉" as const;
const O = "◯" as const;
const TURNS = {
  X: X,
  O: O,
};

// Edit on .css
const TURNS_COLORS = {
  X: "TICTACTOE__color__X",
  O: "TICTACTOE__color__O",
};

export { TURNS, TURNS_COLORS, X, O };
