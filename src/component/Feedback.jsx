import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Feedback = () => {
    const [formData, setFormData] = useState({
        mealSuggestion: '',
        rating: 5,
        comments: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = sessionStorage.getItem('token');
            console.log('Submitting feedback with token:', token);
            console.log('Feedback data:', formData);
            await axios.post('https://meal-backend-64oz.onrender.com/feedback/add', formData, {
                headers: { Authorization: token }
            });
            
            toast.success('Feedback submitted successfully!');
            setFormData({ mealSuggestion: '', rating: 5, comments: '' });
        } catch (error) {
            console.log('Feedback submission error:', error.response?.data || error.message);
            toast.error(error.response?.data?.message || 'Error submitting feedback');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
            <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center pt-8">Share Your Meal Experience</h2>
            
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl">🍽️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Meal Feedback & Suggestions</h3>
                        <p className="text-gray-600">Help us improve our hostel dining experience with your valuable feedback</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">🍲 Meal Suggestion *</label>
                                <input
                                    type="text"
                                    value={formData.mealSuggestion}
                                    onChange={(e) => setFormData({...formData, mealSuggestion: e.target.value})}
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                    placeholder="Suggest a delicious meal for our menu"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">⭐ Your Rating *</label>
                                <select
                                    value={formData.rating}
                                    onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                >
                                    {[1,2,3,4,5].map(num => (
                                        <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''} - {num === 1 ? 'Poor' : num === 2 ? 'Fair' : num === 3 ? 'Good' : num === 4 ? 'Very Good' : 'Excellent'}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">💬 Additional Comments</label>
                            <textarea
                                value={formData.comments}
                                onChange={(e) => setFormData({...formData, comments: e.target.value})}
                                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                rows="4"
                                placeholder="Share your thoughts about the meal quality, taste, or any suggestions for improvement..."
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
                            >
                                <span className="text-xl">🚀</span>
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                </div>

                {/* Tips Section */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    <div className="bg-emerald-50 rounded-xl p-6 text-center">
                        <div className="text-3xl mb-3">🍳</div>
                        <h4 className="font-semibold text-emerald-800 mb-2">Suggest New Dishes</h4>
                        <p className="text-emerald-700 text-sm">Help us expand our menu with your favorite meal ideas</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6 text-center">
                        <div className="text-3xl mb-3">📊</div>
                        <h4 className="font-semibold text-blue-800 mb-2">Rate Honestly</h4>
                        <p className="text-blue-700 text-sm">Your honest ratings help us maintain quality standards</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6 text-center">
                        <div className="text-3xl mb-3">👥</div>
                        <h4 className="font-semibold text-purple-800 mb-2">Community Impact</h4>
                        <p className="text-purple-700 text-sm">Your feedback improves dining for all hostel residents</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;