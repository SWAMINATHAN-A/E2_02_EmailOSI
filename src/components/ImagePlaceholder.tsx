import { Card } from "@/components/ui/card";

interface ImagePlaceholderProps {
  label: string;
  icon?: string;
}

export const ImagePlaceholder = ({ label, icon = "📷" }: ImagePlaceholderProps) => {
  return (
    <Card className="p-8 border-2 border-dashed border-border bg-muted/30 animate-fade-in">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <div className="text-4xl">{icon}</div>
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
      </div>
    </Card>
  );
};
