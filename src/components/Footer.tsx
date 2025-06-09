
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/NAUTBOL",
      icon: Twitter
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/leandrotorressilva/",
      icon: Linkedin
    },
    {
      name: "GitHub",
      url: "https://github.com/NAUTBOL/",
      icon: Github
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="w-full border-t border-border/50 bg-background/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 gradient-text">Connect with NAUTBOL</h3>
          
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="outline"
                  size="lg"
                  className="p-4 border-muted-foreground/30 hover:border-foreground/50 transition-all hover:scale-110 cursor-pointer"
                  onClick={() => handleSocialClick(social.url)}
                  aria-label={`Visit ${social.name} profile`}
                >
                  <IconComponent className="h-6 w-6" />
                </Button>
              );
            })}
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; 2024 NAUTBOL. Built with <span className="text-red">❤️</span> using React, Vite & Tailwind CSS</p>
            <p className="mt-2">Made with passion for the developer community</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
