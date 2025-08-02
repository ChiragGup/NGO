import React from 'react';
import { useNavigate } from "react-router-dom";

function About() {
     const navigate = useNavigate();
  const handleJoin = ()=>{
      navigate("/form"); 
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-10 space-y-6">
        <h1 className="text-4xl font-bold text-blue-700 text-center">About Our NGO</h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          We are a non-profit organization dedicated to creating a better and more sustainable future for
          underserved communities. Our mission is to bring people together and empower them through education,
          healthcare, environmental action, and social inclusion.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">🌱 Our Mission</h2>
            <p className="text-gray-600">
              To serve humanity by implementing impactful programs and initiatives that uplift lives and build
              stronger communities.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">🌍 Our Vision</h2>
            <p className="text-gray-600">
              A world where everyone has access to opportunity, dignity, and the resources needed to thrive.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">🤝 Our Values</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Compassion & Empathy</li>
              <li>Transparency</li>
              <li>Collaboration</li>
              <li>Equality & Inclusion</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">📍 Where We Work</h2>
            <p className="text-gray-600">
              We currently operate in rural and urban areas across India, focusing on areas with the highest need.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md text-lg transition" onClick={handleJoin}>
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
