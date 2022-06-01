import Page from "../Page"
import PageContent from "../PageContent";

const PageWomenLaser = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h3>Women's Laser Hair Removal</h3>
          <p>If you are considering laser hair removal, please see the discounts and special packages in our downloadable brochure.</p>
          <p>If you are beginning treatment on an area for the first time, we recommend five sessions of laser treatments on the same body area in order to see the best results. As a convenience for our clients, we offer economical hair removal packages. When you purchase a women’s laser hair removal package for any area of the body, you receive five sessions for the price of four. After five sessions, we offer maintenance pricing each time you come in for a “touch-up.”</p>
        </div>

        <div className="fl-rich-text">
          <p>&nbsp;</p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colspan="4">
                  <h3>WOMEN PRICING</h3>
                </td>
              </tr>
              <tr>
                <td>Area: One of the areas listed*</td>
                <td>Package Price of 5</td>
                <td>Single Touch up with us after using package</td>
                <td>Single Treatment</td>
              </tr>
              <tr>
                <td>Lip &amp; lower lip,<br />
                  Chin &amp; under chin,<br />
                  Lip/Chin,<br />
                  Side Burns,<br />
                  Neck (Front or Back),<br />
                  Nostrils,&nbsp;Unibrow,<br />
                  Ears</td>
                <td>&nbsp;$250</td>
                <td>&nbsp;$75</td>
                <td>&nbsp;$95</td>
              </tr>
              <tr>
                <td>Ab Line,<br />
                  Hands &amp; Fingers,<br />
                  Feet &amp; Toes,<br />
                  Areolas</td>
                <td>&nbsp;$250</td>
                <td>&nbsp;$75</td>
                <td>&nbsp;$95</td>
              </tr>
              <tr>
                <td>Under Arms,<br />
                  Bikini Line</td>
                <td>&nbsp;$350</td>
                <td>&nbsp;$85</td>
                <td>&nbsp;$125</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>&nbsp;$450</td>
                <td>&nbsp;$135</td>
                <td>&nbsp;$185</td>
              </tr>
              <tr>
                <td>Forearm &amp; Hands,<br />
                  Chest,<br />
                  Half brazilian,</td>
                <td>&nbsp;$680</td>
                <td>&nbsp;$155</td>
                <td>&nbsp;$195</td>
              </tr>
              <tr>
                <td>Full face,<br />
                  Full Brazilian,<br />
                  Buttocks,<br />
                  Abdomen,<br />
                  Half of Back,<br />
                  Lower Half Leg &amp; Knees,<br />
                  Full arm &amp; hand</td>
                <td>&nbsp;$790</td>
                <td>&nbsp;$185</td>
                <td>&nbsp;$235</td>
              </tr>
              <tr>
                <td>Upper Legs<br />
                  Full Legs<br />
                  Full Legs &amp; Toes</td>
                <td>$1000<br />
                  $1450<br />
                  $1599</td>
                <td>$230<br />
                  $290<br />
                  $310</td>
                <td>$275<br />
                  $380<br />
                  $400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageWomenLaser;