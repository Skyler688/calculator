const operators = {
  clear: document.getElementById("clear"),
  negative_pos: document.getElementById("negative_pos"),
  divide: document.getElementById("divide"),
  multiply: document.getElementById("multiply"),
  sub: document.getElementById("sub"),
  add: document.getElementById("add"),
  equals: document.getElementById("equals"),
};

const numbers = {
  dot: document.getElementById("dot"),
  num_0: document.getElementById("num_0"),
  num_1: document.getElementById("num_1"),
  num_2: document.getElementById("num_2"),
  num_3: document.getElementById("num_3"),
  num_4: document.getElementById("num_4"),
  num_5: document.getElementById("num_5"),
  num_6: document.getElementById("num_6"),
  num_7: document.getElementById("num_7"),
  num_8: document.getElementById("num_8"),
  num_9: document.getElementById("num_9"),
};

operators.clear.addEventListener("mouseup", () => {
  console.log("clear");
});

operators.negative_pos.addEventListener("mouseup", () => {});

operators.divide.addEventListener("mouseup", () => {});

operators.multiply.addEventListener("mouseup", () => {});

operators.sub.addEventListener("mouseup", () => {});

operators.add.addEventListener("mouseup", () => {});
