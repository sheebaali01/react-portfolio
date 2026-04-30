import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

const Admin = () => {
  const { data, updateData, resetData } = usePortfolio();
  const [localData, setLocalData] = useState(data);
  const [activeTab, setActiveTab] = useState('general');
  const navigate = useNavigate();

  const handleChange = (path, value) => {
    const newData = { ...localData };
    const keys = path.split('.');
    let current = newData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setLocalData(newData);
  };

  const handleArrayChange = (path, index, field, value) => {
    const newData = { ...localData };
    const keys = path.split('.');
    let current = newData;
    for (let i = 0; i < keys.length; i++) {
      current = current[keys[i]];
    }
    if (field) {
      current[index][field] = value;
    } else {
      current[index] = value;
    }
    setLocalData(newData);
  };

  const addItem = (path, defaultValue) => {
    const newData = { ...localData };
    const keys = path.split('.');
    let current = newData;
    for (let i = 0; i < keys.length; i++) {
      current = current[keys[i]];
    }
    current.push(defaultValue);
    setLocalData(newData);
  };

  const removeItem = (path, index) => {
    const newData = { ...localData };
    const keys = path.split('.');
    let current = newData;
    for (let i = 0; i < keys.length; i++) {
      current = current[keys[i]];
    }
    current.splice(index, 1);
    setLocalData(newData);
  };

  const handleSave = () => {
    updateData(localData);
    alert('Changes saved successfully!');
    navigate('/'); // Return to home
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "portfolio.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const renderInput = (label, path, value, type = "text") => (
    <div className="mb-4">
      <label className="form-label fw-bold">{label}</label>
      {type === "textarea" ? (
        <textarea 
          className="form-control" 
          rows="3" 
          value={value} 
          onChange={(e) => handleChange(path, e.target.value)}
        />
      ) : (
        <input 
          type={type} 
          className="form-control" 
          value={value} 
          onChange={(e) => handleChange(path, e.target.value)} 
        />
      )}
    </div>
  );

  return (
    <div className="admin-dashboard bg-dark text-white min-vh-100 p-4" style={{ zIndex: 9999, position: 'relative' }}>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="text-clip bg-gradient-1">Admin Dashboard</h1>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-light" onClick={() => navigate('/')}>Back to Site</button>
            <button className="btn btn-outline-warning" onClick={() => { if(confirm('Reset all changes?')) { resetData(); setLocalData(data); } }}>Reset</button>
            <div className="position-relative">
              <button className="btn btn-outline-info" onClick={() => document.getElementById('importFile').click()}>Import JSON</button>
              <input 
                type="file" 
                id="importFile" 
                className="d-none" 
                accept=".json" 
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      try {
                        const importedData = JSON.parse(event.target.result);
                        setLocalData(importedData);
                        alert('Data imported! Click Save Changes to apply.');
                      } catch (err) {
                        alert('Invalid JSON file');
                      }
                    };
                    reader.readAsText(file);
                  }
                }}
              />
            </div>
            <button className="btn btn-info" onClick={handleExport}>Export JSON</button>
            <button className="btn btn-primary px-4" onClick={handleSave}>Save Changes</button>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="list-group list-group-flush rounded-3 overflow-hidden shadow">
              {['general', 'about', 'services', 'portfolio', 'resume', 'blog', 'contact'].map(tab => (
                <button 
                  key={tab}
                  className={`list-group-item list-group-item-action bg-dark text-white border-secondary ${activeTab === tab ? 'active bg-primary border-primary' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="col-lg-9">
            <div className="card bg-dark border-secondary shadow p-4">
              {activeTab === 'general' && (
                <div>
                  <h3 className="mb-4">General Information</h3>
                  {renderInput("Name", "personalInfo.name", localData.personalInfo.name)}
                  {renderInput("Title", "personalInfo.title", localData.personalInfo.title)}
                  <div className="mb-4">
                    <label className="form-label fw-bold">Bio Paragraphs</label>
                    {localData.personalInfo.bio.map((para, idx) => (
                      <div key={idx} className="d-flex gap-2 mb-2">
                        <textarea className="form-control" value={para} onChange={(e) => handleArrayChange("personalInfo.bio", idx, null, e.target.value)} />
                        <button className="btn btn-danger btn-sm" onClick={() => removeItem("personalInfo.bio", idx)}><i className="fa-solid fa-trash"></i></button>
                      </div>
                    ))}
                    <button className="btn btn-outline-primary btn-sm" onClick={() => addItem("personalInfo.bio", "")}>+ Add Paragraph</button>
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-bold">Scramble Text (Hero)</label>
                    {localData.personalInfo.scrambleText.map((text, idx) => (
                      <div key={idx} className="d-flex gap-2 mb-2">
                        <input className="form-control" value={text} onChange={(e) => handleArrayChange("personalInfo.scrambleText", idx, null, e.target.value)} />
                        <button className="btn btn-danger btn-sm" onClick={() => removeItem("personalInfo.scrambleText", idx)}><i className="fa-solid fa-trash"></i></button>
                      </div>
                    ))}
                    <button className="btn btn-outline-primary btn-sm" onClick={() => addItem("personalInfo.scrambleText", "")}>+ Add Item</button>
                  </div>
                </div>
              )}

              {activeTab === 'about' && (
                <div>
                  <h3 className="mb-4">About Section</h3>
                  {renderInput("About Heading", "about.heading", localData.about.heading)}
                  {renderInput("Testimonials Heading", "about.testimonialsHeading", localData.about.testimonialsHeading)}
                  <div className="mt-4">
                    <h5>Testimonials</h5>
                    {localData.about.testimonials.map((t, idx) => (
                      <div key={idx} className="border border-secondary p-3 mb-3 rounded">
                        {renderInput("Quote", `about.testimonials.${idx}.quote`, t.quote, "textarea")}
                        {renderInput("Author", `about.testimonials.${idx}.author`, t.author)}
                        {renderInput("Link", `about.testimonials.${idx}.link`, t.link)}
                        <button className="btn btn-danger btn-sm" onClick={() => removeItem("about.testimonials", idx)}>Delete Testimonial</button>
                      </div>
                    ))}
                    <button className="btn btn-outline-primary" onClick={() => addItem("about.testimonials", { quote: "", author: "", link: "" })}>+ Add Testimonial</button>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <h3 className="mb-4">Services</h3>
                  {renderInput("Services Heading", "services.heading", localData.services.heading)}
                  {renderInput("Services Subheading", "services.subheading", localData.services.subheading, "textarea")}
                  <div className="mt-4">
                    {localData.services.items.map((s, idx) => (
                      <div key={idx} className="border border-secondary p-3 mb-3 rounded">
                        {renderInput("Service Title", `services.items.${idx}.title`, s.title)}
                        {renderInput("Description", `services.items.${idx}.description`, s.description, "textarea")}
                        <div className="mb-3">
                          <label className="form-label fw-bold">Features (Comma separated)</label>
                          <input 
                            className="form-control" 
                            value={s.features.join(', ')} 
                            onChange={(e) => handleArrayChange("services.items", idx, "features", e.target.value.split(',').map(f => f.trim()))} 
                          />
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={() => removeItem("services.items", idx)}>Delete Service</button>
                      </div>
                    ))}
                    <button className="btn btn-outline-primary" onClick={() => addItem("services.items", { id: `service${Date.now()}`, title: "", description: "", features: [], image: "", mobImage: "" })}>+ Add Service</button>
                  </div>
                </div>
              )}

              {activeTab === 'portfolio' && (
                <div>
                  <h3 className="mb-4">Portfolio</h3>
                  {renderInput("Portfolio Heading", "portfolio.heading", localData.portfolio.heading)}
                  <div className="mt-4">
                    <h5>Projects</h5>
                    {localData.portfolio.projects.map((p, idx) => (
                      <div key={idx} className="border border-secondary p-3 mb-3 rounded">
                        {renderInput("Project Title", `portfolio.projects.${idx}.title`, p.title)}
                        {renderInput("Link", `portfolio.projects.${idx}.link`, p.link)}
                        <div className="mb-3">
                          <label className="form-label fw-bold">Categories (Comma separated)</label>
                          <input 
                            className="form-control" 
                            value={p.categories.join(', ')} 
                            onChange={(e) => handleArrayChange("portfolio.projects", idx, "categories", e.target.value.split(',').map(c => c.trim()))} 
                          />
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={() => removeItem("portfolio.projects", idx)}>Delete Project</button>
                      </div>
                    ))}
                    <button className="btn btn-outline-primary" onClick={() => addItem("portfolio.projects", { title: "", categories: [], image: "", link: "" })}>+ Add Project</button>
                  </div>
                </div>
              )}

              {activeTab === 'resume' && (
                <div>
                  <h3 className="mb-4">Resume</h3>
                  {renderInput("Resume Heading", "resume.heading", localData.resume.heading)}
                  
                  <h5 className="mt-4">Experiences</h5>
                  {localData.resume.experiences.map((exp, idx) => (
                    <div key={idx} className="border border-secondary p-3 mb-3 rounded">
                      {renderInput("Period", `resume.experiences.${idx}.period`, exp.period)}
                      {renderInput("Title", `resume.experiences.${idx}.title`, exp.title)}
                      {renderInput("Company", `resume.experiences.${idx}.company`, exp.company)}
                      {renderInput("Description", `resume.experiences.${idx}.description`, exp.description, "textarea")}
                      <button className="btn btn-danger btn-sm" onClick={() => removeItem("resume.experiences", idx)}>Delete Experience</button>
                    </div>
                  ))}
                  <button className="btn btn-outline-primary mb-4" onClick={() => addItem("resume.experiences", { period: "", title: "", company: "", location: "", link: "", description: "" })}>+ Add Experience</button>

                  <h5 className="mt-4">Skills</h5>
                  <div className="row">
                    {localData.resume.skills.map((skill, idx) => (
                      <div key={idx} className="col-md-6 mb-3">
                        <div className="d-flex gap-2 align-items-end">
                          <div className="flex-grow-1">
                            {renderInput(skill.name, `resume.skills.${idx}.percentage`, skill.percentage, "number")}
                          </div>
                          <button className="btn btn-danger btn-sm mb-4" onClick={() => removeItem("resume.skills", idx)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-outline-primary" onClick={() => addItem("resume.skills", { name: "New Skill", percentage: "80", icon: "" })}>+ Add Skill</button>
                </div>
              )}

              {activeTab === 'blog' && (
                <div>
                  <h3 className="mb-4">Blog</h3>
                  {renderInput("Blog Heading", "blog.heading", localData.blog.heading)}
                  <div className="mt-4">
                    {localData.blog.posts.map((post, idx) => (
                      <div key={idx} className="border border-secondary p-3 mb-3 rounded">
                        {renderInput("Date", `blog.posts.${idx}.date`, post.date)}
                        {renderInput("Category", `blog.posts.${idx}.category`, post.category)}
                        {renderInput("Title", `blog.posts.${idx}.title`, post.title)}
                        {renderInput("Excerpt", `blog.posts.${idx}.excerpt`, post.excerpt, "textarea")}
                        <button className="btn btn-danger btn-sm" onClick={() => removeItem("blog.posts", idx)}>Delete Post</button>
                      </div>
                    ))}
                    <button className="btn btn-outline-primary" onClick={() => addItem("blog.posts", { date: "", category: "", title: "", excerpt: "", image: "", link: "#" })}>+ Add Post</button>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div>
                  <h3 className="mb-4">Contact</h3>
                  {renderInput("Heading", "contact.heading", localData.contact.heading)}
                  {renderInput("Subheading", "contact.subheading", localData.contact.subheading, "textarea")}
                  {renderInput("Email", "contact.email", localData.contact.email, "email")}
                  {renderInput("Phone", "contact.phone", localData.contact.phone)}
                  {renderInput("Address", "contact.address", localData.contact.address, "textarea")}
                  {renderInput("Map Embed URL", "contact.mapEmbedUrl", localData.contact.mapEmbedUrl, "textarea")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        body.admin-mode {
          overflow: auto !important;
          background-color: #1c1d25 !important;
          padding-left: 0 !important;
          margin-left: 0 !important;
        }
        .admin-dashboard {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 100vh;
          z-index: 10000;
          overflow-y: auto;
        }
        .admin-dashboard label,
        .admin-dashboard h1,
        .admin-dashboard h2,
        .admin-dashboard h3,
        .admin-dashboard h4,
        .admin-dashboard h5,
        .admin-dashboard h6,
        .admin-dashboard p,
        .admin-dashboard .list-group-item {
          color: white !important;
        }
        .admin-dashboard .form-control {
          background-color: #2b3035;
          border-color: #495057;
          color: white;
        }
        .admin-dashboard .form-control:focus {
          background-color: #343a40;
          border-color: #0d6efd;
          color: white;
          box-shadow: none;
        }
        .admin-dashboard .list-group-item.active {
          background-color: #0d6efd !important;
          border-color: #0d6efd !important;
        }
        .text-clip {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bg-gradient-1 { background-image: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%); }
      `}</style>
    </div>
  );
};

export default Admin;
