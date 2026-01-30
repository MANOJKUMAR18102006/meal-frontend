import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AdminPage = () => {
    const navigate = useNavigate();
    const [feedbacks, setFeedbacks] = useState([]);
    const [contacts, setContacts] = useState([]);

    const [week, setWeek] = useState("");
    const [day, setDay] = useState("");
    const [breakfast, setBreakfast] = useState("");
    const [lunch, setLunch] = useState("");
    const [dinner, setDinner] = useState("");

    useEffect(() => {
        fetchFeedbacks();
        fetchContacts();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const token = sessionStorage.getItem("token");
            console.log('Fetching feedbacks with token:', token);
            const response = await axios.get("http://localhost:3000/feedback", {
                headers: { Authorization: token }
            });
            console.log('Feedbacks response:', response.data);
            setFeedbacks(response.data);
        } catch (error) {
            console.log('Feedback fetch error:', error.response?.data || error.message);
        }
    };

    const fetchContacts = async () => {
        try {
            const token = sessionStorage.getItem("token");
            const response = await axios.get("http://localhost:3000/contact", {
                headers: { Authorization: token }
            });
            setContacts(response.data);
        } catch (error) {
            console.log('Contact fetch error:', error.response?.data || error.message);
        }
    };

    const handleWeek = (e) => {
        setWeek(e.target.value);
    };

    const handleDay = (e) => {
        setDay(e.target.value);
    };

    const handleBreakfast = (e) => {
        setBreakfast(e.target.value);
    };

    const handleLunch = (e) => {
        setLunch(e.target.value);
    };

    const handleDinner = (e) => {
        setDinner(e.target.value);
    };

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            const token = sessionStorage.getItem("token");

            await axios.post(
                "http://localhost:3000/meal/add",
                {
                    week,
                    day,
                    breakfast,
                    lunch,
                    dinner
                },
                {
                    headers: {
                        Authorization:token
                    }
                }
            );

            toast.success("meal added succesfully");
            setWeek("");
            setDay("");
            setBreakfast("");
            setLunch("");
            setDinner("");
        } catch (err) {
            console.log('Add meal error:', err.response?.data || err.message);
            toast.error(err.response?.data?.error || "Failed to add meal");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-emerald-800 text-white py-6">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-emerald-200 mt-2">Manage meals and view user feedback</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700">Total Feedback</h3>
                        <p className="text-3xl font-bold text-emerald-600">{feedbacks.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700">Average Rating</h3>
                        <p className="text-3xl font-bold text-yellow-500">
                            {feedbacks.length > 0 ? (feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length).toFixed(1) : '0'} ⭐
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700">This Week</h3>
                        <p className="text-3xl font-bold text-blue-600">{feedbacks.filter(f => new Date(f.createdAt) > new Date(Date.now() - 7*24*60*60*1000)).length}</p>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Add Meal Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="bg-emerald-100 p-2 rounded-lg mr-3">🍽️</span>
                            Add New Meal
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Week</label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={week} onChange={handleWeek}>
                                    <option value="">Select Week</option>
                                    <option value="Week1">Week 1</option>
                                    <option value="Week2">Week 2</option>
                                    <option value="Week3">Week 3</option>
                                    <option value="Week4">Week 4</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Day</label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={day} onChange={handleDay}>
                                    <option value="">Select Day</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                    <option>Saturday</option>
                                    <option>Sunday</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">🌅 Breakfast</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={breakfast} onChange={handleBreakfast} placeholder="Enter breakfast menu"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">☀️ Lunch</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={lunch} onChange={handleLunch} placeholder="Enter lunch menu"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">🌙 Dinner</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" value={dinner} onChange={handleDinner} placeholder="Enter dinner menu"/>
                                </div>
                            </div>

                            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition" onClick={handleAdd}>
                                Add Meal Plan
                            </button>
                        </form>
                    </div>

                    {/* Feedback Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="bg-blue-100 p-2 rounded-lg mr-3">💬</span>
                            User Feedback ({feedbacks.length})
                        </h2>
                        
                        <div className="max-h-96 overflow-y-auto space-y-4">
                            {feedbacks.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    <p>No feedback yet</p>
                                </div>
                            ) : (
                                feedbacks.map((feedback) => (
                                    <div key={feedback._id} className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold text-gray-800">{feedback.mealSuggestion}</h3>
                                            <div className="flex items-center">
                                                <span className="text-yellow-500 text-sm">{'★'.repeat(feedback.rating)}</span>
                                                <span className="text-gray-400 ml-1">({feedback.rating}/5)</span>
                                            </div>
                                        </div>
                                        {feedback.comments && (
                                            <p className="text-gray-600 text-sm mb-2 italic">"{feedback.comments}"</p>
                                        )}
                                        <div className="flex justify-between items-center text-xs text-gray-500">
                                            <span>By: {feedback.user?.name || "Anonymous"}</span>
                                            <span>{new Date(feedback.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
