import React from "react";
import { 
  Code, 
  FileJson, 
  Terminal, 
  Database, 
  Server, 
  Cloud, 
  ChevronRight, 
  Triangle, 
  CircleUser, 
  Laptop, 
  Globe,
  Figma,
  Github,
  LayoutGrid,
  type LucideIcon,
  Box,
  Boxes,
  Palette,
  MonitorSmartphone,
  PenTool,
  TestTube,
  Router,
  Atom
} from "lucide-react";

// For missing icons, create a Grid component as a fallback
const Grid: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);

export type IconName = 
  | "react" 
  | "typescript" 
  | "javascript" 
  | "html" 
  | "css" 
  | "tailwind" 
  | "threejs" 
  | "nextjs" 
  | "vite" 
  | "materialui" 
  | "reactrouter" 
  | "bootstrap" 
  | "django" 
  | "drf" 
  | "flask" 
  | "fastapi" 
  | "quart" 
  | "nodejs" 
  | "express" 
  | "mongodb" 
  | "postgresql" 
  | "sqlite3" 
  | "graphql" 
  | "web3" 
  | "aws" 
  | "heroku" 
  | "neon" 
  | "digitalocean" 
  | "azurestatic" 
  | "azure" 
  | "netlify" 
  | "vercel" 
  | "git" 
  | "docker" 
  | "nvim" 
  | "gh" 
  | "photoshop" 
  | "figma" 
  | "testing" 
  | "ux";

interface IconsProps extends React.SVGAttributes<SVGElement> {
  name: IconName | string;
}

type IconComponentType = typeof Code | React.FC<React.SVGProps<SVGSVGElement>>;

const iconComponents: Record<string, IconComponentType> = {
  react: Atom,
  typescript: FileJson,
  javascript: Code,
  html: Code,
  css: Palette,
  tailwind: Palette,
  threejs: Box,
  nextjs: ChevronRight,
  vite: Triangle,
  materialui: LayoutGrid,
  reactrouter: Router,
  bootstrap: Grid,
  django: Server,
  drf: Database,
  flask: Database,
  fastapi: Database,
  quart: Database,
  nodejs: Server,
  express: Server,
  mongodb: Database,
  postgresql: Database,
  sqlite3: Database,
  graphql: Database,
  web3: Globe,
  aws: Cloud,
  heroku: Cloud,
  neon: Cloud,
  digitalocean: Cloud,
  azurestatic: Cloud,
  azure: Cloud,
  netlify: Cloud,
  vercel: Cloud,
  git: Github,
  docker: Boxes,
  nvim: Terminal,
  gh: Github,
  photoshop: PenTool,
  figma: Figma,
  testing: TestTube,
  ux: MonitorSmartphone
};

export function Icons({ name, ...props }: IconsProps) {
  // Find the icon component for the given name
  const IconComponent = iconComponents[name] || CircleUser;
  
  return <IconComponent {...props} />;
}