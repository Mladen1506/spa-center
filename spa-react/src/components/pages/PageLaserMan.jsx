import Page from "../Page";
import PageContent from "../PageContent";

const PageLaserMan = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h3>Men's Laser Hair Removal</h3>
          <p>If you are considering laser hair removal, please see the discounts and special packages in our downloadable brochure.</p>
          <p>If you are beginning treatment on an area for the first time, we recommend five sessions of laser treatments on the same body area in order to see the best results. As a convenience for our clients, we offer economical laser hair removal packages. When you purchase a men’s laser hair removal package for any area of the body, you receive five sessions for the price of four. After five sessions, we offer maintenance pricing, each time you come in for a “touch-up.”</p>
        </div>
        <div className="fl-rich-text">
          <p>&nbsp;</p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colspan="4">
                  <h3>MEN PRICING</h3>
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>Area</td>
                <td>&nbsp;Package Price of 5</td>
                <td>&nbsp;single Touch up with us after pkg</td>
                <td>&nbsp;Single Treatment</td>
              </tr>
              <tr>
                <td>Full Leg</td>
                <td>&nbsp;$1550</td>
                <td>&nbsp;$375</td>
                <td>&nbsp;$420</td>
              </tr>
              <tr>
                <td>Back &amp; Shoulder<br />
                  -OR- Chest &amp; Shoulder<br />
                  -OR- Guyzilian<br />
                  -OR- Buttocks (No AC)</td>
                <td>&nbsp;$1390</td>
                <td>&nbsp;$295</td>
                <td>&nbsp;$380</td>
              </tr>
              <tr>
                <td>Full Face with Neck<br />
                  -OR- Full Back<br />
                  -OR- Full Chest &amp; Stomach<br />
                  -OR- Full Arms</td>
                <td>&nbsp;$1250</td>
                <td>&nbsp;$275</td>
                <td>$325</td>
              </tr>
              <tr>
                <td>AC -OR- Underarms</td>
                <td>&nbsp;$450</td>
                <td>&nbsp;$135</td>
                <td>&nbsp;$185</td>
              </tr>
              <tr>
                <td>Neck (Front or Back)<br />
                  -OR- Feet</td>
                <td>&nbsp;$250</td>
                <td>&nbsp;$85</td>
                <td>&nbsp;$125</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageLaserMan;