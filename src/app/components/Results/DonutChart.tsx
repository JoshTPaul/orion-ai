import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

function DonutChart({ val = 75, color }: any) {
  const data = [
    { name: "portion", value: val },
    { name: "remainder", value: 100 - val },
  ];

  const COLORS = [color, "#4f4f4f"];

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
        <Label
          value={val.toFixed(0) + "%"}
          position="center"
          className="label-top"
          fontSize="16px"
          fontWeight={500}
          fill="#f6f6f6"
        />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default DonutChart;
