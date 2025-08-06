"use client";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-xl mx-auto text-center px-6">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Stay in the loop</h3>
        <p className="text-gray-600 mb-6">
          Don&apos;t worry, we won&apos;t spam you.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-600 text-sm">
            Thanks for subscribing!
          </p>
        )}
      </div>
    </section>
  );
}
