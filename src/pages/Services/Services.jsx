import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'ac-repair',
      title: 'AC Repair',
      description: 'Fast and reliable AC repair services for all makes and models. Our certified technicians diagnose and fix problems quickly to restore your comfort.',
      features: ['24/7 Emergency Service', 'All Brands Serviced', 'Same-Day Service Available'],
    },
    {
      id: 'installation',
      title: 'Installation',
      description: 'Professional installation of new HVAC systems. We help you choose the right system for your home and ensure proper installation for optimal performance.',
      features: ['Free Estimates', 'Energy-Efficient Options', 'Professional Installation'],
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Regular maintenance keeps your system running efficiently and extends its lifespan. Our maintenance plans are designed to prevent costly breakdowns.',
      features: ['Seasonal Tune-Ups', 'Filter Replacement', 'System Inspections'],
    },
  ];

  return (
    <div className="services">
      {/* Page Header */}
      <section className="services__header">
        <div className="container">
          <h1 className="services__title">Our Services</h1>
          <p className="services__subtitle">
            Comprehensive HVAC solutions for your home and business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services__list section">
        <div className="container">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="services__card">
              <div className="services__card-content">
                <h2 className="services__card-title">{service.title}</h2>
                <p className="services__card-description">{service.description}</p>
                <ul className="services__card-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services__cta section--sm">
        <div className="container">
          <div className="services__cta-content">
            <h2>Need Our Services?</h2>
            <p>Contact us today for a free estimate.</p>
            <a href="/contact" className="btn btn--primary">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
