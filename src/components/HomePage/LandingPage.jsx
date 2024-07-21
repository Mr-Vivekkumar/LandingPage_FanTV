import React from "react";
import { Button } from "react-bootstrap";
import bannerImg from "../../assets/images/banner.png";
import plus from "../../assets/images/plus.png";
import arrow from "../../assets/images/arrow-right.png";
import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.bannerContent}>
      <div className="container">
        <div className="banner-content-container">
          <div className={style.bannerTitle}>
            <h2>Empowering the Digital Era: DECENTARLIZING ENTERTAINMENT</h2>
            <p>
              Join the world’s first DePIN: Revolutionizing Content Streaming
              with faster, Safer and Cheaper Access
            </p>
            <Button>
              Coming Soon
              <img src={arrow} alt="arrow" />
            </Button>
          </div>

          <div className={style.bannerImg}>
            <img src={bannerImg} alt="banner-img" />
          </div>
          <div className={style.bannerContentBox}>
            <div className={style.bannerBox}>
              <div className={style.bannerBoxTitle}>
                <p>No. of Node Operators</p>
                <img src={plus}  alt="banner-box-img" style={{width: '86px'}} />
              </div>
              <h2>2000</h2>
            </div>
            <div className={style.bannerBox}>
              <div className={style.bannerBoxTitle}>
                <p>
                  Data Transferred in TB <span style={{fontSize: '14px'}}>(last 30 days)</span>
                </p>
                <img src={plus} alt="banner-box-img" />
              </div>
              <h2>12,000</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
