import { cn } from "../../lib/cn";

type DeviceVariant = "browser" | "phone";

type Props = {
  variant: DeviceVariant;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  browserUrl?: string;
};

export function DeviceMockup({
  variant,
  children,
  className,
  contentClassName,
  browserUrl = "app.atendejuri.com.br",
}: Props) {
  if (variant === "phone") {
    return (
      <div
        className={cn(
          "relative rounded-[2.25rem] border border-white/10 bg-black shadow-soft",
          "ring-1 ring-white/10",
          className
        )}
      >
        <div className="pointer-events-none absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-zinc-900/80 ring-1 ring-white/10" />
        <div className={cn("relative overflow-hidden rounded-[2.1rem]", contentClassName)}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-soft",
        "ring-1 ring-black/5",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-black/10 bg-zinc-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full border border-black/15 bg-white" />
          <span className="h-2.5 w-2.5 rounded-full border border-black/15 bg-white" />
          <span className="h-2.5 w-2.5 rounded-full border border-black/15 bg-white" />
        </div>
        <div className="ml-2 flex-1">
          <div className="h-7 w-full rounded-full border border-black/10 bg-white px-3 text-[12px] leading-7 text-zinc-500">
            {browserUrl}
          </div>
        </div>
      </div>
      <div className={cn("relative", contentClassName)}>{children}</div>
    </div>
  );
}
