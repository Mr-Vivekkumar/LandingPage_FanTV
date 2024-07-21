import React from "react";
import style from "./cta.module.css";

const CallToAction = () => {
  return (
    <div className={style.callToAction}>
      <div className="container">
        <div className={style.callToActionContainer}>
          <h2>The transition CDN-dCDN</h2>
          <p>
            FanCloud pioneers a new era of connectivity with its decentralised
            content delivery network (dCDN), leveraging a global network of
            community-powered nodes. By harnessing a decentralised architecture,
            dCDN drastically reduces data transfer and compute costs while
            enhancing load time. Join FanCloud’s dCDN network and experience the
            future of seamless, secure and community- driven consumption
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
