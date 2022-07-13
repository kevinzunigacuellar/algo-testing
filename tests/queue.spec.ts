import { expect } from "chai"
import { before } from "mocha"
import { Queue } from "../src/data_structures/Queue"

describe("Testing the Queue<number> class", () => {
  let queue: Queue<number>
  before(() => {
    queue = new Queue()
  })

  it("should create an empty queue", () => {
    expect(queue.isEmpty()).to.be.true
  })

  it("should enqueue 1 to the queue", () => {
    queue.enqueue(1)
    const front = queue.peek()
    expect(front?.getValue()).to.equal(1)
  })

  it("should enqueue 2 to the queue", () => {
    queue.enqueue(2)
    const front = queue.peek()
    expect(front?.getValue()).to.equal(1)
  })

  it("should dequeue 1 from the queue", () => {
    expect(queue.dequeue()?.getValue()).to.equal(1)
  })

  it("should dequeue 2 from the queue", () => {
    expect(queue.dequeue()?.getValue()).to.equal(2)
  })

  it("should be empty", () => {
    expect(queue.isEmpty()).to.be.true
  })
})
