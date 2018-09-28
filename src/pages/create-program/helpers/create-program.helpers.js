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

export const getAccountTypes = broker =>
  broker.accountTypes.map(accountType => accountType.type);

export const getAccountType = (broker, type) =>
  broker.accountTypes.find(accountType => accountType.type === type);

export const getLeverages = (broker, type) => {
  let result;
  let accountType = getAccountType(broker, type);

  if (accountType) {
    result = accountType.leverages;
  } else {
    result = [];
  }
  return result;
};

export const getCurrencies = (broker, type) => {
  let result;
  let accountType = getAccountType(broker, type);

  if (accountType) {
    result = accountType.currencies;
  } else {
    result = [];
  }
  return result;
};