import { expect } from "chai"
import { Node } from "../src/data_structures/Node"

describe("Testing the Node<number> class", () => {
  let node: Node<number>
  before(() => {
    node = new Node(1)
  })

  it("should create a new node with value 1", () => {
    expect(node.getValue()).to.equal(1)
  })

  it("should create a node and append it to the last node", () => {
    const node2 = new Node(2, node)
    expect(node2.getNext()).to.equal(node)
  })

  it("should set the value of a node to 2", () => {
    node.setValue(2)
    expect(node.getValue()).to.equal(2)
  })
})
