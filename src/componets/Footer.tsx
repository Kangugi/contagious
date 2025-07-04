import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Foundation Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <div>
                <div className="font-bold text-lg text-background">Contagious Smiles</div>
                <div className="text-sm text-muted">Foundation</div>
              </div>
            </div>
            <p className="text-muted text-sm">
              Spreading hope, one smile at a time across Kenya through comprehensive support for vulnerable children.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted hover:text-background transition-smooth">About Us</Link></li>
              <li><Link to="/our-work" className="text-muted hover:text-background transition-smooth">Our Work</Link></li>
              <li><Link to="/events" className="text-muted hover:text-background transition-smooth">Events</Link></li>
              <li><Link to="/gallery" className="text-muted hover:text-background transition-smooth">Gallery</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-background mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/get-involved" className="text-muted hover:text-background transition-smooth">Volunteer</Link></li>
              <li><Link to="/get-involved" className="text-muted hover:text-background transition-smooth">Donate</Link></li>
              <li><Link to="/get-involved" className="text-muted hover:text-background transition-smooth">Partner</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-background transition-smooth">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted">
              <p>📍 Kibera Slums, Nairobi</p>
              <p>📞 +254 712 345 678</p>
              <p>✉️ info@contagioussmiles.org</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <span className="text-2xl cursor-pointer hover:text-background transition-smooth">📘</span>
              <span className="text-2xl cursor-pointer hover:text-background transition-smooth">📸</span>
              <span className="text-2xl cursor-pointer hover:text-background transition-smooth">🐦</span>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8 text-center text-sm text-muted">
          <p>&copy; 2024 Contagious Smiles Foundation. All rights reserved.</p>
          <p className="mt-1">Registration Number: NPO/2018/CSF/001234 | Tax Exempt Status: Approved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;