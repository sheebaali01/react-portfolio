import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import portfolioData from '../../data/portfolio.json';

const Portfolio = ({ isActive }) => {
  const { portfolio } = portfolioData;

  return (
    <div className={`page-section position-relative overflow-hidden ${isActive ? 'active-page' : 'd-none'}`} id="portfolio-section">
        <div className="content-container">
          <div className="container">
            <div className="row mb-120 tab-mb-64">
              <div className="col-lg-10">
                <div className="page-heading-wrapper mb-90 tab-mb-64">
                  <div className="col-lg-11 animate-child">
                    <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-3">{portfolio.heading}</h2>
                  </div>
                  <div className="col-lg-6 ms-auto opacity-75">
                    <div className="animate-child">
                      <p>Quis voluptatibus inventore exercitationem harum minus obcaecati officiis distinctio quia accusamus sit quae.</p>
                      <p>Harum placeat iusto, eius esse eaque natus rerum praesentium debitis..</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-11 mx-auto animate-child">
                
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                  className="portfolio-slider overflow-visible"
                >
                  {portfolio.projects.map((project, idx) => (
                    <SwiperSlide key={idx} className="portfolio-item">
                      <div className="portfolio-box-wrapper">
                        <div className="portfolio-box">
                          <div className="portfolio-title transition position-relative z-index-10">
                            <h2>{project.title}</h2>
                          </div>
                          <div className="portfolio-box-img position-relative shadow">
                            <img src={project.image} alt="" />
                          </div>

                          <div className="portfolio-category mb-120 tab-mb-80 mob-mb-24 d-flex flex-column gap-2 align-items-end">
                            {project.categories.map((cat, cIdx) => (
                              <span key={cIdx} className="px-3 py-2 rounded-pill fw-bold shadow">{cat}</span>
                            ))}
                          </div>
                          <div className="portfolio-link-wrapper">
                            <span className="d-inline-block transition">
                              <a className="portfolio-link px-3 py-2 rounded-pill fw-bold shadow" href={project.link} target="_blank" rel="noreferrer">
                                Visit the website <i className="fa-solid fa-arrow-up-right-from-square"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="row mb-120 tab-mb-64">
              <div className="col-lg-10">
                <div className="page-heading-wrapper mb-90 tab-mb-64">
                  <div className="col-lg-11 animate-child">
                    <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-3">Awesome stats</h2>
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
                <div className="stats-wrapper d-flex">
                  {portfolio.stats.map((stat, idx) => (
                    <div key={idx} className="stat-box w-100 h-100 d-flex flex-column justify-content-center animate-child">
                      <h2 className="mb-0">
                        <span className={`text-clip bg-gradient-${(idx % 6) + 1}`}>
                          <b className="count fw-normal" data-target={stat.value}>0</b>{stat.suffix}
                        </span>
                      </h2>
                      <h6 className="mb-0 font-primary fw-bold">
                        <span className="opacity-50">{stat.label.split(' ').map((word, i) => <React.Fragment key={i}>{word} {i === 0 ? <br /> : ''}</React.Fragment>)}</span>
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10">
                <div className="page-heading-wrapper mb-90 tab-mb-64">
                  <div className="col-lg-11 animate-child">
                    <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-3">Great clients</h2>
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
                <div className="client-logo-wrapper position-relative overflow-hidden">
                  <div className="client-logo-parent img-marquee-parent">
                    <div className="client-logo-list img-marquee-list">
                      {portfolio.clients.map((logo, idx) => (
                        <span key={idx} className="client-logo-item"><img src={logo} alt="client logo" /></span>
                      ))}
                    </div>
                    <div className="client-logo-list img-marquee-list">
                      {portfolio.clients.map((logo, idx) => (
                        <span key={idx} className="client-logo-item"><img src={logo} alt="client logo" /></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-nav-container d-flex">
          <a
            href="#nav-services"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-2 z-index-2"
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
          <a
            href="#nav-resume"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-4 z-index-1"
            data-target="resume-section"
            data-overlay="nav-overlay-resume"
          >
            <h2 className="d-flex transition position-relative">
              Resume
              <span className="arrow outline"><i className="fa-solid fa-arrow-right"></i></span>
            </h2>
            <div className="page-nav-icon">
              <img src="/src/assets/images/resume-icon.png" alt="" />
            </div>
          </a>
        </div>
      </div>
  );
};

export default Portfolio;
