
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, AlertTriangle } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Salon",
      details: ["Yorkton, Saskatchewan", "New location now open!"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(306) 621-0985", "By appointment only"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Social Media",
      details: ["Message us on Facebook", "Follow us on Instagram"],
      action: "Connect"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday", "8:00 AM - 5:00 PM"],
      action: "Book Online"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Book an Appointment
          </h2>
          <p className="text-xl text-luxury-navy/70 max-w-3xl mx-auto">
            We're currently accepting new clients! Contact us to check availability or request a quote for your furry family member.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-luxury-navy">
                  Schedule Your Pet's Appointment
                </CardTitle>
                <p className="text-luxury-navy/60">
                  Fill out the form below and we'll get back to you to confirm your booking.
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
                      placeholder="(306) 621-0985"
                      className="border-luxury-champagne focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-navy mb-2">
                    Email Address
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
                      Pet's Name *
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
                    Service Needed
                  </label>
                  <select className="w-full p-3 border border-luxury-champagne rounded-lg focus:border-luxury-gold focus:outline-none">
                    <option>Select a service</option>
                    <option>Bath & Brush-Out</option>
                    <option>Full Haircut & Trim</option>
                    <option>De-matting & Conditioning</option>
                    <option>Breed-Specific Styling</option>
                    <option>Puppy's First Groom</option>
                    <option>Senior & Timid Dog Care</option>
                    <option>Full Grooming Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-navy mb-2">
                    Special Notes
                  </label>
                  <Textarea 
                    placeholder="Please let us know if your dog is anxious, reactive, has special needs, or any other important information..."
                    rows={4}
                    className="border-luxury-champagne focus:border-luxury-gold"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-luxury-gold hover:bg-luxury-bronze text-white"
                >
                  Request Appointment
                </Button>

                <p className="text-sm text-luxury-navy/60 text-center">
                  * Required fields. We'll contact you to confirm availability.
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

            {/* Special Care Notice */}
            <Card className="border-0 bg-luxury-navy text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-luxury-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Important Notice</h4>
                    <p className="text-white/80 mb-4">
                      Please notify us in advance if your dog has special care needs (anxious, reactive, etc.) 
                      so we can ensure a safe and private space for your pet's comfort.
                    </p>
                    <div className="flex space-x-4">
                      <Facebook className="h-5 w-5 text-luxury-gold cursor-pointer hover:text-white transition-colors" />
                      <Instagram className="h-5 w-5 text-luxury-gold cursor-pointer hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
