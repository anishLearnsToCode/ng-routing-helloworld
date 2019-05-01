export class StringUtils {
  private static readonly TRUE_STRING_SET: string[] = ['true', 'True', 'TRUE'];
  private static readonly FALSE_STRING_SET: string[] = ['false', 'False', 'FALSE'];

  public static equalsTrue(string: string): boolean {
    for (const trueCase of this.TRUE_STRING_SET) {
      if (string === trueCase) {
        return true;
      }
    }

    return false;
  }

  public static equalsFalse(string: string): boolean {
    for (const falseCase of this.FALSE_STRING_SET) {
      if (string === falseCase) {
        return true;
      }
    }

    return false;
  }
}
