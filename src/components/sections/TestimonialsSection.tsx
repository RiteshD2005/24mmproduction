import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { Card } from '../ui/Card';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-scroll functionality
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Pause auto-scroll on hover
  const pauseAutoScroll = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeAutoScroll = () => {
    if (intervalRef.current === null) {
      intervalRef.current = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Feedback</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What our clients have to say about their experience working with us
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
          ref={sliderRef}
        >
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8" glassEffect>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                        <img 
                          src={testimonial.imageUrl} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-blue-400">{testimonial.company}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400" fill="#FBBF24" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 italic text-lg leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-black/70 p-2 rounded-full hover:bg-blue-500/80 transition-colors"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-8 bg-black/70 p-2 rounded-full hover:bg-blue-500/80 transition-colors"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Dots Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;