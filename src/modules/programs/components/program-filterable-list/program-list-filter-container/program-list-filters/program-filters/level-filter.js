import { Range } from "rc-slider";
import { translate } from "react-i18next";
import React from "react";

import FilterItem from "../../../../../../filter-pane/components/filter-item/filter-item";

import {
  LEVEL_MIN_FILTER_VALUE,
  LEVEL_FILTER_NAME,
  LEVEL_MAX_FILTER_VALUE
} from "../../../../../programs.constants";
import { RANGE_FILTER_TYPE } from "../../../../../../filtering/filtering.constants";

const LevelFilter = ({ t, filtering, onFilterChange }) => {
  const handleFilterChange = value =>
    onFilterChange(LEVEL_FILTER_NAME, RANGE_FILTER_TYPE)(value);

  return (
    <FilterItem
      name={t(`programs-filtering.${LEVEL_FILTER_NAME}.name`)}
      description={t(`programs-filtering.${LEVEL_FILTER_NAME}.description`)}
      value={filtering.filters[LEVEL_FILTER_NAME]}
      defaultValue={filtering.defaultFilters[LEVEL_FILTER_NAME]}
      onFilterChange={handleFilterChange}
    >
      {(value, onChange) => (
        <Range
          dots
          min={LEVEL_MIN_FILTER_VALUE}
          max={LEVEL_MAX_FILTER_VALUE}
          marks={new Array(LEVEL_MAX_FILTER_VALUE)
            .fill(0)
            .reduce((prev, curr, idx) => {
              prev[idx + 1] = idx + 1;
              return prev;
            }, {})}
          value={value}
          onChange={onChange}
          pushable
        />
      )}
    </FilterItem>
  );
};

export default translate()(LevelFilter);
