"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AgeDistributionChart } from "@/components/charts/age-distribution-chart"
import { CrimesCommittedChart } from "@/components/charts/crimes-committed-chart"
import { LegalStatusChart } from "@/components/charts/legal-status-chart"
import { SentenceDurationChart } from "@/components/charts/sentence-duration-chart"
import { PrisonDistributionChart } from "@/components/charts/prison-distribution-chart"
import { VerificationsChart } from "@/components/charts/verifications-chart"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Age Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <AgeDistributionChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Crimes Committed</CardTitle>
          </CardHeader>
          <CardContent>
            <CrimesCommittedChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Legal Status</CardTitle>
          </CardHeader>
          <CardContent>
            <LegalStatusChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sentence Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <SentenceDurationChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prison Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <PrisonDistributionChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verifications</CardTitle>
          </CardHeader>
          <CardContent>
            <VerificationsChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
