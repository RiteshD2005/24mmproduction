import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from '../ui/Link';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = ["Stories", "Moments", "Experiences", "Emotions"];
  
  useEffect(() => {
    setLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-camera-in-a-studio-34486-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block mb-2">Capturing Your</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {rotatingTexts[currentTextIndex]}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Premium creative agency specializing in photography, videography, and digital media production.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-medium"
            >
              View Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-medium"
            >
              Get in Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="#about" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;