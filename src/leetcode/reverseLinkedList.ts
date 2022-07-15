/*
  206. Reverse Linked List
  https://leetcode.com/problems/reverse-linked-list/
*/

export interface ListNode<T> {
  val: T
  next: ListNode<T> | null
}

export function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
  let prev: ListNode<T> | null = null
  let curr: ListNode<T> | null = head
  let next: ListNode<T> | null = null

  while (curr !== null) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}
