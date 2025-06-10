
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { API_URL } from "@/core/config";
import { useState, useEffect } from "react";

const Footer = () => {
  const [counter, setCounter] = useState(0);

  const fetchCounterData = async () => {
    const url = API_URL + "counters/total/utc";
    const response = await fetch(url);
    if (!response.ok) {
      setCounter(0);
    }
    const data = await response.json();
    setCounter(data.counter);
  };

  const formatViews = (num: number) => {
    return new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(num);
  };

  useEffect(() => {
    fetchCounterData();
  }, []);

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/NAUTBOL",
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/leandrotorressilva/",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/NAUTBOL/",
      icon: Github,
      color: "hover:text-gray-300"
    }
  ];

  return (
    <footer className="w-full border-t border-border bg-background/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">

          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="lg"
                  className={`p-4 ${social.color} transition-colors hover:bg-accent`}
                  onClick={() => window.open(social.url, '_blank')}
                  aria-label={`Visit ${social.name} profile`}
                >
                  <IconComponent className="h-6 w-6" />
                </Button>
              );
            })}
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Built with React, Vite & Tailwind CSS</p>
          </div>
          <p className="text-lg sm:text-xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Loved by +{formatViews(counter)}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
