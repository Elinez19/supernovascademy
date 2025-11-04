export const RESOURCES_METADATA = {
  title: "Resources - Supernovas Academy",
  description:
    "Curated study resources, guides, and tools to help you ace competitive exams.",
};

export const RESOURCES = [
  {
    title: "Study Guides",
    description: "Syllabus-focused guides and quick revision notes.",
    href: "/guides",
  },
  {
    title: "Practice Papers",
    description: "Timed mock tests with detailed solutions.",
    href: "/practice",
  },
  {
    title: "Exam Tips",
    description: "Proven strategies for maximizing your score.",
    href: "/tips",
  },
  {
    title: "Subject Libraries",
    description: "Curated problems by subject and difficulty.",
    href: "/library",
  },
] as const;

export const PRICING_DATA = {
  plans: [
    {
      name: "Free",
      description:
        "Perfect for students starting their exam preparation journey.",
      features: [
        {
          name: "5 practice tests/month",
          tooltip: "Limited practice tests for free tier",
        },
        {
          name: "Basic study materials",
          tooltip: "Access to core study content",
        },
        {
          name: "30-day progress tracking",
          tooltip: "Track your progress for 30 days",
        },
      ],
      price: 0,
      period: "/month",
      variant: "outline",
      highlighted: false,
    },
    {
      name: "Premium",
      description:
        "Ideal for serious students preparing for competitive exams.",
      features: [
        {
          name: "Unlimited practice tests",
          tooltip: "Access to all practice tests",
        },
        {
          name: "Advanced analytics",
          tooltip: "Detailed performance insights",
        },
        {
          name: "Unlimited study materials",
          tooltip: "Full access to all content",
        },
        {
          name: "Personalized study plans",
          tooltip: "AI-powered study recommendations",
        },
        {
          name: "24/7 expert support",
          tooltip: "Round-the-clock academic assistance",
        },
      ],
      price: 29,
      period: "/month",
      variant: "default",
      highlighted: true,
    },
  ],
} as const;

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote:
      "Supernovas Academy transformed my exam preparation completely. I passed my competitive exam on the first attempt thanks to their comprehensive study materials and practice tests.",
    authorName: "David Park",
    authorRole: "Software Engineer",
    avatarSrc: "/DavidPark.png",
  },
  {
    id: 2,
    quote:
      "The personalized study plans and detailed analytics helped me identify my weak areas and improve my scores significantly. Highly recommended for serious exam preparation.",
    authorName: "Sarah Johnson",
    authorRole: "Medical Student",
    avatarSrc: "/placeholder-user.jpg",
  },
  {
    id: 3,
    quote:
      "I was struggling with time management during exams. The mock tests and practice sessions on this platform gave me the confidence to ace my engineering entrance exam.",
    authorName: "Rajesh Kumar",
    authorRole: "Engineering Student",
    avatarSrc: "/placeholder-user.jpg",
  },
  {
    id: 4,
    quote:
      "The AI-powered study notes and smart search feature made it so easy to find and review important concepts. This platform is a game-changer for exam prep.",
    authorName: "Monica Kurt",
    authorRole: "MBA Aspirant",
    avatarSrc: "/MonicaKurt.png",
  },
] as const;

export const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;
