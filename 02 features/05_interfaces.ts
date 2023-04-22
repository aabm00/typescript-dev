interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink1 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary1(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// item debe incluir el metodo 'summary' para ser 'Reportable'
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink1);
