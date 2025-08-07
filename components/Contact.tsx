"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 py-20 bg-blue-50 text-gray-800"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-800">Contact Us</h2>
        <p className="mb-10 text-lg text-gray-600">
          Have a question or want to work with us? Fill the form below and we'll get in touch.
        </p>

        <form className="max-w-2xl mx-auto grid gap-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-900 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
