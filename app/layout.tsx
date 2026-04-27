import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtendeJuri | Atendimento jurídico inteligente no WhatsApp",
  description:
    "Transforme o WhatsApp do seu escritório em uma central inteligente para atender, organizar e priorizar contatos com apoio de IA.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh bg-white font-sans text-zinc-950 antialiased">
        {children}
      </body>
    </html>
  );
}
