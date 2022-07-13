import { expect } from "chai"
import { before } from "mocha"
import { Stack } from "../src/data_structures/Stack"

describe("Testing the Stack<number> class", () => {
  let stack: Stack<number>
  before(() => {
    stack = new Stack()
  })

  it("should push 1 to the stack", () => {
    stack.push(1)
    const top = stack.peek()
    expect(top?.getValue()).to.equal(1)
  })

  it("should push 2 to the stack", () => {
    stack.push(2)
    const top = stack.peek()
    expect(top?.getValue()).to.equal(2)
  })

  it("should pop 2 from the stack", () => {
    const poppedItem = stack.pop()
    expect(poppedItem?.getValue()).to.equal(2)
  })

  it("should pop 1 from the stack", () => {
    const poppedItem = stack.pop()
    expect(poppedItem?.getValue()).to.equal(1)
  })

  it("should be empty", () => {
    expect(stack.isEmpty()).to.be.true
  })
})
