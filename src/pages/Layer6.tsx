import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const Layer6 = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Layer 6
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <span className="text-5xl">🔐</span>
            Presentation Layer
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            TLS Encryption makes the email unreadable in transit. When viewed in Wireshark, packets appear as 'TLSv1.3 Application Data'.
          </p>
        </div>

        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-3">Encryption Process</h3>
          <div className="flex items-center justify-center gap-6 py-6">
            <div className="text-center space-y-2">
              <div className="text-3xl">📝</div>
              <p className="text-sm font-medium">Plaintext</p>
              <p className="text-xs text-muted-foreground">Original Email</p>
            </div>
            <div className="text-2xl text-primary">→</div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🔒</div>
              <p className="text-sm font-medium">Encrypted</p>
              <p className="text-xs text-muted-foreground">TLS Applied</p>
            </div>
            <div className="text-2xl text-primary">→</div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🔢</div>
              <p className="text-sm font-medium">Ciphertext</p>
              <p className="text-xs text-muted-foreground">Unreadable Data</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">Key Functions</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>TLS/SSL encrypts email content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Data compression for efficient transmission</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Character encoding (UTF-8, ASCII)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Format translation between systems</span>
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  );
};

export default Layer6;
