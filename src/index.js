class Sorter {
  constructor() {
    //this.count = 0;
    this.array = [];
    this.res=[];
    this.comp = null;
  }

  add(element) {
    this.array.push(element);
    //this.count++;
  }

  at(index) {
    return this.array[index];
    //this.count--;
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var ind = indices; 
    ind = ind.sort(function compareNumbers(a, b) {
      return a - b;
    });
    
    for(var i = 0; i < ind.length; i++) {
      this.res.push(this.array[ind[i]]);
    }
    
    if (this.comp == null) {
      this.res = this.res.sort(function(a, b) {
        return a - b;   
      });
    }
    else {
      this.res = this.res.sort(this.comp);
    }
   
    for(var i = 0; i < this.res.length; i++ ) {
      this.array[ind[i]] = this.res[i];
    }
    
    this.res.length = 0;
    return this.array;
    
  }

  setComparator(compareFunction) {
    this.comp = compareFunction;
  }
}

module.exports = Sorter;