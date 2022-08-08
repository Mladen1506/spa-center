import Page from "../Page";
import PageContent from "../PageContent";

const PageTinting = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>Eyebrow and Eyelash Tinting</h6>
          <p>Add emphasis and enhance your eyes. We use the safest products, and provide an exciting variety of colors. The treatment will last for 6 weeks.</p>
          <p>Tinting Pricing</p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Brow</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Lashes</td>
                <td>$40</td>
              </tr>
              <tr>
                <td>Brow &amp; Lash</td>
                <td>$70</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};
export default PageTinting;