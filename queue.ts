class Queue {
  private queue: number[];

  constructor(private size: number) {
    this.size = size;
    this.queue = [];
  }

  public push(value: number): void {
    if (this.size === this.queue.length) {
      throw new Error("Queue is Overflow!");
    }

    this.queue.push(value);
  }

  public shift(): void {
    if (this.queue.length === 0) {
      throw new Error("Queue is underflow!");
    }

    this.queue.shift();
  }

  public show(): number[] {
    return this.queue;
  }
}

const queue = new Queue(3);

queue.push(1);
queue.push(2);
queue.push(3);
queue.shift();
// queue.push(4)
console.log(queue.show());
