import React from 'react';
import './Styles.css';
import ToolsImage from '../assets/tools.avif';

function ProjectCategories() {
  return (
    <section id="project-categories">
      <div className="container">
        <div className="section-header">
          <h2>Diverse Project Categories</h2>
          <p>Explore a vast variety of project categories, unleash your talents and earn from the comfort of your home.</p>
        </div>
        <div className="project-category-box">
          <div className="project-category">
            <div className="category-header">
              <h3>Variety</h3>
              <p>Numerous Categories</p>
            </div>
            <div className="category-body">
              <p>Choose from numerous categories, each bursting with opportunities for freelancers.</p>
            </div>
          </div>
          <div className="project-category">
            <div className="category-header">
              <h3>Flexibility</h3>
              <p>Choose Your Time</p>
            </div>
            <div className="category-body">
              <p>Work on your time terms, adapt freelancing according to your lifestyle.</p>
            </div>
          </div>
          <div className="project-category">
            <div className="category-header">
              <h3>Trust</h3>
              <p>Proven Companies</p>
            </div>
            <div className="category-body">
              <p>Work with proven companies that value your skills and pay well for your time.</p>
            </div>
          </div>
        </div>
        <div className="project-category-img">
          <img src={ToolsImage} alt="Tools" />
        </div>
      </div>
    </section>
  );
}

export default ProjectCategories;
