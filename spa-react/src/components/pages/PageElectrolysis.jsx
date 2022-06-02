import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageElectrolysis = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h5>What is Electrolysis?</h5>
          <p>Electrolysis is a safe method of hair removal, suitable for both men and women. The only method approved by the FDA for the removal of unwanted hair, electrolysis provides a targeted solution to undesired hair growth, and it delivers immediate results.</p>
          <h5>Will Electrolysis Work for Me?</h5>
          <Image right small src={imagesFolderUrl('pages/Approval-Circle-1in-150x150.jpeg')} alt="Electrolysis Approval Circle" />
          <p>Yes, electrolysis works on all skin and hair types. It can be applied to nearly all areas of the face and body – most popularly on eyebrows, chin, upper and lower lip, jaw line and sides of the face, breasts, underarms, abdomen, bikini line, feet, legs, and back. Based on a personal and confidential consultation, we will design a treatment plan that addresses your specific hair removal needs.</p>
          <h5>How Does Electrolysis Work?</h5>
          <p>During an electrolysis treatment, a small electric current is transmitted by a fine, sterile needle directly into the natural opening of the hair follicle, destroying the mechanism that causes hair to grow and regenerate. Unlike waxing or plucking, electrolysis will halt hair regeneration, leaving the area smooth and hair-free. During a treatment, you may feel a slight sensation as the current penetrates the follicle, but the procedure is pain-free.</p>
          <h5>The CPE Credential for Electrologists</h5>
          <Image left small src={imagesFolderUrl('pages/aea_gold_logo.jpeg')} alt="AEA" />
          <p>At Azure Dream, we want you to feel confident that the services you choose are performed by trained professionals. Spa owner and manager, Leila Espari, is a board-certified electrologist and member of the American Electrology Association (AEA). Leila holds the Certified Professional Electrologist (CPE) credential. The CPE credential signifies that a practitioner has knowledge and experience that has been tested and measured against a national standard of excellence. It also means that the practitioner engages in regular continuing education and keeps abreast of industry developments.</p><Image right small src={imagesFolderUrl('pages/cpe-300x300.png')} alt="CPE" />
          <p>A devoted practitioner, Leila has been performing electrology for two decades. She is dedicated to her clients, is highly-skilled, and achieves remarkable results. But don’t take our word for it: click here to read client testimonials. To verify Leila’s credentials, click here.</p>
          <h5>Electrolysis Pricing</h5>
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