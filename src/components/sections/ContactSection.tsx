import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your next creative project? Reach out to us for a consultation
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6 md:p-8" glassEffect>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="rounded-full bg-green-500/20 p-4 mb-4">
                  <Check className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-center">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="event">Event Coverage</option>
                      <option value="restaurant">Restaurant Shoots</option>
                      <option value="product">Product Photography</option>
                      <option value="professional">Professional Videos</option>
                      <option value="editing">Editing Services</option>
                      <option value="social">Social Media</option>
                      <option value="website">Website Development</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    icon={<Send className="h-5 w-5" />}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6" glassEffect>
              <div className="flex items-start">
                <div className="rounded-full bg-blue-500/20 p-3 mr-4">
                  <MapPin className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Location</h3>
                  <p className="text-gray-400">
                    123 Creative Avenue, Suite 200<br />
                    New York, NY 10012
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6" glassEffect>
              <div className="flex items-start">
                <div className="rounded-full bg-purple-500/20 p-3 mr-4">
                  <Phone className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-400">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6" glassEffect>
              <div className="flex items-start">
                <div className="rounded-full bg-pink-500/20 p-3 mr-4">
                  <Mail className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400">
                    info@24mm.studio<br />
                    bookings@24mm.studio
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6" glassEffect>
              <div className="flex items-start">
                <div className="rounded-full bg-yellow-500/20 p-3 mr-4">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                  <p className="text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;