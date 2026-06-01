import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" aria-hidden />
        <Badge variant="accent">{label}</Badge>
      </div>
      <h2 className="mb-6 font-headline-lg text-headline-lg leading-tight text-primary">
        {title}
      </h2>
      {description && (
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {description}
        </p>
      )}
    </div>
  );
}
