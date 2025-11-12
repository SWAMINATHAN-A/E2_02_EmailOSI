import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const ReversePath = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
            <ArrowLeft className="h-10 w-10 text-primary" />
            Receiving the Reply
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            The reply email travels through the same OSI layers in reverse direction back to the sender.
          </p>
        </div>

        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="text-lg font-semibold mb-4">Return Journey</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">7</div>
              <div>
                <p className="font-medium">Application Layer</p>
                <p className="text-sm text-muted-foreground">Reply email displayed in Gmail interface</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">6</div>
              <div>
                <p className="font-medium">Presentation Layer</p>
                <p className="text-sm text-muted-foreground">TLS decrypts the incoming data</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">5</div>
              <div>
                <p className="font-medium">Session Layer</p>
                <p className="text-sm text-muted-foreground">Secure session maintained</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
              <div>
                <p className="font-medium">Transport Layer</p>
                <p className="text-sm text-muted-foreground">TCP reassembles segments in correct order</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
              <div>
                <p className="font-medium">Network Layer</p>
                <p className="text-sm text-muted-foreground">Routed from Google servers to your IP</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
              <div>
                <p className="font-medium">Data Link Layer</p>
                <p className="text-sm text-muted-foreground">Frames delivered to your device's MAC address</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
              <div>
                <p className="font-medium">Physical Layer</p>
                <p className="text-sm text-muted-foreground">Signals received via Wi-Fi/Ethernet</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5">
          <h3 className="text-lg font-semibold mb-2">Complete Round Trip</h3>
          <p className="text-muted-foreground">
            Your email traveled down through all 7 layers, across the internet, and the reply 
            traveled back up through all 7 layers. Each layer added and removed its own headers 
            and processing, ensuring secure, reliable, and efficient communication.
          </p>
        </Card>
      </div>
    </Layout>
  );
};

export default ReversePath;
