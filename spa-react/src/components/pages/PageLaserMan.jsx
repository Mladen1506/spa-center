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
                <td>&nbsp;Single Touch Up With Us After Using Package</td>
                <td>&nbsp;Single Treatment</td>
              </tr>
              <tr>
                <td>Full Leg</td>
                <td>&nbsp;$1750</td>
                <td>&nbsp;$425</td>
                <td>&nbsp;$495</td>
              </tr>
              <tr>
                <td>Back &amp; Shoulder,<br />
                  Chest &amp; Shoulder,<br />
                  Guyzilian</td>
                <td>&nbsp;$1550</td>
                <td>&nbsp;$375</td>
                <td>&nbsp;$450</td>
              </tr>
              <tr>
                <td>Full Face with Neck,<br />
                  Full Back,<br />
                  Full Chest &amp; Stomach,<br />
                  Buttocks (No AC),<br />
                  Full Arms</td>
                <td>&nbsp;$1350</td>
                <td>&nbsp;$275</td>
                <td>$375</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>&nbsp;$550</td>
                <td>&nbsp;$145</td>
                <td>&nbsp;$195</td>
              </tr>
              <tr>
                <td>Underarms,<br />
                  Front of Neck,<br />
                  Back of Neck,<br />
                  Feet,<br /> 
                  Hands</td>
                <td>&nbsp;$395</td>
                <td>&nbsp;$125</td>
                <td>&nbsp;$145</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageLaserMan;