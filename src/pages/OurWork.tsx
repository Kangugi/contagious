import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Work & Impact
          </h1>
          <p className="text-xl text-white/90">
            Comprehensive programs designed to transform lives and build stronger communities
          </p>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Programs</h2>
            <p className="text-xl text-muted-foreground">
              Addressing immediate needs while building long-term sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nutrition & Hygiene Support</h3>
                <p className="text-foreground mb-4">
                  Providing daily nutritious meals to over 500 children across 15 partner orphanages. 
                  Our program ensures children receive balanced diets essential for healthy growth and development.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Daily breakfast, lunch, and dinner programs</li>
                  <li>• Fresh fruits and vegetables from local farmers</li>
                  <li>• Hygiene kits and sanitation supplies</li>
                  <li>• Clean water access initiatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-accent mb-4">Educational Sponsorship</h3>
                <p className="text-foreground mb-4">
                  Breaking the cycle of poverty through education. We sponsor school fees, provide learning 
                  materials, and support after-school tutoring programs.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• School fees and uniform sponsorship</li>
                  <li>• Textbooks and learning materials</li>
                  <li>• After-school tutoring support</li>
                  <li>• Higher education scholarships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🏃‍♂️</div>
                <h3 className="text-2xl font-bold text-success mb-4">Street Outreach Programs</h3>
                <p className="text-foreground mb-4">
                  Reaching vulnerable street-connected children with mobile support services, 
                  rehabilitation programs, and pathways to stable housing and education.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Mobile feeding programs</li>
                  <li>• Health check-ups and medical care</li>
                  <li>• Rehabilitation and counseling services</li>
                  <li>• Family reunification programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Empowerment & Skills Training</h3>
                <p className="text-foreground mb-4">
                  Preparing young people for independence through vocational training, life skills 
                  development, and mentorship programs that build confidence and capability.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Vocational training in various trades</li>
                  <li>• Financial literacy programs</li>
                  <li>• Leadership development workshops</li>
                  <li>• Job placement support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 warmth-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-warmth-foreground mb-6">Our Impact by Numbers</h2>
            <p className="text-xl text-warmth-foreground/80">
              Measuring success through lives transformed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-lg font-semibold text-foreground mb-1">Children Fed Daily</div>
                <div className="text-sm text-muted-foreground">Nutritious meals provided</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">180</div>
                <div className="text-lg font-semibold text-foreground mb-1">Students Sponsored</div>
                <div className="text-sm text-muted-foreground">Education support provided</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-success mb-2">85</div>
                <div className="text-lg font-semibold text-foreground mb-1">Street Children Rescued</div>
                <div className="text-sm text-muted-foreground">Lives transformed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">65</div>
                <div className="text-lg font-semibold text-foreground mb-1">Skills Trainees</div>
                <div className="text-sm text-muted-foreground">Empowered for independence</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real stories of transformation and hope
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">👦</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">David's Journey</h3>
                    <p className="text-muted-foreground">Age 16</p>
                  </div>
                </div>
                <p className="text-foreground">
                  "I came to the streets when I was 8 years old. Contagious Smiles found me, gave me food, 
                  and helped me go back to school. Now I'm in Form 3 and want to become a doctor to help 
                  other children like me."
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-success rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">👧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Mary's Success</h3>
                    <p className="text-muted-foreground">Age 19</p>
                  </div>
                </div>
                <p className="text-foreground">
                  "Through the vocational training program, I learned tailoring skills. Now I have my own 
                  small business making school uniforms. I can support myself and help other children in 
                  my community."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hope-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-hope-foreground mb-6">
            Help Us Expand Our Impact
          </h2>
          <p className="text-xl text-hope-foreground/80 mb-8">
            Your support enables us to reach more children and create more success stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button variant="hero" size="xl">
                Get Involved
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="warm" size="xl">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;