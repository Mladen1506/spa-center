import Page from "../Page";
import PageContent from "../PageContent";

const PageDreamSkin = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>Aroma Touch (Aromatherapy) Facial</h6>
          <p>Relax and let yourself drift away as you are enveloped in the healing aromas of botanical essential oils. To begin your treatment, our skilled aestheticians will analyze your skin to determine the correct essential oils for your facial. In addition to cleansing, exfoliation, and extraction, we will also pamper you with a face massage to reduce stress and improve the look and feel of your skin. The gentle and calming aroma of essential oils makes this one of our most relaxing facials.</p>
          <h6>Citrus Vitamin C Infusion Facial</h6>
          <p>Unlock the power of super foods to feed your skin! A delicious botanical blend of organic citrus fruits and leafy greens, delivers an abundance of nourishing nutrients to rescue your skin. These bioflavonoid-rich ingredients create unmatched antioxidant protection. Vitamin E supports Vitamin C by offering additional antioxidant properties, as well as healing and repairing abilities that will result in an even skin tone, prevent damage from free radicals, reducing inflammation and boost your collagen production, resulting in brighter and younger-looking skin.</p>
          <h6>Crystal Clear</h6>
          <p>The key ingredient in our Crystal Clear Facial is alpha hydroxy acid, an active fruit acid complex that is derived from a variety of natural sources. Alpha hydroxy acid is an excellent treatment for stimulating cellular renewal of the skin, clearing up breakouts and brightening the complexion. This skin treatment is great for all skin types, but is particularly beneficial for skin prone to acne.</p>
          <h6>Diamond Bright</h6>
          <p>A delightful portion of brightening bearberry, lightening licorice, and soothing stonecrop fades hyper-pigmentation, while infusing the skin with anti-oxidants for a flawless face. Enjoy the benefits of gigawhite and a natural hydroquinone alternative which are plant-derived ingredients celebrated for their ability to lighten, brighten and reduce the look of age spots.</p>
          <h6>Soothing Field of Arnica</h6>
          <p>Arnica, a botanical belonging to the sunflower, is touted for its anti-inflammatory properties and is often used to reduce swelling, redness and bruising. Arnica is the ingredient that gives this facial its calming effect.</p>
          <h6>Pricing</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Minutes</td>
                <td>Price</td>
                <td>Pkg x 6</td>
              </tr>
              <tr>
                <td>30 Min</td>
                <td>$125</td>
                <td></td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>$145</td>
                <td></td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>$165</td>
                <td>$900</td>
              </tr>
              <tr>
                <td>75 Min</td>
                <td>$185</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>&nbsp;</p>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageDreamSkin;