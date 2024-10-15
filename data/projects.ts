export const projects = [
  {
    title: "Socio Manage",
    description:
      "A platform for managing student societies, offering role-based dashboards, real-time enrollments, and email notifications.",
    features: [
      "Role-based dynamic dashboards for admins, members, and students.",
      "Real-time society enrollment system.",
      "Authorization and authentication with email verification.",
      "Password reset with email functionality.",
      "Full CRUD operations for societies, roles, and users.",
      "Dashboard for activity logs and user management.",
    ],
    tags: ["Laravel", "HTMX", "Tailwind CSS", "Web Components"],
    images: [
      {
        src: "/socio-manage/home-page.png",
        alt: "Socio manage homepage",
      },
      {
        src: "/socio-manage/dashboard.png",
        alt: "Socio manage dashboard",
      },
      {
        src: "/socio-manage/reset-password.png",
        alt: "Socio manage reset password",
      },
      {
        src: "/socio-manage/log-in.png",
        alt: "Socio manage log in page",
      },
      {
        src: "/socio-manage/sign-up.png",
        alt: "Socio manage sign up",
      },
    ],
    githubLink: "https://github.com/kamalsingh200238/socioManage",
    liveLink: "",
    hasLiveLink: false,
  },
  {
    title: "Novel Scraper Bot",
    description:
      "A bot that bypasses Cloudflare to scrape novels and converts them to EPUB format for easy reading.",
    features: [
      "Bypasses Cloudflare protections.",
      "Converts web novels to EPUB format.",
      "Supports parallel scraping if allowed.",
      "Fast and efficient scraping capabilities.",
    ],
    tags: ["Python", "Golang", "Botasaurus", "Regex"],
    images: [
      {
        src: "/novel-scrapper/bypass-cloudflare.png",
        alt: "Novel Scraper Bot bypassing cloudflare",
      },
      {
        src: "/novel-scrapper/after-bypass.png",
        alt: "Novel Scraper Bot after bypass",
      },
      {
        src: "/novel-scrapper/cli-capture.png",
        alt: "Novel Scraper Bot cli screenshot",
      },
    ],
    githubLink: "https://github.com/kamalsingh200238/novel-scrapper",
    liveLink: "",
    hasLiveLink: false,
  },
  {
    title: "Worldwise",
    description: "A app that displays country data fetched from a REST API.",
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
    githubLink: "https://github.com/kamalsingh200238/country-api-v2",
    liveLink: "https://country-api-v2.vercel.app/",
    hasLiveLink: true,
  },
];
