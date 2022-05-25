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
          <Image right small src={imagesFolderUrl('pages/foot_refl.jpeg')}/>
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
                <td>&nbsp; &nbsp; Price</td>
                <td>&nbsp; &nbsp; Package</td>
                <td>&nbsp; Savings</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>&nbsp; &nbsp; $75</td>
                <td>&nbsp; &nbsp; $420 Pkg of 6</td>
                <td>&nbsp; &nbsp; $30</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>&nbsp; &nbsp; $90</td>
                <td>&nbsp; &nbsp; $492 Pkg of 6</td>
                <td>&nbsp; &nbsp; $48</td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>&nbsp; &nbsp; $105</td>
                <td>&nbsp; &nbsp; $570 Pkg of 6</td>
                <td>&nbsp; &nbsp; $60</td>
              </tr>
              <tr>
                <td>75 Min</td>
                <td>&nbsp; &nbsp; $130</td>
                <td>&nbsp; &nbsp; $690 Pkg of 6</td>
                <td>&nbsp; &nbsp; $90</td>
              </tr>
              <tr>
                <td>90 Min</td>
                <td>&nbsp; &nbsp; $155</td>
                <td>&nbsp; &nbsp; $810 Pkg of 6</td>
                <td>&nbsp; &nbsp; $120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageClassicMassage;