"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186, mobile: 80, tab:49 },
  { month: "February", desktop: 305, mobile: 200, tab: 300 },
  { month: "March", desktop: 237, mobile: 120 , tab: 210},
  { month: "April", desktop: 73, mobile: 190 , tab: 134},
  { month: "May", desktop: 209, mobile: 130 , tab: 211},
  { month: "June", desktop: 214, mobile: 140 ,tab:202},
]

const chartConfig = {
  desktop: {
    label: "Converted",
    color: "hsl(var(--chart-1))",
  },
  tab: {
    label: "Not Converted",
    color: "hsl(var(--chart-2))",
  },
  mobile: {
    label: "No Answered",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function TotalCalls() {
  return (
    <Card>
      <CardHeader className="mx-auto">
        <CardTitle className="text-center text-sm">TOTAL CALLS</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="aspect-auto h-[300px] w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            height={200}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="tab"
              type="monotone"
              stroke="var(--color-tab)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}