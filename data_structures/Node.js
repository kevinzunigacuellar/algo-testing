class Node {
  #value
  #next

  constructor(value) {
    this.#value = value
    this.#next = null
  }

  getValue() {
    return this.#value
  }

  getNext() {
    return this.#next
  }

  setValue(value) {
    this.#value = value
  }

  setNext(next) {
    this.#next = next
  }
}

export default Node
