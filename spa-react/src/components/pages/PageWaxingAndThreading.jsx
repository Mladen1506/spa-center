import Page from "../Page";
import PageContent from "../PageContent";

const PageWaxingAndThreading = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h3>Waxing and Threading</h3>
          <h6>Waxing</h6>
          <p>A semi-permanent method of hair removal, waxing removes the hair from the root. The service is available for men and women. We offer organic soy wax, hard wax, and honey wax. There is an upcharge when using hard wax. For our clients’ safety and comfort, we always use new spatulas, and fresh wax (we never “double-dip”).</p>
          <h6>Threading</h6>
          <p>Threading is an ancient method of hair removal, originating in the Indian and Persian cultures. The technician uses a thin thread, which is rolled over skin, plucking hair from the follicle. Threading is gentle on sensitive skin, and is a fine alternative to waxing.</p>
          <h3>Waxing and Threading Pricing</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Chin or lip or under chin<p></p>
                  <p>Side Burns</p></td>
                <td>15<p></p>
                  <p>25-30</p></td>
              </tr>
              <tr>
                <td>Brows</td>
                <td>25-30</td>
              </tr>
              <tr>
                <td>Full face</td>
                <td>55-65</td>
              </tr>
              <tr>
                <td>Underarm</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Lower arm</td>
                <td>35-45</td>
              </tr>
              <tr>
                <td>Full arm</td>
                <td>50-60</td>
              </tr>
              <tr>
                <td>Lower leg</td>
                <td>40-50</td>
              </tr>
              <tr>
                <td>Upper leg</td>
                <td>55-65</td>
              </tr>
              <tr>
                <td>Full leg</td>
                <td>75-90</td>
              </tr>
              <tr>
                <td>Bikini</td>
                <td>35-45</td>
              </tr>
              <tr>
                <td>Brazilian Rio Style</td>
                <td>65-85</td>
              </tr>
            </tbody>
          </table>
          <h3>Additional Waxing Options for Men</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Full arm</td>
                <td>60-70</td>
              </tr>
              <tr>
                <td>Full leg</td>
                <td>85-95</td>
              </tr>
              <tr>
                <td>Full leg and bikini</td>
                <td>95-110</td>
              </tr>
              <tr>
                <td>“Guy-zilian”</td>
                <td>95-110</td>
              </tr>
              <tr>
                <td>Back and shoulder</td>
                <td>65-85</td>
              </tr>
              <tr>
                <td>Chest and shoulder</td>
                <td>55-75</td>
              </tr>
            </tbody>
          </table>
          <p>For larger than average skin areas, prices may increase slightly.</p>
        </div>
      </PageContent>
    </Page>
  );
};
export default PageWaxingAndThreading;