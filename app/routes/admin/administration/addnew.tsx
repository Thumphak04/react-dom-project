import React from 'react'


import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Calendar } from "~/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"

interface FormData {
  customerId: string
  customerName: string
  accountNumber: string
  accountType: string
  billNumber: string
  billerCode: string
  billType: string
  billAmount: string
  chargeAmount: string
  startDate: Date | undefined
  firstExecutionDate: Date | undefined
  scheduleType: string
  scheduleUnit: string
}

export default function AutoDebitForm() {
  const [formData, setFormData] = useState<FormData>({
    customerId: "",
    customerName: "",
    accountNumber: "",
    accountType: "",
    billNumber: "",
    billerCode: "",
    billType: "",
    billAmount: "",
    chargeAmount: "",
    startDate: undefined,
    firstExecutionDate: undefined,
    scheduleType: "",
    scheduleUnit: "",
  })

  const handleInputChange = (field: keyof FormData, value: string | Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleReset = () => {
    setFormData({
      customerId: "",
      customerName: "",
      accountNumber: "",
      accountType: "",
      billNumber: "",
      billerCode: "",
      billType: "",
      billAmount: "",
      chargeAmount: "",
      startDate: undefined,
      firstExecutionDate: undefined,
      scheduleType: "",
      scheduleUnit: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">Auto-Debit Registration Form</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Customer ID (CIF) */}
                <div className="space-y-2">
                  <Label htmlFor="customerId" className="text-sm font-medium text-gray-700">
                    Customer ID (CIF) *
                  </Label>
                  <Input
                    id="customerId"
                    type="number"
                    placeholder="Enter Customer ID"
                    value={formData.customerId}
                    onChange={(e) => handleInputChange("customerId", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Customer Name */}
                <div className="space-y-2">
                  <Label htmlFor="customerName" className="text-sm font-medium text-gray-700">
                    Customer Name *
                  </Label>
                  <Input
                    id="customerName"
                    type="text"
                    placeholder="Enter Customer Name"
                    value={formData.customerName}
                    onChange={(e) => handleInputChange("customerName", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Account Number */}
                <div className="space-y-2">
                  <Label htmlFor="accountNumber" className="text-sm font-medium text-gray-700">
                    Account Number *
                  </Label>
                  <Input
                    id="accountNumber"
                    type="number"
                    placeholder="Enter Account Number"
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Account Type */}
                <div className="space-y-2">
                  <Label htmlFor="accountType" className="text-sm font-medium text-gray-700">
                    Account Type *
                  </Label>
                  <Select
                    value={formData.accountType}
                    onValueChange={(value) => handleInputChange("accountType", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Account Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CASA">CASA</SelectItem>
                      <SelectItem value="Credit Card">Credit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Bill Number */}
                <div className="space-y-2">
                  <Label htmlFor="billNumber" className="text-sm font-medium text-gray-700">
                    Bill Number *
                  </Label>
                  <Input
                    id="billNumber"
                    type="text"
                    placeholder="Enter Bill Number"
                    value={formData.billNumber}
                    onChange={(e) => handleInputChange("billNumber", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Biller Code */}
                <div className="space-y-2">
                  <Label htmlFor="billerCode" className="text-sm font-medium text-gray-700">
                    Biller Code *
                  </Label>
                  <Input
                    id="billerCode"
                    type="text"
                    placeholder="Enter Biller Code"
                    value={formData.billerCode}
                    onChange={(e) => handleInputChange("billerCode", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Bill Type */}
                <div className="space-y-2">
                  <Label htmlFor="billType" className="text-sm font-medium text-gray-700">
                    Bill Type *
                  </Label>
                  <Select value={formData.billType} onValueChange={(value) => handleInputChange("billType", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Bill Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Static">Static</SelectItem>
                      <SelectItem value="Dynamic">Dynamic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Bill Amount */}
                <div className="space-y-2">
                  <Label htmlFor="billAmount" className="text-sm font-medium text-gray-700">
                    Bill Amount (Rp) *
                  </Label>
                  <Input
                    id="billAmount"
                    type="number"
                    placeholder="Enter Bill Amount"
                    value={formData.billAmount}
                    onChange={(e) => handleInputChange("billAmount", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Charge Amount */}
                <div className="space-y-2">
                  <Label htmlFor="chargeAmount" className="text-sm font-medium text-gray-700">
                    Charge Amount (Rp) *
                  </Label>
                  <Input
                    id="chargeAmount"
                    type="number"
                    placeholder="Enter Charge Amount"
                    value={formData.chargeAmount}
                    onChange={(e) => handleInputChange("chargeAmount", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Start Date */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Start Date (Auto-Debit begins) *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.startDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.startDate ? format(formData.startDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.startDate}
                        onSelect={(date) => handleInputChange("startDate", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* First Execution Date */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">First Execution Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.firstExecutionDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.firstExecutionDate ? format(formData.firstExecutionDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.firstExecutionDate}
                        onSelect={(date) => handleInputChange("firstExecutionDate", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Schedule Type */}
                <div className="space-y-2">
                  <Label htmlFor="scheduleType" className="text-sm font-medium text-gray-700">
                    Schedule Type *
                  </Label>
                  <Select
                    value={formData.scheduleType}
                    onValueChange={(value) => handleInputChange("scheduleType", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Schedule Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Schedule Unit */}
                <div className="space-y-2">
                  <Label htmlFor="scheduleUnit" className="text-sm font-medium text-gray-700">
                    Schedule Unit (interval value) *
                  </Label>
                  <Input
                    id="scheduleUnit"
                    type="number"
                    placeholder="Enter Schedule Unit"
                    value={formData.scheduleUnit}
                    onChange={(e) => handleInputChange("scheduleUnit", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-8 py-2 bg-transparent"
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-2 bg-orange-600 hover:bg-orange-700 text-white"
                  style={{ backgroundColor: "#FF6600" }}
                >
                  Save Registration
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
