import { expect } from "chai"
import { before } from "mocha"

import { reverseList } from "../src/leetcode/reverseLinkedList"
import type { ListNode } from "../src/leetcode/reverseLinkedList"

describe("Testing the reverseLinkedList function", () => {
  let head: ListNode<number> | null
  before(() => {
    head = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    }
  })
  it("should reverse a linked list", () => {
    const reversedHead = reverseList(head)
    expect(reversedHead?.val).to.equal(5)
    expect(reversedHead?.next?.val).to.equal(4)
  })
})
