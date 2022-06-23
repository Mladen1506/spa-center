import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageComboTreats = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-col-content fl-node-content">
          <div className="fl-module fl-module-rich-text fl-node-5e1b6baadafcf" data-node="5e1b6baadafcf">
            <div className="fl-module-content fl-node-content">
              <div className="fl-rich-text">
                <h6>Spa Combination Packages</h6>
                <p>How do you pamper yourself and save money? Book a spa package. With several to choose from, select the perfect combination of beauty, relaxation, and luxury.</p>
              </div>
            </div>
          </div>
          <div className="fl-module fl-module-heading fl-node-5e1b6d818d94e SPack" data-node="5e1b6d818d94e">
            <div className="fl-module-content fl-node-content">
              <h6 className="fl-heading">
                <span className="fl-heading-text">Deep Blue Getaway</span>
              </h6>
            </div>
          </div>
          <div className="fl-module fl-module-rich-text fl-node-5e1b6da0e39ff SPContent" data-node="5e1b6da0e39ff">
            <div className="fl-module-content fl-node-content">
              <div className="fl-rich-text">
                <p><img loading="lazy" className="size-full wp-image-72 alignleft" src="/wp-content/uploads/react-static/img/pages/blue-getaway.jpeg" alt="" width="215" height="161" /></p>
              <p>Escape to azure waters and cerulean skies.</p>
              <p>When you book a 60-minute lifting facial with blueberry peel, along with a 60-minute Deep Tissue massage, receive a complimentary organic eye treatment.</p>
            </div>
          </div>
        </div>
        <div className="fl-module fl-module-heading fl-node-5e1b71dbac5d6 SPack" data-node="5e1b71dbac5d6">
          <div className="fl-module-content fl-node-content">
            <h6 className="fl-heading">
              <span className="fl-heading-text">Aroma Forest Dream</span>
            </h6>
          </div>
        </div>
        <div className="fl-module fl-module-rich-text fl-node-5e1b71afd808a SPContent" data-node="5e1b71afd808a">
          <div className="fl-module-content fl-node-content">
            <div className="fl-rich-text">
              <p><img loading="lazy" className="size-full wp-image-72 alignleft" src="https://azuredreamspa.com/wp-content/uploads/2020/01/packages_forest.jpg" alt="" width="215" height="161" /></p>
              <p>Lose yourself in the verdant aromas of a forest dream.</p>
              <p>Enjoy a 60-minute Aroma Touch facial and a 60-minute Aromatherapy massage, and receive a complimentary Aromatherapy scalp massage.</p>
              {/* <p>Package price $275 (savings of $30)</p> */}
            </div>
          </div>
        </div>
        <div className="fl-module fl-module-heading fl-node-5e1b71febed58 SPack" data-node="5e1b71febed58">
          <div className="fl-module-content fl-node-content">
            <h6 className="fl-heading">
              <span className="fl-heading-text">Nature Land Escape</span>
            </h6>
          </div>
        </div>
        <div className="fl-module fl-module-rich-text fl-node-5e1b71dd28576 SPContent" data-node="5e1b71dd28576">
          <div className="fl-module-content fl-node-content">
            <div className="fl-rich-text">
              <p><img loading="lazy" className="size-full wp-image-74 alignleft" src="https://azuredreamspa.com/wp-content/uploads/2020/01/packages_nature_land.jpg" alt="" width="215" height="143" /></p>
              <p>Let yourself be enveloped in natural beauty.</p>
              <p>Combine a 45-minute Customizable Dream Facial with a 60-minute Stress Relief massage, and receive a complimentary Aromatherapy scalp massage.</p>
              {/* <p>Package price $255(savings of $30)</p> */}
            </div>
          </div>
        </div>
        <div className="fl-module fl-module-heading fl-node-5e1b71ab02382 SPack" data-node="5e1b71ab02382">
          <div className="fl-module-content fl-node-content">
            <h6 className="fl-heading">
              <span className="fl-heading-text">Mystic Path Way</span>
            </h6>
          </div>
        </div>
        <div className="fl-module fl-module-rich-text fl-node-5e1b72005dbba SPContent" data-node="5e1b72005dbba">
          <div className="fl-module-content fl-node-content">
            <div className="fl-rich-text">
              <p><img loading="lazy" className="size-full wp-image-73 alignleft" src="https://azuredreamspa.com/wp-content/uploads/2020/01/packages_mystic_path.jpg" alt="" width="216" height="161" /></p>
              <p>Step lightly and leave the day’s cares behind.</p>
              <p>Enjoy our 60-minute Signature Magic Fix Facial and your choice of either a 60-minute foot reflexology session or Swedish massage, and receive a complimentary aromatherapy scalp massage.</p>
              {/* <p>Package price $300 (savings of $30)</p> */}
            </div>
          </div>
        </div>
      </div>
    </PageContent>
    </Page >
  );
};

export default PageComboTreats;