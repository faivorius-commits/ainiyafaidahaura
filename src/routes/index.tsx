import { createFileRoute } from "@tanstack/react-router";
import { MagicBackground } from "@/components/magic/MagicBackground";
import { Navbar } from "@/components/magic/Navbar";
import { Hero } from "@/components/magic/Hero";
import { Journey } from "@/components/magic/Journey";
import { Experience } from "@/components/magic/Experience";
import { Achievement } from "@/components/magic/Achievement";
import { Archive } from "@/components/magic/Archive";
import { GuestBook } from "@/components/magic/GuestBook";
import { Contact, Footer } from "@/components/magic/Contact";

const title = "Ainiya Faida Haura — Writer, Creator & Youth Advocate";
const description =
  "A magical portfolio of Ainiya Faida Haura: journey, experience, achievements, digital archive, and guest book.";

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
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MagicBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Journey />
        <Experience />
        <Achievement />
        <Archive />
        <GuestBook />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
