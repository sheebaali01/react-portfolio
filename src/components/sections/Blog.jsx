import React from 'react';
import portfolioData from '../../data/portfolio.json';

const Blog = ({ isActive }) => {
  const { blog } = portfolioData;

  return (
    <div className={`page-section position-relative overflow-hidden ${isActive ? 'active-page' : 'd-none'}`} id="blog-section">
        <div className="content-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="page-heading-wrapper mb-90 tab-mb-64">
                  <div className="col-lg-11 animate-child">
                    <h2 className="page-heading mb-48 mob-mb-24 text-clip bg-gradient-5">{blog.heading}</h2>
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
                <div className="blog-list-wrapper">
                  <div className="blog-list" data-show="3">
                    {blog.posts.map((post, idx) => (
                      <div className="blog-item" key={idx}>
                        <div className={`blog-box position-relative overflow-hidden ${idx === 0 ? 'pt-0' : 'pt-80'} pb-48 mob-pb-0 animate-child`}>
                          <div className="blog-box-inner animate-child">
                            <div className="blog-meta">
                              <div className="d-flex align-items-center gap-3 opacity-50 mb-3">
                                <div className="blog-date">{post.date}</div>
                                <span>/</span>
                                <div className="blog-category">
                                  <span className="d-inline-block">{post.category}</span>
                                </div>
                              </div>
                            </div>
                            <div className="blog-box-title">
                              <h4 className="blog-title font-primary fw-bold mb-3">{post.title}</h4>
                            </div>
                            <div className="blog-box-content offset-lg-2 mb-3">
                              <div className="blog-box-content-inner opacity-75">
                                <p>{post.excerpt}</p>
                              </div>
                            </div>
                            <div className="blog-box-cta offset-lg-2">
                              <a href={post.link} className="link text-body-color" data-text="Read article"><span>Read article</span></a>
                            </div>
                          </div>
                          <div className="blog-img-wrapper d-flex flex-shrink-0">
                            <a href={post.link} className="blog-box-img ratio ratio ratio-4x3 overflow-hidden position-relative transition shadow">
                              <img src={post.image} alt="" className="img-cover w-100 h-100" />
                            </a>
                          </div>
                        </div>
                        <hr className="mt-0 mb-0" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="blog-more-parent text-center mt-5">
                  <a href="#" className="link link-xxl text-body-color show-more-post" data-text="Load more post"><span>Load more post</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-nav-container d-flex">
          <a
            href="#nav-resume"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-4 z-index-2"
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
          <a
            href="#nav-contact"
            className="page-nav-link page-nav-parent d-flex align-items-end w-100 position-relative overflow-hidden bg-gradient-6 z-index-1"
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
        </div>
      </div>
  );
};

export default Blog;
