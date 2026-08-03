import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MEDUC GM — Accès aux soins et éducation sanitaire",
    template: "%s · MEDUC GM",
  },
  description:
    "MEDUC GM déploie des programmes d'accès aux soins et d'éducation sanitaire pour les communautés d'Afrique.",
  metadataBase: new URL("https://meduc.example.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
