import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const StatsPieChart = ({ stats }) => {
  //   const data = [
  //     { name: "Group A", value: 400 },
  //     { name: "Group B", value: 300 },
  //     { name: "Group C", value: 300 },
  //     { name: "Group D", value: 200 },
  //   ];
  const data = [
    { name: "Completed", value: stats.completed },
    { name: "Remaining", value: stats.toDo },
    { name: "In Progress", value: stats.inProgress },
  ];
  const COLORS = ["#00C49F", "#FF8042", "#0088FE"];

  return (
    <ResponsiveContainer>
      <PieChart height={200}>
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={100}
          dataKey="value"
          legendType="star"
          pointerEvents={"none"}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StatsPieChart;
