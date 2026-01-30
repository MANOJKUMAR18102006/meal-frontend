const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className="mb-6">
                        <span className="text-5xl">📞</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
                        Have questions or suggestions? We'd love to hear from you!
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center mb-4">
                            <span className="text-3xl mr-4">📧</span>
                            <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                        </div>
                        <p className="text-gray-600">warden@mealmate.com</p>
                        <p className="text-gray-600">admin@mealmate.com</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center mb-4">
                            <span className="text-3xl mr-4">📞</span>
                            <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                        </div>
                        <p className="text-gray-600">+91 6375348421</p>
                        <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center mb-4">
                            <span className="text-3xl mr-4">📍</span>
                            <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
                        </div>
                        <p className="text-gray-600">Sri Eshwar College campus</p>
                        <p className="text-gray-600">Coimbatore , Tamil Nadu</p>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <div className="bg-emerald-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold text-emerald-800 mb-4">Office Hours</h3>
                        <div className="space-y-2 text-emerald-700">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold text-emerald-800 mb-4">Quick Support</h3>
                        <div className="space-y-2 text-emerald-700">
                            <p>• For meal suggestions, use our feedback form</p>
                            <p>• Report issues within 24 hours</p>
                            <p>• Emergency contact: +1 (555) 999-0000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;