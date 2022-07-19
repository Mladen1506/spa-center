import Page from "../Page";
import PageContent from "../PageContent";

const PageMorpheus = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>Morpheus8</h6>
          <p>Remodel collagen on the face and body with Morpheus 8, a fractional tissue treatment which stimulates the production of collagen and the underlying layers of the dermis. It effectively remodels skins and tissue with minimal risk of post-inflammatory hyperpigmentation and is safe for all skin types.</p>
          <h6>Pricing</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td><b>Face Or Neck</b></td>
                <td><b>Single</b></td>
                <td><b>Pkg x 3</b></td>
              </tr>
              <tr>
                <td>Morpheus 8,<br />
                  CO2,<br />
                  Erbium
                </td>
                <td>$950</td>
                <td>$2550</td>
              </tr>
              <br />
              <tr>
                <td><b>Face & Neck</b></td>
                <td><b>Single</b></td>
                <td><b>Pkg x 3</b></td>
              </tr>
              <tr>
                <td>Morpheus 8,<br />
                  CO2,<br />
                  Erbium
                </td>
                <td>$1600</td>
                <td>$3900</td>
              </tr>
              <tr>
                <td>Combination Of Morpeus 8 + CO2/Erbium</td>
                <td>$1700</td>
                <td>$4800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageMorpheus;