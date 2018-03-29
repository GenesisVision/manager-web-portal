import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import moment from "moment";
import React from "react";
import { COLORS } from "../../../../dashboard.constants";

const DashboardProfitChart = ({ data }) => {
  const series = data.map(x => ({
    title: x.title,
    data: x.data.map(sub => ({
      totalProfit: sub.totalProfit,
      date: moment(+new Date(sub.date)).format(" MMMM Do HH:mm ")
    }))
  }));
  return (
    <div className="dashboard-profit-chart">
      <ResponsiveContainer height={400}>
        <LineChart>
          <XAxis
            dataKey="date"
            type="category"
            allowDuplicatedCategory={false}
            axisLine={false}
          />
          <YAxis dataKey="totalProfit" />
          <Tooltip />
          <Legend />
          {series.map((s, idx) => (
            <Line
              key={s.title}
              dataKey="totalProfit"
              data={s.data}
              name={s.title}
              stroke={COLORS[idx % COLORS.length]}
              dot={false}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardProfitChart;
