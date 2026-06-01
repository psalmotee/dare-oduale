import type { ReactNode } from "react";

interface InfoItem {
  icon: ReactNode;
  label: string;
  lines: string[];
}

interface BookingConnectSectionProps {
  infoItems: InfoItem[];
}

export function BookingConnectSection({
  infoItems,
}: BookingConnectSectionProps) {
  return (
    <section
      className="bg-background px-6 py-16 md:px-14 md:py-24"
      aria-labelledby="connect-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-5">
          <h2
            id="connect-heading"
            className="font-heading text-3xl font-bold leading-tight tracking-[-0.03em] text-primary md:text-4xl"
          >
            Connect Directly
          </h2>
          <p className="max-w-sm text-sm leading-[1.75] text-foreground/60 md:text-base">
            For pressing matters or international speaking engagements, please
            reach out via our direct channels. All conversations are handled
            with the utmost confidentiality.
          </p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/40">
            All conversations are confidential
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <h3 className="mb-8 font-heading text-lg font-semibold text-primary">
            Information
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                    {item.label}
                  </p>
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm leading-relaxed text-foreground/70"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
