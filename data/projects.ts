export const projects = [
  {
    title: "Socio Manage",
    description:
      "A platform for managing student societies, offering role-based dashboards, real-time enrollments, and email notifications.",
    features: [
      "Role-based access for admins, members, and students.",
      "Real-time society enrollment system.",
      "Password reset with email verification.",
      "Full CRUD operations for societies and roles.",
      "Dashboard for activity logs and user management.",
    ],
    tags: ["Laravel", "PHP", "SQLite", "Tailwind CSS"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Socio Manage Dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Socio Manage Enrollment",
      },
    ],
    githubLink: "#",
    liveLink: "#",
    hasLiveLink: true,
  },
  {
    title: "Novel Scraper Bot",
    description:
      "A bot that bypasses Cloudflare to scrape novels and converts them to EPUB format for easy reading.",
    features: [
      "Bypasses Cloudflare protections.",
      "Converts web novels to EPUB format.",
      "Supports multiple novel sources.",
      "Simple command-line interface.",
      "Fast and efficient scraping capabilities.",
    ],
    tags: ["Python", "Golang", "Botasaurus", "Regex"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Novel Scraper Bot",
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Reading Epub",
      },
    ],
    githubLink: "#",
    liveLink: "#",
    hasLiveLink: false,
  },
  {
    title: "Worldwise",
    description:
      "A Country API app that displays country data fetched from a REST API.",
    features: [
      "Search countries from the search field.",
      "Filter countries by location.",
      "Dark and light mode toggle.",
      "Fully accessible interface.",
    ],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "REST API",
      "React.js",
      "Headless UI",
      "Vercel",
    ],
    images: [
      {
        src: "/country-api/desktop-preview.jpg",
        alt: "Worldwise Desktop Preview",
      },
      {
        src: "/country-api/desktop-design-home-dark.jpg",
        alt: "Worldwise Dark Mode",
      },
      {
        src: "/country-api/desktop-design-detail-dark.jpg",
        alt: "Worldwise Country Detail",
      },
      {
        src: "/country-api/mobile-design-detail-dark.jpg",
        alt: "Worldwise Mobile Dark Mode",
      },
      {
        src: "/country-api/mobile-design-detail-light.jpg",
        alt: "Worldwise Mobile Light Mode",
      },
    ],
    githubLink: "#",
    liveLink: "#",
    hasLiveLink: false,
  },
]
