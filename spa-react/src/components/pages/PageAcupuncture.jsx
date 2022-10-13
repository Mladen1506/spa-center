import Page from "../Page";
import PageContent from "../PageContent";

const PageAcupuncture = () => {
  return(
    <Page>
      <PageContent>
        <h6>Acupuncture</h6>
        <p>Acupuncture is a system of integrative medicine that involves inserting very small needles into the skin or tissues to alleviate pain and to treat various physical, mental, and emotional conditions. The specific points in which the needles are placed help restore harmony to any imbalances along the energy (Chi) channels in the body.</p>
        <h6>Pricing</h6>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>Pkg x 6</td>
            </tr>
            <tr>
              <td>90 Min. Intro Session</td>
              <td>$175</td>
            </tr>
            <tr>
              <td>60 Min. Session</td>
              <td>$120</td>
              <td>$660</td>
            </tr>
          </tbody>
        </table>
      </PageContent>
    </Page>
  )
}

export default PageAcupuncture;