"use client"

import type React from "react"
import { Search, TrendingUp, Users, ShoppingCart, Activity } from "lucide-react"
import { Bar, BarChart, Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"


// Updated sample data for autodebit dashboard
const autodebitValueData = [
  { month: "Jan", tabungan: 45000000, kartuKredit: 32000000 },
  { month: "Feb", tabungan: 52000000, kartuKredit: 38000000 },
  { month: "Mar", tabungan: 48000000, kartuKredit: 41000000 },
  { month: "Apr", tabungan: 58000000, kartuKredit: 35000000 },
  { month: "May", tabungan: 61000000, kartuKredit: 43000000 },
  { month: "Jun", tabungan: 55000000, kartuKredit: 39000000 },
]

const transactionData = [
  { month: "Jan", success: 4250, failed: 180 },
  { month: "Feb", success: 4680, failed: 220 },
  { month: "Mar", success: 4420, failed: 195 },
  { month: "Apr", success: 4890, failed: 165 },
  { month: "May", success: 5120, failed: 240 },
  { month: "Jun", success: 4950, failed: 210 },
]

const recentTransactionsData = [
  {
    date: "2024-01-24",
    user: "Ahmad Rizki",
    source: "BCA Tabungan",
    amount: "Rp 2,500,000",
    status: "Success",
  },
  {
    date: "2024-01-24",
    user: "Siti Nurhaliza",
    source: "Mandiri Kartu Kredit",
    amount: "Rp 1,200,000",
    status: "Success",
  },
  {
    date: "2024-01-24",
    user: "Budi Santoso",
    source: "BNI Tabungan",
    amount: "Rp 850,000",
    status: "Failed",
  },
  {
    date: "2024-01-23",
    user: "Maya Sari",
    source: "CIMB Kartu Kredit",
    amount: "Rp 3,100,000",
    status: "Success",
  },
  {
    date: "2024-01-23",
    user: "Andi Wijaya",
    source: "BRI Tabungan",
    amount: "Rp 675,000",
    status: "Failed",
  },
]

const failedTransactionsData = [
  {
    date: "2024-01-24",
    user: "Budi Santoso",
    reason: "Insufficient Balance",
    retryStatus: "Pending",
  },
  {
    date: "2024-01-24",
    user: "Lisa Permata",
    reason: "Card Expired",
    retryStatus: "Failed",
  },
  {
    date: "2024-01-23",
    user: "Andi Wijaya",
    reason: "Network Timeout",
    retryStatus: "Retried",
  },
  {
    date: "2024-01-23",
    user: "Dewi Lestari",
    reason: "Invalid Account",
    retryStatus: "Failed",
  },
  {
    date: "2024-01-22",
    user: "Rudi Hartono",
    reason: "Bank System Error",
    retryStatus: "Pending",
  },
]

const MetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  accentColor,
}: {
  title: string
  value: string
  subtitle: string
  icon: React.ElementType
  accentColor: string
}) => (
  <Card className="relative overflow-hidden">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div className={`p-3 rounded-full ${accentColor}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     

      <div className="p-6 space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="TOTAL REGISTERED USERS"
            value="120,487"
            subtitle="Total users in system"
            icon={Users}
            accentColor="bg-blue-500"
          />
          <MetricCard
            title="NEW ONBOARDINGS THIS WEEK"
            value="2,356"
            subtitle="New user registrations"
            icon={TrendingUp}
            accentColor="bg-green-500"
          />
          <MetricCard
            title="ACTIVE AUTODEBIT TRANSACTIONS"
            value="5,214"
            subtitle="Currently active"
            icon={ShoppingCart}
            accentColor="bg-purple-500"
          />
          <div className="relative overflow-hidden">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">FAILED TRANSACTION RATE</p>
                    <p className="text-2xl font-bold">4.65%</p>
                    <Badge variant="destructive" className="mt-1">
                      High Risk
                    </Badge>
                  </div>
                  <div className="p-3 rounded-full bg-red-500">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Autodebit Value Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Total Autodebit Value</CardTitle>
              <p className="text-sm text-gray-500">Monthly autodebit transactions by source</p>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={autodebitValueData}>
                    <defs>
                      <linearGradient id="colorTabungan" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient id="colorKartuKredit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000000}M`} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <Area
                      type="monotone"
                      dataKey="tabungan"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorTabungan)"
                      name="Tabungan"
                    />
                    <Area
                      type="monotone"
                      dataKey="kartuKredit"
                      stroke="#10b981"
                      fillOpacity={1}
                      fill="url(#colorKartuKredit)"
                      name="Kartu Kredit"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Tabungan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Kartu Kredit</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success vs Failed Transactions Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Transaction Status</CardTitle>
              <p className="text-sm text-gray-500">Success vs Failed transactions</p>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={transactionData}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <Bar dataKey="success" fill="#10b981" radius={4} name="Success" />
                    <Bar dataKey="failed" fill="#ef4444" radius={4} name="Failed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Success</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Failed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions Table */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Transactions</CardTitle>
              <Badge variant="secondary">VIEW ALL</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
                  <span>DATE</span>
                  <span>USER</span>
                  <span>SOURCE</span>
                  <span>AMOUNT</span>
                  <span>STATUS</span>
                </div>
                {recentTransactionsData.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-5 gap-4 text-sm py-2 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
                  >
                    <span className="text-gray-600">{item.date}</span>
                    <span className="font-medium">{item.user}</span>
                    <span className="text-gray-600">{item.source}</span>
                    <span className="font-medium">{item.amount}</span>
                    <Badge variant={item.status === "Success" ? "default" : "destructive"} className="w-fit">
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Failed Transactions Log Table */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Failed Transactions Log</CardTitle>
              <Badge variant="secondary">VIEW ALL</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
                  <span>DATE</span>
                  <span>USER</span>
                  <span>REASON</span>
                  <span>RETRY STATUS</span>
                </div>
                {failedTransactionsData.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-4 text-sm py-2 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
                  >
                    <span className="text-gray-600">{item.date}</span>
                    <span className="font-medium">{item.user}</span>
                    <span className="text-gray-600">{item.reason}</span>
                    <Badge
                      variant={
                        item.retryStatus === "Retried"
                          ? "default"
                          : item.retryStatus === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                      className="w-fit"
                    >
                      {item.retryStatus}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
