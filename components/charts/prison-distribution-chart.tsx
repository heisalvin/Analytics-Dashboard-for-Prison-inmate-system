"use client"

import { ComposedChart, Bar, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts"

const data = [
  { name: "May", Kumasi: 120, Accra: 100, Tamale: 80, Sunyani: 60, trend: 100 },
  { name: "Jun", Kumasi: 100, Accra: 90, Tamale: 70, Sunyani: 50, trend: 120 },
  { name: "Jul", Kumasi: 110, Accra: 110, Tamale: 90, Sunyani: 70, trend: 150 },
  { name: "Aug", Kumasi: 80, Accra: 70, Tamale: 60, Sunyani: 40, trend: 180 },
]

export function PrisonDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 0,
          left: 0,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" vertical={false} />
        <XAxis dataKey="name" scale="band" />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="Kumasi" barSize={20} fill="#3B82F6" />
        <Line type="monotone" dataKey="trend" stroke="#3B82F6" strokeWidth={2} dot={false} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
