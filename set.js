// collection of unique values
// different data types can be stored
// dynamically sized. you dnt have to set size
// no order
// iterables (for of)
// searching and deleting is faster than array

let data = [1, 2, 3, 4, 4, 5];

let set = new Set(data); // initialize a set
set.add(6); // add element to set
set.delete(2); // remove element from set
let setSize = set.size; // get the size of the set
set.clear(); // clear data in the set

for(const item of set) {
    console.log(item);
}