import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>> | string;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;
  return (
    <div className="group flex w-max cursor-default items-center gap-2.5 overflow-hidden rounded-xl border border-border bg-background px-4 py-2.5 text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md hover:shadow-accent/10 dark:bg-muted/40 sm:text-base md:px-5 md:py-3 md:text-lg">
      {typeof icon === "string" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon}
          alt={name}
          className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7"
        />
      ) : (
        (() => {
          const Icon = icon;
          return (
            <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7" />
          );
        })()
      )}
      <span className="font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
        {name}
      </span>
    </div>
  );
}
