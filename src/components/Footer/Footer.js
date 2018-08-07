import React from 'react';
import PropTypes from 'prop-types';
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
        <h1 style={{ color: colorPrimary }}>Contact Me!</h1>
        <div className="about-wrapper">
          <div className="tagline" style={{ color: textPrimary }}>
            <br/>
            <p>Dylan Lovell</p>
            <br/>
            <p>Dylovell@live.com</p>
            <br/>
            <a style={{ color: colorPrimary }} href="Linkedin.com/in/DylanLovell">Linkedin.com/in/DylanLovell</a>
            <br/>
            <br/>
            <a style={{ color: colorPrimary }} href="Github.com/Dylovell">Github.com/Dylovell</a>
            <p className="text-emoji" style={{ color: colorPrimary }}>
            </p>
          </div>
            <div className='contact-picture'><img alt='' src='https://avatars0.githubusercontent.com/u/36043075?s=460&v=4'></img></div>
        </div>
      </div>
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
