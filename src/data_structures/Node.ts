/*
note:
 
NodeType might be irrelevant here, because interfaces are used for public types and not private types.
Only good for exporting the type of the node for a typescript assertion

export interface NodeType<T> {
  getNext(): NodeType<T> | null
  getValue(): T
  setValue(value: T): void
  setNext(next: NodeType<T> | null): void
}

*/

export class Node<T> {
  #value: T
  #next: Node<T> | null

  constructor(value: T, next: Node<T> | null = null) {
    this.#value = value
    this.#next = next
  }

  getValue() {
    return this.#value
  }

  getNext() {
    return this.#next
  }

  setValue(value: T) {
    this.#value = value
  }

  setNext(next: Node<T>) {
    this.#next = next
  }
}
