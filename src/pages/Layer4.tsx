import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Layer4 = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Layer 4
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <span className="text-5xl">🚚</span>
            Transport Layer
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            TCP 3-Way Handshake creates a reliable connection before email transmission. TCP segments large data and ensures retransmission if lost.
          </p>
        </div>

        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-3">TCP 3-Way Handshake</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-center space-y-1">
                <div className="text-3xl">💻</div>
                <p className="text-xs text-muted-foreground">Your Computer</p>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="text-sm font-medium text-primary">SYN →</div>
                <div className="text-sm font-medium text-primary">← SYN/ACK</div>
                <div className="text-sm font-medium text-primary">ACK →</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-3xl">🖥️</div>
                <p className="text-xs text-muted-foreground">Gmail Server</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Connection established! Data can now be transmitted reliably.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">Key Functions</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Breaks large emails into smaller segments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Sequence numbers ensure correct order</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Acknowledgments confirm receipt of data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Automatic retransmission of lost packets</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Port numbers identify applications (443 for HTTPS)</span>
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  );
};

export default Layer4;
