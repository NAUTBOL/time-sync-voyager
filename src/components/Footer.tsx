
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
