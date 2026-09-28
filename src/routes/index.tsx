import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("introShown") !== "true";
  });

  const [introLeaving, setIntroLeaving] = useState(false);

  const [showSecurity, setShowSecurity] = useState(() => {
    return sessionStorage.getItem("securityScanShown") !== "true";
  });

  const handleIntroComplete = () => {
    if (introLeaving) return;

    setIntroLeaving(true);

    // Give the cinematic intro time to fade out
    setTimeout(() => {
      sessionStorage.setItem("introShown", "true");
      setShowIntro(false);
    }, 900);
  };

  const handleSecurityComplete = () => {
    sessionStorage.setItem("securityScanShown", "true");
    setShowSecurity(false);
  };

  // Safety fallback in case the video cannot trigger onEnded
  useEffect(() => {
    if (!showIntro) return;

    const videoFallback = setTimeout(() => {
      handleIntroComplete();
    }, 30000);

    return () => clearTimeout(videoFallback);
  }, [showIntro]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* CINEMATIC INTRO */}
      {showIntro && (
        <div
          className={`cinematic-intro ${
            introLeaving ? "cinematic-intro-leaving" : ""
          }`}
        >
          <video
            className="cinematic-intro-video"
            src="/intro.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleIntroComplete}
            onError={handleIntroComplete}
          />

          <div className="cinematic-intro-overlay" />

          <div className="cinematic-intro-vignette" />

          <div className="cinematic-intro-corners">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      {/* SECURITY SCAN */}
      {!showIntro && showSecurity && (
        <SecurityScan onComplete={handleSecurityComplete} />
      )}

      {/* MAIN WEBSITE */}
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
