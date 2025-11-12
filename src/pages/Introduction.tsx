import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <Layout>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-6 py-12">
          <h1 className="text-5xl font-bold text-foreground">
            Journey of an Email
          </h1>
          <p className="text-2xl text-muted-foreground">
            From Your Laptop to the Recipient
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding Email Transmission Using the OSI Reference Model
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 py-8">
          <div className="text-center space-y-2">
            <div className="text-6xl">💻</div>
            <p className="text-sm text-muted-foreground">Your Laptop</p>
          </div>
          <div className="text-4xl text-primary">→</div>
          <div className="text-center space-y-2">
            <div className="text-6xl">🌐</div>
            <p className="text-sm text-muted-foreground">Internet</p>
          </div>
          <div className="text-4xl text-primary">→</div>
          <div className="text-center space-y-2">
            <div className="text-6xl">📧</div>
            <p className="text-sm text-muted-foreground">Mail Server</p>
          </div>
          <div className="text-4xl text-primary">→</div>
          <div className="text-center space-y-2">
            <div className="text-6xl">👤</div>
            <p className="text-sm text-muted-foreground">Recipient</p>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Link to="/video-intro">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Start Learning
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Introduction;
