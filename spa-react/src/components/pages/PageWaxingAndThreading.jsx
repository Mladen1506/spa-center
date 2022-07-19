import Page from "../Page";
import PageContent from "../PageContent";

const PageWaxingAndThreading = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          {/* <h6>Waxing and Threading Pricing</h6> */}

          <h6>Threading Pricing</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Lip</td>
                <td>$18</td>
              </tr>
              <tr>
                <td>Chin</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Brows</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Full Face</td>
                <td>$75</td>
              </tr>
            </tbody>
            <br />
            <h6>Waxing Pricing</h6>
            <tbody>
              <tr>
                <td>Lip</td>
                <td>$18</td>
              </tr>
              <tr>
                <td>Chin</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Brows</td>
                <td>$28</td>
              </tr>
              <tr>
                <td>Full Face</td>
                <td>$75</td>
              </tr>
              <tr>
                <td>Sideburns</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Underarms</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Lower Arm</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>Full Arm</td>
                <td>$65+</td>
              </tr>
              <tr>
                <td>Lower Leg</td>
                <td>$55+</td>
              </tr>
              <tr>
                <td>Upper Leg</td>
                <td>$65+</td>
              </tr>
              <tr>
                <td>Full Leg</td>
                <td>$85+</td>
              </tr>
              <tr>
                <td>Bikini</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>Brazilian</td>
                <td>$85+</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h6>Additional Waxing Options for Men</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Full arm</td>
                <td>$85</td>
              </tr>
              <tr>
                <td>Full leg</td>
                <td>$105</td>
              </tr>
              <tr>
                <td>Full leg and bikini</td>
                <td>$135</td>
              </tr>
              <tr>
                <td>“Guy-zilian”</td>
                <td>$125+</td>
              </tr>
              <tr>
                <td>Back and shoulder</td>
                <td>$85+</td>
              </tr>
              <tr>
                <td>Chest and shoulder</td>
                <td>$85+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page >
  );
};
export default PageWaxingAndThreading;