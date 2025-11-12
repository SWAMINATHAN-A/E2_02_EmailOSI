import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VideoIntro = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 py-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Watch First to Understand Better
          </h1>
          <p className="text-xl text-muted-foreground">
            This video explains the OSI Model and how email transmission works
          </p>
        </div>

        <Card className="p-4 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/1aUpJx-aHP8bhCGmEQTXbpifHxEkt6yV6/preview"
              className="w-full h-full"
              allow="autoplay"
              title="OSI Model Email Transmission Video"
            />
          </div>
        </Card>

        <div className="text-center pt-4">
          <Link to="/layer-7">
            <Button size="lg" variant="secondary" className="gap-2">
              Continue to Layer 7
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default VideoIntro;
