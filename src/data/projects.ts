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
    description: "A comprehensive Hospital Management System streamlining healthcare administration. Developed solo for a StackUp hackathon, it handles patient management, scheduling, inventory, billing, and analytics. Features an AI assistant (Llama 3) for diagnosis support. Built with Next.js and Supabase, showcasing rapid development and integration skills.",
    imageUrl: "https://i.imgur.com/Lv8nr4g.jpg",
    demoUrl: "https://caresanar.online/",
    githubUrl: "https://github.com/jericho1050/caresanar",
    technologies: ["TypeScript", "Next.js", "Supabase", "Llama 3", "AI", "PostgreSQL"],
    tags: ["HealthTech", "Web App", "Health", "Management System", "Full Stack", "Hackathon"],
    date: new Date(2025, 2, 28), // Note: Month is 0-indexed, so 2 is March
    achievement: "1st Place - StackUp Hackathon"
  },
  {
    id: "project-2",
    title: "Math Quizzty",
    description: "An AI-powered platform generating mathematics questions. Developed solo for a StackUp hackathon, it employs a multi-stage AI workflow (Django orchestration, DigitalOcean Functions for agents, Llama 3 models) and Neon PostgreSQL storage. Creates adaptive, high-quality math problems with immediate feedback.",
    imageUrl: "https://i.imgur.com/4bmkHmX.jpg",
    demoUrl: "https://mathquizzty.xyz/",
    githubUrl: "https://github.com/jericho1050/math_quizzty",
    technologies: ["Python", "Django", "Llama 3", "DigitalOcean", "Serverless", "PostgreSQL", "NeonDB", "AI"],
    tags: ["EdTech", "AI", "Education", "Full Stack", "Hackathon"],
    date: new Date(2025, 3, 28), // April
    achievement: "1st Place - StackUp Hackathon"
  },
  {
    id: "project-3",
    title: "GoalFlow",
    description: "A web application designed for managing goals and workflows to enhance productivity. Integrates Gemini AI to provide suggestions and simplify complex tasks, aiding users in achieving their objectives more efficiently.",
    imageUrl: "https://i.imgur.com/rfQON8u.jpg",
    demoUrl: "https://goalflow-habits.netlify.app",
    githubUrl: "https://github.com/chingu-voyages/V54-tier3-team-31",
    technologies: ["Next.js", "TypeScript", "Gemini", "Netlify", "Serverless", "PostgreSQL", "NeonDB", "AI"],
    tags: ["Productivity", "AI", "Full Stack"],
    date: new Date(2025, 3, 15), // May
  },
  {
    id: "project-4",
    title: "EnviroSight",
    description: "A predictive environmental hazard mapper utilizing multi-source geolocation and chemical data. Built to analyze and visualize environmental risks, enabling proactive decision-making. Developed with TypeScript, emphasizing data integration and mapping capabilities.",
    imageUrl: "https://i.imgur.com/DmNK3f3.jpg", // Replace with actual image
    demoUrl: "https://envirosight.vercel.app/", // Replace with actual demo URL
    githubUrl: "https://github.com/jericho1050/envirosight",
    technologies: ["TypeScript", "Data Integration", "Geolocation", "Chemical Analysis"],
    tags: ["Environment", "Hazard Prediction", "Geospatial", "Full Stack"],
    date: new Date(2025, 3, 28), // May,
    achievement: "3rd Place - StackUp Hackathon"

  },
  {
    id: "project-5",
    title: "Calorie Contra",
    description: "A web application for tracking daily caloric and macronutrient intake. Allows users to search for food items and log consumption. Features an integrated nutritionist chatbot (powered by Gemini) for guidance.",
    imageUrl: "https://i.imgur.com/hKo5daE.jpg",
    demoUrl: "https://calorie-contra-testing-baf1376cc140.herokuapp.com/home",
    githubUrl: "https://github.com/jericho1050/calorie-counter",
    technologies: ["Python", "Javascript", "Quart", "Heroku", "Bootstrap", "Gemini"],
    tags: ["Web App", "Health", "Full Stack"],
    date: new Date(2024, 9, 25) // October
  },
  {
    id: "project-6",
    title: "Hum Social Network",
    description: "A user-friendly social networking platform enabling real-time messaging and content sharing. Built with Django and PostgreSQL, deployed on Neon.",
    imageUrl: "https://i.imgur.com/11cb8WG.jpg",
    demoUrl: "https://hum.social",
    githubUrl: "https://github.com/jericho1050/hum-social",
    technologies: ["Django", "Postgres", "Neon", "Javascript", "Bootstrap"],
    tags: ["Web App", "Social Media", "Full Stack"],
    date: new Date(2025, 4, 1) // May
  },
  {
    id: "project-7",
    title: "Moment Collage",
    description: "Helps users relive their best memories through automatically organized galleries + AI-generated story summaries from photos/videos.",
    imageUrl: "https://i.imgur.com/n2Sq8fl.jpg",
    demoUrl: "https://memo-muse.vercel.app",
    githubUrl: "https://github.com/jericho1050/memo-muse",
    technologies: ["React", "Vite", "JavaScript", "CSS", "React Router", "Supabase"],
    tags: ["Frontend", "Full Stack", "Web App"],
    date: new Date(2025, 5, 23) // May
  },
  {
    id: "project-8",
    title: "Aestheitos Learning Platform",
    description: "An educational platform and management system focused on calisthenics and fitness training. Provides resources and tools for users to learn and track their progress. Built with React and Django Rest Framework.",
    imageUrl: "https://i.imgur.com/oQ8dGva.jpg",
    demoUrl: "https://aestheitos.pro",
    githubUrl: "https://github.com/jericho1050/aestheitos",
    technologies: ["Vite", "Material UI", "React", "React Router", "Cypress", "Django Rest Framework", "Digital Ocean"],
    tags: ["Web App", "Education", "Fitness"],
    date: new Date(2024, 2, 13) // March
  },
  {
    id: "project-9",
    title: "Drone Landing Page",
    description: "An engaging landing page for a drone EdTech initiative. Features smooth animations and interactive elements to capture user interest. Deployed using Azure Static Web Apps.",
    imageUrl: "https://i.imgur.com/dQn0bx3.jpg",
    demoUrl: "https://blue-island-0e5228800.5.azurestaticapps.net",
    githubUrl: "https://github.com/jericho1050/drone-landing",
    technologies: ["HTML", "CSS", "JavaScript", "Azure Static Web Apps"],
    tags: ["Frontend", "Landing Page"],
    date: new Date(2024, 11, 7) // December
  },
  {
    id: "project-10",
    title: "GiftChain Landing Page",
    description: "A professional landing page designed for a blockchain-based gift management system product. Focuses on clear presentation and user engagement. Deployed on Netlify.",
    imageUrl: "https://i.imgur.com/w9WOXQK.jpg",
    demoUrl: "https://giftchain-blockchain.netlify.app",
    githubUrl: "https://github.com/jericho1050/giftchain",
    technologies: ["HTML", "CSS", "Netlify"],
    tags: ["Frontend", "Landing Page"],
    date: new Date(2024, 11, 12) // December
  },
  {
    id: "project-11",
    title: "Telephone Number Validator",
    description: "A client-side utility tool that validates US telephone numbers against common formats using regular expressions. Built with vanilla JavaScript, HTML, and CSS.",
    imageUrl: "https://i.imgur.com/WSBjap0.jpg",
    demoUrl: "https://jericho1050.github.io/telephone-number-validator/",
    githubUrl: "https://github.com/jericho1050/telephone-number-validator",
    technologies: ["JavaScript", "HTML", "CSS", "Regular Expressions"],
    tags: ["Tool", "Frontend"],
    date: new Date(2024, 9, 5) // October
  },
  {
    id: "project-12",
    title: "Pokemon Search",
    description: "A web application allowing users to search for Pokémon and view their details by interacting with the public PokeAPI. Built with React and deployed on Vercel.",
    imageUrl: "https://i.imgur.com/4kUiDBx.jpg",
    demoUrl: "https://pokemon-search-smoky.vercel.app/",
    githubUrl: "https://github.com/jericho1050/pokemon-search",
    technologies: ["React", "PokeAPI", "Vercel", "CSS"],
    tags: ["Web App", "API Integration"],
    date: new Date(2024, 9, 6) // October
  },
  {
    id: "project-13",
    title: "BookShelf Dapp",
    description: "A decentralized application (Dapp) for managing and sharing personal book collections. Leverages Ethereum blockchain technology via Solidity and Web3.js with a React frontend.",
    imageUrl: "https://i.imgur.com/aBndr18.jpg",
    demoUrl: "https://github.com/jericho1050/bookshelf-dapp", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/bookshelf-dapp",
    technologies: ["Ethereum", "Solidity", "Web3.js", "React"],
    tags: ["Blockchain", "Dapp", "Full Stack"],
    date: new Date(2024, 7, 30) // August
  },
  {
    id: "project-14",
    title: "Cash Register App",
    description: "A simple web-based cash register application that calculates the optimal change (fewest coins/bills) to return to a customer after a purchase.",
    imageUrl: "https://i.imgur.com/9OVvGmz.jpg",
    demoUrl: "https://mycash-register-webapp.netlify.app",
    githubUrl: "https://github.com/jericho1050/cash-register",
    technologies: ["JavaScript", "HTML", "CSS", "Netlify"],
    tags: ["Web App", "Finance", "Tool"],
    date: new Date(2023, 3, 4) // April
  },
  {
    id: "project-15",
    title: "Cabin Landing Page",
    description: "A visually appealing landing page concept for a cabin rental service. Showcases UI design skills with a focus on imagery and potential booking features.",
    imageUrl: "https://i.imgur.com/aAzvmnd.jpg",
    demoUrl: "https://jericho1050.github.io/final-project-ui-design/",
    githubUrl: "https://github.com/jericho1050/final-project-ui-design",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Frontend", "Landing Page", "UI Design"],
    date: new Date(2024, 7, 24) // August
  },
  {
    id: "project-16",
    title: "Roman Numeral Converter",
    description: "A frontend utility that converts standard Arabic numerals to their Roman numeral representation and vice-versa. Features a clean, straightforward user interface.",
    imageUrl: "https://i.imgur.com/u2NBqT8.jpg",
    demoUrl: "https://jericho1050.github.io/roman-numeral-converter/",
    githubUrl: "https://github.com/jericho1050/roman-numeral-converter",
    technologies: ["JavaScript", "HTML", "CSS"],
    tags: ["Tool", "Frontend"],
    date: new Date(2023, 5, 2) // June
  },
  {
    id: "project-17",
    title: "TeaPlace Landing page",
    description: "An elegant landing page design for a conceptual tea shop. Focuses on product presentation and provides a template for potential e-commerce information.",
    imageUrl: "https://i.imgur.com/DEwVuSL.jpg",
    demoUrl: "https://jericho1050.github.io/teaplace/",
    githubUrl: "https://github.com/jericho1050/teaplace",
    technologies: ["HTML", "CSS"],
    tags: ["Frontend", "Landing Page", "E-commerce"],
    date: new Date(2024, 7, 17) // August
  },
  {
    id: "project-18",
    title: "Backend Workout Logger",
    description: "A RESTful API service built with Python and FastAPI for logging and tracking user workout sessions. Designed to be consumed by a frontend application.",
    imageUrl: "https://i.imgur.com/tgC6MKN.jpg",
    demoUrl: "https://github.com/jericho1050/repitup", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/repitup",
    technologies: ["Python", "FastAPI", "Postgres", "REST API"],
    tags: ["Backend", "Fitness", "API"],
    date: new Date(2024, 8, 8) // September
  },
  {
    id: "project-19",
    title: "web_scraper",
    description: "A Python script utilizing the Apify platform to scrape profile information from professional networking sites like LinkedIn and GitHub.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/web_scraper", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/web_scraper",
    technologies: ["Python", "Apify"],
    tags: ["Scraping", "Tool", "Automation"],
    date: new Date(2024, 2, 18) // March
  },
  {
    id: "project-20",
    title: "tictactoe-ai",
    description: "An implementation of the minimax algorithm for an unbeatable Tic-Tac-Toe AI player, developed as part of the CS50 AI course (Week 0 project).",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/tictactoe-ai", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/tictactoe-ai",
    technologies: ["Python", "AI"],
    tags: ["AI", "Game", "Algorithm"],
    date: new Date(2024, 6, 7) // July
  },
  {
    id: "project-21",
    title: "tee-landing-page",
    description: "A static landing page mockup for a business website, focusing purely on HTML structure and layout design.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/tee-landing-page", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/tee-landing-page",
    technologies: ["HTML"],
    tags: ["Frontend", "Landing Page", "UI Design"],
    date: new Date(2024, 4, 12) // May
  },
  {
    id: "project-22",
    title: "rustlings-mysoln",
    description: "Personal solutions to the exercises from the official Rustlings repository, aimed at learning the Rust programming language.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/rustlings-mysoln", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/rustlings-mysoln",
    technologies: ["Makefile", "Rust"],
    tags: ["Rust", "Learning", "Exercises"],
    date: new Date(2024, 9, 4) // October
  },
  {
    id: "project-23",
    title: "RustyTasks",
    description: "A command-line interface (CLI) application for managing to-do lists, written entirely in the Rust programming language.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/RustyTasks", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/RustyTasks",
    technologies: ["Rust"],
    tags: ["CLI", "Tool", "Rust", "Productivity"],
    date: new Date(2024, 0, 29) // January
  },
  {
    id: "project-24",
    title: "dashboard",
    description: "A basic frontend layout concept for an analytics dashboard, implemented purely with CSS for styling and structure.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/dashboard", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/dashboard",
    technologies: ["CSS", "HTML"],
    tags: ["Frontend", "Dashboard", "UI Design"],
    date: new Date(2024, 3, 15) // April
  },
  {
    id: "project-25",
    title: "product-crud",
    description: "A simple web application demonstrating Create, Read, Update, and Delete (CRUD) operations for products, built using the Flask web framework in Python.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/product-crud", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/product-crud",
    technologies: ["Python", "Flask"],
    tags: ["Backend", "Web App", "CRUD"],
    date: new Date(2024, 6, 21) // July
  },
  {
    id: "project-26",
    title: "CodeCrafters DNS Server",
    description: "Implementation of a DNS server in Python as part of the 'Build Your Own DNS Server' challenge on CodeCrafters.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/jericho1050-codecrafters-dns-server-python", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/jericho1050-codecrafters-dns-server-python",
    technologies: ["Python"],
    tags: ["Networking", "Python", "CodeCrafters", "DNS"],
    date: new Date(2024, 8, 5) // September
  },
  {
    id: "project-27",
    title: "file-server",
    description: "A basic command-line HTTP file server developed in Rust, allowing users to serve files from a local directory over the network.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/file-server", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/file-server",
    technologies: ["Rust"],
    tags: ["Networking", "Rust", "CLI", "Tool"],
    date: new Date(2024, 2, 2) // March
  },
  {
    id: "project-28",
    title: "portfolio",
    description: "An early version of a personal portfolio website, built using basic HTML to structure content and showcase projects.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/portfolio", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/portfolio",
    technologies: ["HTML"],
    tags: ["Portfolio", "Frontend"],
    date: new Date(2024, 11, 20) // December
  },
  {
    id: "project-29",
    title: "Aneco-appdev",
    description: "An application developed strictly for educational purposes, exploring concepts using TypeScript.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/Aneco-appdev", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/Aneco-appdev",
    technologies: ["TypeScript"],
    tags: ["Education", "TypeScript"],
    date: new Date(2024, 1, 11) // February
  },
  {
    id: "project-30",
    title: "portfolio_v2",
    description: "The second iteration of a personal portfolio website, aiming to improve upon the initial version with updated design or content.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/portfolio_v2", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/portfolio_v2",
    technologies: [], // Assuming technologies were added later or not specified
    tags: ["Portfolio", "Frontend"],
    date: new Date(2024, 7, 31) // August
  },
  {
    id: "project-31",
    title: "dapp_forum",
    description: "A decentralized forum application built using Solidity smart contracts and leveraging the Arbitrum Layer 2 scaling solution for Ethereum.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/dapp_forum", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/dapp_forum",
    technologies: ["Solidity", "Arbitrum", "Ethereum"],
    tags: ["Blockchain", "Dapp", "Forum", "Solidity", "Web3"],
    date: new Date(2024, 10, 14) // November
  },
  {
    id: "project-32",
    title: "survey-form",
    description: "A simple static web page containing a survey form, created using HTML for structure and basic form elements.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/survey-form", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/survey-form",
    technologies: ["HTML", "CSS"],
    tags: ["Frontend", "HTML", "Form"],
    date: new Date(2024, 0, 25) // January
  },
  {
    id: "project-33",
    title: "technical-docs",
    description: "A static web page designed as a template for technical documentation, featuring examples related to the Three.js library.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/technical-docs", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/technical-docs",
    technologies: ["HTML", "CSS", "JavaScript"], // Assuming JS for ThreeJs examples
    tags: ["Frontend", "Documentation", "ThreeJs"],
    date: new Date(2024, 3, 10) // April
  },
  {
    id: "project-34",
    title: "cash-register",
    description: "A web-based cash register application focused on calculating the correct change to return to a customer using various denominations.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image - Same as project-12?
    demoUrl: "https://github.com/jericho1050/cash-register", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/cash-register",
    technologies: ["JavaScript", "HTML", "CSS"],
    tags: ["Web App", "Finance", "Tool"],
    date: new Date(2024, 8, 1) // September
  },
  {
    id: "project-35",
    title: "simple-card",
    description: "A frontend component implementation translating a specific card design from Figma into functional HTML and CSS code.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/simple-card", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/simple-card",
    technologies: ["HTML", "CSS"],
    tags: ["Frontend", "UI", "Figma", "Component"],
    date: new Date(2024, 5, 2) // June
  },
  {
    id: "project-36",
    title: "backend4sat",
    description: "A REST API backend service providing CRUD (Create, Read, Update, Delete) functionality for managing questions and answers, likely for an educational or quiz application.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/backend4sat", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/backend4sat",
    technologies: ["Python", "REST API", "Flask"], // Assuming Flask based on project-23
    tags: ["Backend", "API", "CRUD", "Education"],
    date: new Date(2024, 2, 29) // March
  },
  {
    id: "project-37",
    title: "car-sales-site",
    description: "A responsive frontend layout implementation for a car sales website, translated directly from a Figma design specification.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/car-sales-site", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/car-sales-site",
    technologies: ["CSS", "HTML"],
    tags: ["Frontend", "UI", "Figma", "Responsive"],
    date: new Date(2024, 10, 2) // November
  },
  {
    id: "project-38",
    title: "CodeCrafters Shell",
    description: "Implementation of a Unix shell in Rust, completed as part of the 'Build Your Own Shell' challenge on the CodeCrafters platform.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/jericho1050-codecrafters-shell-rust", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/jericho1050-codecrafters-shell-rust",
    technologies: ["Rust"],
    tags: ["Rust", "CLI", "CodeCrafters", "Shell"],
    date: new Date(2024, 6, 6) // July
  },
  {
    id: "project-39",
    title: "simple-landing-page",
    description: "A basic static landing page created as an exercise in converting a design concept from Figma into functional HTML and CSS code.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/simple-landing-page", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/simple-landing-page",
    technologies: ["CSS", "HTML"],
    tags: ["Frontend", "Landing Page", "UI", "Figma"],
    date: new Date(2024, 2, 12) // March
  },
  {
    id: "project-40",
    title: "Llama3-Chatbot-QA",
    description: "A question-answering chatbot application powered by the Llama 3 language model. Features integrated sentiment analysis to gauge user input tone.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/Llama3-Chatbot-QA", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/Llama3-Chatbot-QA",
    technologies: ["Python", "Llama 3", "AI"],
    tags: ["AI", "Chatbot", "NLP", "QA", "Python"],
    date: new Date(2024, 11, 23) // December
  },
  {
    id: "project-41",
    title: "CodeCrafters HTTP Server",
    description: "Implementation of an HTTP server in Python, developed as part of the 'Build Your Own HTTP Server' challenge on CodeCrafters.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/jericho1050-codecrafters-http-server-python", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/jericho1050-codecrafters-http-server-python",
    technologies: ["Python"],
    tags: ["Networking", "Python", "CodeCrafters", "HTTP"],
    date: new Date(2024, 5, 4) // June
  },
  {
    id: "project-42",
    title: "echommerce",
    description: "A rapidly developed prototype for an e-commerce web application, focusing on core features and built primarily with JavaScript.",
    imageUrl: "https://i.imgur.com/6H7rc1M.jpg", // Generic Image
    demoUrl: "https://github.com/jericho1050/echommerce", // Demo URL points to GitHub
    githubUrl: "https://github.com/jericho1050/echommerce",
    technologies: ["JavaScript", "HTML", "CSS"], // Assuming basic web tech
    tags: ["E-commerce", "Web App", "Prototype"],
    date: new Date(2024, 9, 9) // October
  }
];

