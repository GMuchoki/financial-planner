import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white transition-colors duration-500">
      {/* Navbar */}
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            FT
          </div>
          <h2 className="text-lg font-semibold">Financial Tracker</h2>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium transition"
          >
            Get Started Free
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Take Control of Your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
            Financial Future
          </span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Track expenses, manage budgets, and achieve your financial goals with
          our powerful yet simple financial management platform.
        </p>
        <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-4">
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transition"
          >
            Start Tracking Free →
          </Link>
          <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 border border-gray-200 shadow-sm transition">
            See How It Works
          </button>
        </div>
        <div className="flex justify-center items-center gap-12 text-sm flex-wrap">
          {[
            { label: "Free Forever", icon: "💎" },
            { label: "Bank-Level Security", icon: "🔒" },
            { label: "Mobile Friendly", icon: "📱" },
            { label: "Cloud Synced", icon: "☁️" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl mb-1 text-blue-600">{item.icon}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white transition-colors duration-500">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything You Need to Succeed
        </h2>
        <p className="text-gray-600 text-center mb-16">
          Powerful features designed to make financial management effortless
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            {
              icon: "💰",
              title: "Income & Expense Tracking",
              desc: "Track every transaction effortlessly. Categorize income and expenses automatically for clear financial visibility.",
            },
            {
              icon: "📊",
              title: "Smart Analytics",
              desc: "Visualize your spending with charts that help you understand your patterns and make informed decisions.",
            },
            {
              icon: "🎯",
              title: "Budget Management",
              desc: "Set budgets by category and track your progress. Get alerts when you're approaching your limit.",
            },
            {
              icon: "🎖️",
              title: "Financial Goals",
              desc: "Set and track your goals. Stay motivated with visual progress indicators and milestone celebrations.",
            },
            {
              icon: "🔄",
              title: "Recurring Transactions",
              desc: "Automate tracking for bills and salaries. Never miss a payment or forget to log regular income.",
            },
            {
              icon: "📤",
              title: "Import & Export",
              desc: "Import transactions easily. Your data is always accessible and portable.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 shadow-sm group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-center transition-colors duration-500">
        <h2 className="text-4xl font-bold mb-4">Getting Started is Easy</h2>
        <p className="text-gray-600 mb-16">
          Three simple steps to financial clarity
        </p>
        <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto px-6">
          {[
            {
              step: 1,
              color: "bg-blue-600",
              title: "Sign Up Free",
              desc: "Create your account in seconds. No credit card required, no hidden fees.",
            },
            {
              step: 2,
              color: "bg-blue-500",
              title: "Add Transactions",
              desc: "Start logging your income and expenses. Import existing data or start fresh.",
            },
            {
              step: 3,
              color: "bg-blue-400",
              title: "Track & Achieve",
              desc: "Monitor your progress, get insights, and achieve your financial goals.",
            },
          ].map((item) => (
            <div key={item.step}>
              <div
                className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg`}
              >
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose Financial Tracker?
          </h2>
          <p className="text-center text-blue-100 mb-12">
            Join thousands of users who have taken control of their finances
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mb-12">
            {[
              { icon: "🎯", title: "Goal Oriented", desc: "Set and track financial goals" },
              { icon: "📈", title: "Visual Insights", desc: "Beautiful charts and analytics" },
              { icon: "🔒", title: "Secure & Private", desc: "Your data is encrypted" },
              { icon: "⚡", title: "Lightning Fast", desc: "Instant, responsive experience" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition border border-white/20"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/signup"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 shadow-xl hover:shadow-2xl transition"
            >
              Start Your Financial Journey Today →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                FT
              </div>
              <h4 className="text-white font-semibold">Financial Tracker</h4>
            </div>
            <p className="text-sm text-gray-500">
              Take control of your finances with our powerful yet simple platform.
            </p>
          </div>

          <div>
            <h5 className="text-white font-medium mb-3">Features</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Income Tracking</li>
              <li className="hover:text-white transition">Expense Management</li>
              <li className="hover:text-white transition">Budget Planning</li>
              <li className="hover:text-white transition">Goal Setting</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-medium mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">Terms of Service</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-medium mb-3">Support</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Help Center</li>
              <li className="hover:text-white transition">Documentation</li>
              <li className="hover:text-white transition">API Reference</li>
              <li className="hover:text-white transition">Community</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-xs text-gray-600">
            Made with ❤️ for better financial management
          </p>
          <p className="text-center text-xs text-gray-600 mt-2">
            © {new Date().getFullYear()} Financial Tracker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
