import Page from "../Page";
import PageContent from "../PageContent";

const PageMicroNeedling = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>Pen Precision Micro-Needling</h6>
          <ul>
            <li>Hyaluronic treatment for hydration.</li>
            <li>Acne treatment for clear skin.</li>
            <li>Brightening treatment for pigmentation.</li>
            <li>Vitamin C treatment for aging skin.</li>
          </ul>
          <p>A safe, effective, and relatively painless skin resurfacing procedure that uses tiny needles to create microscopic injuries to the skin. This stimulates new collagen formation while creating tiny channels to allow deeper penatration of products applied.</p>
          <p>Micro-needling can be used to treat acne scars, hyperpigmentation, fine lines and wrinkles, and sagging skin. It is a great way to smooth and plump all skin types while evening tone and texture.</p>
          <p>*We recommend wearing numbing cream 45 minutes to an hour at home before your treatment, or, if you would like it done here in the spa, you need to ask over the phone while booking your appointment, so we can adjust enough time for your treatment.</p>
          <h6>Pricing</h6>

          <table>
            <tbody>
              <tr>
                <td>Single Session</td>
                <td>Pkg x 3</td>
                <td>Pkg x 6</td>
              </tr>
              <tr>
                <td>$550</td>
                <td>$990</td>
                <td>$1800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};
export default PageMicroNeedling;