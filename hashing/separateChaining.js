class LimitedLinkedList {
  constructor() {
    this._length = 0;
    this._head = null;
  }

  _createNode(value, next = null) {
    return {
      value,
      next,
    };
  }

  add(value) {
    if (this._length === 0) {
      const node = this._createNode(value);
      this._head = node;
      this._length += 1;

      return node.value;
    }

    let current = this._head;

    while (current.next) {
      current = current.next;
    }

    const node = this._createNode(value);
    current.next = node;
    this._length += 1;

    return node.value;
  }
}

class LimitedHashtable {
  constructor(limit) {
    this._capacity = limit;
    this._size = 0;
    this._data = {}; // 🥴
  }

  _generateIndex(value) {
    return value % this._capacity;
  }

  add(value) {
    if (this._size >= this._capacity) {
      throw new Error("Hashtable is full!");
    }

    const index = this._generateIndex(value);

    if (!Object.hasOwn(this._data, index)) {
      this._data[index] = new LimitedLinkedList();
    }

    this._data[index].add(value);
    this._size++;

    return this._data[index];
  }
}

const limitedHs = new LimitedHashtable(5);
console.log("adding 10", JSON.stringify(limitedHs.add(10), null, 1));
console.log("adding 5", JSON.stringify(limitedHs.add(5), null, 1));
console.log("adding 2", JSON.stringify(limitedHs.add(2), null, 1));
