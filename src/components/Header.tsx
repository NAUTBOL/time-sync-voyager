
import { Button } from "@/components/ui/button";
import { Heart, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold">TimeZone</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-accent transition-colors"
            onClick={() => window.open('https://www.paypal.com/paypalme/NAUTBOL', '_blank')}
          >
            <Heart className="h-4 w-4" />
            Donate
          </Button>
          
          <Button
            variant="default"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            onClick={() => window.open('https://www.kuantyk.com/', '_blank')}
          >
            <Globe className="h-4 w-4" />
            More Apps
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
