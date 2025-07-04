import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    experience: "",
    availability: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you within 48 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      experience: "",
      availability: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-white/90">
            Join our mission to transform lives and spread hope across Kenya
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ways to Make a Difference</h2>
            <p className="text-xl text-muted-foreground">
              Every contribution, big or small, creates lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-primary mb-3">Volunteer</h3>
                <p className="text-foreground mb-4">
                  Join our team of dedicated volunteers and directly impact children's lives through 
                  mentorship, teaching, and program support.
                </p>
                <Button variant="hero" size="sm" className="w-full">
                  Apply to Volunteer
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">💝</div>
                <h3 className="text-xl font-bold text-accent mb-3">Donate</h3>
                <p className="text-foreground mb-4">
                  Your financial support helps us provide food, education, healthcare, and shelter 
                  to vulnerable children across Kenya.
                </p>
                <Button variant="donate" size="sm" className="w-full">
                  Donate Now
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-success mb-3">Partner</h3>
                <p className="text-foreground mb-4">
                  Corporate partnerships and sponsorships help us scale our impact and reach 
                  more children in need.
                </p>
                <Button variant="warm" size="sm" className="w-full">
                  Partner with Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 warmth-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-warmth-foreground mb-6">Volunteer Application</h2>
            <p className="text-xl text-warmth-foreground/80">
              Ready to make a difference? Fill out this form to get started
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
                    <Label htmlFor="interest">Area of Interest *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, interest: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="childcare">Childcare & Mentorship</SelectItem>
                        <SelectItem value="education">Education & Tutoring</SelectItem>
                        <SelectItem value="healthcare">Healthcare Support</SelectItem>
                        <SelectItem value="skills">Skills Training</SelectItem>
                        <SelectItem value="fundraising">Fundraising & Events</SelectItem>
                        <SelectItem value="admin">Administrative Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    placeholder="Tell us about any relevant experience working with children or in similar roles"
                  />
                </div>

                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Select onValueChange={(value) => setFormData({...formData, availability: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                      <SelectItem value="events">Events Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us why you want to volunteer with Contagious Smiles Foundation"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Donation Options</h2>
            <p className="text-xl text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">📱</div>
                  <h3 className="text-xl font-bold text-primary">M-PESA</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Paybill:</strong> 247247</p>
                  <p><strong>Account:</strong> CONTAGIOUS</p>
                  <p className="text-muted-foreground">Most convenient for Kenya-based donors</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💳</div>
                  <h3 className="text-xl font-bold text-accent">PayPal</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> donations@contagioussmiles.org</p>
                  <p className="text-muted-foreground">Secure international donations</p>
                  <Button variant="donate" size="sm" className="w-full mt-2">
                    Donate via PayPal
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏦</div>
                  <h3 className="text-xl font-bold text-success">Bank Transfer</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Bank:</strong> Equity Bank</p>
                  <p><strong>Account:</strong> 0460291849963</p>
                  <p><strong>Name:</strong> Contagious Smiles Foundation</p>
                  <p className="text-muted-foreground">Direct bank transfers</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-16 hope-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-hope-foreground mb-6">Corporate Partnerships</h2>
            <p className="text-xl text-hope-foreground/80">
              Partner with us to create meaningful social impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Partnership Benefits</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Brand visibility in our programs and events</li>
                  <li>• Employee volunteer opportunities</li>
                  <li>• CSR impact reporting and documentation</li>
                  <li>• Tax-deductible contributions</li>
                  <li>• Networking with other corporate partners</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-accent mb-4">Partnership Levels</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• <strong>Gold:</strong> KES 500,000+ annually</li>
                  <li>• <strong>Silver:</strong> KES 250,000+ annually</li>
                  <li>• <strong>Bronze:</strong> KES 100,000+ annually</li>
                  <li>• <strong>Community:</strong> In-kind donations</li>
                  <li>• <strong>Event:</strong> Specific event sponsorship</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="warm" size="xl">
              Discuss Partnership
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;