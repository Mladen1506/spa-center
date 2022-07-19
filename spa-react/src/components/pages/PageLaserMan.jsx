import Page from "../Page";
import PageContent from "../PageContent";

const PageLaserMan = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>Men's Laser Hair Removal</h6>
          <p>Azure Dream offers safe and affordable laser hair removal for men and women – of all skin tones. If you have been considering laser treatments, we invite you to come in for a complimentary consultation. We use only the latest technology, the Candela Gentle Max Pro and the Rohrer Aesthetics laser, which allows us to treat all skin tones, from pale to dark.</p>

          <h6>The Process Of Laser Hair Removal</h6>
          <p>A focused beam of light emitted by laser is absorbed only through pigments located in the hair follicle. The light is pulsed for a fraction of a second – long enough to disable the hair follicle, but no so long that excess heat is transferred to the skin surrounding the hair.</p>
        </div>
        <h6>LASER PRICING FOR MEN</h6>
        <div className="fl-rich-text">
          <p>&nbsp;</p>
          <table className="table table-bordered">
            <tbody>
              {/* <tr>
                <td colspan="4">
                  <h6>LASER PRICING FOR MEN</h6>
                </td>
              </tr> */}
              <tr>
                <td>Area</td>
                <td>&nbsp;Pkg x 5</td>
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
                  Full Arms,<br />
                  Buttocks (No AC)
                  </td>
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
          <h6>Restrictions</h6>

          <p>As with any process, laser hair removal is not perfectly suited to everyone. Below are some points you may wish to consider and speak about during your consultation:</p>
          <ul>
            <li>Immediately after treatment, skin may be red. Pain is generally mild and transient. Side effects are uncommon and temporary.</li>
            <li>Laser is effective on dark hair only. Blond, gray, red, and peach fuzz will be unaffected by laser treatments.</li>
            <li>The number of treatments and frequency of visits may vary among individuals.</li>
            <li>For best results, always shave the day of treatment. If you are coming in for a consultation, please avoid shaving, so our technician can accurately evaluate your needs and establish your treatment plan.</li>
            <li>Again, results are individual. Some candidates respond better than others. On average, a 70-80% reduction in hair can be expected after five treatments.</li>
          </ul>
          <ol>
            <li>On the day of your treatment, it is important to shave the area to be lasered before your appointment. Failure to shave may result in an extra charge.</li>
            <li>Packages are a cost-effective choice for clients who wish to commit to repeated treatments. However, if you later decide not to complete the total number of treatments in the package, each session will be charged at the individual rate, rather than the package rate.</li>
            <li>Cancellation or rescheduled appointments with less than 24 hours’ notice may incur a fee.</li>
          </ol>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageLaserMan;