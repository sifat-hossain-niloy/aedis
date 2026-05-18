import { Container } from "@/components/ui/Container";

const stats = [
  { label: "Established", value: "2026" },
  { label: "Services Offered", value: "7+" },
  { label: "Service Area", value: "NW London" },
  { label: "Guarantee", value: "100%" },
];

export function StatsBar() {
  return (
    <section className="bg-white border-b border-slate-100 py-6">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-200">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-6">
              <p className="text-2xl md:text-3xl font-extrabold text-brand">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
