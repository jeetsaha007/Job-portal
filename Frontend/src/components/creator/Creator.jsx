import React from 'react'
import Navbar from '../components_lite/Navbar'
import Akash from './Akash.jpeg'; 
import Jeet from './Jeet.jpeg';
import Sudipta from './Sudipta.jpeg';
import Sohini from './Sohini.jpeg';

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={Akash} alt="Akash" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Akash</h2>
            <p className="text-gray-600 mb-2">Akash completed his <strong>BCA</strong> from <strong>Techno India College of Technology</strong>, in <strong>2025</strong>.</p>
          </div>
        </div>
      </div>
      
      <hr className="w-full border-gray-300 my-6" />
      
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Developers and Designers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Developer 1 - Jeet */}
           <a href="#" className="block text-center">
            <img src={Jeet} alt="Jeet" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Jeet</h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125035</p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
          {/* Developer 2 - Sudipta */}
          <a href="#" className="block text-center">
            <img src={Sudipta} alt="Sudipta" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Sudipta</h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125043</p>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </a>
          {/* Developer 3 - Sohini */}
          <a href="#" className="block text-center">
            <img src={Sohini} alt="Sohini" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Sohini</h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125023</p>
            <p className="text-gray-600 text-sm">Research</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Creator