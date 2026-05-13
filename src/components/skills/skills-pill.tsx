import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>> | string;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;
  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-border bg-background px-4 py-3 text-sm shadow-sm dark:bg-muted sm:text-base md:px-6 md:py-3 md:text-lg">
      {typeof icon === "string" ? (
        <img src={icon} alt={name} className="h-5 w-5 sm:h-8 sm:w-8" />
      ) : (
        (() => { const Icon = icon; return <Icon className="h-5 w-5 sm:h-8 sm:w-8" />; })()
      )}
      <span className="font-medium text-foreground">{name}</span>
    </div>
  );
}
