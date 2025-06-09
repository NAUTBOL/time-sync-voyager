
import Header from "@/components/Header";
import TimeDisplay from "@/components/TimeDisplay";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <TimeDisplay />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
