import Page from "../Page";
import PageContent from "../PageContent";


const PageMagicFix = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h3>Magic Fix™</h3>
          <p>A treatment designed for serious skin conditions, Magic Fix™ will deliver results in as little as 45 minutes. Based on your needs, we select the optimal combination of products and equipment to achieve the outcome you desire. Some of the options we may select to enhance your experience and maximize your results include these: Hungarian mud mask, extractions, organic blueberry peel, organic alpha-hydroxy acid peel, micro-polish gel peel, or micro-dermabrasion.</p>
          <p>We offer four types of Magic Fix™ treatments:</p>
          <p>Flash exfoliation – resurfaces, smooths, and rejuvenates your skin.
            Clear and bright – helps to lighten hyper-pigmentation.
              Age control – stimulates collagen production and promotes a “lifting” effect.
                Blackhead relief – deep cleansing and extraction.</p>
              <h3>Magic Fix™ Pricing</h3>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td></td>
                    <td>45 min</td>
                    <td>60 min</td>
                  </tr>
                  <tr>
                    <td>Individual treatment*</td>
                    <td>165</td>
                    <td>195</td>
                  </tr>
                  <tr>
                    <td>Package of 4* (savings of 60)</td>
                    <td>600</td>
                    <td>720</td>
                  </tr>
                  <tr>
                    <td>Package of 8* (savings of 200)</td>
                    <td><em>1120</em></td>
                    <td><em>1360</em></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <p className="small">* For Arctic Berry Peel, add $10 per treatment</p>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
      </PageContent>
    </Page>
  );
};

export default PageMagicFix;