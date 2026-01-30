import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router"
import { toast } from "react-toastify";
const Navigation = () => {
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const logged = sessionStorage.getItem("isLogged");
        setIsLogged(logged === "true");
    }, []);

    const handlelogin = () => {
        navigate('/login');
    }

    const handlesignup=()=>{
        navigate('/signup');
    }

    const handlelogout = () => {
        sessionStorage.clear(); 
        setIsLogged(false);
        toast.success("Logged out successfully");
        navigate("/");
    };

    return (
        <>
            <div className="w-full">
                {!isLogged?
                <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white flex justify-between items-baseline">
                    <h1 className="font-bold text-xl pl-4 text-emerald-50">MealMate</h1>
                    <nav className="space-x-5 text-emerald-100 font-semibold">
                        <Link to="/" className="hover:text-yellow-300">Home</Link>
                        <Link to="/meals" className="hover:text-yellow-300">Meal-Schedule</Link>
                        <Link to="/feedback" className="hover:text-yellow-300">Feedback</Link>
                        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
                    </nav>
                    <div className="text-white space-x-3 mr-3">
                        <button className="bg-blue-600 hover:bg-blue-700 p-2 pl-4 pr-4 rounded-[30px] m-3 hover:bg-white hover:text-stone-900" onClick={handlelogin}>Login</button>
                        <button className="bg-green-950 p-2 pl-3 pr-3 rounded-[30px] m-3 hover:bg-white hover:text-stone-900" onClick={handlesignup}>Sign Up</button>
                    </div>
                </div>
                :(
                    <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white flex justify-between items-baseline">
                    <h1 className="font-bold text-xl pl-4 text-emerald-50">MealMate</h1>
                    <nav className="space-x-5 text-emerald-100 font-semibold">
                        <Link to="/" className="hover:text-yellow-300">Home</Link>
                        <Link to="/meals" className="hover:text-yellow-300">Meal-Schedule</Link>
                        <Link to="/feedback" className="hover:text-yellow-300">Feedback</Link>
                        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
                    </nav>
                    <div className="text-white space-x-3 mr-3">
                        <button className="bg-green-950 p-2 pl-3 pr-3 rounded-[30px] m-3 hover:bg-white hover:text-stone-900" onClick={handlelogout}>Logout</button>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}

export default Navigation;