import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Phone , Mail } from 'lucide-react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-black to-gray-900 text-white min-h-screen font-sans">
        <header className="p-4 bg-gradient-to-r from-black to-gray-900 ">
          <nav className="flex justify-between items-center">
            <h1 className="text-3xl font-thin">Dev Ruhela - Portfolio</h1>
            <ul className="flex space-x-4">
              <li><a href="https://www.linkedin.com/in/dev-ruhela-36a29b28b/" className="flex items-center space-x-2 hover:text-teal-400 transition" target='blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>                    <span></span>
                  </a>
              </li>
              <li><a href="https://github.com/DevRuhela028" className="flex items-center space-x-2 hover:text-teal-400 transition" target='blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span></span>
                  </a>
              </li>
              
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer className="p-4 bg-gradient-to-r from-black to-gray-900 mt-8 text-center text-white">
  <div className="mb-4">
    <h2 className="text-2xl font-light text-teal-400 mb-2">Contact Me</h2>
    <p className="text-gray-300">Feel free to reach out to me via phone or email.</p>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-4">
    <a href="tel:+917302611179" className="flex items-center space-x-2 hover:text-teal-400 transition">
      <Phone className='h-5'/>
      <span>+91 7302611179</span>
    </a>

    <a href="mailto:dev.ruhela120@gmail.com" className="flex items-center space-x-2 hover:text-teal-400 transition">
      <Mail className='h-5' />
      <span>dev.ruhela120@gmail.com</span>
    </a>
  </div>

  <p className="mt-8 text-gray-500 text-sm">
    © 2024 Dev Ruhela. All rights reserved.
  </p>
</footer>

      </div>
    </Router>
  );
}

export default App;