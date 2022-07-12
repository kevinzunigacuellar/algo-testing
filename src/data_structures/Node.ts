export class Node<T> {
  #value: T | null = null
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
