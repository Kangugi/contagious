import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      date: "2024-08-15",
      title: "Annual Charity Walk",
      location: "Uhuru Park, Nairobi",
      description: "Join us for our biggest fundraising event of the year! A 5km walk to raise funds for educational sponsorships.",
      type: "Fundraiser",
      status: "Open Registration"
    },
    {
      id: 2,
      date: "2024-08-22",
      title: "Volunteer Training Workshop",
      location: "Foundation Office",
      description: "Comprehensive training for new volunteers covering child protection, communication skills, and program implementation.",
      type: "Training",
      status: "Limited Spots"
    },
    {
      id: 3,
      date: "2024-09-05",
      title: "Back-to-School Supply Drive",
      location: "Various Locations",
      description: "Help us collect school supplies for children starting the new school term. Books, uniforms, and stationery needed.",
      type: "Collection Drive",
      status: "Ongoing"
    },
    {
      id: 4,
      date: "2024-09-18",
      title: "Skills Training Graduation",
      location: "Kibera Community Center",
      description: "Celebrate with 25 young people graduating from our vocational training program in tailoring and carpentry.",
      type: "Celebration",
      status: "Public Invited"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      date: "2024-07-20",
      title: "Health Camp at Mathare",
      impact: "150 children received medical check-ups and treatment",
      funds: "KES 85,000 raised for medical supplies"
    },
    {
      id: 6,
      date: "2024-06-15",
      title: "Corporate Partnership Lunch",
      impact: "5 new corporate partners joined our mission",
      funds: "KES 320,000 committed in annual support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Events & Activities
          </h1>
          <p className="text-xl text-white/90">
            Join us in creating positive change through community events and fundraising activities
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">
              Don't miss these opportunities to make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-soft hover:shadow-hope transition-smooth">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {event.type}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-accent">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="text-sm text-muted-foreground">2024</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <span className="mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-foreground">{event.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-success">{event.status}</span>
                    <Button variant="hero" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-16 warmth-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-warmth-foreground mb-6">Event Calendar</h2>
            <p className="text-xl text-warmth-foreground/80">
              Mark your calendar for these important dates
            </p>
          </div>
          
          <Card className="shadow-hope">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">AUG</div>
                  <div className="text-lg font-semibold text-foreground">15</div>
                  <div className="text-sm text-muted-foreground">Charity Walk</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">AUG</div>
                  <div className="text-lg font-semibold text-foreground">22</div>
                  <div className="text-sm text-muted-foreground">Volunteer Training</div>
                </div>
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">SEP</div>
                  <div className="text-lg font-semibold text-foreground">05</div>
                  <div className="text-sm text-muted-foreground">Supply Drive</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">SEP</div>
                  <div className="text-lg font-semibold text-foreground">18</div>
                  <div className="text-sm text-muted-foreground">Graduation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Recent Events</h2>
            <p className="text-xl text-muted-foreground">
              See the impact of our recent activities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-success to-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="mr-2 text-success">👥</span>
                      <span className="text-foreground">{event.impact}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-accent">💰</span>
                      <span className="text-foreground">{event.funds}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hope-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-hope-foreground mb-6">
            Ready to Join Our Events?
          </h2>
          <p className="text-xl text-hope-foreground/80 mb-8">
            Whether you want to volunteer, donate, or participate, there's a place for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button variant="hero" size="xl">
                Register as Volunteer
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="warm" size="xl">
                Contact Event Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;