import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import gmailInterface from "@/assets/gmail-interface.png";

const Layer7 = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Layer 7
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <span className="text-5xl">🌍</span>
            Application Layer
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            The email is composed in Gmail Web UI. The application layer formats the email using MIME headers (To, From, Subject, Body).
          </p>
        </div>

        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-3">What Happens Here</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>You compose your email in Gmail's web interface</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>MIME headers are added (To, From, Subject, Body)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>DNS resolves mail.google.com to an IP address</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>HTTPS protocol is used to communicate with Gmail servers</span>
            </li>
          </ul>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Visual Example</h3>
          <Card className="p-4 border-2 border-primary/20">
            <img 
              src={gmailInterface} 
              alt="Gmail compose screenshot showing email interface" 
              className="w-full h-auto rounded-lg"
            />
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Layer7;
