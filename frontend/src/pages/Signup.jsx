import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0-1.105.895-2 2-2h8m-6 8h-2a2 2 0 01-2-2v-4m4 4h2a2 2 0 002-2V7a2 2 0 00-2-2h-6a2 2 0 00-2 2v10a2 2 0 002 2h1"
              ></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-base text-gray-600">
            Join Financial Tracker and take control of your future
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg mb-4">
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              minLength="6"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Create Account
          </button>
        </form>

        {/* Login Redirect */}
        <div className="mt-4 text-center">
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Already have an account? Sign in
          </Link>
        </div>

        {/* Info Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 space-y-1">
          <p>💡 Get started tracking your income and expenses instantly</p>
          <p>🔐 Your credentials are stored securely with Supabase Auth</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
