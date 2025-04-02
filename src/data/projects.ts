export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
  tags?: string[]; // Make tags optional to maintain compatibility
  date?: Date; // Add date for sorting functionality
  achievement?: string; // Add achievement field for hackathon wins or other recognitions
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "CareSanar",
    description: "A comprehensive Hospital Management System designed to streamline administrative healthcare tasks. Developed as a solo project for a StackUp hackathon, CareSanar efficiently handles patient management, appointment scheduling, inventory management, billing, and analytics. The system also incorporates an assistant feature using Llama 3 to help staff with diagnosis. Built with Next.js and Supabase as the backend-as-a-service, this project demonstrates rapid adaptation to unfamiliar tools while delivering a complete solution under tight deadlines.",
    imageUrl: "https://i.imgur.com/Lv8nr4g.jpg",
    demoUrl: "https://caresanar.online/",
    githubUrl: "https://github.com/jericho1050/caresanar",
    technologies: ["TypeScript", "Next.js", "Supabase", "Llama 3", "AI", "PostgreSQL"],
    tags: ["HealthTech", "Web App", "Health", "Management System", "Full Stack", "Hackathon"],
    date: new Date(2025, 2, 28),
    achievement: "1st Place - StackUp Hackathon"
  },
  {
    id: "project-2",
    title: "Math Quizzty",
    description: "An AI-powered educational platform for generating mathematics questions. Developed as a solo project for a StackUp hackathon, Math Quizzty features a multi-stage AI workflow using Django for orchestration, DigitalOcean Functions (Serverless) for distinct AI agents (generation, paraphrasing, verification), Llama 3 models via DigitalOcean GenAI & Together AI, and Neon PostgreSQL for storage. The system creates high-quality math problems with varying difficulty levels, adapting to user needs and providing immediate feedback.",
    imageUrl: "https://i.imgur.com/4bmkHmX.jpg",
    demoUrl: "https://mathquizzty.xyz/",
    githubUrl: "https://github.com/jericho1050/math_quizzty",
    technologies: ["Python", "Django", "Llama 3", "DigitalOcean", "Serverless", "PostgreSQL", "NeonDB", "AI"],
    tags: ["EdTech", "AI", "Education", "Full Stack", "Hackathon"],
    date: new Date(2025, 3, 28),
    achievement: "1st Place - StackUp Hackathon"
  },
  {
    id: "project-3",
    title: "Calorie Contra",
    description: "A calorie counter web app that searches for food and keeps tracks of your macros and calories, embedded with a nutritionist chatbot",
    imageUrl: "https://i.imgur.com/hKo5daE.jpg",
    demoUrl: "https://calorie-contra-testing-baf1376cc140.herokuapp.com/home",
    githubUrl: "https://github.com/jericho1050/calorie-counter",
    technologies: ["Python", "Javascript", "Quart", "Heroku", "Bootstrap", "Gemini"],
    tags: ["Web App", "Health", "Full Stack"],
    date: new Date(2024, 9, 25)
  },
  {
    id: "project-4",
    title: "Hum Social Network",
    description: "A simple to use social networking platform with real-time messaging and content sharing capabilities.",
    imageUrl: "https://i.imgur.com/11cb8WG.jpg",
    demoUrl: "https://hum.social",
    githubUrl: "https://github.com/jericho1050/hum-social",
    technologies: ["Django", "Postgres", "Neon", "Javascript", "Bootstrap"],
    tags: ["Web App", "Social Media", "Full Stack"],
    date: new Date(2025, 4, 1)
  },
  {
    id: "project-5",
    title: "Aestheitos Learning Platform",
    description: "A management system and a educational platform focusing on calisthenics and fitness training",
    imageUrl: "https://i.imgur.com/oQ8dGva.jpg",
    demoUrl: "https://aestheitos.pro",
    githubUrl: "https://github.com/jericho1050/aestheitos",
    technologies: ["Vite", "Material UI", "React", "React Router", "Cypress", "Django Rest Framework", "Digital Ocean"],
    tags: ["Web App", "Education", "Fitness"],
    date: new Date(2024, 2, 13)
  },
  {
    id: "project-6",
    title: "Drone Landing Page",
    description: "A visually stunning landing page for a drone product, featuring smooth animations and interactive elements.",
    imageUrl: "https://i.imgur.com/dQn0bx3.jpg",
    demoUrl: "https://blue-island-0e5228800.5.azurestaticapps.net",
    githubUrl: "https://github.com/jericho1050/drone-landing",
    technologies: ["HTML", "CSS", "JavaScript", "Azure Static Web Apps"],
    tags: ["Frontend", "Landing Page"],
    date: new Date(2024, 11, 7)
  },
  {
    id: "project-7",
    title: "GiftChain Landing Page",
    description: "A astonishing landing page for a blockchain management system product",
    imageUrl: "https://i.imgur.com/w9WOXQK.jpg",
    demoUrl: "https://giftchain-blockchain.netlify.app",
    githubUrl: "https://github.com/jericho1050/giftchain",
    technologies: ["HTML", "CSS", "Netlify"],
    tags: ["Frontend", "Landing Page"],
    date: new Date(2024, 11, 12)
  },
  {
    id: "project-8",
    title: "Telephone Number Validator",
    description: "A tool that validates telephone numbers according to specified formats and patterns.",
    imageUrl: "https://i.imgur.com/WSBjap0.jpg",
    demoUrl: "https://jericho1050.github.io/telephone-number-validator/",
    githubUrl: "https://github.com/jericho1050/telephone-number-validator",
    technologies: ["JavaScript", "HTML", "CSS", "Regular Expressions"],
    tags: ["Tool", "Frontend"],
    date: new Date(2024, 9, 5)
  },
  {
    id: "project-9",
    title: "Pokemon Search",
    description: "An application to search and view details about Pokemon using the Pokemon API.",
    imageUrl: "https://i.imgur.com/4kUiDBx.jpg",
    demoUrl: "https://pokemon-search-smoky.vercel.app/",
    githubUrl: "https://github.com/jericho1050/pokemon-search",
    technologies: ["React", "PokeAPI", "Vercel", "CSS"],
    tags: ["Web App", "API Integration"],
    date: new Date(2024, 9, 6)
  },
  {
    id: "project-10",
    title: "BookShelf Dapp",
    description: "A decentralized application for managing and sharing book collections using blockchain technology.",
    imageUrl: "https://i.imgur.com/aBndr18.jpg",
    demoUrl: "https://github.com/jericho1050/bookshelf-dapp",
    githubUrl: "https://github.com/jericho1050/bookshelf-dapp",
    technologies: ["Ethereum", "Solidity", "Web3.js", "React"],
    tags: ["Blockchain", "Dapp", "Full Stack"],
    date: new Date(2024, 7, 30)
  },
  {
    id: "project-11",
    title: "Cash Register App",
    description: "A cash register application that calculates change and manages cash drawer contents.",
    imageUrl: "https://i.imgur.com/9OVvGmz.jpg",
    demoUrl: "https://mycash-register-webapp.netlify.app",
    githubUrl: "https://github.com/jericho1050/cash-register",
    technologies: ["JavaScript", "HTML", "CSS", "Netlify"],
    tags: ["Web App", "Finance", "Tool"],
    date: new Date(2023, 3, 4)
  },
  {
    id: "project-12",
    title: "Cabin Landing Page",
    description: "A scenic landing page for cabin rentals with beautiful imagery and booking features.",
    imageUrl: "https://i.imgur.com/aAzvmnd.jpg",
    demoUrl: "https://jericho1050.github.io/final-project-ui-design/",
    githubUrl: "https://github.com/jericho1050/final-project-ui-design",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Frontend", "Landing Page", "UI Design"],
    date: new Date(2024, 7, 24)
  },
  {
    id: "project-13",
    title: "Roman Numeral Converter",
    description: "A utility that converts between Arabic numerals and Roman numerals with a clean user interface.",
    imageUrl: "https://i.imgur.com/u2NBqT8.jpg",
    demoUrl: "https://jericho1050.github.io/roman-numeral-converter/",
    githubUrl: "https://github.com/jericho1050/roman-numeral-converter",
    technologies: ["JavaScript", "HTML", "CSS"],
    tags: ["Tool", "Frontend"],
    date: new Date(2023, 5, 2)
  },

  {
    id: "project-14",
    title: "TeaPlace Landing page",
    description: "An elegant landing page for a tea shop with product showcases and ordering information.",
    imageUrl: "https://i.imgur.com/DEwVuSL.jpg",
    demoUrl: "https://jericho1050.github.io/teaplace/",
    githubUrl: "https://github.com/jericho1050/teaplace",
    technologies: ["HTML", "CSS"],
    tags: ["Frontend", "Landing Page", "E-commerce"],
    date: new Date(2024, 7, 17)
  },
  {
    id: "project-15",
    title: "Backend Workout Logger",
    description: "A backend service for logging and tracking workout sessions",
    imageUrl: "https://i.imgur.com/tgC6MKN.jpg",
    demoUrl: "https://github.com/jericho1050/repitup",
    githubUrl: "https://github.com/jericho1050/repitup",
    technologies: ["Python", "FastAPI", "Postgres", "REST API"],
    tags: ["Backend", "Fitness", "API"],
    date: new Date(2024, 8, 8)
  },
  {
    id: "project-16",
    title: "web_scraper",
    description: "A Python-based web scraper that collects profile information from LinkedIn and GitHub using the Apify platform.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/web_scraper",
    githubUrl: "https://github.com/jericho1050/web_scraper",
    technologies: ["Python"],
    tags: ["GitHub", "Scraping", "Tool"],
    date: new Date(2024, 2, 18)
  },
  {
    id: "project-17",
    title: "tictactoe-ai",
    description: "my implementation of minmax algorithm for project tictactoe of cs50ai week 0",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/tictactoe-ai",
    githubUrl: "https://github.com/jericho1050/tictactoe-ai",
    technologies: ["Python"],
    tags: ["GitHub", "AI", "Game"],
    date: new Date(2024, 6, 7)
  },
  {
    id: "project-18",
    title: "tee-landing-page",
    description: "just a mock up bussiness website design",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/tee-landing-page",
    githubUrl: "https://github.com/jericho1050/tee-landing-page",
    technologies: ["HTML"],
    tags: ["GitHub", "Frontend", "Landing Page"],
    date: new Date(2024, 4, 12)
  },
  {
    id: "project-19",
    title: "rustlings-mysoln",
    description: "Just pushing my solution to this repository, nothing special",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/rustlings-mysoln",
    githubUrl: "https://github.com/jericho1050/rustlings-mysoln",
    technologies: ["Makefile", "Rust"],
    tags: ["GitHub", "Rust", "Learning"],
    date: new Date(2024, 9, 4)
  },
  {
    id: "project-21",
    title: "RustyTasks",
    description: "A command line to-do app written in Rust",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/RustyTasks",
    githubUrl: "https://github.com/jericho1050/RustyTasks",
    technologies: ["Rust"],
    tags: ["GitHub", "CLI", "Tool", "Rust"],
    date: new Date(2024, 0, 29)
  },
  {
    id: "project-22",
    title: "dashboard",
    description: "A simple analytics dashboard",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/dashboard",
    githubUrl: "https://github.com/jericho1050/dashboard",
    technologies: ["CSS"],
    tags: ["GitHub", "Frontend", "Dashboard"],
    date: new Date(2024, 3, 15)
  },
  {
    id: "project-23",
    title: "product-crud",
    description: "Just a tasked project with Flask",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/product-crud",
    githubUrl: "https://github.com/jericho1050/product-crud",
    technologies: ["Python", "Flask"],
    tags: ["GitHub", "Backend", "Web App", "CRUD"],
    date: new Date(2024, 6, 21)
  },
  {
    id: "project-25",
    title: "jericho1050-codecrafters-dns-server-python",
    description: "CodeCrafters challenge: Build your own DNS Server in Python.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/jericho1050-codecrafters-dns-server-python",
    githubUrl: "https://github.com/jericho1050/jericho1050-codecrafters-dns-server-python",
    technologies: ["Python"],
    tags: ["GitHub", "Networking", "Python", "CodeCrafters"],
    date: new Date(2024, 8, 5)
  },
  {
    id: "project-26",
    title: "file-server",
    description: "A simple HTTP file-server",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/file-server",
    githubUrl: "https://github.com/jericho1050/file-server",
    technologies: ["Rust"],
    tags: ["GitHub", "Networking", "Rust", "CLI"],
    date: new Date(2024, 2, 2)
  },
  {
    id: "project-27",
    title: "portfolio",
    description: "Personal Portfolio",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/portfolio",
    githubUrl: "https://github.com/jericho1050/portfolio",
    technologies: ["HTML"],
    tags: ["GitHub", "Portfolio", "Frontend"],
    date: new Date(2024, 11, 20)
  },
  {
    id: "project-28",
    title: "Aneco-appdev",
    description: "For Educational Purpose Only",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/Aneco-appdev",
    githubUrl: "https://github.com/jericho1050/Aneco-appdev",
    technologies: ["TypeScript"],
    tags: ["GitHub", "Education", "TypeScript"],
    date: new Date(2024, 1, 11)
  },
  {
    id: "project-29",
    title: "portfolio_v2",
    description: "Second Version of my portfolio",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/portfolio_v2",
    githubUrl: "https://github.com/jericho1050/portfolio_v2",
    technologies: [],
    tags: ["GitHub", "Portfolio", "Frontend"],
    date: new Date(2024, 7, 31)
  },
  {
    id: "project-30",
    title: "dapp_forum",
    description: "Using Arbitrum Solution to build this awesome web app",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/dapp_forum",
    githubUrl: "https://github.com/jericho1050/dapp_forum",
    technologies: ["Solidity", "Arbitrum"],
    tags: ["GitHub", "Blockchain", "Dapp", "Forum", "Solidity"],
    date: new Date(2024, 10, 14)
  },
  {
    id: "project-31",
    title: "survey-form",
    description: "A simple survey form page.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/survey-form",
    githubUrl: "https://github.com/jericho1050/survey-form",
    technologies: ["HTML"],
    tags: ["GitHub", "Frontend", "HTML"],
    date: new Date(2024, 0, 25)
  },
  {
    id: "project-32",
    title: "technical-docs",
    description: "A Technical documentation for ThreeJs",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/technical-docs",
    githubUrl: "https://github.com/jericho1050/technical-docs",
    technologies: ["HTML", "ThreeJs"],
    tags: ["GitHub", "Frontend", "Documentation"],
    date: new Date(2024, 3, 10)
  },
  {
    id: "project-33",
    title: "cash-register",
    description: "A cash register project that returns the change due to the customer",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/cash-register",
    githubUrl: "https://github.com/jericho1050/cash-register",
    technologies: ["JavaScript", "HTML", "CSS"],
    tags: ["GitHub", "Web App", "Finance", "Tool"],
    date: new Date(2024, 8, 1)
  },
  {
    id: "project-34",
    title: "simple-card",
    description: "Practice Figma to Code (finished in 1 day)",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/simple-card",
    githubUrl: "https://github.com/jericho1050/simple-card",
    technologies: ["HTML"],
    tags: ["GitHub", "Frontend", "UI", "Figma"],
    date: new Date(2024, 5, 2)
  },
  {
    id: "project-35",
    title: "backend4sat",
    description: "Rest API Implementation for CRUD of question & answer ",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/backend4sat",
    githubUrl: "https://github.com/jericho1050/backend4sat",
    technologies: ["Python", "REST API"],
    tags: ["GitHub", "Backend", "API", "CRUD"],
    date: new Date(2024, 2, 29)
  },
  {
    id: "project-38",
    title: "car-sales-site",
    description: "A Responsive Cars site layout ( Figma -> code )",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/car-sales-site",
    githubUrl: "https://github.com/jericho1050/car-sales-site",
    technologies: ["CSS", "HTML"],
    tags: ["GitHub", "Frontend", "UI", "Figma"],
    date: new Date(2024, 10, 2)
  },
  {
    id: "project-39",
    title: "jericho1050-codecrafters-shell-rust",
    description: "Build your own shell challenge",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/jericho1050-codecrafters-shell-rust",
    githubUrl: "https://github.com/jericho1050/jericho1050-codecrafters-shell-rust",
    technologies: ["Rust"],
    tags: ["GitHub", "Rust", "CLI", "CodeCrafters"],
    date: new Date(2024, 6, 6)
  },
  {
    id: "project-40",
    title: "simple-landing-page",
    description: "A simple landing page (Figma to code practice)",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/simple-landing-page",
    githubUrl: "https://github.com/jericho1050/simple-landing-page",
    technologies: ["CSS", "HTML"],
    tags: ["GitHub", "Frontend", "Landing Page", "UI", "Figma"],
    date: new Date(2024, 2, 12)
  },
  {
    id: "project-42",
    title: "Llama3-Chatbot-QA",
    description: "A ChatbotQA using Llama3 integrated with sentimental analysis",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/Llama3-Chatbot-QA",
    githubUrl: "https://github.com/jericho1050/Llama3-Chatbot-QA",
    technologies: ["Python", "Llama3"],
    tags: ["GitHub", "AI", "Chatbot", "NLP", "QA"],
    date: new Date(2024, 11, 23)
  },
  {
    id: "project-43",
    title: "jericho1050-codecrafters-http-server-python",
    description: "CodeCrafters challenge: Build your own HTTP Server in Python.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/jericho1050-codecrafters-http-server-python",
    githubUrl: "https://github.com/jericho1050/jericho1050-codecrafters-http-server-python",
    technologies: ["Python"],
    tags: ["GitHub", "Networking", "Python", "CodeCrafters", "HTTP"],
    date: new Date(2024, 5, 4)
  },
  {
    id: "project-44",
    title: "echommerce",
    description: "My echommerce that i've built asap",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg",
    demoUrl: "https://github.com/jericho1050/echommerce",
    githubUrl: "https://github.com/jericho1050/echommerce",
    technologies: ["JavaScript"],
    tags: ["GitHub", "E-commerce", "Web App"],
    date: new Date(2024, 9, 9)
  }
];

