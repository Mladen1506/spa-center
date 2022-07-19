import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageIPL = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>INTENSE PULSED LIGHT (IPL) WITH SMARTPULSE™</h6>
          <div className="subtitle"><p>Photorejuvenation/photofacial, acne treatment</p></div>
          <Image right small src={imagesFolderUrl("pages/smartpulse_device1.jpeg")} alt="smart pulse device" />
          <p>Venus Versa uses Intense Pulsed Light (IPL) technology to deliver direct but gentle bursts of energy to skin. Venus Versa IPL treatments are proven to significantly improve the appearance of fine lines, wrinkles, pore size, textural irregularities, and vascular and pigmentation blemishes in over 80% of cases.</p>
          <p>Venus Versa IPL treatments direct IPL energy that passes through the outer surface of the skin called epidermis and penatrates into the lower layer called dermis, where it stimulates a cell called a fibroblast to produce new collagen. Over several treatments this new collagen softens and smoothes the appearance of wrinkes, outsized pores, and textural irregularities.</p>
          <p>Different wave lengths of IPL energy are used to improve rosacea, sun-damaged skin with pigmentation abnormalities, and vascular blemishes such as spider veins.</p>
          <p>Beneficial for:</p>
          <p><strong>Pigmented lesions</strong> such as hyperpigmentation, freckles, malesma, and sun/age spots.</p>
          <p><strong>Vascular lesions</strong> such as rosacea, spider veins, port wine stains, hemangiomas, angiomas, and venous malformations.</p>
          <p className="pricing-text">Single Session: $650</p>
          <p>&nbsp;</p>
          <h6>Pricing</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>IPL</td>
                <td>Single<br />
                  $550</td>
                <td>Pkg x 4<br />
                  $1800
                </td>
                <td>Pkg x 6<br />
                  $2400
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};
export default PageIPL;