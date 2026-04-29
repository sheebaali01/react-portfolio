import React from 'react';
import portfolioData from '../../data/portfolio.json';

const Resume = ({ isActive, setActiveSection }) => {
  const { resume } = portfolioData;

  return (
    <div className={`page-section position-relative overflow-hidden ${isActive ? 'active-page' : 'd-none'}`} id="resume-section">
        <div className="content-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="page-heading-wrapper mb-90 tab-mb-64">
                  <div className="col-lg-11 animate-child">
                    <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-4">{resume.heading}</h2>
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
              <div className="col-lg-12">
                <div className="experience-list-wrapper animate-child">
                  <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-4">Experiences</h2>
                  <div className="experience-list">
                    {resume.experiences.map((exp, idx) => (
                      <div className="experience-item" key={idx}>
                        <div className="experience-box row gap-3 gap-lg-0 animate-child">
                          <div className="experience-box-left col-lg-3">
                            <h5 className="mb-0">{exp.period}</h5>
                          </div>
                          <div className="experience-box-mid col-lg-5">
                            <h5 className="font-primary fw-bold mb-0">{exp.title}</h5>
                            <p>
                              in <a href={exp.link} className="text-clip bg-gradient-2" target="_blank" rel="noreferrer">{exp.company}</a>, {exp.location}
                            </p>
                          </div>
                          <div className="experience-box-right col-lg-4">
                            <p>{exp.description}</p>
                          </div>
                        </div>
                        {idx !== resume.experiences.length - 1 && <hr className="my-5" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="education-list-wrapper animate-child mt-120 tab-mt-64">
                  <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-4">Education</h2>
                  <div className="education-list">
                    {resume.education.map((edu, idx) => (
                      <div className="education-item" key={idx}>
                        <div className="education-box row gap-3 gap-lg-0 animate-child">
                          <div className="education-box-left col-lg-3">
                            <h5 className="mb-0">{edu.period}</h5>
                          </div>
                          <div className="education-box-mid col-lg-5">
                            <h5 className="font-primary fw-bold opacity-75 mb-0">{edu.title}</h5>
                            <p className="opacity-50">from {edu.institution}</p>
                          </div>
                          <div className="education-box-right col-lg-4">
                            <p>{edu.description}</p>
                          </div>
                        </div>
                        {idx !== resume.education.length - 1 && <hr className="my-5" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="awards-list-wrapper animate-child mt-120 tab-mt-64">
                  <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-4">Awards</h2>
                  <div className="awards-list">
                    {resume.awards.map((award, idx) => (
                      <div className="awards-item" key={idx}>
                        <div className="awards-box row gap-3 gap-lg-0 align-items-center animate-child">
                          <div className="awards-box-left col-lg-3">
                            <div className="awards-logo d-flex align-items-center justify-content-center shadow rounded-4 me-3 p-4 bg-gradient-4">
                              <img src={award.logo} alt={award.title} />
                            </div>
                          </div>
                          <div className="awards-mid col-lg-5">
                            <h6 className="font-primary fw-bold mb-0">
                              <span className="text-clip bg-gradient-2">{award.status}</span>
                            </h6>
                            <h4 className="font-primary fw-bold mb-0">{award.title}</h4>
                            <p className="opacity-50">{award.year}</p>
                          </div>
                          <div className="awards-right col-lg-4">
                            <p>{award.description}</p>
                          </div>
                        </div>
                        {idx !== resume.awards.length - 1 && <hr className="my-5" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="skills-list-wrapper animate-child mt-120 tab-mt-64">
                  <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-4">Skills</h2>
                  <div className="skills-list">
                    {resume.skills.map((skill, idx) => (
                      <div className="skills-item" key={idx}>
                        <div className="skills-box w-100 d-flex align-items-center animate-child">
                          <div className="skills-icon shadow rounded-4 me-3 p-3 bg-gradient-4">
                            <img src={skill.icon} alt={skill.name} />
                          </div>
                          <div className="skills-name h3 mb-0 fw-bold text-clip bg-gradient-2">{skill.name}</div>
                          <div className="skills-percentage h3 mb-0 ms-auto fw-bold"><b className="count" data-target={skill.percentage}>0</b>%</div>
                        </div>
                        {idx !== resume.skills.length - 1 && <hr className="my-5" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-nav-container d-flex">
          <a
            href="#nav-portfolio"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-3 z-index-2"
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
          <a
            href="#nav-blog"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-5 z-index-1"
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
        </div>
      </div>
  );
};

export default Resume;
