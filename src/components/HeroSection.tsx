
import { Button } from '@/components/ui/button';
import { Star, Award, Heart, MapPin, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 luxury-gradient"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-luxury-gold/20 backdrop-blur-sm rounded-full mb-8">
            <Award className="h-4 w-4 text-luxury-gold mr-2" />
            <span className="text-luxury-cream text-sm font-medium">8+ Years of Expert Grooming</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-luxury-cream mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-luxury-gold to-luxury-champagne bg-clip-text text-transparent">
              Wizard of Paws
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-luxury-cream/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We treat your pets like family. Our certified groomers in Yorkton, Saskatchewan deliver high-quality, compassionate grooming for dogs of all sizes, breeds, and personalities.
          </p>

          {/* Location & New Clients Info */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
            <div className="flex items-center text-luxury-cream/80">
              <MapPin className="h-5 w-5 text-luxury-gold mr-2" />
              <span className="text-lg">Now in Yorkton!</span>
            </div>
            <div className="flex items-center text-luxury-cream/80">
              <MessageCircle className="h-5 w-5 text-luxury-gold mr-2" />
              <span className="text-lg">Accepting New Clients</span>
            </div>
            <div className="flex items-center text-luxury-cream/80">
              <Heart className="h-5 w-5 text-luxury-gold mr-2" />
              <span className="text-lg">Calm & Safe Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-bronze text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Book Your Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-luxury-cream text-luxury-cream hover:bg-luxury-cream hover:text-luxury-navy px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Call (306) 621-0985
            </Button>
          </div>

          {/* Special Note */}
          <div className="mt-8 text-luxury-cream/70 text-lg">
            <p>Whether your pup is shy, energetic, or needs extra care - we ensure every visit is positive!</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-cream to-transparent"></div>
    </section>
  );
};

export default HeroSection;
