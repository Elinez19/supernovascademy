"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CheckCircle2, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExamCardProps {
  subject: string;
  examTitle: string;
  duration: string;
  questionsCount: number;
  marks: number;
  units: number;
  logo: string;
  logoAlt: string;
}

const ExamCard = ({
  subject,
  examTitle,
  duration,
  questionsCount,
  marks,
  units,
  logo,
  logoAlt,
}: ExamCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow border-border">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left: Logo and Exam Info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt={logoAlt}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base mb-1">
                {subject}
              </h3>
              <p className="text-sm text-muted-foreground">
                {examTitle}
              </p>
            </div>
          </div>

          {/* Middle: Exam Details */}
          <div className="hidden lg:flex items-center gap-8 flex-shrink-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <HelpCircle className="h-4 w-4" />
              <span>{questionsCount} questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>{marks} marks</span>
            </div>
          </div>

          {/* Right: Units and Practice Button */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Badge variant="outline" className="font-medium whitespace-nowrap">
              {units} Units
            </Badge>
            <Button className="whitespace-nowrap">Practice</Button>
          </div>
        </div>

        {/* Mobile/Tablet: Exam Details */}
        <div className="lg:hidden flex flex-wrap items-center gap-4 mt-4 pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <HelpCircle className="h-4 w-4" />
            <span>{questionsCount} questions</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span>{marks} marks</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamCard;

