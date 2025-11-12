import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Upload, X } from "lucide-react";
import { useState } from "react";

interface PacketCapture {
  id: string;
  title: string;
  image: string | null;
  caption: string;
}

const CapturedPackets = () => {
  const [captures, setCaptures] = useState<PacketCapture[]>([
    {
      id: "1",
      title: "TLS Encrypted Packet",
      image: null,
      caption: "This capture shows encrypted email data in transit. The payload is unreadable due to TLS encryption at Layer 6 (Presentation Layer).",
    },
    {
      id: "2",
      title: "ARP Request/Reply",
      image: null,
      caption: "ARP protocol resolving IP address to MAC address at Layer 2 (Data Link Layer). Shows \"Who has [IP]?\" request and the corresponding MAC address reply.",
    },
    {
      id: "3",
      title: "TCP 3-Way Handshake",
      image: null,
      caption: "TCP connection establishment at Layer 4 (Transport Layer). Displays the three-way handshake: SYN → SYN-ACK → ACK before data transmission begins.",
    },
    {
      id: "4",
      title: "IP Routing",
      image: null,
      caption: "IP packet header showing source and destination addresses at Layer 3 (Network Layer). Demonstrates how packets are routed across different networks.",
    },
  ]);

  const handleImageUpload = (id: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setCaptures(prev =>
        prev.map(capture =>
          capture.id === id ? { ...capture, image: reader.result as string } : capture
        )
      );
    };
    reader.readAsDataURL(file);
  };

  const handleCaptionChange = (id: string, caption: string) => {
    setCaptures(prev =>
      prev.map(capture =>
        capture.id === id ? { ...capture, caption } : capture
      )
    );
  };

  const handleTitleChange = (id: string, title: string) => {
    setCaptures(prev =>
      prev.map(capture =>
        capture.id === id ? { ...capture, title } : capture
      )
    );
  };

  const removeImage = (id: string) => {
    setCaptures(prev =>
      prev.map(capture =>
        capture.id === id ? { ...capture, image: null } : capture
      )
    );
  };

  const addNewCapture = () => {
    const newCapture: PacketCapture = {
      id: Date.now().toString(),
      title: "New Packet Capture",
      image: null,
      caption: "Add your description here.",
    };
    setCaptures(prev => [...prev, newCapture]);
  };

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            📸 Captured Packet Analysis
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Real Wireshark packet captures showing the OSI layers in action.
          </p>
        </div>

        <div className="grid gap-6">
          {captures.map((capture) => (
            <Card key={capture.id} className="p-6 border-l-4 border-l-primary">
              <Input
                value={capture.title}
                onChange={(e) => handleTitleChange(capture.id, e.target.value)}
                className="text-lg font-semibold mb-4 border-none focus-visible:ring-0 px-0"
              />
              
              {capture.image ? (
                <div className="relative">
                  <img
                    src={capture.image}
                    alt={capture.title}
                    className="w-full h-auto rounded-lg border border-border"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => removeImage(capture.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <label className="block cursor-pointer">
                  <div className="p-8 border-2 border-dashed border-border bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col items-center justify-center gap-3 text-center">
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground font-medium">
                        Click to upload Wireshark screenshot
                      </p>
                    </div>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(capture.id, file);
                    }}
                  />
                </label>
              )}

              <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                <Textarea
                  value={capture.caption}
                  onChange={(e) => handleCaptionChange(capture.id, e.target.value)}
                  className="min-h-[80px] text-sm border-none focus-visible:ring-0 bg-transparent resize-none"
                  placeholder="Add caption here..."
                />
              </div>
            </Card>
          ))}
        </div>

        <Button onClick={addNewCapture} className="w-full" variant="outline">
          <Upload className="h-4 w-4 mr-2" />
          Add Another Capture
        </Button>
      </div>
    </Layout>
  );
};

export default CapturedPackets;
