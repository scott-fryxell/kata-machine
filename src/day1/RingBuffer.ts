export default class RingBuffer<T> {
  public length: number;

  constructor(initial_size: number) {

  }

  // shift an item to the beginning of the buffer
  shift(item: T): void {
  }
  // remove from the beginning of the buffer
  unshift(item: T): void {
  }

  // add an item to the end of the buffer
  push(item: T): void {
  }

  pop(item: T): T | undefined {
  }

  // get an item from anywhere in the buffer
  get(idx: number): T | undefined {
  }

  /** These next two methods will have the worst performance
   * as they will require shifting all the elements in the buffer
   **/

  // insert an item anywhere in the buffer
  insert_at(item: T, idx: number): void {
  }

  // remove an item from anywhere in the buffer
  // this will have the worst performance of all the methods
  remove_at(idx: number): T | undefined {
  }
}
