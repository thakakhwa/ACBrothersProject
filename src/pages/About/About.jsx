import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Page Header */}
      <section className="about__header">
        <div className="container">
          <h1 className="about__title">About ACBrothers</h1>
          <p className="about__subtitle">
            Trusted HVAC professionals serving your community with excellence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="about__content section">
        <div className="container container--narrow">
          <div className="about__story">
            <h2>Our Story</h2>
            <p>
              Founded with a commitment to quality and customer satisfaction, 
              ACBrothers has been providing exceptional HVAC services to homeowners 
              and businesses alike. Our team of certified technicians brings years 
              of experience and expertise to every job.
            </p>
            <p>
              We believe in honest, reliable service at fair prices. When you choose 
              ACBrothers, you're choosing a partner who cares about your comfort 
              as much as you do.
            </p>
          </div>

          <div className="about__values">
            <h2>Our Values</h2>
            <ul className="about__values-list">
              <li>
                <strong>Integrity:</strong> We do what we say and stand behind our work.
              </li>
              <li>
                <strong>Excellence:</strong> We strive for the highest quality in everything we do.
              </li>
              <li>
                <strong>Customer First:</strong> Your satisfaction is our top priority.
              </li>
              <li>
                <strong>Reliability:</strong> Count on us to be there when you need us.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
