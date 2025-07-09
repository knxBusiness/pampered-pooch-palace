
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Bath, Brush, Sparkles, Heart, Shield, AlertCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Bath,
      title: "Bath & Brush-Out",
      description: "Complete bathing service with thorough brush-out to remove loose fur and debris.",
      details: ["Deep cleansing shampoo", "Thorough brush-out", "Blow dry", "Basic grooming"]
    },
    {
      icon: Scissors,
      title: "Full Haircuts & Trims",
      description: "Professional cutting and styling tailored to your dog's breed and your preferences.",
      details: ["Breed-specific cuts", "Custom styling", "Precision trimming", "Face & feet detail"]
    },
    {
      icon: Brush,
      title: "De-matting & Conditioning",
      description: "Gentle removal of mats and tangles with deep conditioning treatments.",
      details: ["Careful mat removal", "Coat conditioning", "Skin health focus", "Gentle techniques"]
    },
    {
      icon: Sparkles,
      title: "Breed-Specific Styling",
      description: "Expert styling that enhances your dog's natural breed characteristics.",
      details: ["Show-quality cuts", "Breed standards", "Professional techniques", "Attention to detail"]
    },
    {
      icon: Heart,
      title: "Puppy's First Groom",
      description: "Gentle introduction to grooming for young dogs with extra patience and care.",
      details: ["Stress-free introduction", "Basic grooming", "Positive association", "Gentle handling"]
    },
    {
      icon: Shield,
      title: "Senior & Timid Dog Care",
      description: "Specialized gentle care for older dogs and anxious pets with mobility considerations.",
      details: ["Extra gentle approach", "Flexible positioning", "Patience & understanding", "Comfort-focused"]
    }
  ];

  const additionalServices = [
    "Nail Trimming",
    "Ear Cleaning", 
    "Sanitary Trimming",
    "Teeth Brushing",
    "Flea & Tick Treatment",
    "Deshedding Treatment"
  ];

  return (
    <section id="services" className="py-20 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Our Grooming Services
          </h2>
          <p className="text-xl text-luxury-navy/70 max-w-3xl mx-auto">
            We offer full-service grooming tailored to your dog's needs, with special attention to creating a calm, safe environment for every pet.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white animate-fade-in"
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
                <ul className="space-y-2 mb-6 text-sm text-luxury-navy/70">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-luxury-navy hover:bg-luxury-navy/90 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-playfair font-bold text-luxury-navy mb-6 text-center">
            Additional Services Available
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={service} className="flex items-center text-luxury-navy/70">
                <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Special Notice */}
        <div className="bg-luxury-gold/10 border border-luxury-gold/20 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-8 w-8 text-luxury-gold" />
          </div>
          <h3 className="text-2xl font-playfair font-bold text-luxury-navy mb-4">
            Nervous or First-Time Client?
          </h3>
          <p className="text-luxury-navy/70 mb-6 max-w-2xl mx-auto">
            Let us know in advance — we'll take special steps to create a calm, low-stress environment. 
            We have experience working with anxious, reactive, and special needs dogs.
          </p>
          <Button 
            size="lg" 
            className="bg-luxury-gold hover:bg-luxury-bronze text-white"
          >
            Discuss Your Pet's Needs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
