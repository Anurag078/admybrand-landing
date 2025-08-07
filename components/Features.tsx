"use client";

const features = [
  {
    title: "Unified Marketing",
    description: "Plan, execute, and track all your marketing campaigns from one place.",
    icon: "📊",
  },
  {
    title: "Advanced Analytics",
    description: "Gain actionable insights with our smart data tools.",
    icon: "📈",
  },
  {
    title: "Media Buying Made Easy",
    description: "Automate and optimize your media purchases across platforms.",
    icon: "🛒",
  },
  {
    title: "AI-Powered Targeting",
    description: "Reach your ideal audience with cutting-edge AI algorithms.",
    icon: "🤖",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-28 py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">Powerful Features</h2>
        <p className="mb-10 text-lg text-gray-600">
          Everything you need to grow and manage your brand in one platform.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
