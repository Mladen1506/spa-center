import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageElectrolysis = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>What is Electrolysis?</h6>
          <p>Electrolysis is a safe and permanent hair removal method approved by the FDA, that provides a targeted solution to undesired hair growth, and it delivers immediate results. It is suitable for both men and women, for all colors and textures of hair, including areas that laser cannot treat.</p>
          <h6>How Does Electrolysis Work?</h6>
          <Image right small src={imagesFolderUrl('pages/Approval-Circle-1in-150x150.jpeg')} alt="Electrolysis Approval Circle" />
          <p>During an electrolysis treatment, a small electric current is transmitted by a fine, disposable probe applied directly into the natural opening of the hair follicle, destroying the mechanism that causes hair to grow and regenerate. Unlike waxing or plucking, electrolysis will halt hair regeneration, leaving the area smooth and hair-free.</p>

          <h6>The CPE Credential for Electrologists</h6>
          <Image left small src={imagesFolderUrl('pages/aea_gold_logo.jpeg')} alt="AEA" />
          <p>Leila Espari is a board-certified electrologist and member of the American Electrology Association (AEA). Leila holds the Certified Professional Electrologist (CPE) credential which signifies that a practitioner has knowledge and experience that has been tested and measured against a national standard of excellence. It also means that the practitioner engages in regular continuing education and keeps abreast of industry developments.</p><Image right small src={imagesFolderUrl('pages/cpe-300x300.png')} alt="CPE" />
          <p>A devoted practitioner, Leila has been performing electrology since 1993. She was happy to welcome electrologist Desiree Connor to her team in 2011.  They are dedicated to their clients, highly-skilled, and achieve remarkable results.</p>
          <p>Electrolysis Pricing</p>
          <table>
            <tbody>
              <tr>
                <td>10 Min</td>
                <td>$39</td>
              </tr>
              <tr>
                <td>15 Min</td>
                <td>$49</td>
              </tr>
              <tr>
                <td>20 Min</td>
                <td>$59</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>$79</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>$109</td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>$129</td>
              </tr>      
            </tbody>
          </table>
          <p>For Brazilian electrolysis, add 50% to regular rate.</p>
        </div>
      </PageContent>
    </Page>
  );
};
export default PageElectrolysis;