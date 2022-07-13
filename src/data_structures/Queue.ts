import { Node } from "./Node"

export class Queue<T> {
  #front: Node<T> | null
  #back: Node<T> | null

  constructor() {
    this.#front = null
    this.#back = null
  }

  isEmpty() {
    return this.#front === null && this.#back === null
  }

  enqueue(item: T) {
    const newNode = new Node(item)

    if (this.#back !== null) {
      this.#back.setNext(newNode)
      this.#back = newNode
    } else {
      this.#back = newNode
      this.#front = newNode
    }
  }

  dequeue() {
    if (this.#front !== null) {
      const removed = this.#front
      if (this.#back === removed) {
        this.#back = null
      }
      this.#front = this.#front.getNext()
      return removed
    }
    return null
  }

  peek() {
    return this.#front
  }

  last() {
    return this.#back
  }
}
