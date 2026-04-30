import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Footer from '../Footer';

const Contact = ({ isActive, setActiveSection }) => {
  const { data: portfolioData } = usePortfolio();
  const { contact } = portfolioData;

  return (
    <div className={`page-section position-relative overflow-hidden ${isActive ? 'active-page' : 'd-none'}`} id="contact-section">
        <div className="content-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="page-heading-wrapper mb-90 tab-mb-64">
                  <div className="col-lg-11 animate-child">
                    <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-6">{contact.heading}</h2>
                  </div>
                  <div className="col-lg-6 ms-auto opacity-75">
                    <div className="animate-child">
                      <p>Quis voluptatibus inventore exercitationem harum minus obcaecati officiis distinctio quia accusamus sit quae.</p>
                      <p>Harum placeat iusto, eius esse eaque natus rerum praesentium debitis..</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row animate-child">
                  <div className="col-lg-4 mb-3">
                    <h5 className="opacity-75">{contact.subheading}</h5>
                  </div>
                  <div className="col-lg-7 ms-auto">
                    <div className="form-container">
                      <form method="post" action="#" id="messageForm">
                        <div className="mb-4">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" name="name" className="form-control" id="name" required />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="email" className="form-label">Email address</label>
                          <input type="email" name="email" className="form-control" id="email" required />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="phone" className="form-label">Phone</label>
                          <input type="tel" name="phone" className="form-control" id="phone" required />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="message" className="form-label">Message</label>
                          <textarea className="form-control" name="message" id="message" rows="3" required></textarea>
                        </div>

                        <div className="mb-4 form-check ps-0">
                          <input type="checkbox" className="form-check-input" id="agree" name="agree" required />
                          <label htmlFor="agree" className="form-check-label">By sending the form you agree to the Terms &amp; Conditions and Privacy Policy.</label>
                          <label htmlFor="agree" className="error block"></label>
                        </div>
                        <div className="position-relative">
                          <button type="submit" className="link link-xxl text-body-color" data-text="Submit">
                            <span>Submit</span>
                          </button>
                          <div className="loading" style={{ display: 'none' }}></div>
                        </div>
                      </form>
                      <div className="messgaeOutput" id="messgaeOutput">
                        <div id="success">
                          <h4>Thank you!</h4>
                          <p>Your message was sent successfully! I will be in touch as soon as I can.</p>
                        </div>
                        <div id="error">
                          <h4>Opppsss..... Sorry!</h4>
                          <p>Something went wrong, try refreshing and submitting the form again.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <hr className="mt-64 mb-64" />
              </div>
            </div>
            <div className="row g-4 animate-child">
              <div className="col-lg-4">
                <div className="quick-contact">
                  <h6 className="text-clip bg-gradient-6 mb-0 font-primary fw-bold">Call me</h6>
                  <p>
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="link text-body-color" data-text={contact.phone}><span>{contact.phone}</span></a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="quick-contact">
                  <h6 className="text-clip bg-gradient-6 mb-0 font-primary fw-bold">Mail me</h6>
                  <p>
                    <a href={`mailto:${contact.email}`} className="link text-body-color" data-text={contact.email}><span>{contact.email}</span></a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="quick-contact">
                  <h6 className="text-clip bg-gradient-6 mb-0 font-primary fw-bold">Meet me</h6>
                  <p dangerouslySetInnerHTML={{ __html: contact.address.replace(', ', ', <br />') }}></p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <hr className="mt-64 mb-64" />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 animate-child">
                <div className="map-container position-relative overflow-hidden rounded-4 shadow">
                  <iframe
                    src={contact.mapEmbedUrl}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="location map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-nav-container d-flex">
          <a
            href="#nav-blog"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-5 z-index-2"
            data-target="blog-section"
            data-overlay="nav-overlay-blog"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('blog');
              document.body.classList.add('page-active');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          >
            <h2 className="d-flex transition position-relative">
              Blog
              <span className="arrow outline"><i className="fa-solid fa-arrow-right"></i></span>
            </h2>
            <div className="page-nav-icon">
              <img src="/src/assets/images/blog-icon.png" alt="" />
            </div>
          </a>
          <a
            href="#nav-about"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-1 z-index-1"
            data-target="about-section"
            data-overlay="nav-overlay-about"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('about');
              document.body.classList.add('page-active');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          >
            <h2 className="d-flex transition position-relative">
              About
              <span className="arrow outline"><i className="fa-solid fa-arrow-right"></i></span>
            </h2>
            <div className="page-nav-icon">
              <img src="/src/assets/images/about-icon.png" alt="" />
            </div>
          </a>
        </div>
        <Footer />
      </div>
  );
};

export default Contact;
