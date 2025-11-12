import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Layer3 = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Layer 3
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <span className="text-5xl">🗺️</span>
            Network Layer
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            The email is routed across networks using IP addresses. Routers forward packets through ISP networks to Google's data center.
          </p>
        </div>

        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-3">Routing Path</h3>
          <div className="flex items-center justify-center gap-6 py-6 flex-wrap">
            <div className="text-center space-y-2">
              <div className="text-3xl">🏠</div>
              <p className="text-xs text-muted-foreground">Your Home</p>
              <p className="text-xs font-mono">192.168.1.x</p>
            </div>
            <div className="text-2xl text-primary">→</div>
            <div className="text-center space-y-2">
              <div className="text-3xl">📡</div>
              <p className="text-xs text-muted-foreground">ISP Router</p>
            </div>
            <div className="text-2xl text-primary">→</div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🌐</div>
              <p className="text-xs text-muted-foreground">Internet Backbone</p>
            </div>
            <div className="text-2xl text-primary">→</div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🏢</div>
              <p className="text-xs text-muted-foreground">Google Datacenter</p>
              <p className="text-xs font-mono">172.217.x.x</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">Key Functions</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>IP addressing identifies source and destination</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Routers examine destination IP and forward packets</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>TTL (Time-to-Live) prevents infinite routing loops</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Routing tables determine best path across networks</span>
            </li>
          </ul>
        </Card>

        <div className="p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2 text-sm">Example IP Packet:</h4>
          <div className="space-y-1 text-sm text-muted-foreground font-mono">
            <div>Source IP: 192.168.1.100</div>
            <div>Destination IP: 172.217.14.109</div>
            <div>Protocol: TCP</div>
            <div>TTL: 64 → 63 → 62... (decrements at each router)</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Layer3;
