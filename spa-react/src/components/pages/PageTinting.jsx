import Page from "../Page";
import PageContent from "../PageContent";

const PageTinting = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h3>Eyebrow and Eyelash Tinting</h3>
          <p>Add emphasis and enhance your eyes. We use the safest products, and provide an exciting variety of colors. The treatment will last for 6 weeks.</p>
          {/* <h3>Tinting Pricing</h3>
          <p> Lashes: $35</p>
          <p>Brow: $30</p>
          <p>Lash &amp; Brow $60</p> */}

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Lashes</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Brow</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Lash &amp; Brow</td>
                <td>$60</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};
export default PageTinting;