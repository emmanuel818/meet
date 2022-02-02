import React from "react";
import './WelcomeScreen.css';
import { getAccessToken } from './api';
import Button from 'react-bootstrap/Button';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <h1>Welcome to the Meet app</h1>
        <h4>
          Log in to see upcoming events around the world for
          full-stack
          developers
        </h4>
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
                alt="Google sign-in"
              />
            </div>
            <Button onClick={() => { getAccessToken() }}
              rel="nofollow noopener"
              className="btn-text"
            >
              Sign in with Google
            </Button>
          </div>
        </div>
        <a
          href="https://emmanuel818.github.io/meet/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </div>
    )
    : null
}
export default WelcomeScreen;
