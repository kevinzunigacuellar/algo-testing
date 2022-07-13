import { expect } from "chai"
import { before } from "mocha"
import { Node } from "../src/data_structures/Node"
import { Stack } from "../src/data_structures/Stack"

describe("Testing the Stack<number> class", () => {
  let stack: Stack<number>
  before(() => {
    stack = new Stack()
  })
  it("should create a new stack", () => {
    expect(stack.peek()).to.equal(null)
  })

  it("should push 1 to the stack", () => {
    stack.push(1)
    const top = stack.peek() as Node<number>
    expect(top.getValue()).to.equal(1)
  })

  it("should push 2 to the stack", () => {
    stack.push(2)
    const top = stack.peek() as Node<number>
    expect(top.getValue()).to.equal(2)
  })

  it("should pop the top node (2) from the stack", () => {
    const poppedItem = stack.pop() as Node<number>
    expect(poppedItem.getValue()).to.equal(2)
  })

  it("should pop the top node (1) from the stack", () => {
    const poppedItem = stack.pop() as Node<number>
    expect(poppedItem.getValue()).to.equal(1)
  })

  it("should be empty", () => {
    expect(stack.peek()).to.equal(null)
  })
})
