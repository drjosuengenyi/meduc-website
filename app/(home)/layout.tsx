import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meduc GM Africa — Africa Health e-Voucher (AHT)",
  description:
    "MeducAHT — Accès inclusif aux soins de santé pour 50M+ Congolais via e-voucher numérique et USSD *707#. Propulsé par Microsoft Azure.",
};

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
