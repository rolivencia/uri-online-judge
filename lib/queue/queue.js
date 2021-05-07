class Queue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  add(element) {
    this.input = this.input.concat(element);
  }

  remove(element) {
    if (!this.output.length) {
      //TODO: add try/catch with throw
      while (this.input.length) {
        this.output = this.output.concat(this.input.slice(-1)[0]); //grab last element, put it in output
        this.input = this.input.slice(0, -1); //immutable replacement for "pop"
      }
    }
    return this.output.pop();
  }

  sizeOf() {
    return this.input.length + this.output.length;
  }
}

// Aliases
Queue.prototype.enqueue = Queue.prototype.add;
Queue.prototype.dequeue = Queue.prototype.remove;

module.exports = Queue;
