export default function Features() {
  return (
    <section className="px-6 lg:px-20 py-20">
      <h1 className="text-4xl font-bold mb-10">Features</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Feature {i}</h3>
            <p className="text-muted">Responsive and scalable layout component.</p>
          </div>
        ))}
      </div>
    </section>
  );
}