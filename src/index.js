const bolos = [
  {
    id: "0001",
    type: "donut",
    name: "cake",
    price: 0.84
  },

  {
    id: "0002",
    type: "Morango",
    name: "cake",
    price: 0.99
  },

  {
    id: "0003",
    type: "morango",
    name: "cake",
    price: 0.5
  },

  {
    id: "0004",
    type: "chocolate",
    name: "cake",
    price: 1.99
  },

  {
    id: "0004",
    type: "Chocolate",
    name: "cake",
    price: 1.25
  }
];

let bolosChoco = bolos.filter((e) => {
  return e.type === "chocolate" || e.type === "Chocolate";
});

console.log(bolosChoco);

let bolosMora = bolos.filter((e) => {
  return e.type === "Morango" || e.type === "morango";
});
console.log(bolosMora);
