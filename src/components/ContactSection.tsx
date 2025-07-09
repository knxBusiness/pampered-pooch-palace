
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Salon",
      details: ["123 Luxury Lane", "Beverly Hills, CA 90210"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "Available 7 days a week"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@luxepaws.com", "We respond within 2 hours"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8am-7pm", "Sat-Sun: 9am-6pm"],
      action: "Book Online"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-luxury-navy/70 max-w-3xl mx-auto">
            Ready to pamper your pet? Contact us today to schedule an appointment or learn more about our luxury grooming services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-luxury-navy">
                  Schedule Your Appointment
                </CardTitle>
                <p className="text-luxury-navy/60">
                  Fill out the form below and we'll get back to you within 2 hours to confirm your booking.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-luxury-navy mb-2">
                      Your Name *
                    </label>
                    <Input 
                      placeholder="Enter your full name"
                      className="border-luxury-champagne focus:border-luxury-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-luxury-navy mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      placeholder="(555) 123-4567"
                      className="border-luxury-champagne focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-navy mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-luxury-champagne focus:border-luxury-gold"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-luxury-navy mb-2">
                      Pet's Name
                    </label>
                    <Input 
                      placeholder="Your pet's name"
                      className="border-luxury-champagne focus:border-luxury-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-luxury-navy mb-2">
                      Pet's Breed
                    </label>
                    <Input 
                      placeholder="e.g., Golden Retriever"
                      className="border-luxury-champagne focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-navy mb-2">
                    Preferred Service
                  </label>
                  <select className="w-full p-3 border border-luxury-champagne rounded-lg focus:border-luxury-gold focus:outline-none">
                    <option>Select a service</option>
                    <option>Royal Full Service</option>
                    <option>Signature Styling</option>
                    <option>Luxury Spa Package</option>
                    <option>Express Refresh</option>
                    <option>Puppy First Timer</option>
                    <option>Senior Pet Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-navy mb-2">
                    Special Requests or Notes
                  </label>
                  <Textarea 
                    placeholder="Any special requests, allergies, or behavioral notes about your pet..."
                    rows={4}
                    className="border-luxury-champagne focus:border-luxury-gold"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-luxury-gold hover:bg-luxury-bronze text-white"
                >
                  Schedule Appointment
                </Button>

                <p className="text-sm text-luxury-navy/60 text-center">
                  * Required fields. We'll confirm your appointment within 2 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-luxury-cream/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-luxury-navy mb-2">
                        {info.title}
                      </h4>
                      <div className="space-y-1 mb-4">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-luxury-navy/70">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                      >
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Google Reviews CTA */}
            <Card className="border-0 bg-luxury-navy text-white">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Love Our Service?</h4>
                <p className="text-white/80 mb-4">
                  Share your experience and help other pet parents discover Luxe Paws.
                </p>
                <Button 
                  variant="outline" 
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                >
                  Write a Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
