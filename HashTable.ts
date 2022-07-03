// declare global {
interface HashTable {
  size: number;
  keys: number[];
  values: number[];
  limit: number;
}
// }

function HashTable(size: number): void {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

HashTable.prototype.get = function (key) {
  var hashedIndex = this.hash(key);

  while (this.keys[hashedIndex] != key) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }

  return this.values[hashedIndex];
};

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table is full";

  const hashedIndex = this.hash(key);

  while (this.keys[hashedIndex] != null) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.initArray = function (size) {
  return Array(size).fill(null);
};

HashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw "must be int";

  return key % this.size;
};

HashTable.prototype.show = function () {
  console.log(this.keys);
  console.log(this.values);
};

let eg = new HashTable(7);
eg.put(2, "hi");
eg.put(1, "mera");
eg.put(6, "ds");
eg.put(7, "take u forward");

eg.show();
