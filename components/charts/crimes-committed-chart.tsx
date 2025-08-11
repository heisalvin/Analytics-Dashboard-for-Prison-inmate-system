"use client"

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Burglary", value: 120 },
  { name: "Assault", value: 90 },
  { name: "Fraud", value: 70 },
  { name: "Drug Offense", value: 50 },
  { name: "Other", value: 30 },
]

export function CrimesCommittedChart() {
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
