function accessorProperties() {
  const obj = {
    binaryValue: null,
    set number(value) {
      this.binaryValue = parseInt(value.toString(2), 10);
    },
    get number() {
      return this.binaryValue;
    },
  };
  Object.defineProperty(obj, 'binaryValue', {
    enumerable: false,
  });
  return obj;
}

export { accessorProperties };
