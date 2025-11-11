"use client";

import { useState } from "react";
import Navbar from "@/components/dashboard/Navbar/navbar";
import ExamCard from "@/components/dashboard/ExamCard/exam-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for exams
const examData = [
  {
    id: 1,
    subject: "Biology",
    examTitle: "2022 WASSCE BIOLOGY",
    duration: "30 mins",
    questionsCount: 34,
    marks: 96,
    units: 50,
    logo: "/waec-logo.png",
    logoAlt: "WASSCE Logo",
  },
  {
    id: 2,
    subject: "English Language",
    examTitle: "2022 JAMB ENGLISH LANGUAGE",
    duration: "30 mins",
    questionsCount: 57,
    marks: 114,
    units: 50,
    logo: "/jamb-logo.png",
    logoAlt: "JAMB Logo",
  },
  {
    id: 3,
    subject: "English Language",
    examTitle: "2020 BECE ENGLISH LANGUAGE",
    duration: "30 mins",
    questionsCount: 49,
    marks: 130,
    units: 50,
    logo: "/BECE-logo.png",
    logoAlt: "BECE Logo",
  },
  {
    id: 4,
    subject: "Mathematics",
    examTitle: "2023 IGCSE MATHEMATICS",
    duration: "180 mins",
    questionsCount: 107,
    marks: 214,
    units: 100,
    logo: "/IGCSE-logo.png",
    logoAlt: "IGCSE Logo",
  },
  {
    id: 5,
    subject: "English Language",
    examTitle: "SAT ENGLISH LANGUAGE TEST 4 (READING)",
    duration: "65 mins",
    questionsCount: 5,
    marks: 104,
    units: 100,
    logo: "/SAT-logo.png",
    logoAlt: "SAT Logo",
  },
  {
    id: 6,
    subject: "English Language",
    examTitle: "SAT ENGLISH LANGUAGE TEST 4 (WRITING AND LANGUAGE)",
    duration: "35 mins",
    questionsCount: 4,
    marks: 88,
    units: 100,
    logo: "/SAT-logo.png",
    logoAlt: "SAT Logo",
  },
  {
    id: 7,
    subject: "Chemistry",
    examTitle: "2024 WASSCE CHEMISTRY",
    duration: "30 mins",
    questionsCount: 48,
    marks: 96,
    units: 50,
    logo: "/waec-logo.png",
    logoAlt: "WASSCE Logo",
  },
  {
    id: 8,
    subject: "Physics",
    examTitle: "2024 JAMB PHYSICS",
    duration: "30 mins",
    questionsCount: 105,
    marks: 210,
    units: 50,
    logo: "/jamb-logo.png",
    logoAlt: "JAMB Logo",
  },
  {
    id: 9,
    subject: "Financial Accounting",
    examTitle: "2024 JAMB FINANCIAL ACCOUNTING",
    duration: "30 mins",
    questionsCount: 67,
    marks: 140,
    units: 50,
    logo: "/jamb-logo.png",
    logoAlt: "JAMB Logo",
  },
  {
    id: 10,
    subject: "Chemistry",
    examTitle: "2024 JAMB CHEMISTRY",
    duration: "30 mins",
    questionsCount: 71,
    marks: 142,
    units: 50,
    logo: "/jamb-logo.png",
    logoAlt: "JAMB Logo",
  },
];

const DashboardPage = () => {
  const [examType, setExamType] = useState<string>("");
  const [examSubject, setExamSubject] = useState<string>("");
  const [examYear, setExamYear] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 299;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching with:", { examType, examSubject, examYear });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        {/* Search Questions Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Search Questions</h1>
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Exam Type:</label>
                <Select value={examType} onValueChange={setExamType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select exam type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wassce">WASSCE</SelectItem>
                    <SelectItem value="jamb">JAMB</SelectItem>
                    <SelectItem value="bece">BECE</SelectItem>
                    <SelectItem value="igcse">IGCSE</SelectItem>
                    <SelectItem value="sat">SAT</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Exam Subject:</label>
                <Select value={examSubject} onValueChange={setExamSubject}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="biology">Biology</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="english">English Language</SelectItem>
                    <SelectItem value="accounting">
                      Financial Accounting
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Exam Year:</label>
                <Select value={examYear} onValueChange={setExamYear}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-end">
              <Badge
                variant="secondary"
                className="w-fit px-4 py-1.5 text-sm bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
              >
                Units balance: 10
              </Badge>
              <Button
                onClick={handleSearch}
                className="w-full md:w-auto min-w-[120px]"
              >
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Explore Past Questions Section */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold">Explore Past Questions</h2>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium whitespace-nowrap">
                Sort by:
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="units-low">Units: Low to High</SelectItem>
                  <SelectItem value="units-high">Units: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Exam Cards List */}
          <div className="space-y-4 mb-8">
            {examData.map((exam) => (
              <ExamCard key={exam.id} {...exam} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Items per page: {itemsPerPage} | Total: {totalItems}
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
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;
