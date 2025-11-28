import React from "react";
import { 
  Laptop, 
  PenTool, 
  Cpu, 
  BookOpen, 
  TrendingUp, 
  Briefcase 
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      icon: <Laptop size={28} />,
      title: "Popular",
      desc: "Explore the most trending and latest articles."
    },
    {
      icon: <PenTool size={28} />,
      title: "Design",
      desc: "Insights on creativity, UI/UX, and aesthetics."
    },
    {
      icon: <Cpu size={28} />,
      title: "Technology",
      desc: "Discover updates on tech innovations and trends."
    },
    {
      icon: <BookOpen size={28} />,
      title: "Stories",
      desc: "Read meaningful stories across various niches."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Productivity",
      desc: "Boost your efficiency with helpful strategies."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Business",
      desc: "Gain knowledge on entrepreneurship and growth."
    }
  ];

  return (
    <section className="w-full py-16 px-6 bg-white text-black">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Find What Inspires You</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover insightful articles across design, technology, lifestyle, and productivity.
          Join our community of curious minds.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
          >
            <div className="text-green-600 mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
