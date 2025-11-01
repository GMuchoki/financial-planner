import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
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
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              ></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Financial Tracker</h1>
          <p className="text-base text-gray-600">Sign in to access your financial data</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg mb-4">
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="john@example.com"
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
            Sign In
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            Forgot your password?
          </button>
        </div>

        {/* Signup Link */}
        <div className="mt-4 text-center">
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Don’t have an account? Sign up
          </Link>
        </div>

        {/* Info Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 space-y-1">
          <p>🔒 Your data is securely stored and encrypted</p>
          <p>📱 Access from any device with your account</p>
          <p>☁️ Automatic sync across all your devices</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
