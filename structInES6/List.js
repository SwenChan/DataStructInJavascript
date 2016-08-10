/*!
  List
 */
'use strict';
class List {
  constructor () {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  };
  clear () {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  };
  find (item) {
    for (let i = 0; i < this.listSize; i++) {
      if (this.dataStore[i] == item) {
        return i;
      }
    }
    return -1;
  };
  toString () {
    return this.dataStore;
  };
  insert (item) {
    const insertPos = this.find(after);
  };
  append (elem) {
    this.dataStore.push(elem);
    this.listSize++;
  };
  remove (item) {
    const foundAt = this.find(item);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  };
  end () {};
  front () {};
  pre () {};
  next () {};
  hasNext () {};
  hasPrev () {};
  length () {
    return this.listSize;
  };
  currPos () {};
  moveTo () {};
  getElement () {};
  contains () {};
}

module.exports = List;

