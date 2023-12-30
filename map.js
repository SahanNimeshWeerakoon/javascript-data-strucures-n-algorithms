// ordered key value pairs
// can retrieve data from the corresponding key
// Iterable and can be used with for of loop
// keys of object is string or simbol. but map can be any tipe
// maps dont have prototypes
// size property returs map size
// maps are restricted to storing data

let map = new Map([['a', 1], ['b', 2]]);
map.set('c', 3);
map.delete('b');
map.has('c');
let size = map.size;
map.clear();

for(const [key, value] of map) {
    console.log(`${key}: ${value}`);
}