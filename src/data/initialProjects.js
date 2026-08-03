/**
 * Initial seed data for the portfolio
 * Simulates API response data structure
 */
export const initialProjects = [
  {
    id: 1,
    title: "E-Commerce Analytics Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time sales tracking, inventory management, and customer behavior insights with interactive data visualizations and exportable reports.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    date: "2026-01-15",
    link: "https://example.com/dashboard",
    github: "https://github.com/example/dashboard"
  },
  {
    id: 2,
    title: "FitTrack Pro Mobile App",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics. Features social challenges, progress photos, and AI-powered coaching recommendations with wearable device integration.",
    tech: ["React Native", "Firebase", "Redux", "HealthKit", "TensorFlow Lite"],
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=500&fit=crop",
    date: "2025-11-20",
    link: "https://example.com/fitness",
    github: "https://github.com/example/fittrack"
  },
  {
    id: 3,
    title: "Fintech Brand Identity System",
    description: "Complete visual identity redesign for a fintech startup including logo design, color palette, typography system, motion graphics, and comprehensive brand guidelines documentation for digital and print.",
    tech: ["Figma", "Adobe Illustrator", "After Effects", "Blender"],
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    date: "2025-09-10",
    link: "https://example.com/brand",
    github: null
  },
  {
    id: 4,
    title: "AgileTask Management Platform",
    description: "Collaborative project management tool with Kanban boards, Gantt charts, team messaging, and automated workflow triggers. Built specifically for agile development teams with sprint planning features.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "Docker"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
    date: "2025-12-05",
    link: "https://example.com/tasks",
    github: "https://github.com/example/agiletask"
  },
  {
    id: 5,
    title: "EcoSmart Home IoT Hub",
    description: "Smart home control center with energy optimization algorithms, predictive maintenance alerts, and voice assistant integration. Reduces household energy consumption by an average of 30%.",
    tech: ["React", "MQTT", "Python", "Raspberry Pi", "AWS IoT"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
    date: "2025-10-18",
    link: "https://example.com/ecosmart",
    github: "https://github.com/example/ecosmart"
  },
  {
    id: 6,
    title: "Wanderlust Travel Planner",
    description: "AI-powered travel planning application that creates personalized itineraries based on budget, interests, and travel style. Integrates with booking APIs and provides real-time weather and safety updates.",
    tech: ["React Native", "GraphQL", "OpenAI API", "Google Maps API"],
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop",
    date: "2025-08-22",
    link: "https://example.com/wanderlust",
    github: "https://github.com/example/wanderlust"
  }
]

export const categories = [
  "Web Development",
  "Mobile App", 
  "UI/UX Design",
  "Branding"
]