import { assert } from "chai"
import { Node } from "../src/data_structures/Node"

describe("Testing the Node class", () => {
  it("should get the value of the node as 1", () => {
    const node = new Node(1)
    assert.equal(node.getValue(), 1)
  })

  it("should set the value of the node to 2", () => {
    const node = new Node(1)
    node.setValue(2)
    assert.equal(node.getValue(), 2)
  })
})
