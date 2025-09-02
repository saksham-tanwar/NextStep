import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

function Testimonials() {
    const testimonials = [
        {
            name: "Priya Singh",
            role: "Engineering Student",
            quote: "This platform helped me find the perfect engineering college in my city. The career guidance was invaluable.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        },
        {
            name: "Rahul Kumar",
            role: "Arts Student",
            quote: "I was confused about my career path after 12th. The personalized guidance helped me make the right choice.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        },
        {
            name: "Aisha Patel",
            role: "Science Student",
            quote: "The scholarship resources helped me continue my education. I'm grateful for this platform.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        }
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center fw-bold mb-5">Student Success Stories</h2>
                <div className="row g-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-md-4">
                            <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                                <div className="text-primary mb-3">
                                    <FaQuoteLeft size={24} />
                                </div>
                                <p className="mb-4">{testimonial.quote}</p>
                                <div className="d-flex align-items-center">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                        className="rounded-circle me-3"
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                                        <small className="text-muted">{testimonial.role}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;