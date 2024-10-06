type Node<T> = {
  value: T,
  next?: Node<T>
}
export default class Queue<T> {
  // first in first out.
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.length = 0
    this.head = this.tail = undefined
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>
    this.length++
    if (!this.tail) {
      this.tail = this.head = node
      return
    }
    if (!this.head) {
      this.head = node
      this.head.next = node
    }
    this.tail.next = node
    this.tail = node

  }

  // first update head to point to the next value
  // then return out previous head
  deque(): T | undefined {
    if (!this.head) return undefined
    this.length--
    const head = this.head
    this.head = this.head.next
    head.next = undefined
    if (this.length === 0) this.tail = undefined
    return head.value
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
