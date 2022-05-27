import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageHydrafacial = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h3>Nothing compares.</h3>

          <p>Only HydraFacial uses patented technology to cleanse, extract, and hydrate. HydraFacial super serums are made with nourishing ingredients that create an instantly gratifying glow.</p>

          <h6>SKIN HEALT DOESN'T NEED TO BE COMPLICATED</h6>
          <p>The HydraFacial treatment can be tailored to safely & effectively address your unique needs.</p>

          <h6><b>PLATINUM HYDRAFACIAL</b></h6>
          <p>The ultimate HydraFacial experience! Begin the detoxification process with Lymphatic Drainage. Then, the Signature HydraFacial deeply cleanses, exfoliates, extracts and hydrates the skin while addressing your specific skin concern with a Booster of your choice. This treatment concludes with LED Light Therapy to further reduce the visible signs of
            aging.</p>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <h6>Minutes</h6>
                </td>
                <td>
                  <h6>Package</h6>
                </td>
                <td>
                  <h6>Price</h6>
                </td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>Single Session</td>
                <td>$325</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>Pkg Of 4</td>
                <td>$1235</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>Pkg Of 6</td>
                <td>$1755</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>Pkg Of 12</td>
                <td>$3120</td>
              </tr>
            </tbody>
          </table>




          <h6>DELUXE HYDRAFACIAL $275</h6>
          <p>An invigorating treatment that includes all of the essentials of the Signature HydraFacial while addressing your specific skin concern with a Booster of your choice. This treatment concludes with LED Light Therapy to further reduce the visible signs of aging.</p>
          <h6>SIGNATURE HYDRAFACIAL $199</h6>
          <p>This treatment deeply cleanses, exfoliates, extracts, and hydrates the skin utilizing super serums filled with antioxidants, peptides, and hyaluronic acid.</p>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageHydrafacial;