import Page from "../Page";
import PageContent from "../PageContent";

const PageMicroDermabrasion = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h3>Micro-dermabrasion</h3>
          <p>Micro-dermabrasion is the most effective, non-invasive skin resurfacing treatment available. It exfoliates the outermost layer of the epidermis, and stimulates new cell growth and collagen production. Micro-dermabrasion improves the texture of skin while reducing fine lines, pore size, and hyper-pigmentation, leaving skin softer and more supple with a natural glow.</p>
          <p>Micro-dermabrasion has positive results on:</p>
          <ul>
            <li>Fine lines and wrinkles</li>
            <li>Hyper-pigmentation, discoloration, and uneven skin tone</li>
            <li>Acne scars, superficial scars, and some stretch marks</li>
            <li>Sun damage</li>
            <li>Enlarged pores</li>
            <li>Age spots</li>
            <li>Acne and blackheads</li>
          </ul>
          <p>Although results are felt and seen after a single treatment, a series of treatments is recommended for optimum results.</p>
          <h3>Pricing</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Individual treatment</td>
                <td>$140</td>
              </tr>
              <tr>
                <td>Package of 6</td>
                <td> $720</td>
              </tr>
              <tr>
                <td>One-hour facial &amp; micro-dermabrasion</td>
                <td>$185</td>
              </tr>
            </tbody>
          </table>
          <h6>Add-ons:</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Neck</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Décolletage</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>Neck &amp; Décolletage</td>
                <td>$65</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageMicroDermabrasion;