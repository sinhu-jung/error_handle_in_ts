import { customError } from "./customErrorCase";

export function errorHandler(
  logicFunc: (...args: any) => unknown | never,
  onError: (funcName: string, args: any, error: unknown) => void
) {
  const isFunction = typeof logicFunc === "function";
  return (...args2: any) => {
    try {
      if (isFunction) {
        return logicFunc(...args2);
      } else {
        throw new customError("E001");
      }
    } catch (error: unknown) {
      let functionName = "";
      if (isFunction) {
        functionName = logicFunc.name;
      }
      onError(functionName, args2, error);
    }
  };
}
