class LimitedHashtable {
  constructor(limit) {
    this._capacity = limit;
    this._size = 0;
    this._data = {}; // 🥴
  }

  _generateIndex(value) {
    return value % this._capacity;
  }

  _generateIndexLinearly(value, counter) {
    return (value + counter) % this._capacity;
  }

  _generateIndexQuadratically(value, counter) {
    return (value + Math.pow(counter, 2)) % this._capacity;
  }

  add(value) {
    if (this._size >= this._capacity) {
      throw new Error("Hashtable is full!");
    }

    let index = this._generateIndex(value);
    let counter = 1;

    while (Object.hasOwn(this._data, index)) {
      // index = this._generateIndexLinearly(value, counter);
      index = this._generateIndexQuadratically(value, counter);
      counter++;
    }

    this._size++;
    this._data[index] = value;

    return this._data[index];
  }
}

const limitedHs = new LimitedHashtable(2);
console.log("adding 10", JSON.stringify(limitedHs.add(10), null, 1));
console.log("adding 5", JSON.stringify(limitedHs.add(5), null, 1));
// console.log("adding 2", JSON.stringify(limitedHs.add(2), null, 1));
