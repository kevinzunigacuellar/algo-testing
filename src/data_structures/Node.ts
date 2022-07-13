export interface NodeType<T> {
  getNext(): NodeType<T> | null
  getValue(): T
  setValue(value: T): void
  setNext(next: NodeType<T> | null): void
}

export class Node<T> implements NodeType<T> {
  #value: T
  #next: Node<T> | null = null

  constructor(value: T) {
    this.#value = value
    this.#next = null
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
