import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "feeding", name: "Feeding Programs" },
    { id: "education", name: "Education" },
    { id: "events", name: "Events" },
    { id: "training", name: "Skills Training" }
  ];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "feeding",
      title: "Daily Meal Program",
      description: "Children enjoying nutritious lunch at Kibera orphanage",
      image: "🍽️"
    },
    {
      id: 2,
      type: "image",
      category: "education",
      title: "Classroom Learning",
      description: "Students in our sponsored education program",
      image: "📚"
    },
    {
      id: 3,
      type: "video",
      category: "events",
      title: "Charity Walk 2024",
      description: "Highlights from our annual charity walk in Nairobi",
      image: "🎥"
    },
    {
      id: 4,
      type: "image",
      category: "training",
      title: "Tailoring Skills",
      description: "Young women learning tailoring in our vocational program",
      image: "✂️"
    },
    {
      id: 5,
      type: "image",
      category: "feeding",
      title: "Street Outreach",
      description: "Mobile feeding program reaching street children",
      image: "🚐"
    },
    {
      id: 6,
      type: "image",
      category: "education",
      title: "Graduation Day",
      description: "Children celebrating their school achievements",
      image: "🎓"
    },
    {
      id: 7,
      type: "video",
      category: "training",
      title: "Carpentry Workshop",
      description: "Students mastering woodworking skills",
      image: "🎥"
    },
    {
      id: 8,
      type: "image",
      category: "events",
      title: "Health Camp",
      description: "Free medical check-ups for children",
      image: "🏥"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl text-white/90">
            See the joy and hope we're spreading across Kenya through our programs
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "hero" : "warm"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="shadow-soft hover:shadow-hope transition-smooth cursor-pointer group">
                <CardContent className="p-0 relative overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-hope to-warmth flex items-center justify-center text-8xl group-hover:scale-105 transition-transform">
                    {item.image}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      {item.type === "video" && (
                        <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                          VIDEO
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 warmth-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-warmth-foreground mb-6">Stories Behind the Photos</h2>
            <p className="text-xl text-warmth-foreground/80">
              Every image tells a story of transformation and hope
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">📚</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Education Success</h3>
                    <p className="text-muted-foreground">January 2024</p>
                  </div>
                </div>
                <p className="text-foreground">
                  This photo captures the moment when 25 children received their first school uniforms through 
                  our education sponsorship program. Today, all 25 are thriving in their studies and have 
                  perfect attendance records.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">✂️</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Skills Empowerment</h3>
                    <p className="text-muted-foreground">March 2024</p>
                  </div>
                </div>
                <p className="text-foreground">
                  Our tailoring workshop has graduated 15 young women who now run their own small businesses. 
                  This image shows them during their final project presentations, each having created beautiful 
                  garments for sale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Video Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Watch the impact of our work in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">▶️</div>
                    <p className="text-lg font-semibold">Foundation Documentary</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Our Journey</h3>
                <p className="text-sm text-muted-foreground">
                  A 10-minute documentary showcasing our impact over the past 6 years
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-success to-accent rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">▶️</div>
                    <p className="text-lg font-semibold">Children's Testimonials</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Voices of Hope</h3>
                <p className="text-sm text-muted-foreground">
                  Hear directly from the children whose lives have been transformed
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
            Help Us Create More Stories
          </h2>
          <p className="text-xl text-hope-foreground/80 mb-8">
            Every photo and video represents a life changed. Join us in creating more success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Donate Today
            </Button>
            <Button variant="warm" size="xl">
              Volunteer with Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;