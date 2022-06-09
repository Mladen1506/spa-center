import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageDiscoloration = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h5>Laser Discoloration Removal</h5>
          <p>Skin discoloration can occur naturally as we age, or can be triggered by over exposure to the sun or toxins. This treatment is designed to reduce skin pigmentation – such as sunspots, age spots, and freckles – leaving your skin looking clearer and more even-toned. This service is good for lighter skin tones only. Please call to inquire about our special offers.</p>
          <Image wide src={imagesFolderUrl("pages/discoloration1-300x135.jpeg")} alt="Laser Discoloration Removal<" />
          <p>*Your personal results may vary with this treatment.</p>
          <h5>Pricing</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Face</td>
                <td>&nbsp; &nbsp; $350</td>
              </tr>
              <tr>
                <td>Neck</td>
                <td>&nbsp; &nbsp; $250</td>
              </tr>
              <tr>
                <td>Chest</td>
                <td>&nbsp; &nbsp; $400</td>
              </tr>
              <tr>
                <td>Area of 2" x 2"</td>
                <td>&nbsp; &nbsp; $200</td>
              </tr>
              <tr>
                <td>Spot Treatment</td>
                <td>&nbsp; &nbsp; $120</td>
              </tr>
              <tr>
                <td>Top of forearms and hands</td>
                <td>&nbsp; &nbsp; $750</td>
              </tr>
              <tr>
                <td>Hands</td>
                <td>&nbsp; &nbsp; $300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};
export default PageDiscoloration;