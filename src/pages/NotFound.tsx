
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HomeIcon } from "lucide-react";

const NotFound: React.FC = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return currentCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 p-4">
      <div className="glass-card p-12 rounded-xl max-w-lg w-full animate-fade-in text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
          <h1 className="text-8xl font-display font-bold relative">404</h1>
        </div>
        
        <p className="text-2xl text-foreground mb-4">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center"
          >
            <HomeIcon size={18} className="mr-2" />
            Return to Home
          </Link>
          
          <p className="flex items-center justify-center text-sm text-muted-foreground">
            Redirecting in {count} seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
