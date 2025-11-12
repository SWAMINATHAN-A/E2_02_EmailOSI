import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PacketModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packet: {
    no: number;
    time: string;
    source: string;
    destination: string;
    protocol: string;
    info: string;
    details?: string;
  } | null;
}

export const PacketModal = ({ open, onOpenChange, packet }: PacketModalProps) => {
  if (!packet) return null;

  const formatDetails = (details: string) => {
    const lines = details.split('\n');
    return lines.map((line, index) => {
      // Color-code different parts
      if (line.includes(':')) {
        const [key, value] = line.split(':');
        return (
          <div key={index} className="flex gap-2 py-1">
            <span className="text-primary font-semibold min-w-[180px]">{key}:</span>
            <span className="text-foreground">{value}</span>
          </div>
        );
      }
      return (
        <div key={index} className="py-1 text-muted-foreground font-medium">
          {line}
        </div>
      );
    });
  };

  const getProtocolColor = (protocol: string) => {
    const colors: Record<string, string> = {
      TCP: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      TLSv13: "bg-green-500/10 text-green-500 border-green-500/20",
      TLS: "bg-green-500/10 text-green-500 border-green-500/20",
      SMTP: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      IPv4: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      IP: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      ARP: "bg-pink-500/10 text-pink-500 border-pink-500/20",
      Ethernet: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    };
    return colors[protocol] || "bg-muted text-foreground border-border";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span className="text-muted-foreground">Packet #{packet.no}</span>
            <span className={`px-3 py-1 rounded-md border text-sm font-semibold ${getProtocolColor(packet.protocol)}`}>
              {packet.protocol}
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-muted/50">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Time</p>
                <p className="font-mono text-sm">{packet.time}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Protocol</p>
                <p className="font-semibold text-sm">{packet.protocol}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Source</p>
                <p className="font-mono text-sm">{packet.source}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Destination</p>
                <p className="font-mono text-sm">{packet.destination}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-muted-foreground mb-1">Info</p>
                <p className="text-sm">{packet.info}</p>
              </div>
            </div>

            {packet.details && (
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <h4 className="text-sm font-semibold mb-3 text-primary">Packet Details</h4>
                <div className="font-mono text-xs space-y-1">
                  {formatDetails(packet.details)}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
