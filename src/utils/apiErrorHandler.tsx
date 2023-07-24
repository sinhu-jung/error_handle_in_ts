import { customError } from "./customErrorCase";
import { errorHandler } from "./errorHandler";

function apiErrorHandler(logicFunc: (...args: any) => unknown | never) {
  return errorHandler(logicFunc, (funcName, args, error) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = `0${1 + date.getMonth()}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);

    console.group(funcName);
    if (error instanceof customError || error instanceof Error) {
      console.error({
        date: `${year}-${month}-${day}`,
        location: window.location.pathname,
        params: args ?? [],
      });
      console.error(error.stack);
    }
    console.groupEnd();
  });
}

export default apiErrorHandler;
