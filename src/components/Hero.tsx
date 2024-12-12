import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://www.pacificfoods.com/wp-content/uploads/2024/10/15-Minute-Spicy-Red-Miso-Ramen.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Shiro's Cafe</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience authentic Japanese cuisine in a modern setting.
            Traditional flavors meet contemporary dining.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Book a Table
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
