interface ExportCategory {
  id: string;
  name: string;
  description: string;
}

interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

import ExportCard from '../components/ExportCard';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';

const Home = () => {
  const exportCategories: ExportCategory[] = [
    {
      id: 'textiles',
      name: 'Textiles',
      description: 'Premium quality fabrics, apparel, and textile products crafted with precision and tradition.',
    },
    {
      id: 'agricultural',
      name: 'Agricultural-Based Products',
      description: 'Fresh, organic agricultural exports including spices, grains, and specialty products.',
    },
  ];

  const whyChooseUs: WhyChooseUsItem[] = [
    {
      id: 'quality',
      title: 'Quality Assurance',
      description: 'All products meet international standards and certifications for global markets.',
    },
    {
      id: 'experience',
      title: 'Industry Experience',
      description: 'Decades of expertise in managing B2B exports to multiple countries.',
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance',
      description: 'Full adherence to export regulations and documentation requirements.',
    },
    {
      id: 'logistics',
      title: 'Reliable Logistics',
      description: 'Efficient supply chain management with transparent tracking and timely delivery.',
    },
  ];

  return (
    <main className="home">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Neo-Indian Exports</h1>
          <p className="hero-tagline">Premium B2B Export Solutions for Global Markets</p>
          <p className="hero-subtitle">
            Connecting India's finest textiles and agricultural products to the world
          </p>
        </div>
      </section>

      {/* Export Categories Section */}
      <section className="export-categories">
        <div className="container">
          <h2>Our Export Specializations</h2>
          <p className="section-description">
            We specialize in delivering quality exports across multiple product categories
          </p>
          <div className="categories-grid">
            {exportCategories.map((category) => (
              <ExportCard
                key={category.id}
                title={category.name}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Neo-Indian Exports?</h2>
          <div className="why-choose-grid">
            {whyChooseUs.map((item) => (
              <div key={item.id} className="why-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <InquiryForm />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
