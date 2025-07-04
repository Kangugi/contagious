import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90">
            Get in touch with our team - we'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Reach Out to Us</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to connect with the Contagious Smiles Foundation team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-soft text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-primary">📍</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground">
                  Kibera Slums, Nairobi<br />
                  Kenya
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-accent">📞</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground">
                  +254 712 345 678<br />
                  +254 789 012 345
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-success">✉️</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">
                  info@contagioussmiles.org<br />
                  volunteer@contagioussmiles.org
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-primary">⏰</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 warmth-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-warmth-foreground mb-6">Send Us a Message</h2>
            <p className="text-xl text-warmth-foreground/80">
              Have questions or want to learn more? We're here to help.
            </p>
          </div>

          <Card className="shadow-hope">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, subject: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="volunteer">Volunteer Inquiry</SelectItem>
                        <SelectItem value="donation">Donation Information</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Kibera, serving the local community
            </p>
          </div>

          <Card className="shadow-soft">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-hope to-primary rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-lg">Kibera Slums, Nairobi, Kenya</p>
                  <Button variant="warm" size="lg" className="mt-4">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 hope-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-hope-foreground mb-6">Follow Our Journey</h2>
            <p className="text-xl text-hope-foreground/80">
              Stay updated with our latest activities and success stories
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <Card className="shadow-soft hover:shadow-hope transition-smooth cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">📘</div>
                <h3 className="text-lg font-semibold text-foreground">Facebook</h3>
                <p className="text-sm text-muted-foreground">@ContagiousSmiles</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hope transition-smooth cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">📸</div>
                <h3 className="text-lg font-semibold text-foreground">Instagram</h3>
                <p className="text-sm text-muted-foreground">@contagious_smiles</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hope transition-smooth cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">🐦</div>
                <h3 className="text-lg font-semibold text-foreground">Twitter</h3>
                <p className="text-sm text-muted-foreground">@ContagiousSmile</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Foundation Registration */}
      <section className="py-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-muted-foreground">
            Contagious Smiles Foundation is a registered non-profit organization in Kenya
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Registration Number: NPO/2018/CSF/001234 | Tax Exempt Status: Approved
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;