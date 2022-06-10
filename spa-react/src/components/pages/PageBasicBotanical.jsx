import Page from "../Page";
import PageContent from "../PageContent";


const PageBasicBotanical = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="c_title">
          <h5>Eminence Botanical Facial</h5>
          <p>Featuring our most advanced skin care products from the organic and skin-friendly Éminence collection, our Botanical Facial includes skin analysis, pore stimulation with a steamed towel, cleansing, extractions, exfoliation, massage, and a finishing masque. This treatment is designed to target and improve specific skin conditions, such as dryness, clogged pores, and loss of elastin and collagen.</p>
          <h5>Results:</h5>
          <ul>
            <li>Firmer, brighter, and replenished skin</li>
            <li>Reduced sun damage, discoloration, acne, and blemishes</li>
            <li>Cell turnover and promotion of collagen and elastin growth</li>
          </ul>
          <h5>Botanical Facial Pricing:</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Minutes</td>
                <td>Price</td>
                <td>Pkg 6x</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>$95</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>$120</td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>$135</td>
                <td>&nbsp; &nbsp; $720</td>
              </tr>
              <tr>
                <td>75 Min</td>
                <td>$160</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageBasicBotanical;
