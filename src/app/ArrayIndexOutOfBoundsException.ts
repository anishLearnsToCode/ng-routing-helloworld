export class ArrayIndexOutOfBoundsException extends Error {
  constructor(index: number) {
    super('Array Index out of bounds exception: ' + index);
  }

  // public new(index: number): ArrayIndexOutOfBoundsException {
  //   throw new Error('Array index out of Bounds Exception: ' + index);
  // }
}
