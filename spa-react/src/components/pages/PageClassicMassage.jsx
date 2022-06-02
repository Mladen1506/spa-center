import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageClassicMassage = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h5>Classic Massage Experience</h5>
          <p>We offer a variety of massages, which focus on relaxation and/or pain relief. Our massages come at two different price points – choose from our Classic Massage Experience or the upgraded Premium Massage Experience.</p>

          <h5>Swedish</h5>
          <p>This form of massage uses long, smooth, and flowing strokes, in the direction of blood returning to the heart. It is designed to relax the entire body, increase circulation, and promote health.</p>

          <h5>Foot Reflexology</h5>
          <Image right small src={imagesFolderUrl('pages/foot_refl.jpeg')}/>
          <p>An applied-pressure therapy that stimulates reflex points in the feet that correspond to every organ and system within the body. This detoxifies the body, releases tension, and increases circulation and energy.</p>
          <h5>Swedish and Foot Reflexology Massage Pricing</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colspan="2">
                  <h6>Single Session</h6>
                </td>
                <td colspan="2">
                  <h6>Package Of 6</h6>
                </td>
              </tr>
              <tr>
                <td>Minutes</td>
                <td>Price</td>
                <td>Price</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>$75</td>
                <td> $420</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>$90</td>
                <td>$492</td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>$105</td>
                <td>$570</td>
              </tr>
              <tr>
                <td>75 Min</td>
                <td>$130</td>
                <td>$690</td>
              </tr>
              <tr>
                <td>90 Min</td>
                <td>$155</td>
                <td>$810</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageClassicMassage;