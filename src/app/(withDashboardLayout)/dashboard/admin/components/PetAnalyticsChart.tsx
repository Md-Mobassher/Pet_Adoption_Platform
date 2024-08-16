import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PetAnalyticsChart = ({
  data,
}: {
  data: { name: string; value: number }[];
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 15,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PetAnalyticsChart;
