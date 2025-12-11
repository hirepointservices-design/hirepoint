import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-12 pt-10">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* ABOUT US */}
        <div>
          <h3 className="font-bold text-lg mb-3">About Us</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a className="hover:text-white">Journey of YasHas</a></li>
            <li><a className="hover:text-white">Vision Statement</a></li>
            <li><a className="hover:text-white">Organization Structure</a></li>
          </ul>
        </div>

        {/* TRAINING */}
        <div>
          <h3 className="font-bold text-lg mb-3">Training & Development</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a className="hover:text-white">Overview</a></li>
          </ul>
        </div>

        {/* STAFFING */}
        <div>
          <h3 className="font-bold text-lg mb-3">Staffing</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a className="hover:text-white">Permanent Staffing</a></li>
            <li><a className="hover:text-white">Contract Staffing</a></li>
          </ul>
        </div>

        {/* ORGANISATIONAL DEVELOPMENT */}
        <div>
          <h3 className="font-bold text-lg mb-3">Organisational Development</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a className="hover:text-white">Overview</a></li>
            <li><a className="hover:text-white">Thomas Assessments</a></li>
          </ul>
        </div>

        {/* NAPS + NATS */}
        <div>
          <h3 className="font-bold text-lg mb-3">National Apprenticeship Training (NAPS)</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a href="#exampleModal" className="hover:text-white">Brochure</a></li>
          </ul>

          <h3 className="font-bold text-lg mt-4 mb-3">National Apprenticeship Training Scheme (NATS)</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a href="#exampleModal2" className="hover:text-white">Brochure</a></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-10 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CONNECT WITH US */}
          <div>
            <h3 className="font-semibold mb-3">Connect with Us</h3>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=100009297887874"
                target="_blank"
                className="hover:text-blue-400"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://in.linkedin.com/in/chandrashekher-shetty-k-727b7310"
                target="_blank"
                className="hover:text-blue-300"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* SUBSCRIBE */}
          <div>
            <h3 className="font-semibold mb-3">Subscribe with Us</h3>
            <form
              action="//protechtheme.us16.list-manage.com/subscribe/post?u=cd5f66d2922f9e808f57e7d42&amp;id=ec6767feee"
              method="post"
              target="_blank"
              className="flex"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
                className="p-2 rounded-l bg-slate-800 border border-slate-600 text-white w-full"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 rounded-r text-white"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* PRIVACY + COPYRIGHT */}
          <div className="text-sm text-slate-300">
            <a
              href="https://yashas.asia/privacypolicy"
              className="hover:text-white"
            >
              PRIVACY POLICY
            </a>

            <p className="mt-4">
              © {new Date().getFullYear()} <span className="font-bold">HirePoint</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
