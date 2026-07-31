import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MEDUC — Accès aux soins et éducation sanitaire",
    template: "%s · MEDUC",
  },
  description:
    "MEDUC déploie des programmes d'accès aux soins et d'éducation sanitaire pour les communautés d'Afrique.",
  metadataBase: new URL("https://meduc.example.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main id="contenu-principal">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
