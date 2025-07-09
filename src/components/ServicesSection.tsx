
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Sparkles, Heart, Crown, Bath, Brush } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Crown,
      title: "Royal Full Service",
      description: "Complete luxury grooming experience with bath, cut, styling, nail care, and aromatherapy.",
      price: "From $120",
      features: ["Premium bath & conditioning", "Expert styling & trimming", "Nail care & pedicure", "Aromatherapy treatment"]
    },
    {
      icon: Scissors,
      title: "Signature Styling",
      description: "Professional grooming and styling tailored to your dog's breed and personality.",
      price: "From $85",
      features: ["Breed-specific cuts", "Hand scissoring", "Face & feet trimming", "Final styling touch-ups"]
    },
    {
      icon: Bath,
      title: "Luxury Spa Package",
      description: "Rejuvenating spa experience with premium products and relaxing treatments.",
      price: "From $95",
      features: ["Therapeutic bath", "Deep conditioning", "Relaxing massage", "Moisturizing treatment"]
    },
    {
      icon: Sparkles,
      title: "Express Refresh",
      description: "Quick refresh service perfect for maintaining your pet's groomed appearance.",
      price: "From $45",
      features: ["Bath & blow dry", "Brush out", "Nail trim", "Ear cleaning"]
    },
    {
      icon: Heart,
      title: "Puppy First Timer",
      description: "Gentle introduction to grooming for puppies with extra care and patience.",
      price: "From $65",
      features: ["Gentle handling", "Basic grooming", "Socialization", "Comfort treats"]
    },
    {
      icon: Brush,
      title: "Senior Pet Care",
      description: "Specialized gentle care designed for older dogs with mobility considerations.",
      price: "From $90",
      features: ["Extra gentle handling", "Orthopedic support", "Therapeutic treatments", "Flexible positioning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-luxury-navy/70 max-w-3xl mx-auto">
            Each service is carefully crafted to provide the highest level of care, comfort, and luxury for your beloved pet.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <CardTitle className="text-xl font-playfair text-luxury-navy mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-luxury-navy/60">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-luxury-gold">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-luxury-navy/70">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-luxury-navy hover:bg-luxury-navy/90 text-white">
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-luxury-navy mb-4">
              Why Choose Luxe Paws?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-luxury-gold text-3xl font-bold mb-2">100%</div>
                <div className="text-luxury-navy/70">Organic Products</div>
              </div>
              <div>
                <div className="text-luxury-gold text-3xl font-bold mb-2">15+</div>
                <div className="text-luxury-navy/70">Years Experience</div>
              </div>
              <div>
                <div className="text-luxury-gold text-3xl font-bold mb-2">24/7</div>
                <div className="text-luxury-navy/70">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
