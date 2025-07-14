// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function LandingPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-pink-600">
            Welcome to PKathoey dotcom!
          </h1>
          <p className="py-6 text-lg text-gray-600">
            Tired of dull days? It's time to **sparkle from within**! <br />
            Unleash your inner diva by tracking your moods, mastering your
            triggers, and illuminating your path to **unapologetic
            fabulousness**. <br />
            This isn't just self-care; it's a **glamorous transformation**
            towards your most confident, authentic self.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register" className="btn btn-primary btn-lg bg-pink-700 text-white">
              Get Started (Register)
            </Link>
            <Link to="/login" className="btn btn-ghost btn-lg">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
