import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageVitaminInjections = (props) => {
  return (
    <Page>
      <PageContent>
        <h6>Vitamin Injection</h6>
        <ul>
          <li class="p1">Lip amino—Fat burning, Energy boosting, and appetite suppressant.</li>
          <li class="p1">D3—Helps keep your bones, teeth, and muscles healthy.</li>
          <li class="p1">Biotin—Stronger hair, skin, and nails.</li>
          <li class="p1">B12—Improves functioning mood, concentration, and natural fat loss.</li>
          <li class="p1">Glutathione—Improves skin health and tightens.</li>
          <li class="p1">Tri-Immune Boost—Maintains immune response.</li>
        </ul>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Individual Treatment</td>
              <td></td>
              <td>Pkg x 4</td>
            </tr>
            <tr>
              <td>$50</td>
              <td></td>
              <td>$175</td>
            </tr>
          </tbody>
        </table>
      </PageContent>
    </Page>
  );
};

export default PageVitaminInjections;