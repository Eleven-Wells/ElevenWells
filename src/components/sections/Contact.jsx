import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { PiShootingStar } from "react-icons/pi";

const StayInLoop = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="w-full py-20 px-6 bg-linear-to-b from-slate-100 to-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        {/* Star Icon */}
        <div className="flex justify-center mb-3">
          <div className="bg-green-800 rounded-xl p-3 text-white">
            <PiShootingStar size={28} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Stay in the loop
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Get weekly updates, exclusive insights, and fresh content delivered
          straight to your inbox. Join our growing community of readers.
        </p>

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex-1 relative">
            <FiMail
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 shadow-xl "
            />
          </div>
          <button
            onClick={handleSubscribe}
            className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap shadow-lg"
          >
            Join the list
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-slate-500 mb-12">
          No spam, ever. Unsubscribe anytime.
        </p>

        {/* Subscribers Count */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex -space-x-3">
            <img 
              src="/pro1.jpg" 
              alt="Subscriber 1" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" 
            />
            <img 
              src="/pro2.jpg" 
              alt="Subscriber 2" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" 
            />
            <img 
              src="/pro3.jpg" 
              alt="Subscriber 3" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" 
            />
          </div>
          <p className="text-slate-600 text-sm font-medium">
            Join 1,000+ subscribers
          </p>
        </div>
      </div>
    </section>
  );
};

export default StayInLoop;
