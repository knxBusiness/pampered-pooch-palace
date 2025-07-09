
import { Button } from '@/components/ui/button';
import { Award, Users, Heart, Star, Shield, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const qualities = [
    {
      icon: Heart,
      title: "Animal Lovers",
      description: "We're not just groomers — we're animal lovers, caretakers, and part of the Yorkton community."
    },
    {
      icon: Shield,
      title: "Safe & Calm",
      description: "We specialize in creating comfortable experiences for shy, energetic, and reactive pups."
    },
    {
      icon: Sparkles,
      title: "Expert Care",
      description: "From first-time puppy grooms to matted coats and breed-specific styles — we do it all."
    },
    {
      icon: Award,
      title: "Certified Team",
      description: "Our groomers understand both the art and heart of grooming with 8+ years of experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
              Your Local Dog 
              <span className="block text-luxury-gold">Grooming Experts</span>
            </h2>
            
            <p className="text-lg text-luxury-navy/70 mb-6 leading-relaxed">
              We're not just groomers — we're animal lovers, caretakers, and part of the Yorkton community. Wizard of Paws was founded on the belief that every dog deserves kindness, patience, and expert care.
            </p>
            
            <p className="text-lg text-luxury-navy/70 mb-8 leading-relaxed">
              With a team that understands both the art and heart of grooming, we specialize in everything from first-time puppy grooms to matted coats, reactive pups, and breed-specific styles. We go the extra mile to make sure your dog is comfortable and leaves feeling happy (and looking fantastic).
            </p>

            {/* Testimonial Quote */}
            <div className="bg-luxury-cream/50 p-6 rounded-lg mb-8 border-l-4 border-luxury-gold">
              <p className="text-luxury-navy italic mb-4">
                "My experience was phenomenal… thank you from the bottom of our hearts for taking such good care of a beloved family member."
              </p>
              <p className="text-luxury-navy/70 font-semibold">— Cindy O.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-bronze text-white"
              >
                Contact Us Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white"
              >
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">8+</div>
                <div className="text-luxury-navy/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">100%</div>
                <div className="text-luxury-navy/70">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" 
                alt="Professional dog grooming at Wizard of Paws" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/30 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-luxury-navy">New</div>
                  <div className="text-sm text-luxury-navy/60">Yorkton Location</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualities Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-playfair font-bold text-center text-luxury-navy mb-12">
            What Makes Us Special
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality, index) => (
              <div 
                key={quality.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <quality.icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h4 className="text-xl font-semibold text-luxury-navy mb-3">
                  {quality.title}
                </h4>
                <p className="text-luxury-navy/60">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
