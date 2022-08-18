import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageIVTreatmant = (props) => {
  return (
    <Page>
      <PageContent>
        <h6>IV Therapy</h6>
        <p>Nutritional therapy commonly used for health benefits which goes directly into the veins and creates faster results.</p>
        <ul>
          <li class="p1">Boosts energy</li>
          <li class="p1">Detoxifies the body</li>
          <li class="p1">Reduces hangovers</li>
          <li class="p1">Weight loss</li>
          <li class="p1">Immunity IV</li>
        </ul>
        <p>$250 per session</p>
        
      </PageContent>
    </Page>
  );
};

export default PageIVTreatmant;