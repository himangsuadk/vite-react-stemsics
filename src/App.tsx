import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
    const handleNavigate = (view: string) => {
        // Placeholder for compatibility if needed, but Navbar handles links now
        console.log("Navigating to", view);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-rose-100 selection:text-rose-900">
            <Navbar />
            <main>
                <Hero onNavigate={handleNavigate} />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Pricing />
            </main>
            <Footer onNavigate={handleNavigate} />
        </div>
    );
}

export default App;
