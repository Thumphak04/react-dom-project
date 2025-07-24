"use client";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

interface AutoDebitCustomer {
  registrationId: string;
  customerName: string;
  customerId: string;
  accountNo: string;
  accountType: "CASA" | "Credit Card";
  billNumber: string;
  billCode: string;
  billType: "Static" | "Dynamic";
  billAmount: number;
  chargeAmount: number;
  startDate: string; // YYYY-MM-DD
  nextExecutionDate: string; // YYYY-MM-DD
  scheduleType: "Monthly" | "Yearly" | "Weekly";
  scheduleUnit: number;
  createdAt: string; // YYYY-MM-DD HH:MM
  status: "Active" | "Expired" | "Pending";
}

const sampleCustomers: AutoDebitCustomer[] = [
  {
    registrationId: "AD-001",
    customerName: "Budi Santoso",
    customerId: "CIF-001",
    accountNo: "1234567890",
    accountType: "CASA",
    billNumber: "BNI-001-2024",
    billCode: "BLR001",
    billType: "Static",
    billAmount: 150000,
    chargeAmount: 2500,
    startDate: "2023-01-01",
    nextExecutionDate: "2024-02-01",
    scheduleType: "Monthly",
    scheduleUnit: 1,
    createdAt: "2022-12-20 10:30",
    status: "Active",
  },
  {
    registrationId: "AD-002",
    customerName: "Siti Aminah",
    customerId: "CIF-002",
    accountNo: "0987654321",
    accountType: "Credit Card",
    billNumber: "TELKOM-002-2024",
    billCode: "BLR002",
    billType: "Dynamic",
    billAmount: 75000,
    chargeAmount: 1500,
    startDate: "2023-02-15",
    nextExecutionDate: "2024-03-15",
    scheduleType: "Monthly",
    scheduleUnit: 1,
    createdAt: "2023-02-01 14:00",
    status: "Pending",
  },
  {
    registrationId: "AD-003",
    customerName: "Joko Susilo",
    customerId: "CIF-003",
    accountNo: "1122334455",
    accountType: "CASA",
    billNumber: "PLN-003-2023",
    billCode: "BLR003",
    billType: "Static",
    billAmount: 200000,
    chargeAmount: 3000,
    startDate: "2022-05-01",
    nextExecutionDate: "2023-05-01",
    scheduleType: "Yearly",
    scheduleUnit: 1,
    createdAt: "2022-04-10 09:00",
    status: "Expired",
  },
  {
    registrationId: "AD-004",
    customerName: "Dewi Lestari",
    customerId: "CIF-004",
    accountNo: "6789012345",
    accountType: "Credit Card",
    billNumber: "BPJS-004-2024",
    billCode: "BLR004",
    billType: "Static",
    billAmount: 50000,
    chargeAmount: 1000,
    startDate: "2024-01-10",
    nextExecutionDate: "2024-02-10",
    scheduleType: "Monthly",
    scheduleUnit: 1,
    createdAt: "2024-01-01 11:00",
    status: "Active",
  },
  {
    registrationId: "AD-005",
    customerName: "Ahmad Fauzi",
    customerId: "CIF-005",
    accountNo: "2233445566",
    accountType: "CASA",
    billNumber: "PDAM-005-2024",
    billCode: "BLR005",
    billType: "Dynamic",
    billAmount: 120000,
    chargeAmount: 2000,
    startDate: "2023-09-01",
    nextExecutionDate: "2024-09-01",
    scheduleType: "Yearly",
    scheduleUnit: 1,
    createdAt: "2023-08-15 16:00",
    status: "Active",
  },
];

export default function AutoDebitCustomerList() {
  const handleEdit = (id: string) => {
    console.log(`Edit customer with ID: ${id}`);
    // Implement navigation to edit form or modal
  };

  const handleDelete = (id: string) => {
    console.log(`Delete customer with ID: ${id}`);
    // Implement delete confirmation and actual deletion
  };

  const handleAddNewData = () => {
    console.log("Add New Data button clicked");
    // Implement navigation to the add new data form
  };

  const getStatusBadge = (status: AutoDebitCustomer["status"]) => {
    switch (status) {
      case "Active":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Active
          </Badge>
        );
      case "Expired":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Expired
          </Badge>
        );
      case "Pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Pending
          </Badge>
        );
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="w-full p-6 md:p-8 lg:p-10">
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-white px-6 py-4 border-b border-gray-200 flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Auto Debit Registration List
          </CardTitle>
          <Button
            onClick={handleAddNewData}
            className="bg-bniOrange-light hover:bg-bniOrange text-white px-4 py-2 rounded-md flex items-center space-x-2"
            style={{ backgroundColor: "#FF6600" }}
          >
            <Plus className="h-4 w-4" />
            <span>Add New Data</span>
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto relative">
            {/* Optional: Add a subtle shadow to indicate scrollability */}
            <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

            <TooltipProvider>
              <div className="grid w-full [&>div]:border [&>div]:rounded">
                <Table className="relative">
                  <TableHeader className="bg-gray-50">
                    <TableRow className="hover:bg-gray-50">
                      <TableHead className="min-w-[150px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Customer Name
                      </TableHead>
                      <TableHead className="min-w-[120px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Customer ID
                      </TableHead>
                      <TableHead className="min-w-[120px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Account No.
                      </TableHead>
                      <TableHead className="min-w-[120px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Account Type
                      </TableHead>
                      <TableHead className="min-w-[120px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Bill Number
                      </TableHead>
                      <TableHead className="min-w-[100px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Bill Code
                      </TableHead>
                      <TableHead className="min-w-[100px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Bill Type
                      </TableHead>
                      <TableHead className="min-w-[120px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Bill Amount (Rp)
                      </TableHead>
                      <TableHead className="min-w-[120px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Charge Amount (Rp)
                      </TableHead>
                      <TableHead className="min-w-[120px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Start Date
                      </TableHead>
                      <TableHead className="min-w-[150px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Next Execution Date
                      </TableHead>
                      <TableHead className="min-w-[120px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Schedule Type
                      </TableHead>
                      <TableHead className="min-w-[100px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Schedule Unit
                      </TableHead>
                      <TableHead className="min-w-[150px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Created Date
                      </TableHead>
                      <TableHead className="min-w-[100px] px-4 py-3 text-gray-700 font-semibold text-sm">
                        Status
                      </TableHead>
                      <TableHead className="min-w-[100px] px-4 py-3 text-center text-gray-700 font-semibold text-sm">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleCustomers.map((customer, index) => (
                      <TableRow
                        key={customer.registrationId}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <TableCell className="px-4 py-2 font-medium text-gray-800 text-sm">
                          {customer.customerName}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.customerId}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.accountNo}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.accountType}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.billNumber}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.billCode}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.billType}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.billAmount.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.chargeAmount.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.startDate}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.nextExecutionDate}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.scheduleType}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.scheduleUnit}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-gray-700 text-sm">
                          {customer.createdAt}
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          {getStatusBadge(customer.status)}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    handleEdit(customer.registrationId)
                                  }
                                  className="h-8 w-8 text-blue-600 hover:bg-blue-50"
                                >
                                  <Pencil className="h-4 w-4" />
                                  <span className="sr-only">Edit</span>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>Edit Registration</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    handleDelete(customer.registrationId)
                                  }
                                  className="h-8 w-8 text-red-600 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                Delete Registration
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
