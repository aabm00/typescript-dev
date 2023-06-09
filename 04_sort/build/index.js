"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sorter } from "./Sorter";
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
console.log("==== SORT NUMBERS ARRAY ====");
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
console.log("====== SORT STRING =======");
var charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);
console.log("==== SORT LINDED LIST ====");
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(1);
linkedList.sort();
linkedList.print();
