export default class Stack {
  private array;
  // private array: number[];

  constructor(array?: any[]) {
    this.array = [];
    if (array) this.array = array;
  }

  getBuffer() {
    return this.array.slice();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  peek() {
    return this.array.at(-1);
    // return this.array[this.array.length - 1]
  }

  push(value: any) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }
}

const st = new Stack();
st.push(41);
st.push(1);
st.push(123);
st.pop();
st.push(69);
st.push(9);

// console.log(st.getBuffer());
// // console.log(st.isEmpty());
// console.log(st.peek());
