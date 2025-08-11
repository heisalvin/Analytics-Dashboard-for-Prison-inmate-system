"use client"

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "<5 years", value: 100 },
  { name: "5-10 years", value: 80 },
  { name: "10-20 years", value: 60 },
  { name: ">20 years", value: 40 },
  { name: ">10 years", value: 20 }, // This seems redundant with >20 years, but included as per screenshot
]

export function SentenceDurationChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{
          top: 0,
          right: 20,
          left: 20,
          bottom: 0,
        }}
      >
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" width={100} axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="value" fill="#3B82F6" barSize={15} radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
