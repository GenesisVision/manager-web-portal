import { getNumberWithoutSuffix } from "utils/helpers";
import { allowValuesNumberFormat } from "utils/helpers";

export const getDataWithoutSuffixes = (data, fields) => {
  let result = { ...data };

  fields.forEach(fieldName => {
    let field = result[fieldName];

    if (field) {
      field = getNumberWithoutSuffix(field);

      result[fieldName] = field;
    }
  });

  return result;
};

export const percentNumberFormat = allowValuesNumberFormat({
  from: 0,
  to: 100
});
