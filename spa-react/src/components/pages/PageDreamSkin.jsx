import Page from "../Page";
import PageContent from "../PageContent";

const PageDreamSkin = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h3>Specialty Dream Facials</h3>
          <h6>Aroma Touch (Aromatherapy) Facial</h6>
          <p>Relax and let yourself drift away as you are enveloped in the healing aromas of botanical essential oils. To begin your treatment, our skilled aestheticians will analyze your skin to determine the correct essential oils for your facial. In addition to cleansing, exfoliation, and extraction, we will also pamper you with a scalp and face massage to reduce stress and improve the look and feel of your skin. The gentle and calming aroma of essential oils makes this one of our most relaxing facials.</p>
          <h6>Citrus Vitamin C Infusion Facial</h6>
          <p>Unlock the power of super foods to feed your skin! A delicious botanical blend of organic citrus fruits and leafy greens, like kale and spinach, delivers an abundance of nourishing nutrients to rescue your skin. These bioflavonoid-rich ingredients create unmatched antioxidant protection. Vitamin E supports Vitamin C by offering additional antioxidant properties, as well as healing and repairing abilities that will result in an even skin tone, prevent damage from free radicals, boost your collagen production, and reduce inflammation and the appearance of acne. This nutrient rich facial includes an Éminence organic peel. With the Citrus Vitamin C Infusion facial, you can realize nature’s true potential, and achieve firmer, brighter, and younger-looking skin.</p>
          <h6>Crystal Clear</h6>
          <p>The key ingredient in our Crystal Clear Facial is alpha hydroxy acid, an active fruit acid complex that is derived from a variety of natural sources such as sugar cane and fruits. Widely used in the cosmetic industry, alpha hydroxy acid is an excellent treatment for stimulating cellular renewal of the skin, clearing up breakouts, and brightening the complexion. This skin treatment is great for all skin types, but is particularly beneficial for skin prone to acne.</p>
          <h6>Diamond Bright</h6>
          <p>A delightful potion of brightening bearberry, lightening licorice, and soothing stonecrop fades hyper-pigmentation, while infusing the skin with anti-oxidants for a flawless face. Enjoy the benefits of gigawhite and a natural hydroquinone alternative; both are plant-derived ingredients celebrated for their ability to lighten, brighten, and reduce the look of age spots.</p>
          <h6>Soothing Field of Arnica</h6>
          <p>Do you have sensitive skin? Are you prone to redness? No worries! The Soothing Field of Arnica Facial is designed exactly for your skin type. Arnica, a botanical belonging to the sunflower family, has been used for medicinally for centuries. It is touted for its anti-inflammatory properties, and is often used to reduce swelling and bruising. Arnica is the ingredient that gives this facial its calming effect. Enjoy the serenity of our arnica facial, which includes cleansing, exfoliation, extraction, massage, and masque.</p>
          <h3></h3>
          <h3>Pricing</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colspan="2">
                  <h6>Single Session</h6>
                </td>
                <td colspan="2">
                  <h6>Packages</h6>
                </td>
              </tr>
              <tr>
                <td>Minutes</td>
                <td>Price</td>
                <td>Package</td>
                <td>Price</td>
              </tr>
              <tr>
                <td>30</td>
                <td>125</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>45</td>
                <td>145</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>60</td>
                <td>165</td>
                <td>Package of 6 (savings of 150)</td>
                <td><em>900</em></td>
              </tr>
              <tr>
                <td>75</td>
                <td>185</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>&nbsp;</p>
          <h3>Combine any one of our facials with an add-on:</h3>
          <p>Scalp massage 30</p>
          <p>Organic hand exfoliation 20</p>
          <p>Organic feet exfoliation 20</p>
          <p>Organic eye treatment 35</p>
          <p>Organic peel (blueberry, arctic berry, alpha hydroxy, or paprika) 45</p>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageDreamSkin;