import Page from "../Page";
import PageContent from "../PageContent";

const PagePamperYourself = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          {/* <h3>Advanced Premium Facials:Pamper Yourself</h3> */}
          <h6>Micro-dermabrasion with Facial</h6>
          <p>During micro-dermabrasion, super-fine crystals slough off the dead cells of the outermost layer of the epidermis, where blemishes, sun damage and other imperfections lie. With this outermost layer removed, the skin cells go into “repair mode,” replacing the lost skin cells with new ones, creating fresher and younger-looking skin.</p>
          <h6>Lift &amp; Firm Facial</h6>
          <p>The Lift &amp; Firm Facial features the organic Blueberry Detox Firming Peel from the renowned Éminence product line. Loaded with delectable goodness from nature -- blueberry, raspberry, blackberry, and pineapple -- the peel is ideally-suited for mature, thick or sun-damaged skin. Designed to refine and clarify skin, to clear and minimize pores and to remove dead skin allowing for easier penetration of nutrients and moisture.</p>

          <h6>Prenatal Facial</h6>

          <p>A simple cleansing facial during pregnancy is completely safe. Additionally, it can help with the various skin changes that mothers-to-be may experience – things like dryness, puffiness or breakouts. Skin can be sensitive during pregnancy, so we’ll use a gentle touch, along with the highest-quality products from our pregnancy-friendly Éminence line of organic skincare to address skin changes.</p>

          <h6>Manual Lymph Drainage Facial</h6>

          <p>The Manual Lymph Drainage (MLD) Facial offers a specialized light massage technique that, when performed by a trained practitioner, assists the flow of lymph through lymph vessels. Combined with a facial, MLD is ideal for counteracting eye-area puffiness. MLD can also relieve congestion, blockage and fluid buildup in connective tissue caused by chronic inflammation, hematoma or surgical incisions. Incorporating MLD into pre- and post-cosmetic surgery routines can promote a faster recovery by transporting damaged cells, inflammatory agents and toxins away from the area of surgery. Among its other beneficial effects, MLD can reduce signs of sun damage and can relieve the tight, itchy feeling that often accompanies eczema and dermatitis, promoting healthy skin.</p>

          <h6>Organic Back Facial with Massage</h6>

          <p>So nourishing and pampering, we call it a "facial" for your back. Back Facial  Treatment provides cleansing and exfoliation and extraction, followed by a relaxing massage, and finishes with a masque.</p>
          <p>&nbsp;</p>
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
                <td>$145</td>
                <td></td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>$165</td>
                <td></td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>$185</td>
                <td>$900</td>
              </tr>
              <tr>
                <td>75 Min</td>
                <td>$205</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </Page>
  );
};

export default PagePamperYourself;