
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
  const [showIntro, setShowIntro] = useState(false);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    try {
      setShowIntro(
        window.sessionStorage.getItem("introShown") !== "true",
      );
      setShowSecurity(
        window.sessionStorage.getItem("securityScanShown") !== "true",
      );
    } catch {
      setShowIntro(true);
      setShowSecurity(true);
    } finally {
      setSessionReady(true);
    }
  }, []);

  const saveSessionFlag = (key: string) => {
    try {
      window.sessionStorage.setItem(key, "true");
    } catch {
      // Keep the website usable if browser storage is unavailable.
    }
  };

  const handleIntroComplete = () => {
    if (introLeaving) return;

    setIntroLeaving(true);

    window.setTimeout(() => {
      saveSessionFlag("introShown");
      setShowIntro(false);
    }, 900);
  };

  const handleSecurityComplete = () => {
    saveSessionFlag("securityScanShown");
    setShowSecurity(false);
  };

  useEffect(() => {
    if (!showIntro) return;

    const videoFallback = window.setTimeout(() => {
      handleIntroComplete();
    }, 30000);

    return () => window.clearTimeout(videoFallback);
  }, [showIntro]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {!sessionReady && (
        <div
          className="fixed inset-0 z-[100] bg-[#0b0813]"
          aria-hidden="true"
        />
      )}

      {sessionReady && showIntro && (
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

      {sessionReady && !showIntro && showSecurity && (
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
