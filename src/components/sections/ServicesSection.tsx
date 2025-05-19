import React, { useState } from 'react';
import { services } from '../../data/services';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';
import { Camera, Video, Utensils, Box, Mic, Edit, Instagram, Code } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-10 w-10" };
    switch (iconName) {
      case 'camera': return <Camera {...iconProps} />;
      case 'video': return <Video {...iconProps} />;
      case 'utensils': return <Utensils {...iconProps} />;
      case 'box': return <Box {...iconProps} />;
      case 'mic': return <Mic {...iconProps} />;
      case 'edit': return <Edit {...iconProps} />;
      case 'instagram': return <Instagram {...iconProps} />;
      case 'code': return <Code {...iconProps} />;
      default: return <Camera {...iconProps} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive creative solutions tailored to your unique needs.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="h-full transition-all duration-300 hover:transform hover:scale-[1.02]"
              glassEffect
              glowBorder={activeService === service.id}
              hoverEffect
            >
              <CardHeader>
                <div className={`rounded-full p-3 inline-flex mb-4 bg-gradient-to-r ${service.color}`}>
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-400 mb-5">{service.description}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-auto"
                  onClick={() => setActiveService(service.id === activeService ? null : service.id)}
                >
                  Learn More
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;