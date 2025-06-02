import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
/* import Teaching from './components/sections/Teaching';
import Portfolio from './components/sections/Portfolio'; */
import Skills from './components/sections/Skills';
import Publications from './components/sections/Publications';
import Certifications from './components/sections/Certifications';

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/certifications" element={<Certifications />} />
          {/* <Route path="/teaching" element={<Teaching />} />
          <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;