import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
            I am extremely motivated to find solutions to problems. 
            </p>
            <p>
              I love learning how everything works, whether it is a Web Technology, astrophysics, or a manufacturing process.  
            </p>
            <h1>
            <span className="highlight">JavaScript</span>  React-Redux  <span className="highlight">Node.js</span>
            </h1>
            <h1>Express  <span className="highlight">HTML/CSS</span>  and much more!</h1>
            <p>
              I was born curious about the world. From a young age I had a deep interest in making and building. From Lego pinball machines to discovering basic circuitry using aluminum foil and duck tape, I never wanted to stop learning. Thankfully that fire never went out, and I am still learning and making new things all the time.  
            </p>
            <p>
              Spending almost four years in IT, troubleshooting and problem solving are some of my strong suits. Some of the projects that I worked on while working in IT involved Virtual Desktop Infrastructure testing and deployment, network upgrades, server upgrades, and the constant task of getting the correct equipment to employees to help enable them to do their jobs. Finding the right tool to help the employee succeed was one of the most fulfilling parts of my job.  
            </p>
            <p>
My exposure to IT was extremely helpful for the next step, Web Development. The opportunity to attend a Web Development Bootcamp, called Dev Mountain, arose and I jumped on the opportunity.  I have loved how much this bootcamp and set a foundation to build on, and the tool set it gave me to make/learn to make anything I want! 
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
