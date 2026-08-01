"use client";

import {
  Award,
  Briefcase,
  CalendarCheck,
  CircleHelp,
  Contact,
  FileSpreadsheet,
  FileText,
  Handshake,
  Landmark,
  Megaphone,
  Network,
  PenLine,
  Scale,
  Shield,
  Store,
  Table,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";

export const CMS_ICONS: Record<string, LucideIcon> = {
  PenLine,
  Megaphone,
  Store,
  Contact,
  UserPlus,
  CalendarCheck,
  Landmark,
  Users,
  Briefcase,
  Handshake,
  Network,
  Table,
  Award,
  CircleHelp,
  Shield,
  FileText,
  FileSpreadsheet,
  Scale,
};

export function CmsIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = CMS_ICONS[name] ?? FileText;
  return <Icon className={className} aria-hidden />;
}
