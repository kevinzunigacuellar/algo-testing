import { Node } from "./Node"

export class Stack<T> {
  #top: Node<T> | null = null

  constructor() {
    this.#top = null
  }

  push(item: T) {
    const newNode = new Node(item, this.#top)
    this.#top = newNode
  }

  pop() {
    if (this.#top === null) {
      return null
    }
    const popped = this.#top
    this.#top = this.#top.getNext()
    return popped
  }

  peek() {
    return this.#top
  }

  isEmpty() {
    return this.#top === null
  }
}
