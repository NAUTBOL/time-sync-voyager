
import { Button } from "@/components/ui/button";
import { Heart, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple to-blue">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold gradient-text">TimeZone Display</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="border-pink/30 text-pink hover:bg-pink/10 hover:border-pink/50 transition-colors"
            onClick={() => window.open('https://www.paypal.com/paypalme/NAUTBOL', '_blank')}
          >
            <Heart className="h-4 w-4 mr-2" />
            Donate
          </Button>
          
          <Button
            variant="default"
            size="sm"
            className="bg-gradient-to-r from-blue to-cyan hover:from-blue/90 hover:to-cyan/90 text-white transition-all duration-300 shadow-lg hover:shadow-blue/25"
            onClick={() => window.open('https://www.kuantyk.com/', '_blank')}
          >
            <Globe className="h-4 w-4 mr-2" />
            More Apps
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
