import { useState } from "react";
import MealCard from "./MealCard";

const MealList = () => {
  const weeks = ["Week1", "Week2", "Week3", "Week4"];
  const [selectedWeek, setSelectedWeek] = useState("Week1");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="text-5xl">🍽️</span>
              Weekly Meal Schedule
            </h1>
            <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
              Discover your hostel's delicious meal plans for each week. Fresh ingredients, balanced nutrition, and tasty meals await!
            </p>
          </div>
        </div>
      </div>

      {/* Week Selection */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Select Week</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {weeks.map((week) => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  selectedWeek === week
                    ? "bg-emerald-600 text-white shadow-lg ring-4 ring-emerald-200"
                    : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  {week}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Week Display */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-emerald-800 mb-2">
              {selectedWeek} Menu
            </h3>
            <p className="text-gray-600">Nutritious and delicious meals planned just for you</p>
          </div>
        </div>

        {/* Meal Cards */}
        <MealCard selectedWeek={selectedWeek} />
      </div>
    </div>
  );
};

export default MealList;
