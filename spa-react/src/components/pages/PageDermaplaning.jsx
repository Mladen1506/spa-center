import Page from "../Page";
import PageContent from "../PageContent";

const PageDermaplaning = () => {
  return (
    <Page>
      <PageContent>
        <div>
          <p>Dermaplaning is a procedure that exfoliates your skin and gets rid of dead layers and vellus hair,
          Dermaplaning promotes collagen production, reduces fine lines, prevents breakouts, and will give immediate glow.</p>

          <h6>Pricing</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Individual treatment</td>
                <td>Price</td>
                <td>Pkg x 6</td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>$250</td>
                <td>$1380</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageDermaplaning;