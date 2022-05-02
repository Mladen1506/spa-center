import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageClassicMassage = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h3>Classic Massage Experience</h3>
          <p>We offer a variety of massages, which focus on relaxation and/or pain relief. Our massages come at two different price points – choose from our Classic Massage Experience or the upgraded Premium Massage Experience. For savings and convenience, consider one of our packages.</p>
          <h6>Swedish</h6>
          <p>The most well known of all types of body work, Swedish massage is ideal for anyone who is new to massages, and is unsure what treatment to select. Based on Western concepts of anatomy and physiology, this form of massage uses long, smooth, and flowing strokes, in the direction of blood returning to the heart. It is designed to relax the entire body, increase circulation, and promote health.</p>
          <h6>Foot Reflexology</h6>
          <Image right src={imagesFolderUrl('pages/new/foot-massage.jpeg')}/>
          <p>An ancient Chinese healing art, this treatment acts to detoxify the body, release tension, and increase circulation and energy. Practitioners explain that the foot has more than 7,000 nerve endings, called reflexes, that correspond to every organ and system within the body. Foot reflexology is an applied-pressure therapy that stimulates reflex points and produces therapeutic benefits.</p>
          <h3>Swedish and Foot Reflexology Massage Pricing</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colspan="2">
                  <h6>Single Session</h6>
                </td>
                <td colspan="2">
                  <h6>Packages</h6>
                </td>
              </tr>
              <tr>
                <td>Minutes</td>
                <td>Price</td>
                <td>Package</td>
                <td>Price</td>
              </tr>
              <tr>
                <td>30</td>
                <td>75</td>
                <td>Package of 6 (savings of 30)</td>
                <td><em>420</em></td>
              </tr>
              <tr>
                <td>45</td>
                <td>90</td>
                <td>Package of 6 (savings of 48)</td>
                <td><em>492</em></td>
              </tr>
              <tr>
                <td>60</td>
                <td>105</td>
                <td>Package of 6 (savings of 60)</td>
                <td><em>570</em></td>
              </tr>
              <tr>
                <td>75</td>
                <td>130</td>
                <td>Package of 6 (savings of 90)</td>
                <td><em>690</em></td>
              </tr>
              <tr>
                <td>90</td>
                <td>155</td>
                <td>Package of 6 (savings of 120)</td>
                <td><em>810</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageClassicMassage;