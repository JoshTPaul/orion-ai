import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function DonutChart({ val = 75 }) {
  const data = [
    { name: "portion", value: val },
    { name: "remainder", value: 100 - val },
  ];

  const COLORS = ["#8685f9", "#4f4f4f"];

  return (
    <PieChart width={100} height={100}>
      <Pie
        data={data}
        cx={50}
        cy={45}
        innerRadius={25}
        outerRadius={40}
        startAngle={90}
        endAngle={-270}
        dataKey="value"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default DonutChart;
