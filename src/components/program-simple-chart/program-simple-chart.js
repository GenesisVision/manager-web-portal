import "./program-simple-chart.scss";

import ProgramChartGradient, {
  gradientOffset
} from "components/chart/chart-gradient/chart-gradient";
import { getStrokeColor } from "components/chart/chart-gradient/chart-gradient";
import { GVColors } from "gv-react-components";
import React from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const ProgramSimpleChart = ({ data, programId }) => {
  if (data.length === 0) return null;
  const programChartData = data.map(x => ({
    date: x.date.getTime(),
    equity: x.value
  }));

  const programChartDataValues = programChartData.map(x => x.equity);
  const off = gradientOffset(programChartDataValues);
  const areaStrokeColor = getStrokeColor(
    programChartDataValues,
    `url(#equitySimpleChartStroke__${programId})`
  );
  return (
    <div className="program-simple-chart">
      <ResponsiveContainer>
        <AreaChart data={programChartData}>
          <defs>
            <ProgramChartGradient
              offset={off}
              name={`equitySimpleChartStroke__${programId}`}
              positiveColor={GVColors.$positiveColor}
              negativeColor={GVColors.$negativeColor}
              startOpacity={1}
              stopOpacity={1}
            />
            <ProgramChartGradient
              offset={off}
              name={`equitySimpleChartFill__${programId}`}
              positiveColor={GVColors.$positiveColor}
              negativeColor={GVColors.$negativeColor}
              startOpacity={0.2}
              stopOpacity={0.01}
            />
          </defs>
          <XAxis
            dataKey="date"
            domain={["dataMin", "dataMax"]}
            type="number"
            hide
          />
          <YAxis dataKey="equity" axisLine={false} hide />
          <Area
            type="monotone"
            dataKey="equity"
            stroke={areaStrokeColor}
            strokeWidth={2}
            fill={`url(#equitySimpleChartFill__${programId})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgramSimpleChart;
