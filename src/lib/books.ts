export type Book = {
  slug: string;
  title: string;
  author: string;
  format: "epub" | "pdf";
  file: string;
  note: string;
};

export const books: Book[] = [
  {
    slug: "five-rings",
    title: "The Book of Five Rings",
    author: "Miyamoto Musashi",
    format: "epub",
    file: "/books/five-rings.epub",
    note: "A swordsman's timeless notes on strategy, discipline, and stillness.",
  },
  {
    slug: "heart-of-thorns",
    title: "A Heart of Thorns",
    author: "Tessonja Odette",
    format: "epub",
    file: "/books/heart-of-thorns.epub",
    note: "A fae-touched fantasy about courage, choice, and hidden magic.",
  },
  {
    slug: "classical-chinese-philosophy",
    title: "Classical Chinese Philosophy",
    author: "Anthology",
    format: "pdf",
    file: "/books/classical-chinese-philosophy.pdf",
    note: "Foundational voices of Eastern thought — Confucius, Laozi, and beyond.",
  },
  {
    slug: "david-morin-english-1",
    title: "David Morin — English 1",
    author: "David Morin",
    format: "pdf",
    file: "/books/david-morin-english-1.pdf",
    note: "A study companion for sharpening English reading and writing.",
  },
];
