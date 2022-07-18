import Page from "../Page";
import PageContent from "../PageContent";

const PageMicroDermabrasion = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>Micro-dermabrasion</h6>
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
          <h6>Pricing</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Individual treatment</td>
                <td>$145</td>
              </tr>
              <tr>
                <td>Pkg x 4</td>
                <td> $540</td>
              </tr>
              <tr>
                <td>One-hour facial &amp; micro-dermabrasion</td>
                <td>$185</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageMicroDermabrasion;