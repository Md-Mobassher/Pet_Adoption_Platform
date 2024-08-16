"use client";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const petData = [
  { name: "Dogs", adopted: 400, available: 300 },
  { name: "Cats", adopted: 300, available: 200 },
  { name: "Rabbits", adopted: 200, available: 150 },
  { name: "Birds", adopted: 100, available: 90 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Chart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Line Chart */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-center text-xl font-semibold mb-5 text-primary">
          Adoptions Over Time
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={petData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="adopted" stroke="#8884d8" />
            <Line type="monotone" dataKey="available" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-center text-xl font-semibold mb-5 text-primary">
          Adopted vs Available Pets
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={petData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="adopted" fill="#8884d8" />
            <Bar dataKey="available" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-center text-xl font-semibold mb-5 text-primary">
          Pet Distribution
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={petData}
              dataKey="adopted"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {petData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
