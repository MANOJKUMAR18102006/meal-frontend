import { Link } from "react-router";

const Footer = () => {
    return (
        <>
            <div>
                <footer class="w-full bg-gradient-to-r from-emerald-800 to-emerald-600 text-slate-300 ">
                    <div class="w-full px-6 py-12 md:grid-cols-4 gap-10 flex justify-around">

                        <div>
                            <h2 class="text-2xl font-bold text-white mb-3">MealPlanner</h2>
                            <p>
                                This is for to view the meal for that day easily and give a suggestion for the meal
                            </p>
                            <p><strong>Email : </strong> mealmate@gmail.com</p>
                            <p><strong>Phone : </strong>+91 6374568321</p>
                            <p><strong>Website : </strong>www.mealmate.com</p>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
                            <ul class="space-y-2 text-sm">
                                <li><Link to="/" class="hover:text-white transition">Home</Link></li>
                                <li><Link to="/meals" class="hover:text-white transition">Meals</Link></li>
                                <li><Link to="#" class="hover:text-white transition">Feedback</Link></li>
                                <li><Link to="#" class="hover:text-white transition">About</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-white mb-4">Customer Support</h3>
                            <ul class="space-y-2 text-sm">
                                <li><Link to="#" class="hover:text-white transition">Contact Us</Link></li>
                                <li><Link to="#" class="hover:text-white transition">FAQs</Link></li>
                                <li><Link to="#" class="hover:text-white transition">Food Guidelines</Link></li>
                                <li><Link to="#" class="hover:text-white transition">Hostel Policy</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div class="border-t border-slate-900">
                        <div class="max-w-7xl mx-auto px-6 py-4 flex flex-row justify-between items-center">
                            <p>© 2025 MealPlanner. All rights reserved.</p>
                            <div class="flex space-x-4 mt-2 md:mt-0">
                                <Link to="#" class="hover:text-white">Privacy Policy</Link>
                                <Link to="#" class="hover:text-white">Terms</Link>
                                <Link to="#" class="hover:text-white">Cookies</Link>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Footer;