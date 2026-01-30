import { useNavigate } from "react-router";
import Footer from "./component/Footer";

const App = () => {
  const navigate = useNavigate();

  const handlefeedback=()=>{
    navigate("/feedback");
  }

  const handlemeal=()=>{
    navigate("/meals");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-6xl mb-4 block">🍽️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hostel Meal Planner
              <span className="block text-emerald-300">&amp; Feedback</span>
            </h1>
            <p className="text-emerald-100 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover delicious hostel menus, share your food experiences, and help us create better dining moments for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handlemeal}
                className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
              >
                <span className="text-2xl">📅</span>
                View Weekly Menu
              </button>

              <button
                onClick={handlefeedback}
                className="border-2 border-emerald-200 text-white hover:bg-emerald-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">💬</span>
                Share Feedback
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Meal Planner?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Experience the best hostel dining with our comprehensive meal planning and feedback system</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4 text-center">🍳</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Weekly Menus</h3>
              <p className="text-gray-600 text-center leading-relaxed">Browse through carefully planned weekly menus with nutritious and delicious meal options for every day.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4 text-center">⭐</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Rate &amp; Review</h3>
              <p className="text-gray-600 text-center leading-relaxed">Share your dining experience and help us improve our meal quality with your valuable feedback and ratings.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4 text-center">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Meal Suggestions</h3>
              <p className="text-gray-600 text-center leading-relaxed">Suggest new meal ideas and help create a diverse menu that everyone will love and enjoy.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App;