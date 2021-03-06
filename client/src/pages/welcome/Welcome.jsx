import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { images } from '../../constants';
import './Welcome.scss';

const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  });

  return (
    <div className="container">
      <div className="welcome">
        <div className="welcome__left">
          <h1>PUT IT ON YOUR RADAR</h1>
          <h2>AND GET IT DONE</h2>
          <div className="welcome__mobile-pic">
            <img src={images.header} alt="header" />
          </div>
          <p>
            Join the half dozen of people who are using Choredar to keep track
            of their chores
          </p>
          <Link to="/register">
            <button className="btn welcome-btn">Get started</button>
          </Link>
        </div>
        <div className="welcome__right">
          <img src={images.header} alt="header" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
