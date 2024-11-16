import { Code, Rocket, BarChart } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description:
        "Custom websites that convert visitors into customers, built with the latest technologies.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Digital Growth",
      description:
        "Strategic digital solutions that accelerate your business growth exponentially.",
    },
    {
      icon: <BarChart size={24} />,
      title: "Analytics & SEO",
      description:
        "Data-driven optimization to increase your online visibility and performance.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end digital solutions to help your business reach
            new heights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow hover:scale-105"
            >
              <div className="bg-black text-white p-3 rounded-full w-fit mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
