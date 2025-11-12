import { useState } from "react";
import { BookOpen, Users, HelpCircle, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import arnavPhoto from "@/assets/arnav.jpg";
import animeshPhoto from "@/assets/animesh.jpg";
import guidePhoto from "@/assets/guide.jpg";

export const HeaderNav = () => {
  const [learnOpen, setLearnOpen] = useState(false);
  const [developedByOpen, setDevelopedByOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const navigate = useNavigate();

  const teamMembers = [
    { id: "24BCE1983", name: "ARNAV UPRETI", initials: "AU", photo: arnavPhoto },
    { id: "24BCE5256", name: "ANIMESH DHAWAN", initials: "AD", photo: animeshPhoto },
    { id: "Guide", name: "DR. SWAMINATHAN. A", initials: "SA", photo: guidePhoto, role: "Project Guide" },
  ];

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 hover-scale"
          onClick={() => setLearnOpen(true)}
        >
          <BookOpen className="h-4 w-4" />
          Learn
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 hover-scale"
          onClick={() => setDevelopedByOpen(true)}
        >
          <Users className="h-4 w-4" />
          Developed by
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 hover-scale"
          onClick={() => setHelpOpen(true)}
        >
          <HelpCircle className="h-4 w-4" />
          Help
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 hover-scale"
          onClick={() => navigate('/simulation')}
        >
          <Download className="h-4 w-4" />
          Download
        </Button>
      </div>

      {/* Learn Dialog */}
      <Dialog open={learnOpen} onOpenChange={setLearnOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Learning Materials</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => {
                    navigate('/simulation');
                    setLearnOpen(false);
                  }}
                >
                  ✨ Try Full Simulation
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open('https://drive.google.com/file/d/1aUpJx-aHP8bhCGmEQTXbpifHxEkt6yV6/view?usp=sharing', '_blank')}
                >
                  📄 Project Documentation (Google Drive)
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">How I Built This Project</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gmail UI to compose mail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sent using hostel WiFi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Received on different network</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Used Wireshark packet capture to explain OSI model</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                📚 References
              </h3>
              <Card className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold text-foreground">RFC 821 – Simple Mail Transfer Protocol (SMTP)</p>
                        <p className="text-muted-foreground">J. Postel, IETF, 1982</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold text-foreground">RFC 1034 & RFC 1035 – Domain Name System (DNS)</p>
                        <p className="text-muted-foreground">P. Mockapetris, IETF, 1987</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold text-foreground">RFC 8446 – The Transport Layer Security (TLS 1.3)</p>
                        <p className="text-muted-foreground">E. Rescorla, IETF, 2018</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold text-foreground">Wireshark Official Documentation</p>
                        <p className="text-muted-foreground">Wireshark Foundation</p>
                        <a 
                          href="https://www.wireshark.org/docs/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-xs"
                        >
                          https://www.wireshark.org/docs/
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Developed By Dialog */}
      <Dialog open={developedByOpen} onOpenChange={setDevelopedByOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Developed By</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {/* Team Members */}
            <div className="grid grid-cols-2 gap-4">
              {teamMembers.slice(0, 2).map((member) => (
                <Card key={member.id} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <Avatar className="h-24 w-24 mx-auto mb-3 border-2 border-primary/20 rounded-full">
                    <AvatarImage src={member.photo} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-base">{member.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono mt-1">{member.id}</p>
                </Card>
              ))}
            </div>

            {/* Project Guide - Distinctive Design */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/30">
              <div className="text-center space-y-3">
                <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary to-secondary">
                  <Avatar className="h-28 w-28 border-4 border-background rounded-full">
                    <AvatarImage src={teamMembers[2].photo} alt={teamMembers[2].name} className="object-cover" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                      {teamMembers[2].initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                    ⭐ Project Guide ⭐
                  </p>
                  <h3 className="font-bold text-xl text-foreground">{teamMembers[2].name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Mentor & Academic Supervisor
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </DialogContent>
      </Dialog>

      {/* Help Dialog */}
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">📖 How to Use This Project</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground">
                This interactive guide demonstrates how an email travels through the OSI 7-Layer Reference Model with real packet captures.
              </p>
            </div>

            <Card className="p-4 border-l-4 border-l-primary">
              <h3 className="font-semibold text-lg mb-3">🎯 Project Overview</h3>
              <p className="text-sm text-muted-foreground">
                This educational tool visualizes email transmission through each OSI layer, from Application (Layer 7) to Physical (Layer 1), 
                with Wireshark-style packet analysis at every step.
              </p>
            </Card>

            <div>
              <h3 className="font-semibold text-lg mb-3">🚀 How to Execute the Project</h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">Start with Introduction</h4>
                      <p className="text-sm text-muted-foreground">
                        Use the left sidebar to navigate to "Introduction" and understand the OSI model basics.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">Navigate Through Layers 7 to 1</h4>
                      <p className="text-sm text-muted-foreground">
                        Click through each OSI layer sequentially from Layer 7 (Application) down to Layer 1 (Physical) 
                        to learn what happens at each stage.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">Run the Full Simulation</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        After completing Layer 2 (Data Link), click the "Try It Yourself — Full Simulation" button, 
                        or use the top navigation buttons to access the simulation directly.
                      </p>
                      <p className="text-xs text-muted-foreground italic">
                        💡 Tip: The "Download" button at top-right also takes you to the simulation!
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold mb-1">Compose Your Email</h4>
                      <p className="text-sm text-muted-foreground">
                        Enter recipient email, subject, and message body in the Gmail-style interface. 
                        Click "Send Email 🚀" to begin the simulation.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold mb-1">Explore Packet Captures</h4>
                      <p className="text-sm text-muted-foreground">
                        Click "Next Layer" buttons to progress through the simulation. 
                        At each layer, view Wireshark-style packet tables. Click any packet row to see detailed headers!
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">6</div>
                    <div>
                      <h4 className="font-semibold mb-1">Download Your Report</h4>
                      <p className="text-sm text-muted-foreground">
                        After completing the simulation (all layers processed), click "Download Full Simulation Report (PDF)" 
                        to get a comprehensive report including your email, MIME headers, and all captured packets.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">📊 Interpreting Results</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Packet Tables:</strong> Show source, destination, protocol, and info for each network event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Protocol Colors:</strong> Highlighted protocol badges help identify packet types (TCP, ARP, TLS, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Progress Bar:</strong> Shows your current position in the OSI layer journey</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>PDF Report:</strong> Contains complete documentation of your email's journey including MIME format and all 15 packets</span>
                </li>
              </ul>
            </div>

            <Card className="p-4 bg-primary/5 border-primary/20">
              <h3 className="font-semibold mb-2">✨ Pro Tips</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Click on any packet in the tables to view full header details</li>
                <li>• Use the sidebar for quick navigation between conceptual layers</li>
                <li>• Watch the progress indicator to track your simulation status</li>
                <li>• Download the PDF report for offline study and submission</li>
              </ul>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
