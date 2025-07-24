"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Upload, FileText, Trash2, AlertCircle, Download, Calendar, User, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Alert, AlertDescription } from "~/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import { Badge } from "~/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Input } from "~/components/ui/input"

interface UploadedFile {
  id: number
  fileName: string
  uploadDate: string
  uploadedBy: string
  fileSize: string
  status: "success" | "processing" | "failed"
}

interface FileUploadState {
  selectedFile: File | null
  error: string
  isDragOver: boolean
  isUploading: boolean
}

export default function UploadNasabahPage() {
  const [fileState, setFileState] = useState<FileUploadState>({
    selectedFile: null,
    error: "",
    isDragOver: false,
    isUploading: false,
  })

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: 1,
      fileName: "nasabah_data_january_2024.xlsx",
      uploadDate: "2024-01-24 14:30",
      uploadedBy: "Admin User",
      fileSize: "2.4 MB",
      status: "success",
    },
    {
      id: 2,
      fileName: "customer_list_december_2023.csv",
      uploadDate: "2024-01-23 09:15",
      uploadedBy: "Data Manager",
      fileSize: "1.8 MB",
      status: "success",
    },
    {
      id: 3,
      fileName: "bulk_import_november_2023.xls",
      uploadDate: "2024-01-22 16:45",
      uploadedBy: "System Admin",
      fileSize: "3.2 MB",
      status: "processing",
    },
    {
      id: 4,
      fileName: "nasabah_update_october_2023.xlsx",
      uploadDate: "2024-01-21 11:20",
      uploadedBy: "Admin User",
      fileSize: "1.5 MB",
      status: "failed",
    },
    {
      id: 5,
      fileName: "customer_data_september_2023.csv",
      uploadDate: "2024-01-20 13:10",
      uploadedBy: "Data Analyst",
      fileSize: "4.1 MB",
      status: "success",
    },
  ])

  const fileInputRef = useRef<HTMLInputElement>(null)
  const allowedTypes = [".csv", ".xls", ".xlsx"]
  const maxFileSize = 10 * 1024 * 1024 // 10MB

  const validateFile = (file: File): string | null => {
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()

    if (!allowedTypes.includes(fileExtension)) {
      return "Only .csv, .xls, and .xlsx files are allowed"
    }

    if (file.size > maxFileSize) {
      return "File size must be less than 10MB"
    }

    return null
  }

  const handleFileSelect = (file: File) => {
    const validationError = validateFile(file)

    if (validationError) {
      setFileState((prev) => ({
        ...prev,
        error: validationError,
        selectedFile: null,
      }))
      return
    }

    setFileState((prev) => ({
      ...prev,
      error: "",
      selectedFile: file,
    }))
  }

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setFileState((prev) => ({ ...prev, isDragOver: false }))

    const file = event.dataTransfer.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setFileState((prev) => ({ ...prev, isDragOver: true }))
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setFileState((prev) => ({ ...prev, isDragOver: false }))
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = () => {
    setFileState({
      selectedFile: null,
      error: "",
      isDragOver: false,
      isUploading: false,
    })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleUpload = async () => {
    if (!fileState.selectedFile) return

    setFileState((prev) => ({ ...prev, isUploading: true }))

    // Simulate upload process
    setTimeout(() => {
      const newFile: UploadedFile = {
        id: uploadedFiles.length + 1,
        fileName: fileState.selectedFile!.name,
        uploadDate: new Date().toLocaleString("id-ID", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
        uploadedBy: "Current User",
        fileSize: formatFileSize(fileState.selectedFile!.size),
        status: "success",
      }

      setUploadedFiles((prev) => [newFile, ...prev])
      setFileState({
        selectedFile: null,
        error: "",
        isDragOver: false,
        isUploading: false,
      })

      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }, 2000)
  }

  const handleDownload = (fileName: string) => {
    // Simulate file download
    console.log(`Downloading file: ${fileName}`)
    // In a real application, you would trigger the actual download here
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Success</Badge>
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Processing</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Failed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-[#f47b20] text-white p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">UPLOAD FILE DATA NASABAH</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search..." className="pl-10 bg-white text-gray-900 border-0 w-64" />
            </div>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Upload Section */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
            <CardTitle className="text-xl font-semibold">Upload Customer Data File</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {/* Upload Area */}
            <div
              className={`
                relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
                transition-all duration-200 ease-in-out
                ${
                  fileState.isDragOver
                    ? "border-orange-600 bg-orange-50"
                    : "border-orange-300 hover:border-orange-600 hover:bg-orange-50"
                }
              `}
              style={{
                borderColor: fileState.isDragOver ? "#FF6600" : "#FFB366",
                backgroundColor: fileState.isDragOver ? "#FFF7ED" : undefined,
              }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={handleBrowseClick}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.xls,.xlsx"
                onChange={handleFileInputChange}
                className="hidden"
                disabled={fileState.isUploading}
              />

              <div className="flex flex-col items-center space-y-4">
                <div className="p-6 rounded-full bg-orange-100" style={{ backgroundColor: "#FFF7ED" }}>
                  <Upload className="h-12 w-12 text-orange-600" style={{ color: "#FF6600" }} />
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-semibold text-gray-700">Browse Files to upload</p>
                  <p className="text-sm text-gray-500">Supports .csv, .xls, .xlsx files (max 10MB)</p>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {fileState.error && (
              <Alert className="mt-4 border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-700">{fileState.error}</AlertDescription>
              </Alert>
            )}

            {/* File Info Section */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {fileState.selectedFile ? (
                    <>
                      <FileText className="h-6 w-6 text-orange-600" style={{ color: "#FF6600" }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{fileState.selectedFile.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(fileState.selectedFile.size)}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <FileText className="h-6 w-6 text-gray-400" />
                      <span className="text-sm text-gray-500">No selected File -</span>
                    </>
                  )}
                </div>

                {fileState.selectedFile && !fileState.isUploading && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemoveFile}
                    className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            {fileState.selectedFile && (
              <div className="mt-6 flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={handleRemoveFile}
                  disabled={fileState.isUploading}
                  className="px-4 py-2 bg-transparent"
                >
                  Cancel
                </Button>
                <Button
                  className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white"
                  style={{ backgroundColor: "#FF6600" }}
                  onClick={handleUpload}
                  disabled={fileState.isUploading}
                >
                  {fileState.isUploading ? "Uploading..." : "Upload File"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* File History Table */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="text-xl font-semibold">Uploaded File History</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-blue-50 hover:bg-blue-50">
                    <TableHead className="w-16 text-center font-semibold text-blue-900">#</TableHead>
                    <TableHead className="font-semibold text-blue-900">File Name</TableHead>
                    <TableHead className="font-semibold text-blue-900">Upload Date</TableHead>
                    <TableHead className="font-semibold text-blue-900">Uploaded By</TableHead>
                    <TableHead className="font-semibold text-blue-900">Size</TableHead>
                    <TableHead className="font-semibold text-blue-900">Status</TableHead>
                    <TableHead className="font-semibold text-blue-900 text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uploadedFiles.map((file, index) => (
                    <TableRow
                      key={file.id}
                      className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      <TableCell className="text-center font-medium text-gray-600">{index + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-600" />
                          <span className="font-medium text-gray-900">{file.fileName}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{file.uploadDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{file.uploadedBy}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600">{file.fileSize}</TableCell>
                      <TableCell>{getStatusBadge(file.status)}</TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownload(file.fileName)}
                          className="h-8 px-3 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                          disabled={file.status !== "success"}
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
