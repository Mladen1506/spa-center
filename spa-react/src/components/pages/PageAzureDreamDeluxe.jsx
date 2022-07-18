import Page from "../Page";
import PageContent from "../PageContent";

const PageAzureDreamDeluxe = () => {
  return (
    <Page>
      <PageContent>
        <div>
          <h6><b>Azure Dream Deluxe Facial</b></h6>
          <p>Spoil yourself with our most complete skin care service:"Azure Dream Deluxe Facial". In This facial our aesthetician will select the Éminence Organic Peel that is suitable to your skins needs -- every Éminence peel is full of delicious goodness that will gently but effectively begin the exfoliation process, enabling the ingredients to penetrate deeper into skin to deliver their nourishing effects. The detoxifying, refining and clarifying benefits of the peel will be augmented by a micro-dermabrasion treatment to remove old, dead skin cells. You’ll be amazed at how this potent and effective facial acts to reveal your freshest and most luminous skin.</p>

          <h6>Pricing</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Individual Treatment</td>
                <td>Price</td>
                <td>Pkg x 6</td>
              </tr>
              <tr>
                <td>75 Min</td>
                <td>$265</td>
                <td>$1470</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageAzureDreamDeluxe;