import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full">
       
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 bg-opacity-70 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-sm md:text-base max-w-2xl">
            Have questions or need assistance? We’re here to help you every step
            of the way.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Get In Touch With Us
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you’re curious about features, have a question about
              pricing, or simply want to connect — we’d love to hear from you.
              Reach out and our team will get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-800">
                <span className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-3 rounded-xl shadow-md">
                  📞
                </span>
                <span className="text-lg font-medium">0800 555 44 33</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <span className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-3 rounded-xl shadow-md">
                  ✉️
                </span>
                <span className="text-lg font-medium">support@example.com</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you? Feel free to get in touch!"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
