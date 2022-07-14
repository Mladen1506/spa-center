import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageHydrafacialMembership = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>SIGNATURE HYDRAFACIAL</h6>
          <p>Deeply cleanse, extract, and hydrate the skin through our super serums filled with antioxidants, peptides, and hyaluronic acid.</p>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <p><b>Minutes</b></p>
                </td>
                <td>
                  <p><b>Packages</b></p>
                </td>
                <td>
                  <p><b>Price</b></p>
                </td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>1</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>6</td>
                <td>$1050</td>
              </tr>
            </tbody>
          </table>


          <h6>DELUXE HYDRAFACIAL</h6>
          <p>These invigorating treatments include all of the essentials of the Signature HydraFacial while addressing specific skin concerns through HydraFacial’s boosters and protocols.</p>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <p><b>Minutes</b></p>
                </td>
                <td>
                  <p><b>Packages</b></p>
                </td>
                <td>
                  <p><b>Price</b></p>
                </td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>1</td>
                <td>$285</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>6</td>
                <td>$1560</td>
              </tr>
            </tbody>
          </table><br></br>

          {/* <h6>Restorative</h6> */}
          {/* <p>Add CTGF™ to improve the appearance of skin tone, texture, and elasticity.</p>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <p><b>Minutes</b></p>
                </td>
                <td>
                  <p><b>Packages</b></p>
                </td>
                <td>
                  <p><b>Price</b></p>
                </td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>1</td>
                <td>$295</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>6</td>
                <td>$1595</td>
              </tr>
            </tbody>
          </table><br></br> */}

          
          {/* <h6>Age-Refinement</h6>
          <p>Add a DermaBuilder™ boost to reduce the appearance of fine lines and wrinkles.</p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <p><b>Minutes</b></p>
                </td>
                <td>
                  <p><b>Packages</b></p>
                </td>
                <td>
                  <p><b>Price</b></p>
                </td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>1</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>6</td>
                <td>$1350</td>
              </tr>
            </tbody>
          </table><br></br> */}
          

          {/* <h6>Radiance</h6>
          <p>Add a Britenol® Boost to minimize the appearance of dark spots.</p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <p><b>Minutes</b></p>
                </td>
                <td>
                  <p><b>Packages</b></p>
                </td>
                <td>
                  <p><b>Price</b></p>
                </td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>1</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>6</td>
                <td>$1350</td>
              </tr>
            </tbody>
          </table><br></br> */}

          {/* <h6>Clarifying</h6>
          <p>Extended Extractions and add Blue LED Light Therapy to remove congestion.</p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <p><b>Minutes</b></p>
                </td>
                <td>
                  <p><b>Packages</b></p>
                </td>
                <td>
                  <p><b>Price</b></p>
                </td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>1</td>
                <td>$225</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>6</td>
                <td>$1215</td>
              </tr>
            </tbody>
          </table><br></br> */}

          <h6>PLATINUM HYDRAFACIAL</h6>
          <p>The ultimate HydraFacial experience. Begin the detoxification process with Lymphatic Drainage. Follow with the Signature HydraFacial to deeply cleanse, extract and hydrate the skin. Address specific skin concerns with a booster of your choice. This treatment concludes with LED Light Therapy to further reduce the visible signs of aging.</p>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <p><b>Minutes</b></p>
                </td>
                <td>
                  <p><b>Packages</b></p>
                </td>
                <td>
                  <p><b>Price</b></p>
                </td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>1</td>
                <td>$325</td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>6</td>
                <td>$1800</td>
              </tr>
            </tbody>
          </table>

          <h6>PLATINUM ULTIMATE</h6>
          <p><b>It is our platinum for those that wish not to miss facial massages</b></p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <p><b>Minutes</b></p>
                </td>
                <td>
                  <p><b>Packages</b></p>
                </td>
                <td>
                  <p><b>Price</b></p>
                </td>
              </tr>
              <tr>
                <td>75 Min</td>
                <td>1</td>
                <td>$385</td>
              </tr>
              <tr>
                <td>75 Min</td>
                <td>6</td>
                <td>$2160</td>
              </tr>
            </tbody>
          </table>

        </div>
      </PageContent>
    </Page>
  );
};

export default PageHydrafacialMembership;