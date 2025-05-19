import React, { useEffect, useRef } from 'react';
import { Camera, Video, Users, Award } from 'lucide-react';
import { Card } from '../ui/Card';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in-element');
    fadeElements?.forEach((el) => observer.observe(el));
    
    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const stats = [
    { icon: <Camera className="h-8 w-8 text-blue-500" />, value: "500+", label: "Projects Completed" },
    { icon: <Video className="h-8 w-8 text-purple-500" />, value: "100+", label: "Wedding Films" },
    { icon: <Users className="h-8 w-8 text-pink-500" />, value: "300+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8 text-yellow-500" />, value: "12+", label: "Years Experience" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-element opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-element opacity-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Crafting Visual Stories Since 2010</h3>
            <p className="text-gray-300 mb-6">
              At 24MM, we transform ordinary moments into extraordinary memories. Our team of passionate creatives combine technical expertise with artistic vision to deliver stunning visual content that captivates and inspires.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you're looking to document a special occasion, showcase your products, or build your brand's digital presence, we bring your vision to life with cinematic quality and attention to detail.
            </p>
            <div className="flex items-center">
              <span className="inline-block h-1 w-10 bg-blue-500 mr-3"></span>
              <p className="italic text-gray-400">
                "Your story, our lens - creating memories that last a lifetime."
              </p>
            </div>
          </div>
          
          <div className="relative fade-in-element opacity-0">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl shadow-blue-500/10">
              <img 
                src="https://images.pexels.com/photos/3379257/pexels-photo-3379257.jpeg" 
                alt="Team at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-40 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/10 hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3730576/pexels-photo-3730576.jpeg" 
                alt="Photography equipment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center p-6 fade-in-element opacity-0"
              glassEffect
              glowBorder
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;