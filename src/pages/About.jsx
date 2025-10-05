import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-700 mb-6">About Ihsan Tasks</h1>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
        <span className="font-semibold text-yellow-600">Ihsan Tasks</span> was built with the intentions of providing a place where productivity meet faith. There is a principle called excellence in islam which is why we named it <em>Ihsan</em>. Just like we excel in our day to day life why not make it more inclusive and kill two birds with one stone. So that we can win the good of both world (duniya and akhira). Come join us to make this world better.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8 shadow">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To provide a productive place and bridge the gap between this world and the hereafter. By letting you be productive with your tasks and managing it for you we lift a chip from your shoulder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Task Management</h3>
            <p className="text-gray-600">Easily add, edit, and track your tasks. Stay productive and organised.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Daily Inspiration</h3>
            <p className="text-gray-600">Read verses, hadith, and duas to make your life more blessed and full of barakah.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">Faith-Centered</h3>
            <p className="text-gray-600">Bridge the gap between this world of ours and the hereafter and align your faith with your tasks</p>
          </div>
        </div>

        <p className="text-gray-500 italic">
          “Verily, Allah loves those who strive for excellence (IHSAN) in all that they do.”  
        </p>
      </div>
    </div>
  );
}
