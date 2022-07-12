import { assert } from "chai"
import { describe, it } from "mocha"
import Node from "../data_structures/Node.js"

describe("Testing the Node class", () => {
  let node
  beforeEach(() => {
    node = new Node(1)
  })
  it("should get the value of the node as 1", () => {
    assert.equal(node.getValue(), 1)
  })

  it("should set the value of the node to 2", () => {
    node.setValue(2)
    assert.equal(node.getValue(), 2)
  })
})
