export default function Home() {
  return (
    <main className="px-6 lg:px-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build. Play. Earn.
          </h1>
          <p className="mt-6 text-muted text-lg">
            A next-gen platform designed to bring immersive digital experiences to life.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-primary px-6 py-3 rounded-lg">Get Started</button>
            <button className="border border-white/20 px-6 py-3 rounded-lg">Learn More</button>
          </div>
        </div>

        <div className="w-full max-w-md h-[300px] bg-gradient-to-br from-primary/40 to-transparent rounded-xl" />
      </section>

      {/* Features Section */}
      <section className="py-20 grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
            <p className="text-muted">Clean, scalable and responsive UI system.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
