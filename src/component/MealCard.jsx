import { useState } from "react";
import MealDetails from "./MealDetails";

const MealCard = ({ selectedWeek }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="flex gap-6 w-full">

      <div className="w-1/4 flex flex-col gap-3">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`py-3 px-4 rounded-xl text-left font-medium ${
              selectedDay === day
                ? "bg-emerald-400 text-black"
                : "bg-emerald-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="w-3/4">
        <MealDetails
          selectedWeek={selectedWeek}
          selectedDay={selectedDay}
        />
      </div>

    </div>
  );
};

export default MealCard;
