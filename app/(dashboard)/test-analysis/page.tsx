"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/dashboard/Navbar/navbar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

// Mock data for test attempts
const testData = [
  {
    id: 1,
    name: "2024 JAMB PHYSICS",
    subject: "Physics",
    logo: "/jamb-logo.png",
    logoAlt: "JAMB Logo",
    dateAttempted: "28-Jun-2025 5:56 PM",
    endDate: "28-Jun-2025 6:26 PM",
    totalScore: 0,
    maxScore: 210,
    timeUsed: 0.2,
  },
  {
    id: 2,
    name: "2022 WASSCE BIOLOGY",
    subject: "Biology",
    logo: "/waec-logo.png",
    logoAlt: "WASSCE Logo",
    dateAttempted: "28-Jun-2025 4:30 PM",
    endDate: "28-Jun-2025 5:00 PM",
    totalScore: 14,
    maxScore: 96,
    timeUsed: 10.78,
  },
  {
    id: 3,
    name: "2023 IGCSE MATHEMATICS",
    subject: "Mathematics",
    logo: "/IGCSE-logo.png",
    logoAlt: "IGCSE Logo",
    dateAttempted: "28-Jun-2025 2:15 PM",
    endDate: "28-Jun-2025 5:15 PM",
    totalScore: 85,
    maxScore: 214,
    timeUsed: 180.0,
  },
  {
    id: 4,
    name: "2022 JAMB ENGLISH LANGUAGE",
    subject: "English Language",
    logo: "/jamb-logo.png",
    logoAlt: "JAMB Logo",
    dateAttempted: "27-Jun-2025 10:00 AM",
    endDate: "27-Jun-2025 10:30 AM",
    totalScore: 45,
    maxScore: 114,
    timeUsed: 25.5,
  },
  {
    id: 5,
    name: "SAT ENGLISH LANGUAGE TEST 4 (READING)",
    subject: "English Language",
    logo: "/SAT-logo.png",
    logoAlt: "SAT Logo",
    dateAttempted: "26-Jun-2025 3:20 PM",
    endDate: "26-Jun-2025 4:25 PM",
    totalScore: 78,
    maxScore: 104,
    timeUsed: 65.0,
  },
  {
    id: 6,
    name: "2020 BECE ENGLISH LANGUAGE",
    subject: "English Language",
    logo: "/BECE-logo.png",
    logoAlt: "BECE Logo",
    dateAttempted: "25-Jun-2025 11:00 AM",
    endDate: "25-Jun-2025 11:30 AM",
    totalScore: 4,
    maxScore: 130,
    timeUsed: 9.75,
  },
  {
    id: 7,
    name: "2024 WASSCE CHEMISTRY",
    subject: "Chemistry",
    logo: "/waec-logo.png",
    logoAlt: "WASSCE Logo",
    dateAttempted: "24-Jun-2025 9:00 AM",
    endDate: "24-Jun-2025 9:30 AM",
    totalScore: 32,
    maxScore: 96,
    timeUsed: 1.87,
  },
];

const TestAnalysisPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = testData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleDetails = (testId: number) => {
    console.log("View details for test:", testId);
    // Navigate to test details page
  };

  const handleExport = (testId: number) => {
    console.log("Export test:", testId);
    // Handle export logic
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6">Test List</h1>

        {/* Test List Table */}
        <Card className="overflow-hidden border shadow-sm">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="w-12 px-4 py-3 font-semibold">#</TableHead>
                  <TableHead className="px-4 py-3 font-semibold">Name</TableHead>
                  <TableHead className="px-4 py-3 font-semibold">Subjects</TableHead>
                  <TableHead className="px-4 py-3 font-semibold whitespace-nowrap">Date Attempted</TableHead>
                  <TableHead className="px-4 py-3 font-semibold whitespace-nowrap">End Date</TableHead>
                  <TableHead className="px-4 py-3 font-semibold">Total Score</TableHead>
                  <TableHead className="px-4 py-3 font-semibold">Time Used</TableHead>
                  <TableHead className="px-4 py-3 font-semibold text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testData.map((test, index) => (
                  <TableRow key={test.id} className="hover:bg-muted/30 border-b">
                    <TableCell className="px-4 py-4 font-medium">{index + 1}</TableCell>
                    <TableCell className="px-4 py-4">
                      <div className="flex items-center gap-3 min-w-[200px]">
                        <Image
                          src={test.logo}
                          alt={test.logoAlt}
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain flex-shrink-0"
                        />
                        <span className="font-medium">{test.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-4">{test.subject}</TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm">{test.dateAttempted}</TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm">{test.endDate}</TableCell>
                    <TableCell className="px-4 py-4">
                      <span className="font-medium">
                        {test.totalScore} / {test.maxScore}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <span className="text-muted-foreground text-sm">
                        {test.timeUsed.toFixed(2)} mins
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2 flex-wrap min-w-[140px]">
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleDetails(test.id)}
                          className="gap-1.5 text-sm h-8 px-3"
                        >
                          <BarChart3 className="h-3.5 w-3.5" />
                          Details
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleExport(test.id)}
                          className="text-sm h-8 px-3"
                        >
                          Export
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t mt-6">
          <div className="text-sm text-muted-foreground">
            Items per page: {itemsPerPage} of {totalItems} items
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                    }
                  }}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              <PaginationItem>
                <span className="text-sm px-4">
                  Page {currentPage} of {totalPages}
                </span>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </main>
  );
};

export default TestAnalysisPage;


