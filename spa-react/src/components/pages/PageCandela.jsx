import Page from "../Page";
import PageContent from "../PageContent";

const PageCandela = () => {
  return (
    <Page>
      <PageContent>
        <h6>Laser Skin Tightening</h6>
        <p>No more cosmetic surgery! With the use of newly-developed laser technology, options for treating wrinkles and sagging skin have increased dramatically. Finally, non-invasive skin tightening has become an effective and viable option. Unlike surgical procedures, laser treatment results are softer, more natural looking, with greatly-improved safety, convenience, and recovery time.</p>

        <table>
          <tbody>
            <tr>
              <td>Single Session</td>
              <td><p>$380</p></td>
            </tr>
            <tr>
              <td>Package of 5x</td>
              <td><p>$1600</p></td>
            </tr>
          </tbody>
        </table>
      </PageContent>
    </Page>
  );
};

export default PageCandela;