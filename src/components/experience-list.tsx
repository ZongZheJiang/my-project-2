"use client";

import React from 'react';
import { Experience } from '@/types/experience';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ExperienceListProps {
    experiences: Experience[];
    listName: string;
}

const ExperienceList = ({ experiences, listName }: ExperienceListProps) => {
    return (
        <section className="px-6 py-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-10">{listName}</h2>

            <div className="flex flex-col">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative flex gap-6 pb-10 last:pb-0">
                        {/* Timeline spine */}
                        <div className="flex flex-col items-center">
                            <div className="mt-1.5 size-3 shrink-0 rounded-full bg-primary ring-2 ring-background ring-offset-2 ring-offset-background" />
                            {index !== experiences.length - 1 && (
                                <div className="mt-2 w-px flex-1 bg-border" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-3 pb-2 flex-1 min-w-0">
                            <div className="flex flex-wrap items-start justify-between gap-2">
                                <div>
                                    <h3 className="font-semibold text-base leading-snug">{exp.role}</h3>
                                    <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
                                </div>
                                <Badge variant="outline" className="shrink-0 text-xs font-normal">
                                    {exp.duration}
                                </Badge>
                            </div>

                            <ul className="flex flex-col gap-2">
                                {exp.points.map((point, pIdx) => (
                                    <li
                                        key={pIdx}
                                        className="flex gap-2.5 text-sm text-foreground/80 leading-relaxed"
                                    >
                                        <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {exp.link && (
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="w-fit mt-1"
                                >
                                    <Link
                                        href={exp.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {exp.link.label}
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceList;
