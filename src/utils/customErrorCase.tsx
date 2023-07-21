interface ErrorCaseType {
  [errorType: string]: string;
}

export class customError extends Error {
  private readonly errorCase: ErrorCaseType = {
    E001: "인자가 함수가 아닙니다.",
    E002: "test2",
  };
  public readonly errorType;

  constructor(errorType: string, errorName?: string) {
    super();
    this.name = errorName ?? "";
    this.errorType = errorType;
    if (errorType) {
      this.message = this.errorCase[errorType];
    }
  }
}
