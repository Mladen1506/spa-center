import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageVenusViva = () => {
  return (
    <Page>
      <PageContent>
        <div class="fl-rich-text">
          <h2>NANOFRACTIONAL RADIO FREQUENCY (RF) WITH SMARTSCAN™</h2>
          <h3>Skin resurfacing</h3>
          <Image right small src={imagesFolderUrl("pages/smartscan_device1.png")} alt="smart scan device" />
          <p>Venus Viva NanoFractional RF is a nonsurgical radio frequency designed to resurface the skin. The columns of radio frequency energy travels to the tissue designed to damage the existing collagen, stimulating the body's natural healing and repair response by replacing the damaged collagen with new collagen. The radio frequency also stimulates the body producing new fibroblasts, "the houses" that create collagen. This wound healing response creates a smoother appearence to the skin, plumps up fine lines and wrinkles, treats acne scars, and reduces pigmented lesions and textural irregularities.</p>
          <p>Benefits: acne scars, dyschromia, enlarged pores, striae, and skin texture.</p>
          <p className="pricing-text">Single Session: $650</p>
          <p>&nbsp;</p>
        </div>
      </PageContent>
    </Page>
  );
};
export default PageVenusViva;