import React from "react";
import DailyQuotes from "../components/DailyQuotes";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 sm:p-10">
      
      {/* Welcome Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-green-800 mb-4">
          !!السلام عليكم ورحمة الله وبركاته
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-yellow-600">Ihsan Tasks</span>, 
          your personal task manager for staying productive while keeping your goals aligned with your faith.
        </p>
        <Link
          to="/tasks"
          className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition-colors duration-300"
        >
          Go to Tasks
        </Link>
      </div>

        {/* Daily Quote  */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Daily Quotes</h2>
          <DailyQuotes />
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link
          to="/tasks"
          className="bg-green-100 hover:bg-green-200 text-green-800 p-6 rounded-lg text-center font-medium shadow transition-colors duration-300"
        >
          All Tasks
        </Link>
        <Link
          to="/completed"
          className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-6 rounded-lg text-center font-medium shadow transition-colors duration-300"
        >
          Completed Tasks
        </Link>
        <Link
          to="/incompleted"
          className="bg-red-100 hover:bg-red-200 text-red-800 p-6 rounded-lg text-center font-medium shadow transition-colors duration-300"
        >
          Incompleted Tasks
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 text-sm">
        “Verily, Allah does not change the condition of a people until they change what is in themselves.” – Quran 13:11
      </footer>
    </div>
  );
}
