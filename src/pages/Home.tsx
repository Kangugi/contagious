import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-children.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Spreading Hope,
            <span className="text-accent"> One Smile </span>
            at a Time
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Empowering orphanages and street-connected children in Kenya through 
            food, shelter, education, and endless possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button variant="hero" size="xl">
                Support Us
              </Button>
            </Link>
            <Link to="/our-work">
              <Button variant="warm" size="xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-hope">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-hope-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-hope-foreground leading-relaxed">
            To transform the lives of vulnerable children in Kenya by providing comprehensive support 
            including nutrition, education, healthcare, and empowerment programs that create lasting 
            positive change in their communities.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-xl font-semibold text-foreground mb-2">Children Supported</div>
                <div className="text-muted-foreground">Direct beneficiaries across Kenya</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">15</div>
                <div className="text-xl font-semibold text-foreground mb-2">Partner Orphanages</div>
                <div className="text-muted-foreground">Collaborative care facilities</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-success mb-2">200+</div>
                <div className="text-xl font-semibold text-foreground mb-2">Volunteers</div>
                <div className="text-muted-foreground">Dedicated community helpers</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Work Preview */}
      <section className="py-16 warmth-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-warmth-foreground mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-lg font-semibold mb-2">Nutrition Support</h3>
                <p className="text-sm text-muted-foreground">
                  Providing nutritious meals and hygiene supplies to children in need
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Sponsoring school fees and providing educational materials
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold mb-2">Mentorship</h3>
                <p className="text-sm text-muted-foreground">
                  Connecting children with caring mentors and role models
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft hover:shadow-hope transition-smooth">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-lg font-semibold mb-2">Empowerment</h3>
                <p className="text-sm text-muted-foreground">
                  Teaching life skills and vocational training for independence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Every child deserves a chance to smile, learn, and thrive. Your support can transform lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button variant="warm" size="xl">
                Volunteer Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 