import React from 'react';
import { Link } from '../ui/Link';
import { Camera, Instagram, Twitter, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="text-white flex items-center gap-2 font-bold text-xl mb-6">
              <Camera className="h-6 w-6 text-blue-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                24MM
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Premium creative agency specializing in photography, videography, and digital media production. Bringing your vision to life with cinematic quality.
            </p>
            <div className="flex space-x-3">
              <Link 
                href="https://instagram.com" 
                className="bg-gray-800 hover:bg-blue-500 rounded-full p-2.5 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="bg-gray-800 hover:bg-blue-500 rounded-full p-2.5 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://facebook.com" 
                className="bg-gray-800 hover:bg-blue-500 rounded-full p-2.5 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                className="bg-gray-800 hover:bg-blue-500 rounded-full p-2.5 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://youtube.com" 
                className="bg-gray-800 hover:bg-blue-500 rounded-full p-2.5 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Event Coverage
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Product Photography
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Professional Videos
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Editing Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates, promotions, and creative insights.
            </p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-gray-800/50 border border-gray-700 rounded-l-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 rounded-r-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            <p className="text-gray-500 text-sm">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} 24MM Creative Agency. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;