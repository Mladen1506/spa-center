import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageHydrafacial = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
    <br />
          <h5>SKIN HEALT DOESN'T NEED TO BE COMPLICATED</h5>
          <p>The HydraFacial treatment can be tailored to safely & effectively address your unique needs.</p>

          <p>Only <b>HydraFacial</b> uses patented technology to cleanse, extract, and hydrate. HydraFacial super serums are made with nourishing ingredients that create an instantly gratifying glow.</p>

          <h5><b>PLATINUM HYDRAFACIAL</b></h5>
          {/* <p>$325</p> */}
          <p>The ultimate HydraFacial experience! Begin the detoxification process with Lymphatic Drainage. Then, the Signature HydraFacial deeply cleanses, exfoliates, extracts and hydrates the skin while addressing your specific skin concern with a Booster of your choice. This treatment concludes with LED Light Therapy to further reduce the visible signs of
            aging.</p>

        
          <h5><b>DELUXE HYDRAFACIAL</b></h5>
          {/* <p>$275</p> */}
          <p>An invigorating treatment that includes all of the essentials of the Signature HydraFacial while addressing your specific skin concern with a Booster of your choice. This treatment concludes with LED Light Therapy to further reduce the visible signs of aging.</p>


          <h5><b>SIGNATURE HYDRAFACIAL</b></h5>
          {/* <p>$199</p> */}
          <p>This treatment deeply cleanses, exfoliates, extracts, and hydrates the skin utilizing super serums filled with antioxidants, peptides, and hyaluronic acid.</p>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageHydrafacial;