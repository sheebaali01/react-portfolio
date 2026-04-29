import React from 'react';
import portfolioData from '../../data/portfolio.json';

const Services = ({ isActive, setActiveSection }) => {
  const { services } = portfolioData;

  return (
    <div className={`page-section position-relative overflow-hidden ${isActive ? 'active-page' : 'd-none'}`} id="services-section">
        <div className="content-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="page-heading-wrapper mb-90 tab-mb-64">
                  <div className="col-lg-11 animate-child">
                    <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-2">{services.heading}</h2>
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
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="service-left-container pe-lg-5 animate-child">
                      <h5>{services.subheading}</h5>
                      <p>{services.description}</p>
                      <div className="pe-lg-5">
                        <div className="service-list-wrapper">
                          <ul className="service-list customTab animate-child" id="services-tab" role="tablist">
                            {services.items.map((item, idx) => (
                              <li className="d-flex mb-2" role="presentation" key={item.id}>
                                <h4
                                  className={`service-link font-primary fw-bold transition mb-0 position-relative ${idx === 0 ? 'active' : ''}`}
                                  id={`${item.id}-tab`}
                                  data-bs-toggle="tab"
                                  data-bs-target={`#${item.id}`}
                                  role="tab"
                                  aria-controls={item.id}
                                  aria-selected={idx === 0}
                                >
                                  {item.title}<sup className="transition text-clip bg-gradient-2">{String(idx + 1).padStart(2, '0')}</sup>
                                </h4>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 animate-child">
                    <div className="service-right-container">
                      <div className="tab-content h-100 w-100" id="services-tabContent">
                        {services.items.map((item, idx) => (
                          <div
                            className={`tab-pane w-100 h-100 ${idx === 0 ? 'show active' : ''}`}
                            id={item.id}
                            role="tabpanel"
                            aria-labelledby={`${item.id}-tab`}
                            tabIndex={0}
                            key={item.id}
                          >
                            <div className="service-details-outer custom-tab-content w-100 h-100 reveal">
                              <div className="service-details-container w-100 h-100 position-relative">
                                <div className="service-image-box overflow-hidden shadow rounded-5 w-100 transition">
                                  <img src={item.image} alt="" className="w-100 h-100 img-cover d-none d-lg-block" />
                                  <img src={item.mobImage} alt="" className="w-100 h-100 img-cover d-lg-none" />
                                </div>

                                <div className="service-details p-4 overflow-hidden shadow rounded-5">
                                  <h4 className="font-primary fw-bold">
                                    <span className="text-clip bg-gradient-2">{String(idx + 1).padStart(2, '0')}. {item.title}</span>
                                  </h4>
                                  <p>{item.description}</p>
                                  <ul className="d-flex flex-column gap-2">
                                    {item.features.map((feature, fIdx) => (
                                      <li key={fIdx}>
                                        <span className="text-clip bg-gradient-2 d-inline-block"><i className="fa-solid fa-angles-right"></i> </span>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-nav-container d-flex">
          <a
            href="#nav-about"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-1 z-index-2"
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
          <a
            href="#nav-portfolio"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-3 z-index-1"
            data-target="portfolio-section"
            data-overlay="nav-overlay-portfolio"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('portfolio');
              document.body.classList.add('page-active');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          >
            <h2 className="d-flex transition position-relative">
              Portfolio
              <span className="arrow outline"><i className="fa-solid fa-arrow-right"></i></span>
            </h2>
            <div className="page-nav-icon">
              <img src="/src/assets/images/portfolio-icon.png" alt="" />
            </div>
          </a>
        </div>
      </div>
  );
};

export default Services;
