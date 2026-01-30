import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignupForm = () => {
    const [name, setname] = useState('');
    const [role, setrole] = useState('');
    const [email, setemail] = useState('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleNameChange = (e) => {
        setname(e.target.value);
    }

    const handleRole = (e) => {
        setrole(e.target.value)
    }

    const handleEmail=(e)=>{
        setemail(e.target.value)
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const {data}=await axios.post("http://localhost:3000/auth/register",{
                name:name,
                email:email,
                password:passwordRef.current.value,
                role:role
            });
            toast.success(data.message);
            navigate('/login');
        } catch (error) {
            toast.error('Registration failed');
        }
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative" style={{backgroundImage:"url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                        <h1 className="text-4xl font-bold mb-4">Join Meal Planner</h1>
                        <p className="text-xl opacity-90">Start planning your meals and sharing feedback today</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="max-w-md w-full">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">👨‍🍳</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                            <p className="text-gray-600 mt-2">Join our meal planning community</p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your full name" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-gray-900 placeholder-gray-500"
                                    value={name} 
                                    onChange={handleNameChange} 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-gray-900 placeholder-gray-500"
                                    value={email} 
                                    onChange={handleEmail} 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input 
                                    type="password" 
                                    placeholder="Create a password" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-gray-900 placeholder-gray-500"
                                    ref={passwordRef} 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                <select 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-gray-900"
                                    value={role} 
                                    onChange={handleRole}
                                >
                                    <option value="">Select your role</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2" 
                                onClick={handleSumbit}
                            >
                                Create Account
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Already have an account? {' '}
                                <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold transition">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;