"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import { FiChevronRight } from "react-icons/fi";
import React from "react";

// Utility to format path segments (e.g., "user-profile" -> "User Profile")
function formatSegment(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  // Split and filter path segments
  const segments = pathname
    .split("/")
    .filter(Boolean);

  // Build breadcrumb data
  const breadcrumbs = segments.map((segment, idx) => {
    // Build the URL up to this segment
    const href = "/" + segments.slice(0, idx + 1).join("/");
    return {
      label: formatSegment(segment),
      href,
      isLast: idx === segments.length - 1,
    };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.length > 0 && <BreadcrumbSeparator><FiChevronRight size={16} /></BreadcrumbSeparator>}
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={crumb.href}>
            <BreadcrumbItem>
              {crumb.isLast ? (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={crumb.href}>{crumb.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {idx < breadcrumbs.length - 1 && (
              <BreadcrumbSeparator>
                <FiChevronRight size={16} />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;