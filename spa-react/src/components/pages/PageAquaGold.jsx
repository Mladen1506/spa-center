import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageAquaGold = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          {/* <p>
            <Image wide src={imagesFolderUrl("pages/aquagold-logo-no-micro_360x-300x57.png")} alt="AquaGold" />
          </p> */}
          <h5>AquaGold</h5>
          <p>AquaGold® microchannel technology is a revolutionary, minimally invasive, pain free microneedle device that contains 24 karat needles that create microchannels under the surface of the skin to effectively deliver microdoses of therapeutics beneath the skin. The device is an individual unit which is customized based on the individual’s skin needs - an individualized treatment of hylauronic acid filler, neurotoxins, acne treatments, and wrinkle relaxers can be evenly distributed under the surface of the skin to promote cell stimulation &amp; overall skin rejuvenation and improve the appearance of fine lines, while enhancing and boosting collagen and elastin production. This treatment will improve the appearance of fine lines, and increases skin moisture to the face, neck, chest, and the back of hands.</p>
          <p>Depending on a client’s concerns and desired results, we are able to fully customize the solution to be applied with the microchannel device. As with other microneedling procedures, AquaGold® fine touch affects the connective tissue and stimulates natural collagen and elastin production in the skin, but the main difference between AquaGold® and classic mesotherapeutical or microneedling procedures is in a much softer action, the depth of penetration into the skin layers, and the fineness of the needles. AquaGold® almost never causes bleeding. Your natural skin color can be restored in 15-20 minutes.</p>
          <h6><span className="pricing-text">Single Session $800 </span></h6>
          <h6><span className="pricing-text">Limited Time Special Package Pricing:</span></h6>
          <h6><span className="pricing-text">4 Sessions $1800</span></h6>
          <h6><span className="pricing-text">6 Sessions $2400</span></h6>
          <p>&nbsp;</p>
          <h6><span className="pricing-text"><strong>To treat acne skin conditions:</strong></span></h6>
          <h6><span className="pricing-text">Aqua Gold - Acne Treatment </span><span className="pricing-text">Special Package Pricing: </span></h6>
          <h6><span className="pricing-text">8 Sessions $2000</span></h6>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p><a href="https://aquagoldfinetouch.com/"><Image wide src={imagesFolderUrl("pages/aquagold-logo-no-micro_360x-300x57.png")} alt="AquaGold" /></a></p>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageAquaGold;