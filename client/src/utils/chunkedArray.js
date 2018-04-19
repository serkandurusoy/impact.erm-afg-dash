const chunkedArray = (chunkSize, array) =>
  array.reduce((columns, value, valueIndex) => {
    if (valueIndex % chunkSize === 0) return [...columns, [value]];
    const lastIndex = columns.length - 1;
    const previousColumns = columns.filter(
      (column, columnIndex) => columnIndex < lastIndex,
    );
    return [...previousColumns, [...columns[lastIndex], value]];
  }, []);

export default chunkedArray;
