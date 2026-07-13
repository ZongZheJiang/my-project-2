"use client";

import { useState } from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_CARD_LIST } from "@/data/projectCard";

const ALL = "All";

const PROJECT_TYPE_STYLES: Record<string, string> = {
  Engineering:
    "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Consultancy:
    "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  "Web Development":
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
};

function ProjectCardGrid() {
  const types = [ALL, ...Array.from(new Set(PROJECT_CARD_LIST.map((p) => p.projectType)))];
  const [activeFilter, setActiveFilter] = useState(ALL);

  const visible =
    activeFilter === ALL
      ? PROJECT_CARD_LIST
      : PROJECT_CARD_LIST.filter((p) => p.projectType === activeFilter);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Filter toolbar */}
      <div className="flex gap-2 flex-wrap mb-10">
        {types.map((type) => (
          <Button
            key={type}
            variant={activeFilter === type ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {visible.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-8 border-b border-neutral-100 last:border-b-0 lg:border-b-0"
          >
            <div className="flex-1 min-w-0 w-[30%]">
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <Image
                  src={item.mediaUrl}
                  alt={item.title}
                  width={128}
                  height={96}
                  className="relative z-20 aspect-video w-full object-cover"
                />
                <CardHeader>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className={PROJECT_TYPE_STYLES[item.projectType] ?? ""}
                    >
                      {item.projectType}
                    </Badge>
                  </CardAction>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.body}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={item.href}>View Detailed Writeup</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-center text-muted-foreground py-16">No projects match this filter.</p>
      )}
    </div>
  );
}

export default ProjectCardGrid;
