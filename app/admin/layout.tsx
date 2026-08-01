import type { Metadata } from "next";
import "@/styles/cms.css";

export const metadata: Metadata = {
  title: "CMS — MEDUC AHT",
  description: "Dashboard de création et gestion des pages MEDUC AHT",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 antialiased">
      {children}
    </div>
  );
}
