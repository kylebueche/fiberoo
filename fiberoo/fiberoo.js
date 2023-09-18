class Fiberoo {
  fib() {
    this.fibList = [0, 1];
    for (this.i = 0; this.i < 48; this.i++) {
      this.fibList.push(this.fibList[this.fibList.length - 1] + this.fibList[this.fibList.length - 2]);
    }
    return this.fibList;
  }

  numsToStrings(array) {
    this.stringList = _.map(array, function (item) { return `${item}`; });
    return this.stringList;
  }

  numEvenNums(array) {
    this.newList = _.reject(array, function (item) { return item % 2 !== 0; });
    return this.newList.length;
  }
}

this.fiberoo = new Fiberoo();
console.log(this.fiberoo.fib());
console.log(this.fiberoo.numsToStrings(this.fiberoo.fib()));
console.log(this.fiberoo.numEvenNums(this.fiberoo.fib()));
