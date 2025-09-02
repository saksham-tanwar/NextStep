import React from 'react';
import Hero from './Hero';
import Showcase from '../components/Showcase';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="home">
            <Hero />
            <Showcase />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default Home;