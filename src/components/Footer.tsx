import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
const Footer = () => {
  const quickLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'About Us',
    href: '#about'
  }, {
    name: 'Gallery',
    href: '#gallery'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const services = ['Royal Full Service', 'Signature Styling', 'Luxury Spa Package', 'Express Refresh', 'Puppy First Timer', 'Senior Pet Care'];
  return <footer className="bg-luxury-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold text-luxury-gold mb-4">Wizard Of Paws</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Premium dog grooming and spa services designed for the discerning pet owner. Where luxury meets compassionate care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors duration-300" aria-label="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Follow us on Facebook" className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors duration-300 mx-[12px]">
                <Facebook className="h-5 w-5" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-luxury-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-luxury-gold transition-colors duration-300">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-luxury-gold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map(service => <li key={service}>
                  <a href="#services" className="text-white/80 hover:text-luxury-gold transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-luxury-gold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  <div>366 Broadway St W,</div>
                  <div>Yorkton, SK S3N 0N9</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <a href="tel:+15551234567" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">(306) 621-0985</a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <a href="mailto:hello@luxepaws.com" className="text-white/80 hover:text-luxury-gold transition-colors duration-300">
                  hello@luxepaws.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="text-luxury-gold font-medium mb-2">Business Hours</h5>
              <div className="text-sm text-white/80 space-y-1">
                <div>Mon-Fri: 8am-7pm</div>
                <div>Sat-Sun: 9am-6pm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-playfair font-semibold text-luxury-gold mb-4">
              Stay Updated with Luxe Paws
            </h4>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for grooming tips, special offers, and pet care insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-luxury-gold" />
              <button className="bg-luxury-gold hover:bg-luxury-bronze text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">© 2024 Wizard of Paws. All rights reserved.</div>
            
            <div className="flex items-center space-x-1 text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-luxury-gold fill-luxury-gold" />
              <span>for pets and their families</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;