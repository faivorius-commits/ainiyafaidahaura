import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MagicBackground } from "@/components/magic/MagicBackground";
import { Navbar } from "@/components/magic/Navbar";
import { Hero } from "@/components/magic/Hero";
import { GuestBook } from "@/components/magic/GuestBook";
import { Footer } from "@/components/magic/Contact";
import { SecurityScan } from "@/components/magic/SecurityScan";

const title = "Ainiya Faida Haura — Writer, Creator & Youth Advocate";

const description =
  "A magical portfolio of Ainiya Faida Haura: journey, experience, honors, digital archive, and guest book.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [showSecurity, setShowSecurity] = useState(() => {
    return sessionStorage.getItem("securityScanShown") !== "true";
  });

  const handleSecurityComplete = () => {
    sessionStorage.setItem("securityScanShown", "true");
    setShowSecurity(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {showSecurity && (
        <SecurityScan onComplete={handleSecurityComplete} />
      )}

      <MagicBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <GuestBook />
      </main>

      <Footer />
    </div>
  );
}
