export type Poem = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  stanzas: string[][];
};

export const poems: Poem[] = [
  {
    slug: "semicolon",
    title: "Semicolon",
    author: "Ainiya Faida Haura",
    date: "July 30th, 2026",
    excerpt: "Where the world expected an ending, but my story chose to continue.",
    stanzas: [
      [
        "The days pass so quickly.",
        "People are busy with their own lives,",
        "continuing to walk toward time",
        "that is only fleeting.",
      ],
      [
        "What once seemed like an empty page,",
        "slowly fills with words.",
        "As I continue writing,",
        "every day, every breath, and every step.",
      ],
      [
        "Between the lines lives a semicolon,",
        "a quiet pause,",
        "where the world expected an ending,",
        "but my story chose to continue.",
      ],
      ["They told me", "a sentence should end", "when it has nothing left", "to say."],
      [
        "I choose to keep writing,",
        "even there is a storm.",
        "Because I knew,",
        "my story deserves a life.",
      ],
      ["A period ends the story.", "A semicolon listens,", "then gently whispers,", "\u201CContinue.\u201D"],
    ],
  },
];