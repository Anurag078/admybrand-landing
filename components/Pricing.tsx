"use client";

const plans = [
  {
    title: "Starter",
    price: "₹499/mo",
    features: ["Basic Analytics", "5 Campaigns", "Email Support"],
    highlighted: false,
  },
  {
    title: "Professional",
    price: "₹1,499/mo",
    features: ["Advanced Analytics", "Unlimited Campaigns", "Priority Support"],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    features: ["Custom Solutions", "Dedicated Manager", "24/7 Support"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 py-20 bg-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">Simple, Transparent Pricing</h2>
        <p className="mb-12 text-lg text-gray-600">
          Choose a plan that fits your business needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl border shadow-md ${
                plan.highlighted
                  ? "bg-white border-blue-600 shadow-xl scale-105"
                  : "bg-gray-100 border-transparent"
              } transition`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">{plan.title}</h3>
              <p className="text-3xl font-bold mb-6 text-gray-900">{plan.price}</p>
              <ul className="mb-6 text-left space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 font-medium rounded-lg ${
                  plan.highlighted
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                } transition`}
              >
                {plan.title === "Enterprise" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
