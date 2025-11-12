import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Layer2 = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Layer 2
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <span className="text-5xl">📡</span>
            Data Link Layer
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            ARP resolves the router's MAC address. Frames are transmitted inside the local network over Wi-Fi/Ethernet.
          </p>
        </div>

        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-3">ARP Process</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-between gap-4">
              <div className="text-center space-y-1 flex-1">
                <div className="text-3xl">💻</div>
                <p className="text-xs text-muted-foreground">Your Computer</p>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-primary text-center">
                  "Who has 192.168.1.1?" →
                </div>
              </div>
              <div className="text-center space-y-1 flex-1">
                <div className="text-3xl">🛜</div>
                <p className="text-xs text-muted-foreground">Router</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-center space-y-1 flex-1">
                <div className="text-3xl">💻</div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-primary text-center">
                  ← "I do! My MAC is AA:BB:CC..."
                </div>
              </div>
              <div className="text-center space-y-1 flex-1">
                <div className="text-3xl">🛜</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">Key Functions</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>ARP (Address Resolution Protocol) maps IP to MAC addresses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Frames encapsulate packets with MAC addresses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Handles local network transmission (Wi-Fi/Ethernet)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Error detection using Frame Check Sequence (FCS)</span>
            </li>
          </ul>
        </Card>

        <Card className="p-8 text-center border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="space-y-4">
            <div className="text-5xl">✨</div>
            <h3 className="text-2xl font-bold text-foreground">Ready to See It All in Action?</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Experience the complete OSI journey! Compose an email and watch it travel through all 7 layers with real packet captures.
            </p>
            <Button 
              onClick={() => navigate('/simulation')}
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <Sparkles className="h-5 w-5" />
              Try It Yourself — Full Simulation
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Layer2;
