class Stack {
  private numbers: number[];
  private _size: number;

  constructor(size: number) {
    this.numbers = [];
    this._size = size;
  }

  public add(num: number): void {
    if (this.numbers.length === this._size) {
      throw new Error("There is no more space.");
    }

    this.numbers.push(num);
  }

  public remove(): void {
    if (this.numbers.length === 0) {
      throw new Error("There is no more element.");
    }

    this.numbers.pop();
  }

  public getNumber(): number[] {
    return this.numbers;
  }
}

const stackExample = new Stack(5);

stackExample.add(12);
stackExample.add(2);
stackExample.add(22);
stackExample.remove();
stackExample.add(34);
stackExample.add(4);
// stackExample.add(24);

// stackExample.remove();
// stackExample.remove();
// stackExample.remove();
// stackExample.remove();

console.log(stackExample.getNumber());
