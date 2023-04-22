import { MatchResult } from "./MatchResult"; // enum

// TUPLA para saber el orden y tipo de los datos del fichero
// CSV
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult, // enum
  string
];
