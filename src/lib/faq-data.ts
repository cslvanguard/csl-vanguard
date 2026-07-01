export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope, but most custom websites take 4–8 weeks from first call to launch. Smaller jobs — a component, a fix, a security pass — can be done in days.",
  },
  {
    q: "What does it cost?",
    a: "We give a fixed quote after understanding your project, and we keep it honest. We work with small budgets often — the first conversation is always free, with no obligation.",
  },
  {
    q: "Do you support the site after launch?",
    a: "Yes. We offer maintenance that covers updates, security, performance, and priority help. Launch is the beginning of the relationship, not the end.",
  },
  {
    q: "What if my site was built by someone else?",
    a: "That's a big part of what we do. We routinely fix, improve, and take over sites built on other stacks — including rescuing broken features fast.",
  },
  {
    q: "Which technologies do you use?",
    a: "Mostly Next.js, React, TypeScript, and Tailwind on the frontend, with Node.js and PostgreSQL behind it. We adapt to whatever your existing site needs.",
  },
];
