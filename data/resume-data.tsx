import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Anil Seervi",
  initials: "AS",
  location: "Bengaluru, India",
  siteURL: "https://anil.vercel.app/",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about: "Crafting Elegance with simplicity",
  summary:
    "Starting my journey as a self-taught software developer, I began by contributing to major open-source projects, driven by a passion for collaborative coding and community-driven development. As my skills evolved, I mastered the art of building intricate UI structures using React and CSS, demonstrating a keen eye for design and user experience. My noteworthy contributions extend to enhancing MDN Web Docs, reflecting not only technical proficiency but also a commitment to advancing web development knowledge for the broader community.",
  avatarUrl: "https://avatars.githubusercontent.com/u/61609033?v=4",
  personalWebsiteUrl: "https://anil.vercel.app",
  twitterUsername: "@linASeervi",
  contact: {
    email: "dev.anilseervi@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AnilSeervi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anilseervi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/linASeervi/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SDC College",
      degree: "Bachelor's Degree in Computer Applications",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Zenduty",
      link: "https://www.zenduty.com",
      badges: [],
      title: "Software Development Engineer I → II",
      start: "2022",
      end: "Now",
      description:
        "Spearheaded the comprehensive redesign of the Zenduty web app, leading a dedicated squad, enhanced SEO, implemented end-to-end testing, migrated the codebase to Vite from Webpack, and introduced impactful elements such as TypeScript, Radix-UI, and code-splitting. Through these efforts, we not only improved overall performance by up to 45% but also achieved a remarkable 62% reduction in build time. Additionally, I played a pivotal role in building a custom query builder and contributed to the development of various other features.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "PWA",
    "CSS",
    "React/Next.js",
    "Gatsbyjs",
    "Vite",
    "React Native",
  ],
  projects: [
    {
      title: "DevFolio",
      techStack: ["Side Project", "JavaScript", "SASS"],
      description:
        "A well documented, minimal portfolio template for developers",
      link: {
        label: "devfolio.js.org",
        href: "https://devfolio.js.org/",
      },
    },
    {
      title: "Atmos",
      techStack: ["Side Project", "TypeScript", "Vite"],
      description: "A modern UI web app for weather forecast",
      link: {
        label: "atmos.pages.dev",
        href: "https://atmos.pages.dev/",
      },
    },
    {
      title: "QP Hoard",
      techStack: ["Side Project", "JavaScript", "React/Router", "PWA"],
      description:
        "A PWA for Undergrads to find and download previous years question papers for their academics",
      link: {
        label: "qp.pages.dev",
        href: "https://qp.pages.dev/",
      },
    },
    {
      title: "Recipes Counter",
      techStack: ["Side Project", "JavaScript", "Firebase", "PWA"],
      description: "Recipes logging web app developed for my academics",
      link: {
        label: "recipes-counter.web.app",
        href: "https://recipes-counter.web.app/",
      },
    },
    {
      title: "Pomodorox",
      techStack: ["Side Project", "TypeScript", "React", "Vite"],
      description:
        "A customizable hourglass concept pomodoro timer for productivity",
      link: {
        label: "pomodorox.pages.dev",
        href: "https://pomodorox.pages.dev/",
      },
    },
    {
      title: "Zenduty",
      techStack: ["Lead Frontend Developer", "Gatsby", "React", "Tailwind CSS"],
      description:
        "Landing page for Zenduty, a modern incident management platform",
      link: {
        label: "zenduty.com",
        href: "https://www.zenduty.com/",
      },
    },
    {
      title: "Zenduty Dashboard",
      techStack: ["Lead Frontend Developer", "React", "Vite", "TypeScript"],
      description:
        "End-to-end incident alerting, on-call management and response orchestration platform",
      link: {
        label: "zenduty.com",
        href: "https://www.zenduty.com/",
      },
    },

    {
      title: "Zenduty App",
      techStack: ["Frontend Developer", "React Native", "TypeScript"],
      description:
        "Cross-platform mobile application for on-call, incident management and alerting",
      link: {
        label: "zenduty.com",
        href: "https://www.zenduty.com/mobile",
      },
    },
  ],
} as const
