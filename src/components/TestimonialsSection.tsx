
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Beverly Hills",
      rating: 5,
      comment: "Absolutely exceptional service! My Golden Retriever, Max, has never looked better. The staff is incredibly professional and caring. The spa atmosphere makes both pets and owners feel relaxed and pampered.",
      petName: "Max",
      service: "Royal Full Service"
    },
    {
      name: "Michael Chen",
      location: "Manhattan",
      rating: 5,
      comment: "I've tried many groomers, but Luxe Paws is in a league of their own. The attention to detail is remarkable, and my Poodle Princess always comes home looking like she stepped out of a magazine.",
      petName: "Princess",
      service: "Signature Styling"
    },
    {
      name: "Emma Rodriguez",
      location: "Malibu",
      rating: 5,
      comment: "The luxury spa package was incredible! My elderly Labrador, Charlie, has mobility issues, and they handled him with such gentle care. The therapeutic treatments have actually improved his comfort level.",
      petName: "Charlie",
      service: "Senior Pet Care"
    },
    {
      name: "David Thompson",
      location: "Newport Beach",
      rating: 5,
      comment: "From the moment we walked in, I knew this was special. The facility is immaculate, the staff is knowledgeable, and my nervous rescue dog was treated with such patience and love.",
      petName: "Luna",
      service: "Luxury Spa Package"
    },
    {
      name: "Jennifer Walsh",
      location: "Santa Monica",
      rating: 5,
      comment: "Worth every penny! The royal treatment my Yorkie received was amazing. They even sent photos during the grooming process so I could see how happy and relaxed she was.",
      petName: "Bella",
      service: "Royal Full Service"
    },
    {
      name: "Robert Kim",
      location: "Pacific Palisades",
      rating: 5,
      comment: "Luxe Paws transformed my scruffy rescue into a show dog! The before and after photos are incredible. The team's expertise and genuine love for animals really shows in their work.",
      petName: "Rocky",
      service: "Signature Styling"
    }
  ];

  return (
    <section className="py-20 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-luxury-navy/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what pet parents in our community have to say about their Luxe Paws experience.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-luxury-gold text-luxury-gold" />
              ))}
            </div>
            <span className="text-2xl font-bold text-luxury-navy ml-4">5.0</span>
            <span className="text-luxury-navy/60">out of 5 stars</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-luxury-gold/30" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-luxury-navy/70 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Client Info */}
                <div className="border-t border-luxury-champagne pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-luxury-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-luxury-navy/60">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-luxury-gold">
                        {testimonial.petName}
                      </div>
                      <div className="text-xs text-luxury-navy/60">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-luxury-navy mb-4">
              Ready to Give Your Pet the Luxury Experience?
            </h3>
            <p className="text-luxury-navy/70 mb-6">
              Join hundreds of satisfied pet parents who trust Luxe Paws with their beloved companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-luxury-gold hover:bg-luxury-bronze text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Book Your Appointment
              </button>
              <button className="border border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
