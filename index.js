class HashMap {
  constructor(size = 16) {
    this.keyMap = new Array(size);
    this.loadFactor = 0.75;
  }

  hash(key) {
    let hashCode = 0;
    const PRIME = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME * hashCode + key.charCodeAt(i)) % this.keyMap.length;
    }
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].forEach((node) => {
      if (node[0] === key) {
        node[1] = value;
      }
    });

    if (!this.has(key)) {
      this.keyMap[index].push([key, value]);
    }
  }

  get(key) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      return null;
    }
    this.keyMap[index].forEach((node) => {
      if (node[0] === key) {
        console.log(node[1]);
        return node[1];
      }
    });
  }

  has(key) {
    let index = this.hash(key);
    let contains = false;
    if (!this.keyMap[index]) {
      console.log(contains);
      return contains;
    }
    this.keyMap[index].forEach((node) => {
      if (node[0] === key) {
        contains = true;
      }
    });
    console.log(contains);
    return contains;
  }

  remove(key) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      console.log(false);
      return false;
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        delete this.keyMap[index][i];
        console.log(this.keyMap);
      }
    }
  }

  length() {
    let length = 0;
    this.keyMap.forEach((bucket) => {
      length += bucket.length;
    });
    console.log(length);
    return length;
  }

  clear() {
    this.keyMap = new Array(this.keyMap.length);
  }

  keys() {
    let keys = [];
    this.keyMap.forEach((bucket) => {
      if (bucket.length >= 1) {
        bucket.forEach((node) => {
          if (!keys.includes(node[0])) {
            keys.push(node[0]);
          }
        });
      }
    });
    console.log(keys);
    return keys;
  }

  values() {
    let values = [];
    this.keyMap.forEach((bucket) => {
      if (bucket.length >= 1) {
        bucket.forEach((node) => {
          if (!values.includes(node[1])) {
            values.push(node[1]);
          }
        });
      }
    });
    console.log(values);
    return values;
  }

  entries() {
    let entries = [];
    this.keyMap.forEach((bucket) => {
      if (bucket.length >= 1) {
        bucket.forEach((node) => {
          entries.push(node);
        });
      }
    });
    console.log(entries);
    return entries;
  }
}

let map = new HashMap();

map.set('Remy', 'Try getting this value!');
map.set('Ymer', 'Try getting this value!');
map.set('Rasta', 'Try getting this value!');
map.set('Emory', 'Try getting this value!');
map.set('Remy', 'Try getting this updated value!');
map.entries();
