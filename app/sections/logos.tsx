export function Logos() {
  const stats = [
    { value: "50 km/h", label: "Top Speed" },
    { value: "120 min", label: "Ride Time" },
    { value: "95%", label: "Dolphin Sighting Rate" },
    { value: "All Levels", label: "Skill Requirement" },
    { value: "Audi e-tron", label: "Equipment Brand" },
  ];

  return (
    <section id="logos" className="md:py-20 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs uppercase font-bold text-zinc-400 dark:text-zinc-600 tracking-widest mb-10">
          The Pinnacle of Electric Hydrofoiling
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 justify-center items-center gap-y-10 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="w-full flex flex-col items-center justify-center text-center gap-1">
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
