import React from "react";

const points = [
  {
    title: "Farm-to-Table Goodness",
    desc: "We source farm-fresh produce and the finest spices to serve you quality in every bite.",
    icon: "🥗",
  },
  {
    title: "Authentic Recipes",
    desc: "Passed down through generations, our recipes bring true traditional flavors to your table.",
    icon: "🍲",
  },
  {
    title: "Cozy Ambience",
    desc: "A warm and inviting atmosphere perfect for family dinners, friendly gatherings, or date nights.",
    icon: "🍷",
  },
  {
    title: "Exceptional Service",
    desc: "Our team ensures every guest feels like family, with service that’s warm and attentive.",
    icon: "🤝",
  },
];
const Special = () => {
  return (
    <section className="py-16 ">
      <div className="w-11/12 md:w-5/6 mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--primary-color)]">
          The Essence of Our Craft
        </h2>
        <p className="text-gray-600 mb-12">
          Discover what makes us the favorite choice for food lovers in town.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-6 hover:bg-[#e02426] hover:shadow-2xl transition"
            >
              <div className="text-4xl mb-4 group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
