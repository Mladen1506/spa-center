import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageHydrafacialTakeHome = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h5>Signature HydraFacial Body Treatments</h5>
          <p>Extend the benefits of the HydraFacial treatment to other parts of the body to deeply cleanse, exfoliate, extract, and
            hydrate the skin. Additional savings are available when adding on to a Signature HydraFacial treatment.</p>
          <h5>Neck and Décolleté (10 min.)</h5>


          <ul>
            <li>Stand-alone price $129</li>
            <li>Add-on price with Signature HydraFacial $95</li>
          </ul>

          {/* <ul>
            <li></li>
            <li></li>
          </ul> */}

          <h5>Hands(No extractions, No Beta-HD) (15 min.)</h5> 
          <ul>
            <li>Stand-alone price $59</li>
            <li>Add-on price with Signature HydraFacial: $40</li>
          </ul>

          <h5>Arms (no extractions, no Beta-HD) (15 min.)</h5>
          <ul>
            <li>Stand-alone price $199</li>
            <li>Add-on price with Signature HydraFacial $125</li>
          </ul>

          <h5>Back Signature (30 min.)</h5>
          <ul>
            <li>Stand-alone price $250</li>
            <li>Add-on price with Signature HydraFacial $215</li>
          </ul>

          <h5>Back Clarifying (60 min.)</h5>
          <ul>
            <li>Stand-alone price $295</li>
            <li>Add-on price with Signature HydraFacial $260</li>
          </ul>

          <h5>HydraFacial Lymphatic Therapy</h5>
          <p>Optimize skin health by encouraging detoxification through mechanical lymphatic therapy. Skin will feel
            healthy and radiant from the inside-out.</p>

          <h5>Facial Lymphatic</h5>
          <ul>
            <li>Stand-alone price $120</li>
            <li>Add-on price with Signature HydraFacial $75</li>
          </ul>

          <h5>Arm</h5>
          <ul>
            <li>Stand-alone price $65</li>
            <li>Add-on price with Signature HydraFacial $40</li>
          </ul>

          <h5>Abdomen</h5>
          <ul>
            <li>Stand-alone price $75</li>
            <li>Add-on price with Signature HydraFacial $50</li>
          </ul>

          <h5>Leg</h5>
          <ul>
            <li>Stand-alone price $65</li>
            <li>Add-on price with Signature HydraFacial $40</li>
          </ul>

          <h5>Back</h5>
          <ul>
            <li>Stand-alone price $75</li>
            <li>Add-on price with Signature HydraFacial $50</li>
          </ul>

          <h5>HydraFacial LED Light Therapy</h5>
          <p>Use LED Red and Blue lights to enhance your HydraFacial treatment. Blue lights target and kill p. acnes bacteria to help congested and oily skin.</p>

          <h5>Face (Red and Blue LED at the same time)</h5>
          <ul>
            <li>Stand-alone price $75</li>
            <li>Add-on price with Signature HydraFacial $50</li>
          </ul>

          <h5>Back (Blue LED)</h5>
          <ul>
            <li>Stand-alone price $80</li>
            <li>Add-on price with Signature HydraFacial $45</li>
          </ul>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageHydrafacialTakeHome;