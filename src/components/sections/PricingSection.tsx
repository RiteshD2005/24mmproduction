import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { pricingTiers, pricingOptions } from '../../data/pricing';
import { Card, CardHeader, CardBody, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';

const PricingSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState('premium');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const handleOptionToggle = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter(id => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };
  
  const selectedTierData = pricingTiers.find(tier => tier.id === selectedTier);
  
  const calculateTotal = () => {
    let total = selectedTierData?.basePrice || 0;
    
    selectedOptions.forEach(optionId => {
      const option = pricingOptions.find(opt => opt.id === optionId);
      if (option) {
        total += option.price;
      }
    });
    
    return total;
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Flexible options to meet your needs and budget
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </div>
        
        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.id}
              className={`h-full transition-all duration-300 ${
                tier.popular 
                  ? 'border-2 border-blue-500/50 shadow-lg shadow-blue-500/20 -translate-y-4 md:-translate-y-6' 
                  : 'border border-gray-800'
              } ${
                selectedTier === tier.id 
                  ? 'ring-2 ring-blue-500'
                  : ''
              }`}
              glassEffect
            >
              {tier.popular && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                <div className="text-3xl font-bold mb-1">
                  ${tier.basePrice}
                </div>
                <p className="text-gray-400 text-sm">starting price</p>
              </CardHeader>
              
              <CardBody>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1">
                        <Check className="h-5 w-5 text-blue-500" />
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              
              <CardFooter className="text-center">
                <Button
                  fullWidth
                  variant={tier.id === selectedTier ? 'primary' : 'outline'}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  {tier.id === selectedTier ? 'Selected' : 'Select Plan'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Customization Options */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Customize Your Package</h3>
            <p className="text-gray-400">Add specialized services to your selected package</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {pricingOptions.map((option) => (
              <div 
                key={option.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedOptions.includes(option.id)
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => handleOptionToggle(option.id)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{option.name}</h4>
                  <div className="flex items-center">
                    <HelpCircle className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="font-medium text-blue-400">${option.price}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  {services.find(s => s.id === option.serviceId)?.title}
                </p>
              </div>
            ))}
          </div>
          
          {/* Total Calculation */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-gray-400 mb-1">Your Customized Package</p>
              <div className="text-2xl font-bold">Total: ${calculateTotal()}</div>
            </div>
            <Button size="lg" className="mt-4 md:mt-0">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

// Importing services for the display of service titles
import { services } from '../../data/services';