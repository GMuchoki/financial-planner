import { supabase } from "../services/supabaseClient";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user?.email}</h1>
        <p className="text-gray-600 mb-6">Dashboard coming soon 🚀</p>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
        </button>
        </div>
    );
};

export default Dashboard;