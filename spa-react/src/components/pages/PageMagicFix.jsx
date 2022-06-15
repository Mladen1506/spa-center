import Page from "../Page";
import PageContent from "../PageContent";


const PageMagicFix = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>Magic Fix™</h6>
          <p>A treatment designed for serious skin conditions, Magic Fix™ includes microdermabrasion and a selection of an Eminence organic peel based on your needs.</p>
          <p>We offer four types of Magic Fix™ treatments:</p>
          <ul>
            <li><b>Crystal Clear</b> - Improve appearance of acne and acne scars</li>
            <li><b>Shine Bright</b> - Helps to lighten hyper-pigmentation</li>
            <li><b>Ageless</b> – stimulates collagen production and promotes a “lifting” effect</li>
            <li><b>Detox</b> – deep cleansing and nourishing</li>
          </ul>
          <p>Magic Fix™ Pricing</p>
          <table className="table table-bordered">
            <tbody>
              {/* <tr>
                <td>Individual Session</td>
                <td></td>
                <td>Packages</td>
              </tr> */}
              <tr>
                <td>Individual Treatment</td>
                <td>Price</td>
                <td>Pkg x 6</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>$165</td>
                <td>$900</td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>$195</td>
                <td>$1080</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageMagicFix;