"use client"

import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const lineData = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
]

const successData = [
  { name: "Successful", value: 72 },
  { name: "Remaining", value: 28 },
]
const failedData = [
  { name: "Failed", value: 28 },
  { name: "Remaining", value: 72 },
]

const SUCCESS_COLOR = "#3B82F6"
const FAILED_COLOR = "#EF4444" // Red color

export function VerificationsChart() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center w-full justify-between mb-4">
        <div className="text-2xl font-bold">72%</div>
        <div className="text-lg text-gray-600">Successful</div>
        <ResponsiveContainer width={100} height={50}>
          <LineChart data={lineData}>
            <Line type="monotone" dataKey="uv" stroke={SUCCESS_COLOR} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center">
          <ResponsiveContainer width={100} height={100}>
            <PieChart>
              <Pie
                data={successData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={40}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={90 - (successData[0].value / 100) * 360}
              >
                <Cell fill={SUCCESS_COLOR} />
                <Cell fill="#E0E7FF" /> {/* Lighter shade for remaining */}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-sm mt-2">Successful</div>
        </div>
        <div className="flex flex-col items-center">
          <ResponsiveContainer width={100} height={100}>
            <PieChart>
              <Pie
                data={failedData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={40}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={90 - (failedData[0].value / 100) * 360}
              >
                <Cell fill={FAILED_COLOR} />
                <Cell fill="#FEE2E2" /> {/* Lighter shade for remaining */}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-sm mt-2">Failed</div>
        </div>
      </div>
    </div>
  )
}
