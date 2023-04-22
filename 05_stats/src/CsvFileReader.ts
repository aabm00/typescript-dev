import fs from "fs";

/**
 * Lee los datos del fichero CSV y los pone en la propiedad "data"
 * Cumple los requerimientos de la interfaz 'DataReader' del
 * fichero 'MatchReader.ts' aunque no la implementa explicitamente:
 *  'export class CsvFileReader implements DataReader'
 *
 * interface DataReader {
 *  read(): void;
 *  data: string[][];
 * }
 *
 */
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
