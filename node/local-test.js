
var _ = require("lodash")

//* Lodash, A javascript toolkit libaray with tons of useful functions.

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

let index = _.findIndex(users, (o)=>{
    return o.user === "pebbles";
});

console.log(index)