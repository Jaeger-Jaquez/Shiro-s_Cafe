import React from "react";

const menuItems = [
  {
    category: "Ramen",
    items: [
      {
        name: "Tonkotsu Ramen",
        price: "1300",
        description: "Rich pork bone broth, chashu, egg",
      },
      {
        name: "Miso Ramen",
        price: "1200",
        description: "Savory miso broth, corn, butter",
      },
      {
        name: "Shoyu Ramen",
        price: "1100",
        description: "Classic soy sauce broth, bamboo shoots",
      },
    ],
  },
  {
    category: "Donburi",
    items: [
      {
        name: "Katsudon",
        price: "1100",
        description: "Breaded pork cutlet, egg, onions on rice",
      },
      {
        name: "Gyudon",
        price: "1300",
        description: "Simmered beef and onions on rice",
      },
      {
        name: "Unadon",
        price: "1500",
        description: "Grilled eel glazed with sweet soy sauce",
      },
    ],
  },
  {
    category: "Sushi Rolls",
    items: [
      {
        name: "Dragon Roll",
        price: "1300",
        description: "Eel, cucumber, avocado",
      },
      {
        name: "Rainbow Roll",
        price: "1500",
        description: "California roll topped with assorted sashimi",
      },
      {
        name: "Spicy Tuna Roll",
        price: "1200",
        description: "Spicy tuna, cucumber, sprouts",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Menu</h2>

        <div className="grid gap-16">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {section.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium">{item.name}</h4>
                      <span className="text-lg font-medium">₹{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
