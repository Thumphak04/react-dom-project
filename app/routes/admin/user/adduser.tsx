"use client"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"

interface FormData {
  employeeId: string
  fullName: string
  email: string
  division: string
  position: string
  username: string
  phoneNumber: string
  role: string
  accessLevel: string
  status: string
  password: string
  confirmPassword: string
}

export default function AddInternalUserForm() {
  const [formData, setFormData] = useState<FormData>({
    employeeId: "",
    fullName: "",
    email: "",
    division: "",
    position: "",
    username: "",
    phoneNumber: "",
    role: "",
    accessLevel: "",
    status: "Active",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    // Required field validation
    if (!formData.employeeId.trim()) newErrors.employeeId = "Employee ID is required"
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required"
    if (!formData.email.trim()) newErrors.email = "Email Address is required"
    if (!formData.division.trim()) newErrors.division = "Division/Department is required"
    if (!formData.position.trim()) newErrors.position = "Position/Title is required"
    if (!formData.username.trim()) newErrors.username = "Username is required"
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required"
    if (!formData.role) newErrors.role = "Role is required"
    if (!formData.accessLevel) newErrors.accessLevel = "Access Level is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required"

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Password confirmation validation
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    // Password strength validation
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Handle form submission logic here
      alert("User created successfully!")
    }
  }

  const handleCancel = () => {
    // Reset form or navigate away
    setFormData({
      employeeId: "",
      fullName: "",
      email: "",
      division: "",
      position: "",
      username: "",
      phoneNumber: "",
      role: "",
      accessLevel: "",
      status: "Active",
      password: "",
      confirmPassword: "",
    })
    setErrors({})
  }

  return (
    <div className="w-full bg-white min-h-screen px-10">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#f37021" }}>
          Add New BNI Internal User
        </h1>
        <p className="text-gray-600 mt-2">Create a new internal user account for BNI corporate banking system</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Personal Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Employee ID */}
            <div className="space-y-2">
              <Label htmlFor="employeeId" className="text-sm font-medium text-gray-700">
                Employee ID *
              </Label>
              <Input
                id="employeeId"
                type="text"
                placeholder="Enter Employee ID"
                value={formData.employeeId}
                onChange={(e) => handleInputChange("employeeId", e.target.value)}
                className={`w-full ${errors.employeeId ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.employeeId && <p className="text-sm text-red-600">{errors.employeeId}</p>}
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className={`w-full ${errors.fullName ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Division/Department */}
            <div className="space-y-2">
              <Label htmlFor="division" className="text-sm font-medium text-gray-700">
                Division / Department *
              </Label>
              <Input
                id="division"
                type="text"
                placeholder="Enter Division/Department"
                value={formData.division}
                onChange={(e) => handleInputChange("division", e.target.value)}
                className={`w-full ${errors.division ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.division && <p className="text-sm text-red-600">{errors.division}</p>}
            </div>

            {/* Position/Title */}
            <div className="space-y-2">
              <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                Position / Title *
              </Label>
              <Input
                id="position"
                type="text"
                placeholder="Enter Position/Title"
                value={formData.position}
                onChange={(e) => handleInputChange("position", e.target.value)}
                className={`w-full ${errors.position ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.position && <p className="text-sm text-red-600">{errors.position}</p>}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                Phone Number *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className={`w-full ${errors.phoneNumber ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber}</p>}
            </div>
          </div>
        </div>

        {/* Account Information Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Account Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username *
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter Username"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className={`w-full ${errors.username ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.username && <p className="text-sm text-red-600">{errors.username}</p>}
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Role *</Label>
              <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                <SelectTrigger className={`w-full ${errors.role ? "border-red-500 focus:border-red-500" : ""}`}>
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Administrator">Administrator</SelectItem>
                  <SelectItem value="Supervisor">Supervisor</SelectItem>
                  <SelectItem value="Staff">Staff</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && <p className="text-sm text-red-600">{errors.role}</p>}
            </div>

            {/* Access Level */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Access Level *</Label>
              <Select value={formData.accessLevel} onValueChange={(value) => handleInputChange("accessLevel", value)}>
                <SelectTrigger className={`w-full ${errors.accessLevel ? "border-red-500 focus:border-red-500" : ""}`}>
                  <SelectValue placeholder="Select Access Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full Access">Full Access</SelectItem>
                  <SelectItem value="Restricted">Restricted</SelectItem>
                  <SelectItem value="Read-only">Read-only</SelectItem>
                </SelectContent>
              </Select>
              {errors.accessLevel && <p className="text-sm text-red-600">{errors.accessLevel}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password *
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`w-full ${errors.password ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password *
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className={`w-full ${errors.confirmPassword ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Status *</Label>
              <RadioGroup
                value={formData.status}
                onValueChange={(value) => handleInputChange("status", value)}
                className="flex space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Active" id="active" />
                  <Label htmlFor="active" className="text-sm font-normal cursor-pointer">
                    Active
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Inactive" id="inactive" />
                  <Label htmlFor="inactive" className="text-sm font-normal cursor-pointer">
                    Inactive
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-8 border-t border-gray-200">
          <Button
            type="button"
            onClick={handleCancel}
            className="px-8 py-2 bg-transparent border-2 text-white hover:bg-opacity-90 transition-colors"
            style={{
              backgroundColor: "#00757f",
              borderColor: "#00757f",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="px-8 py-2 text-white hover:bg-opacity-90 transition-colors"
            style={{ backgroundColor: "#f37021" }}
          >
            Save User
          </Button>
        </div>
      </form>
    </div>
  )
}
