import React from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context";
import { logo, liveBackground } from "../assets";
import styles from "../styles";
import Alert from "./Alert";

const PageHOC = (Component, title, description) => () => {
  const { showAlert } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className={styles.hocContainer}>
      {showAlert?.status && (
        <Alert type={showAlert.type} message={showAlert.message} />
      )}
      <div className={styles.hocContentBox}>
        <img
          src={logo}
          alt="logo"
          className={styles.hocLogo}
          onClick={() => navigate("/")}
        />
        <div className={styles.hocBodyWrapper}>
          <div className="flex flex-row w-full">
            <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
          </div>
          <p className={`${styles.normalText} my-10`}>{description}</p>
          <Component />
        </div>
        <p className={styles.footerText}>
      Copyright © 2024 All rights reserved{' '}
      <a href="https://x.com/Giddy_KK?t=_oopVrOZu77tBxxwxy0-Tw&s=09" target="_blank" rel="noopener noreferrer" className={styles.linkBlue} >
        @codewithgiddy🪐
      </a>
    </p>
      </div>
      <div className="flex flex-1 relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '-1',
        }}
      >
        <source src={liveBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
};

export default PageHOC;
