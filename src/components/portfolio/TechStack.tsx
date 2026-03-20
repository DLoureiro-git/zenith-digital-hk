interface TechStackProps {
  stack: string[];
}

export function TechStack({ stack }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border-medium bg-bg-card/50 px-3 py-1 text-xs font-body text-text-secondary"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
