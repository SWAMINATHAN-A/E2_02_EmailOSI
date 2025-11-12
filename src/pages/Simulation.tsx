import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Mail, Lock, Network, Server, Radio, FileText, Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PacketModal } from "@/components/PacketModal";
import jsPDF from "jspdf";

interface PacketLog {
  no: number;
  time: string;
  source: string;
  destination: string;
  protocol: string;
  info: string;
  details?: string;
}

const Simulation = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [emailData, setEmailData] = useState({ to: "", subject: "", body: "" });
  const [expandedPacket, setExpandedPacket] = useState<number | null>(null);
  const [selectedPacket, setSelectedPacket] = useState<PacketLog | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const layerNames = [
    "Email Composition",
    "Layer 7: Application",
    "Layer 6: Presentation", 
    "Layer 5: Session",
    "Layer 4: Transport",
    "Layer 5: Network",
    "Layer 2: Data Link",
    "Layer 1: Physical",
    "Complete"
  ];

  const progressPercentage = (step / 8) * 100;

  const handleSendEmail = () => {
    if (!emailData.to || !emailData.subject || !emailData.body) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }
    setStep(1);
    toast({
      title: "Email Sent!",
      description: "Starting OSI layer simulation...",
    });
  };

  const layer7Packets: PacketLog[] = [
    {
      no: 1,
      time: "0.000000",
      source: "Client",
      destination: "mail.google.com",
      protocol: "SMTP",
      info: "MAIL FROM",
      details: `MIME-Version: 1.0\nContent-Type: text/plain; charset="utf-8"\nTo: ${emailData.to}\nSubject: ${emailData.subject}\n\n${emailData.body}`,
    },
  ];

  const layer6Packets: PacketLog[] = [
    {
      no: 1,
      time: "0.001234",
      source: "Presentation Layer",
      destination: "Encrypted",
      protocol: "TLS",
      info: "Data Encryption",
      details: "Plaintext → AES-256-GCM Encrypted\nCipher Suite: TLS_AES_256_GCM_SHA384",
    },
  ];

  const layer5Packets: PacketLog[] = [
    {
      no: 1,
      time: "0.001000",
      source: "192.168.1.5",
      destination: "142.250.193.74",
      protocol: "TLSv1.3",
      info: "ClientHello",
      details: "TLS Version: 1.3\nCipher Suites: 15\nExtensions: server_name, supported_groups",
    },
    {
      no: 2,
      time: "0.004520",
      source: "142.250.193.74",
      destination: "192.168.1.5",
      protocol: "TLSv1.3",
      info: "ServerHello, Certificate, CertificateVerify",
      details: "TLS Version: 1.3\nCipher Suite: TLS_AES_256_GCM_SHA384\nCertificate: CN=*.google.com",
    },
    {
      no: 3,
      time: "0.009180",
      source: "192.168.1.5",
      destination: "142.250.193.74",
      protocol: "TLSv1.3",
      info: "Finished",
      details: "Session Established Successfully\nEncrypted Application Data Ready",
    },
  ];

  const layer4Packets: PacketLog[] = [
    {
      no: 1,
      time: "0.000000",
      source: "192.168.1.5",
      destination: "142.250.193.74",
      protocol: "TCP",
      info: "[SYN] Seq=0 Win=65535 Len=0",
      details: "Source Port: 54321\nDestination Port: 443\nSequence Number: 0\nFlags: SYN",
    },
    {
      no: 2,
      time: "0.002145",
      source: "142.250.193.74",
      destination: "192.168.1.5",
      protocol: "TCP",
      info: "[SYN, ACK] Seq=0 Ack=1 Win=65535 Len=0",
      details: "Source Port: 443\nDestination Port: 54321\nSequence Number: 0\nAcknowledgment: 1\nFlags: SYN, ACK",
    },
    {
      no: 3,
      time: "0.002267",
      source: "192.168.1.5",
      destination: "142.250.193.74",
      protocol: "TCP",
      info: "[ACK] Seq=1 Ack=1 Win=65535 Len=0",
      details: "Source Port: 54321\nDestination Port: 443\nSequence Number: 1\nAcknowledgment: 1\nFlags: ACK\nConnection Established!",
    },
  ];

  const layer3Packets: PacketLog[] = [
    {
      no: 1,
      time: "0.000000",
      source: "192.168.1.5",
      destination: "142.250.193.74",
      protocol: "IPv4",
      info: "IP Packet Created",
      details: "Version: 4\nHeader Length: 20 bytes\nTotal Length: 60 bytes\nTTL: 64\nProtocol: TCP (6)\nSource IP: 192.168.1.5\nDestination IP: 142.250.193.74",
    },
    {
      no: 2,
      time: "0.000120",
      source: "Router",
      destination: "Gateway",
      protocol: "IP",
      info: "Routing Decision Made",
      details: "Next Hop: 192.168.1.1\nInterface: eth0\nRoute: Default Gateway",
    },
  ];

  const layer2Packets: PacketLog[] = [
    {
      no: 1,
      time: "0.000000",
      source: "Broadcast",
      destination: "FF:FF:FF:FF:FF:FF",
      protocol: "ARP",
      info: "Who has 192.168.1.1? Tell 192.168.1.5",
      details: "Hardware Type: Ethernet\nProtocol Type: IPv4\nSender MAC: 3C:22:FB:45:67:89\nSender IP: 192.168.1.5\nTarget IP: 192.168.1.1",
    },
    {
      no: 2,
      time: "0.000890",
      source: "6C:72:AF:32:19:9B",
      destination: "3C:22:FB:45:67:89",
      protocol: "ARP",
      info: "192.168.1.1 is at 6C:72:AF:32:19:9B",
      details: "Hardware Type: Ethernet\nProtocol Type: IPv4\nSender MAC: 6C:72:AF:32:19:9B\nSender IP: 192.168.1.1\nARP Reply",
    },
    {
      no: 3,
      time: "0.001000",
      source: "3C:22:FB:45:67:89",
      destination: "6C:72:AF:32:19:9B",
      protocol: "Ethernet",
      info: "Frame with IP Packet",
      details: "Frame Type: Ethernet II\nSource MAC: 3C:22:FB:45:67:89\nDestination MAC: 6C:72:AF:32:19:9B\nEtherType: IPv4 (0x0800)",
    },
  ];

  const renderPacketTable = (packets: PacketLog[]) => (
    <div className="overflow-x-auto border rounded-lg animate-fade-in">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">No.</th>
            <th className="px-4 py-2 text-left font-semibold">Time</th>
            <th className="px-4 py-2 text-left font-semibold">Source</th>
            <th className="px-4 py-2 text-left font-semibold">Destination</th>
            <th className="px-4 py-2 text-left font-semibold">Protocol</th>
            <th className="px-4 py-2 text-left font-semibold">Info</th>
          </tr>
        </thead>
        <tbody>
          {packets.map((packet) => (
            <tr
              key={packet.no}
              className="border-t hover:bg-accent/50 cursor-pointer transition-all duration-200 hover:scale-[1.01]"
              onClick={() => {
                setSelectedPacket(packet);
                setModalOpen(true);
              }}
            >
              <td className="px-4 py-2">{packet.no}</td>
              <td className="px-4 py-2 font-mono text-xs">{packet.time}</td>
              <td className="px-4 py-2 font-mono text-xs">{packet.source}</td>
              <td className="px-4 py-2 font-mono text-xs">{packet.destination}</td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-semibold">
                  {packet.protocol}
                </span>
              </td>
              <td className="px-4 py-2 text-xs">{packet.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const handleDownloadReport = () => {
    const doc = new jsPDF();
    let yPos = 20;

    // Title
    doc.setFontSize(20);
    doc.setTextColor(139, 92, 246);
    doc.text("OSI Model Email Journey - Simulation Report", 20, yPos);
    yPos += 15;

    // Email Details
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Email Details", 20, yPos);
    yPos += 10;

    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text(`To: ${emailData.to}`, 20, yPos);
    yPos += 7;
    doc.text(`Subject: ${emailData.subject}`, 20, yPos);
    yPos += 7;
    const bodyLines = doc.splitTextToSize(`Body: ${emailData.body}`, 170);
    doc.text(bodyLines, 20, yPos);
    yPos += bodyLines.length * 5 + 10;

    // MIME Headers
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("MIME Headers Generated", 20, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setFont("courier");
    const mimeText = `MIME-Version: 1.0\nContent-Type: text/plain; charset="utf-8"\nTo: ${emailData.to}\nSubject: ${emailData.subject}`;
    const mimeLines = doc.splitTextToSize(mimeText, 170);
    doc.text(mimeLines, 20, yPos);
    yPos += mimeLines.length * 5 + 15;

    // Detailed Packet Information for Each Layer
    doc.setFont("helvetica");
    doc.setFontSize(18);
    doc.setTextColor(139, 92, 246);
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    doc.text("OSI Layers with Captured Packets", 20, yPos);
    yPos += 12;

    // Layer 7 - Application
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Layer 7 - Application Layer (SMTP)", 20, yPos);
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("Protocol: SMTP | Packets Captured: 1", 20, yPos);
    yPos += 6;
    layer7Packets.forEach((pkt) => {
      doc.setFont("courier");
      doc.text(`[${pkt.no}] ${pkt.source} -> ${pkt.destination}`, 25, yPos);
      yPos += 5;
      doc.text(`    Info: ${pkt.info}`, 25, yPos);
      yPos += 8;
    });

    // Layer 6 - Presentation
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFont("helvetica");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Layer 6 - Presentation Layer (TLS Encryption)", 20, yPos);
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("Protocol: TLS | Packets Captured: 1", 20, yPos);
    yPos += 6;
    layer6Packets.forEach((pkt) => {
      doc.setFont("courier");
      doc.text(`[${pkt.no}] ${pkt.source} -> ${pkt.destination}`, 25, yPos);
      yPos += 5;
      doc.text(`    Info: ${pkt.info}`, 25, yPos);
      yPos += 8;
    });

    // Layer 5 - Session
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFont("helvetica");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Layer 5 - Session Layer (TLS Handshake)", 20, yPos);
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("Protocol: TLSv1.3 | Packets Captured: 3", 20, yPos);
    yPos += 6;
    layer5Packets.forEach((pkt) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFont("courier");
      doc.text(`[${pkt.no}] ${pkt.time}s ${pkt.source} -> ${pkt.destination}`, 25, yPos);
      yPos += 5;
      doc.text(`    ${pkt.protocol}: ${pkt.info}`, 25, yPos);
      yPos += 8;
    });

    // Layer 4 - Transport
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFont("helvetica");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Layer 4 - Transport Layer (TCP)", 20, yPos);
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("Protocol: TCP | Packets Captured: 3 (3-Way Handshake)", 20, yPos);
    yPos += 6;
    layer4Packets.forEach((pkt) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFont("courier");
      doc.text(`[${pkt.no}] ${pkt.time}s ${pkt.source} -> ${pkt.destination}`, 25, yPos);
      yPos += 5;
      doc.text(`    ${pkt.protocol}: ${pkt.info}`, 25, yPos);
      yPos += 8;
    });

    // Layer 3 - Network
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFont("helvetica");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Layer 3 - Network Layer (IP Routing)", 20, yPos);
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("Protocol: IPv4 | Packets Captured: 2", 20, yPos);
    yPos += 6;
    layer3Packets.forEach((pkt) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFont("courier");
      doc.text(`[${pkt.no}] ${pkt.time}s ${pkt.source} -> ${pkt.destination}`, 25, yPos);
      yPos += 5;
      doc.text(`    ${pkt.protocol}: ${pkt.info}`, 25, yPos);
      yPos += 8;
    });

    // Layer 2 - Data Link
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFont("helvetica");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Layer 2 - Data Link Layer (ARP & Ethernet)", 20, yPos);
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("Protocol: ARP, Ethernet | Packets Captured: 3", 20, yPos);
    yPos += 6;
    layer2Packets.forEach((pkt) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFont("courier");
      doc.text(`[${pkt.no}] ${pkt.time}s ${pkt.source} -> ${pkt.destination}`, 25, yPos);
      yPos += 5;
      doc.text(`    ${pkt.protocol}: ${pkt.info}`, 25, yPos);
      yPos += 8;
    });

    // Layer 1 - Physical
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFont("helvetica");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Layer 1 - Physical Layer (Binary Transmission)", 20, yPos);
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("Binary data transmitted via WiFi/Ethernet", 20, yPos);
    yPos += 6;
    doc.setFont("courier");
    doc.text("01001000 01100101 01101100 01101100 01101111", 25, yPos);
    yPos += 15;

    // Summary
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.setTextColor(139, 92, 246);
    doc.text("Summary", 20, yPos);
    yPos += 10;
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text("Total Packets Captured Across All Layers: 15", 20, yPos);
    yPos += 7;
    doc.text("Email successfully traversed all 7 OSI layers", 20, yPos);
    yPos += 7;
    doc.text("From: Application Layer (SMTP) to Physical Layer (Binary)", 20, yPos);
    yPos += 12;

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Report Generated: ${new Date().toLocaleString()}`, 20, yPos);

    // Save PDF
    doc.save("OSI-Email-Journey-Report.pdf");

    toast({
      title: "PDF Downloaded!",
      description: "Your complete simulation report has been saved.",
    });
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Progress Indicator */}
        {step > 0 && step < 8 && (
          <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b pb-4 animate-fade-in">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-primary">{layerNames[step]}</span>
                <span className="text-muted-foreground">Step {step} of 8</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                      i < step
                        ? "border-primary bg-primary text-primary-foreground"
                        : i === step
                        ? "border-primary bg-primary/10 text-primary animate-pulse"
                        : "border-muted bg-background text-muted-foreground"
                    }`}
                  >
                    {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="animate-fade-in">
        {step === 0 && (
          <>
            <div className="text-center space-y-4 py-8">
              <div className="text-6xl mb-4">✨</div>
              <h1 className="text-4xl font-bold text-foreground">
                Now It's Your Turn — Run the Full Simulation!
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience how your email travels through each OSI layer with real packet events.
              </p>
            </div>

            <Card className="p-8 max-w-3xl mx-auto border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Compose Your Email</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="to">To:</Label>
                  <Input
                    id="to"
                    placeholder="recipient@example.com"
                    value={emailData.to}
                    onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject:</Label>
                  <Input
                    id="subject"
                    placeholder="Enter email subject"
                    value={emailData.subject}
                    onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="body">Body:</Label>
                  <Textarea
                    id="body"
                    placeholder="Write your message here..."
                    value={emailData.body}
                    onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
                    className="mt-1 min-h-32"
                  />
                </div>

                <Button 
                  onClick={handleSendEmail}
                  size="lg"
                  className="w-full gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  Send Email 🚀
                </Button>
              </div>
            </Card>
          </>
        )}

        {step === 1 && (
          <>
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Layer 7 Simulation
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
                <Mail className="h-10 w-10 text-primary" />
                Application Layer — MIME Generation
              </h1>
              <p className="text-lg text-muted-foreground">
                Your email has been formatted with MIME headers
              </p>
            </div>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold mb-3">Captured Packets</h3>
              {renderPacketTable(layer7Packets)}
            </Card>

            <div className="flex justify-center">
              <Button onClick={() => setStep(2)} size="lg" className="gap-2">
                Proceed to Layer 6 — Encoding <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Layer 6 Simulation
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
                <Lock className="h-10 w-10 text-primary" />
                Presentation Layer — TLS Encryption
              </h1>
              <p className="text-lg text-muted-foreground">
                Preparing data for secure transmission with TLS encryption
              </p>
            </div>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold mb-3">Encryption Process</h3>
              <div className="flex items-center justify-center gap-6 py-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl">📝</div>
                  <p className="text-sm font-medium">Plaintext</p>
                </div>
                <div className="text-2xl text-primary animate-pulse">→</div>
                <div className="text-center space-y-2">
                  <div className="text-4xl">🔒</div>
                  <p className="text-sm font-medium">Encrypted</p>
                </div>
              </div>
              {renderPacketTable(layer6Packets)}
            </Card>

            <div className="flex justify-center">
              <Button onClick={() => setStep(3)} size="lg" className="gap-2">
                Proceed to Layer 5 — TLS Handshake <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Layer 5 Simulation
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
                <FileText className="h-10 w-10 text-primary" />
                Session Layer — TLS Handshake
              </h1>
              <p className="text-lg text-muted-foreground">
                Establishing secure session with TLS 1.3 handshake
              </p>
            </div>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold mb-3">TLS Handshake Packets</h3>
              {renderPacketTable(layer5Packets)}
            </Card>

            <div className="flex justify-center">
              <Button onClick={() => setStep(4)} size="lg" className="gap-2">
                Proceed to Layer 4 — Transport <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Layer 4 Simulation
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
                <Server className="h-10 w-10 text-primary" />
                Transport Layer — TCP 3-Way Handshake
              </h1>
              <p className="text-lg text-muted-foreground">
                Establishing reliable connection with TCP handshake
              </p>
            </div>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold mb-3">TCP Handshake Process</h3>
              {renderPacketTable(layer4Packets)}
            </Card>

            <div className="flex justify-center">
              <Button onClick={() => setStep(5)} size="lg" className="gap-2">
                Proceed to Layer 3 — Routing <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Layer 3 Simulation
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
                <Network className="h-10 w-10 text-primary" />
                Network Layer — IP Routing
              </h1>
              <p className="text-lg text-muted-foreground">
                Creating IP packets and routing decisions
              </p>
            </div>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold mb-3">IP Packet Creation</h3>
              {renderPacketTable(layer3Packets)}
            </Card>

            <div className="flex justify-center">
              <Button onClick={() => setStep(6)} size="lg" className="gap-2">
                Proceed to Layer 2 — MAC Addressing <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}

        {step === 6 && (
          <>
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Layer 2 Simulation
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
                <Network className="h-10 w-10 text-primary" />
                Data Link Layer — ARP & MAC Addressing
              </h1>
              <p className="text-lg text-muted-foreground">
                Resolving MAC addresses with ARP protocol
              </p>
            </div>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold mb-3">ARP Resolution Process</h3>
              {renderPacketTable(layer2Packets)}
            </Card>

            <div className="flex justify-center">
              <Button onClick={() => setStep(7)} size="lg" className="gap-2">
                Proceed to Layer 1 — Bit Transfer <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}

        {step === 7 && (
          <>
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Layer 1 Simulation
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-3">
                <Radio className="h-10 w-10 text-primary" />
                Physical Layer — Binary Transmission
              </h1>
              <p className="text-lg text-muted-foreground">
                Converting data to electrical signals for transmission
              </p>
            </div>

            <Card className="p-6 border-l-4 border-l-primary">
              <div className="text-center py-8 space-y-6">
                <div className="text-6xl animate-pulse">📡</div>
                <div className="font-mono text-2xl animate-fade-in">
                  01001000 01100101 01101100 01101100 01101111
                </div>
                <p className="text-muted-foreground">
                  Binary data traveling through physical medium (WiFi/Ethernet)
                </p>
              </div>
            </Card>

            <div className="flex justify-center">
              <Button onClick={() => setStep(8)} size="lg" className="gap-2">
                Complete Simulation <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}

        {step === 8 && (
          <>
            <div className="text-center space-y-6 py-8">
              <div className="text-7xl mb-4">✅</div>
              <h1 className="text-4xl font-bold text-foreground">
                Email Delivered Successfully!
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your email has traveled through all 7 OSI layers and reached the destination server.
              </p>
            </div>

            <Card className="p-8 max-w-2xl mx-auto border-2 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-center">Simulation Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded bg-muted/50">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold">Email Sent To:</p>
                    <p className="text-sm text-muted-foreground">{emailData.to}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded bg-muted/50">
                  <span className="text-2xl">📝</span>
                  <div>
                    <p className="font-semibold">Subject:</p>
                    <p className="text-sm text-muted-foreground">{emailData.subject}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded bg-muted/50">
                  <span className="text-2xl">🔢</span>
                  <div>
                    <p className="font-semibold">Total Packets Generated:</p>
                    <p className="text-sm text-muted-foreground">15 packets across 7 OSI layers</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleDownloadReport}
                size="lg"
                className="w-full gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                <Download className="h-5 w-5" />
                Download Full Simulation Report (PDF)
              </Button>
            </Card>
          </>
        )}
        </div>

        {/* Packet Modal */}
        <PacketModal 
          open={modalOpen} 
          onOpenChange={setModalOpen}
          packet={selectedPacket}
        />
      </div>
    </Layout>
  );
};

export default Simulation;
