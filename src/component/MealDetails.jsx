import { useEffect, useState } from "react";
import axios from "axios";

const MealDetails = ({ selectedWeek, selectedDay }) => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      setError("");
      try {
        const {data} = await axios.get(
          `http://localhost:3000/meal/get?week=${selectedWeek}&day=${selectedDay}`
        );
        setMeal(data);
      } catch (err) {
        setMeal(null);
        setError("No meal found for this day");
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchMeal, 30000)
    return () => clearInterval(interval);
  }, [selectedWeek, selectedDay]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-400">{error}</p>;
  if (!meal) return <p className="text-white">No data available</p>;

  return (
    <div className="bg-emerald-100 text-black rounded-2xl p-8 h-full">
      <h2 className="text-2xl font-bold mb-6">
        {selectedDay} – {selectedWeek}
      </h2>

      <div className="space-y-4 text-lg">
        <p>
          🍳 <strong>Breakfast:</strong> {meal.breakfast}
        </p>
        <p>
          🍛 <strong>Lunch:</strong> {meal.lunch}
        </p>
        <p>
          🍽 <strong>Dinner:</strong> {meal.dinner}
        </p>
      </div>
    </div>
  );
};

export default MealDetails;
