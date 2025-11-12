import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";

const teamMembers = [
  {
    id: "24BCE1983",
    name: "ARNAV UPRETI",
    initials: "AU",
  },
  {
    id: "24BCE5256",
    name: "ANIMESH DHAWAN",
    initials: "AD",
  },
];

const Credits = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12 py-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Credits</h1>
          <p className="text-lg text-muted-foreground">
            Created for Educational Demonstration
          </p>
          <p className="text-muted-foreground">
            Understanding How an Email Travels Across the Internet
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Using the OSI 7-Layer Reference Model
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-2xl font-semibold">
            <Users className="w-8 h-8" />
            <h2>Team Members</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{member.id}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Credits;
