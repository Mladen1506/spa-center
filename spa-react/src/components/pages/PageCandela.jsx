import Page from "../Page";
import PageContent from "../PageContent";

const PageCandela = () => {
  return (
    <Page>
      <PageContent>
        <h6>Candela Laser</h6>
        <p>No more cosmetic surgery! With the use of newly-developed laser technology, options for treating wrinkles and sagging skin have increased dramatically. Finally, non-invasive skin tightening has become an effective and viable option. Unlike surgical procedures, laser treatment results are softer, more natural looking, with greatly-improved safety, convenience, and recovery time.</p>
        <h6>Pricing</h6>
        <table>
          <tbody>
            <tr>
              <td>Single Session</td>
              <td>Pkg x 5</td>
            </tr>
            <tr>
              <td>$380</td>
              <td>$1600</td>
            </tr>
          </tbody>
        </table>
      </PageContent>
    </Page>
  );
};

export default PageCandela;