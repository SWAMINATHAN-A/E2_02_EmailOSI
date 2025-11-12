import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Layer1 = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Layer 1
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <span className="text-5xl">⚡</span>
            Physical Layer
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Bits are transmitted as Wi-Fi radio signals locally and as optical/electrical signals through ISP fiber lines.
          </p>
        </div>

        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-3">Physical Transmission Path</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-center space-y-2 flex-1">
                <div className="text-5xl">💻</div>
                <p className="text-sm font-medium">Your Laptop</p>
              </div>
              <div className="flex-1 text-center">
                <div className="text-3xl mb-1">📶</div>
                <p className="text-xs text-muted-foreground">Radio Waves</p>
                <p className="text-xs text-primary">(2.4/5 GHz)</p>
              </div>
              <div className="text-center space-y-2 flex-1">
                <div className="text-5xl">🛜</div>
                <p className="text-sm font-medium">Wi-Fi Router</p>
              </div>
            </div>

            <div className="text-center text-2xl text-primary">↓</div>

            <div className="flex items-center gap-4">
              <div className="text-center space-y-2 flex-1">
                <div className="text-5xl">🌐</div>
                <p className="text-sm font-medium">ISP Network</p>
              </div>
              <div className="flex-1 text-center">
                <div className="text-3xl mb-1">💡</div>
                <p className="text-xs text-muted-foreground">Fiber Optic</p>
                <p className="text-xs text-primary">(Light Pulses)</p>
              </div>
              <div className="text-center space-y-2 flex-1">
                <div className="text-5xl">🏢</div>
                <p className="text-sm font-medium">Data Center</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">Key Functions</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Converts digital bits (0s and 1s) to physical signals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Wi-Fi radio waves in your local area</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Fiber optic light pulses for long-distance transmission</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Electrical signals through copper cables</span>
            </li>
          </ul>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h4 className="font-semibold mb-2 text-sm">Wi-Fi Specs</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>Frequency: 2.4 GHz / 5 GHz</div>
              <div>Speed: Up to 1 Gbps</div>
              <div>Range: ~30-50 meters indoors</div>
            </div>
          </Card>
          <Card className="p-4">
            <h4 className="font-semibold mb-2 text-sm">Fiber Optic Specs</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>Medium: Glass fiber</div>
              <div>Speed: Up to 100 Gbps+</div>
              <div>Distance: Thousands of kilometers</div>
            </div>
          </Card>
        </div>

        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 text-center space-y-4">
          <div className="text-5xl mb-3">✨</div>
          <h2 className="text-2xl font-bold">Ready to See It All in Action?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Now that you understand each OSI layer, experience the complete journey with an interactive simulation!
          </p>
          <Link to="/simulation">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Try Full Simulation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Layer1;
