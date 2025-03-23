import React from 'react';
import MainLayout from '@/Layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <section className="relative bg-gradient-to-br from-black via-[#0D0D0D] to-[#1A1A1A] py-20 px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Your Ultimate Destination for <br />
              <span className="text-yellow-400">High-Quality Edits</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <select className="bg-[#1F1F1F] text-white px-4 py-2 rounded">
                <option>Browse by</option>
                <option>Category</option>
                <option>Popularity</option>
              </select>
              <input
                type="text"
                placeholder="e.g. 'HD Quality'"
                className="bg-[#1F1F1F] text-white px-4 py-2 rounded w-full md:w-auto"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {['Alltags', 'Featured', 'Free', 'Premium', 'Exclusive'].map(tag => (
                <button
                  key={tag}
                  className="bg-[#2A2A2A] px-4 py-2 rounded text-sm hover:bg-yellow-400 hover:text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2">
            <img
              src="/images/hero-hex.png"
              alt="Hero Graphic"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
      {/* Section 2 - Turn Your Work into Revenue */}
        <section className="bg-[#121212] py-20 px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Turn <span className="text-yellow-400">Your Work</span> into Revenue
            </h2>
            <p className="mb-6 text-gray-300">
                Explore new ways to grow your income by submitting your best edits to the High Five platform.
                Join a global network of creatives and get discovered.
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition">
                Browse Contributors
            </button>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2">
            <img
                src="/images/section-revenue.png"
                alt="Contributor Grid"
                className="w-full rounded shadow-lg"
            />
            </div>
        </div>
        </section>
        {/* Section 3 - Explore a world of Unique Edits */}
        <section
        className="bg-cover bg-center bg-no-repeat text-center text-white py-24 px-8"
        style={{ backgroundImage: "url('/images/bg-clapper.png')" }}
        >
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore a world of <span className="text-yellow-400">Unique Edits</span>
            </h2>
            <p className="mb-6 text-gray-300">
            Submit edits and experience a library crafted by real creatives from across the globe.
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition">
            Explore More
            </button>
        </div>
        </section>

        {/* Section 4 - Get only the Best */}
        <section className="bg-[#1A1A1A] py-20 px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Left Image */}
            <div className="md:w-1/2">
            <img
                src="/images/section-best.png"
                alt="Best Content"
                className="w-full rounded shadow-lg"
            />
            </div>

            {/* Right Text */}
            <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Get only the <span className="text-yellow-400">Best</span>
            </h2>
            <p className="mb-6 text-gray-300">
                Our curated selection features only the most polished and professional edits.
                Don’t settle — get the best for your next production.
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition">
                Start Now
            </button>
            </div>
        </div>
        </section>


    </MainLayout>
  );
}
