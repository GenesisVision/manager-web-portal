import "./program-big-chart.scss";

import ProgramChartGradient, {
  gradientOffset
} from "components/chart/chart-gradient/chart-gradient";
import { getStrokeColor } from "components/chart/chart-gradient/chart-gradient";
import { GVColors } from "gv-react-components";
import moment from "moment";
import React from "react";
import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import ProgramBigChartTooltip from "./program-big-chart-tooltip";

const ProgramBigChart = ({ programId, data }) => {
  if (data.length === 0) return null;
  const programChartData = data.map(x => ({
    date: x.date.getTime(),
    equity: x.value
  }));

  const programChartDataValues = programChartData.map(x => x.equity);
  const off = gradientOffset(programChartDataValues);
  const areaStrokeColor = getStrokeColor(
    programChartDataValues,
    `url(#equityChartStroke__${programId})`
  );

  return (
    <ResponsiveContainer width="99%" height="99%" className="program-big-chart">
      <AreaChart data={programChartData}>
        <ReferenceLine y={0} strokeDasharray="1 10" />
        <XAxis
          dataKey="date"
          domain={["dataMin", "dataMax"]}
          type="number"
          axisLine={false}
          tick={{ fill: GVColors.$labelColor, fontSize: "12" }}
          tickFormatter={date => moment(date).format("ll")}
          tickCount={10}
        />
        <YAxis
          dataKey="equity"
          labelFormatter={value => `${value}%`}
          axisLine={false}
          tick={{ fill: GVColors.$labelColor, fontSize: "12" }}
        />
        <Tooltip content={ProgramBigChartTooltip} />
        <defs>
          <ProgramChartGradient
            offset={off}
            name={`equityChartStroke__${programId}`}
            positiveColor={GVColors.$positiveColor}
            negativeColor={GVColors.$negativeColor}
            startOpacity={1}
            stopOpacity={1}
          />
          <ProgramChartGradient
            offset={off}
            name={`equityChartFill__${programId}`}
            positiveColor={GVColors.$positiveColor}
            negativeColor={GVColors.$negativeColor}
            startOpacity={0.3}
            stopOpacity={0}
          />
        </defs>
        <Area
          type="monotone"
          dataKey="equity"
          stroke={areaStrokeColor}
          strokeWidth={2}
          fill={`url(#equityChartFill__${programId})`}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ProgramBigChart;
