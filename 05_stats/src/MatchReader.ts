import { dateStringToDate } from "./utils"; // method
import { MatchResult } from "./MatchResult"; // Enumeration
import { MatchData } from "./MatchData"; // Tupla
import { CsvFileReader } from "./CsvFileReader"; // Class

interface DataReader {
  read(): void;
  data: string[][];
}

// Delega (composition) la lectura del fichero CSV a la
// Clase "CsvFileReader" que es del tipo "DataReader"
// y transforma los datos (PARSE)
export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  /**
   * MatchData es una Tupla la cuan es una Array de tipos por lo
   * tanto estamos obteniendo una Array de Arrays [][]
   */
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
