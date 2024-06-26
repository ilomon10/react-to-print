export declare function wrapCallbackWithArgs<CallbackReturnValue, BoundObject>(
  thisArg: BoundObject,
  callback: (...curryArgs: any[]) => CallbackReturnValue,
  ...predefinedArgs: unknown[]
): (...args: unknown[]) => CallbackReturnValue;
