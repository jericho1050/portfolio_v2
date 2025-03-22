
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, HomeIcon, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return currentCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 20 }
    }
  };
  
  // Calculate countdown circle progress
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference * (1 - count / 10);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 p-4">
      <motion.div 
        className="glass-card p-12 rounded-xl max-w-lg w-full text-center relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Abstract background shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <motion.div 
          className="relative mb-8"
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
          <motion.h1 
            className="text-8xl font-display font-bold relative text-primary"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 12, delay: 0.2 }}
          >
            404
          </motion.h1>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-2xl text-foreground mb-4 font-display font-bold">
            Page Not Found
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center transition-transform hover:-translate-y-1"
            >
              <HomeIcon size={18} className="mr-2" />
              Return to Home
            </Link>
            
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16">
                {/* SVG Circle countdown */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-muted/10"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="text-primary"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1, ease: "linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">{count}</span>
                </div>
              </div>
              <p className="ml-3 text-sm text-muted-foreground">
                Redirecting in<br /><span className="font-medium">{count} seconds</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
