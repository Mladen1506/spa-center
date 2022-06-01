import Page from "../Page";
import PageContent from "../PageContent";


const PageBasicBotanical = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="c_title">
          <h3>Eminence Botanical Facial</h3>
          <p>Featuring our most advanced skin care products from the organic and skin-friendly Éminence collection, our Botanical Facial includes skin analysis, pore stimulation with a steamed towel, cleansing, extractions, exfoliation, massage, and a finishing masque. This treatment is designed to target and improve specific skin conditions, such as dryness, clogged pores, and loss of elastin and collagen.</p>
          <h6>Results:</h6>
          <ul>
            <li>Firmer, brighter, and replenished skin</li>
            <li>Reduced sun damage, discoloration, acne, and blemishes</li>
            <li>Cell turnover and promotion of collagen and elastin growth</li>
          </ul>
          <h3>Pricing</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Minutes</td>
                <td>Botanical Facial</td>
                <td>Package(6)</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>$95</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>$120</td>
                <td>&nbsp; &nbsp; $720</td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>$135</td>
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
