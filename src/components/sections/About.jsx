import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import portfolioData from '../../data/portfolio.json';

const About = ({ isActive }) => {
  const { personalInfo, about } = portfolioData;

  return (
    <div className={`page-section position-relative overflow-hidden ${isActive ? 'active-page' : 'd-none'}`} id="about-section">
        <div className="content-container">
          <div className="container">
            <div className="row mb-120 tab-mb-64">
              <div className="col-lg-6 tab-mb-64 animate-child">
                <h2 className="page-heading text-clip bg-gradient-1">{about.heading}</h2>
                <div className="animate-child">
                  {personalInfo.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 animate-child">
                <div className="about-img-container position-relative w-100 h-100 rounded-5 overflow-hidden shadow">
                  <div className="about-img-hold position-relative w-100 h-100 z-index-1">
                    <img src="/src/assets/images/about-img.jpg" alt="" className="w-100 h-100 img-cover" />
                  </div>
                  <div className="signature-hold position-absolute z-index-2">
                    <img src="/src/assets/images/signature.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10">
                <div className="page-heading-wrapper mb-90 tab-mb-64">
                  <div className="col-lg-11 animate-child">
                    <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-1">{about.testimonialsHeading}</h2>
                  </div>
                  <div className="col-lg-6 ms-auto opacity-75">
                    <div className="animate-child">
                      <p>Quis voluptatibus inventore exercitationem harum minus obcaecati officiis distinctio quia accusamus sit quae.</p>
                      <p>Harum placeat iusto, eius esse eaque natus rerum praesentium debitis..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 animate-child">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                  className="testimonial-slider full-height"
                >
                  {about.testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="testimonial-item">
                        <div className="testimonial-box w-100 h-100 d-flex flex-column">
                          <blockquote className="h3 fw-bold mb-5">{item.quote}</blockquote>
                          <div className="quote-by mt-auto">
                            <strong className="h5 fw-bold text-clip bg-gradient-1">{item.author}</strong><br />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="page-nav-container d-flex">
          <a
            href="#nav-contact"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-6 z-index-2"
            data-target="contact-section"
            data-overlay="nav-overlay-contact"
          >
            <h2 className="d-flex transition position-relative">
              Contact
              <span className="arrow outline"><i className="fa-solid fa-arrow-right"></i></span>
            </h2>
            <div className="page-nav-icon">
              <img src="/src/assets/images/contact-icon.png" alt="" />
            </div>
          </a>
          <a
            href="#nav-services"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-2 z-index-1"
            data-target="services-section"
            data-overlay="nav-overlay-services"
          >
            <h2 className="d-flex transition position-relative">
              Services
              <span className="arrow outline"><i className="fa-solid fa-arrow-right"></i></span>
            </h2>
            <div className="page-nav-icon">
              <img src="/src/assets/images/services-icon.png" alt="" />
            </div>
          </a>
        </div>
      </div>
  );
};

export default About;
