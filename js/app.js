let input;

function reset() {
  d3.selectAll('svg').remove();
}

function treeAndArray() {
  reset();
  let inputText = document.getElementById("array-input")
  document.querySelector('#visual-title').innerHTML = "Binary Tree";
  document.querySelector('#instructions').innerHTML = "A binary tree is a hierarchical data structure in which each node has at most two children, allowing for efficient searching and sorting operations.";
  if (inputText.value !== '') {
      input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
      createBinaryTreeAndArr(input)
  }
}

function heapify() {
  reset();
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
    input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
    makeHeap(input, input.length);
    createBinaryTreeAndArr(input);
    document.getElementById('instructions').innerHTML = "<p> A max heap tree is a specialized binary tree where the parent node's value is always greater than or equal to its child nodes, facilitating efficient retrieval of the maximum element.</p>";
    document.getElementById('visual-title').innerHTML = "Max-Heap Binary Tree";
  }
}

function minHeapify() {
  reset();
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
    input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
    makeMinHeap(input, input.length);
    createBinaryTreeAndArr(input);
    document.getElementById('instructions').innerHTML = "<p> A max heap tree is a specialized binary tree where the parent node's value is always lesser than or equal to its child nodes, facilitating efficient retrieval of the minimum element.</p>";
    document.getElementById('visual-title').innerHTML = "Min-Heap Binary Tree";
  }
}

function createBinaryTreeAndArr(arr) {
  arrayContainer = createContainer("array-visual", arr, arr.length * 60, 100);
  let tree = new Tree()
  tree.createBinaryTree(input)
  // createArray(arr, 2, 30, 50, 50);
}

function createBinarySearchTree() {
  let inputText = document.getElementById("array-input")
  if (inputText.value !== '') {
    reset();
    input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
    input.sort((a, b) => a - b);
    document.querySelector('#visual-title').innerHTML = "Binary Search Tree";
    document.querySelector('#instructions').innerHTML = "A binary search tree is a binary tree in which the left child of a node contains values less than the node's value, and the right child contains values greater than the node's value, enabling efficient search and insertion operations.";
    let tree = new Tree();
    tree.createBinarySearchTree(input)
  }
}

//default values
input = [10, 20, 60, 30, 70, 40, 50];
let inputTest = document.getElementById("array-input")
inputTest.value = input;
createBinaryTreeAndArr(input);
