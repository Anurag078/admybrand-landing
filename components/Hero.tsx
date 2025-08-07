"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-28 min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Welcome to <span className="text-yellow-300">ADmyBRAND</span>
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl text-white/90">
        We simplify marketing, analytics, and media buying into a single powerful platform. Transform the way your brand connects with the world.
      </p>
      <a
        href="#features"
        className="mt-4 inline-block px-8 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
      >
        Explore Features
      </a>
    </section>
  );
}
