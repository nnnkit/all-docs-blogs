function stringifyJSON(input) {
  switch (true) {
    case isUndefined(input):
      return undefined;
    case isFunction(input):
      return undefined;
    case isSymbol(input):
      return undefined;
    case isNull(input):
      return 'null';
    case isString(input):
      return input;
    case isDate(input):
      return Dtring(input);
    case isBoolean(input):
      return String(input);
    case isArray(input):
      return `[${input
        .reduce(
          (acc, val) =>
            isUndefined(val) ? [...acc, 'null'] : [...acc, stringifyJSON(val)],
          []
        )
        .join(', ')}]`;
    case isObject(input):
      return `{${Object.keys(input)
        .reduce((acc, key) => {
          if (typeof input[key] === 'undefined') {
            return acc;
          } else {
            return [
              ...acc,
              `${stringifyJSON(key)} : ${stringifyJSON(input[key])}`,
            ];
          }
        }, [])
        .join(', ')}}`;
  }
}
