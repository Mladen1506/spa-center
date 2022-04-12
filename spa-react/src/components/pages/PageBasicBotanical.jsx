import Page from "../Page";
import PageContent from "../PageContent";


const PageBasicBotanical = (props) => {
  return (
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
              <th></th>
              <th>30-min</th>
              <th>45-min</th>
              <th>60-min</th>
              <th>75-min</th>
            </tr>
            <tr>
              <td>Eminence Botanical Facial</td>
              <td>95</td>
              <td>120</td>
              <td>135</td>
              <td>160</td>
            </tr>
            <tr>
              <td>Package of 6 (savings of 90)</td>
              <td>-</td>
              <td>720</td>
              <td></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <h3>Combine any one of our facials with an add-on:</h3>
        <p>Scalp massage 30</p>
        <p>Organic hand exfoliation 20</p>
        <p>Organic feet exfoliation 20</p>
        <p>Organic eye treatment 35</p>
        <p>Organic peel (blueberry, arctic berry, alpha hydroxy, or paprika) 45</p>
      </div>
      </PageContent>
  );
};

export default PageBasicBotanical;
