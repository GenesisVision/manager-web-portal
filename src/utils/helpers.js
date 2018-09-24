const merge = function() {
  const args = [...arguments];

  let result = {};

  args.forEach(obj => {
    result = { ...result, ...obj };
  });

  return result;
};

const allowValuesNumberFormat = ({ from, to }) => values => {
  const { formattedValue, floatValue } = values;
  return (
    formattedValue === "" ||
    formattedValue === "0." ||
    (floatValue >= from && floatValue <= to)
  );
};

export { merge, allowValuesNumberFormat };
