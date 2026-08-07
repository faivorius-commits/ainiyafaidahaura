import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/journey", label: "My Journey" },
  { to: "/experience", label: "Experience & Achievement" },
  { to: "/archive", label: "Digital Archive" },
  { to: "/poetry", label: "Poetry" },
  { to: "/contact", label: "Contact Me" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/30 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <Sparkles className="size-5 shrink-0 text-primary" />
          <span className="font-display truncate text-lg tracking-wide">Ainiya F. Haura</span>
        </Link>

        <ul className="hidden items-center gap-5 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="glass shrink-0 rounded-full p-2 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="glass mx-5 mb-4 grid gap-1 p-3 lg:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}