const depthFirstPrint = (graph, source) => {
  let stack = [source];
  // let output = ""

  while (stack.length > 0) {
    const current = stack.pop();
    // output += current
    console.log(current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  // console.log(output)
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstPrint(graph, "a");
