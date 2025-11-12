import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Layer5 = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Layer 5
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <span className="text-5xl">🤝</span>
            Session Layer
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            The TLS Handshake establishes a secure session. ClientHello and ServerHello exchange certificates and encryption keys.
          </p>
        </div>

        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-3">TLS Handshake Process</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
              <div>
                <p className="font-medium">Client Hello</p>
                <p className="text-sm text-muted-foreground">Browser proposes encryption methods</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
              <div>
                <p className="font-medium">Server Hello</p>
                <p className="text-sm text-muted-foreground">Gmail server sends certificate & chooses cipher</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
              <div>
                <p className="font-medium">Key Exchange</p>
                <p className="text-sm text-muted-foreground">Session keys are securely generated</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">🔒</div>
              <div>
                <p className="font-medium">Secure Session Established</p>
                <p className="text-sm text-muted-foreground">Email can now be transmitted safely</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">Key Functions</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Establish, manage, and terminate secure sessions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Certificate verification and authentication</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Session key negotiation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Synchronization between client and server</span>
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  );
};

export default Layer5;
