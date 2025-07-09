
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Brianna G.",
      comment: "We brought our 3 dogs—2 energetic and 1 VERY timid—to Wizard of Paws… The service was incredible, and I'm excited to return in the future!",
      rating: 5
    },
    {
      name: "Brenda",
      comment: "Excellent grooming! Beautiful cut. Thank you for your patience with my spicy Shih Tzu.",
      rating: 5
    },
    {
      name: "M.R.",
      comment: "Absolutely incredible work — my boy looked better than ever. Very happy dog and dog mom!",
      rating: 5
    },
    {
      name: "Tracy T.",
      comment: "Pomeranian with matted hair looked amazing… Yorkton was needing this.",
      rating: 5
    },
    {
      name: "Cindy O.",
      comment: "My experience was phenomenal… thank you from the bottom of our hearts for taking such good care of a beloved family member.",
      rating: 5
    },
    {
      name: "Sarah M.",
      comment: "Finally found a groomer who understands my dog's anxiety. The team was so patient and gentle. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            What Our Clients Are Saying
          </h2>
          <p className="text-xl text-luxury-navy/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what pet parents in Yorkton and surrounding areas have to say about their Wizard of Paws experience.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-luxury-gold text-luxury-gold" />
              ))}
            </div>
            <span className="text-2xl font-bold text-luxury-navy ml-4">5.0</span>
            <span className="text-luxury-navy/60">from happy pet parents</span>
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
                  <h4 className="font-semibold text-luxury-navy">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-luxury-navy/60">
                    Verified Customer
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-luxury-navy mb-4">
              Ready to Give Your Pet the Care They Deserve?
            </h3>
            <p className="text-luxury-navy/70 mb-6">
              Join the growing number of satisfied pet parents in Yorkton who trust Wizard of Paws with their beloved companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-luxury-gold hover:bg-luxury-bronze text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Book Your Appointment
              </button>
              <button className="border border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Call (306) 621-0985
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
