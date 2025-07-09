
import { Button } from '@/components/ui/button';
import { Award, Users, Heart, Star } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Our groomers are certified professionals with extensive training and experience."
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every pet as if they were our own, with love, patience, and understanding."
    },
    {
      icon: Users,
      title: "Trusted by Families",
      description: "Over 500 satisfied customers trust us with their beloved companions."
    },
    {
      icon: Star,
      title: "Premium Standards",
      description: "We maintain the highest standards in hygiene, safety, and service quality."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
              Crafting Beauty with 
              <span className="block text-luxury-gold">Passion & Expertise</span>
            </h2>
            
            <p className="text-lg text-luxury-navy/70 mb-6 leading-relaxed">
              At Luxe Paws, we believe every dog deserves to look and feel their absolute best. Founded with a passion for excellence and a deep love for animals, we've created a sanctuary where luxury meets care.
            </p>
            
            <p className="text-lg text-luxury-navy/70 mb-8 leading-relaxed">
              Our team of certified professionals brings years of experience and an unwavering commitment to your pet's comfort, safety, and style. We use only the finest organic products and the latest techniques to ensure every visit is a pampered experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-bronze text-white"
              >
                Meet Our Team
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white"
              >
                Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">500+</div>
                <div className="text-luxury-navy/70">Happy Pets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">15+</div>
                <div className="text-luxury-navy/70">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" 
                alt="Professional dog grooming" 
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
                  <div className="text-2xl font-bold text-luxury-navy">5.0</div>
                  <div className="text-sm text-luxury-navy/60">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-playfair font-bold text-center text-luxury-navy mb-12">
            What Sets Us Apart
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <achievement.icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h4 className="text-xl font-semibold text-luxury-navy mb-3">
                  {achievement.title}
                </h4>
                <p className="text-luxury-navy/60">
                  {achievement.description}
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
