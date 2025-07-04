import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 hope-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-hope-foreground mb-6">
            About Contagious Smiles Foundation
          </h1>
          <p className="text-xl text-hope-foreground">
            Dedicated to transforming lives and spreading hope across Kenya
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="text-4xl mb-4 text-center">🌟</div>
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Our Vision</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  A Kenya where every child, regardless of their circumstances, has access to quality 
                  education, proper nutrition, healthcare, and the opportunity to reach their full potential. 
                  We envision communities where children are valued, protected, and empowered to become 
                  leaders and changemakers in their own right.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h2 className="text-3xl font-bold text-accent mb-4 text-center">Our Mission</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  To provide comprehensive support to orphanages and street-connected children through 
                  sustainable programs that address their immediate needs while building long-term capacity 
                  for independence. We focus on nutrition, education, healthcare, mentorship, and 
                  skills development to create lasting positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 warmth-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-hope">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-center text-warmth-foreground mb-6">
                A Message from Our Founder
              </h2>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-6xl">👤</span>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-semibold text-warmth-foreground">Sarah Wanjiku</h3>
                    <p className="text-warmth-foreground/80">Founder & CEO</p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <blockquote className="text-lg text-warmth-foreground leading-relaxed italic">
                    "Growing up in the streets of Nairobi, I witnessed firsthand the challenges faced by 
                    vulnerable children. I dreamed of a day when every child would have a safe place to sleep, 
                    enough food to eat, and the opportunity to learn and grow. Today, through Contagious Smiles 
                    Foundation, that dream is becoming reality. Every smile we see on a child's face reminds us 
                    why we do this work – because every child deserves hope, love, and a chance to succeed."
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-warmth-foreground font-medium">- Sarah Wanjiku, Founder</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to impacting hundreds of lives across Kenya
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">2018</div>
                    <h3 className="text-xl font-semibold mb-3">The Beginning</h3>
                    <p className="text-foreground">
                      Founded by Sarah Wanjiku with a simple mission: to ensure no child goes to bed hungry. 
                      Starting with just 5 children in a small orphanage in Nairobi, we began providing 
                      daily meals and basic healthcare.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2">
                <div className="text-6xl text-center">🏠</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-accent mb-2">2020</div>
                    <h3 className="text-xl font-semibold mb-3">Expanding Reach</h3>
                    <p className="text-foreground">
                      Despite global challenges, we expanded to support 8 orphanages and launched our 
                      street outreach program. We began providing educational support and school supplies 
                      to over 100 children.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2">
                <div className="text-6xl text-center">📈</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-success mb-2">2024</div>
                    <h3 className="text-xl font-semibold mb-3">Thriving Community</h3>
                    <p className="text-foreground">
                      Today, we support 15 partner orphanages, over 500 children, and have trained 
                      200+ volunteers. Our programs now include vocational training, mentorship, 
                      and community empowerment initiatives.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2">
                <div className="text-6xl text-center">🌟</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Help us write the next chapter in transforming children's lives across Kenya
          </p>
          <Link to="/get-involved">
            <Button variant="warm" size="xl">
              Join Our Mission
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;