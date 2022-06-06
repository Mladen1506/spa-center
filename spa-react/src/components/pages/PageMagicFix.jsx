import Page from "../Page";
import PageContent from "../PageContent";


const PageMagicFix = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h5>Magic Fix™</h5>
          <p>A treatment designed for serious skin conditions, Magic Fix™ will deliver results in as little as 45 minutes. Based on your needs, we select the optimal combination of products and equipment to achieve the outcome you desire. Some of the options we may select to enhance your experience and maximize your results include these: Hungarian mud mask, extractions, organic blueberry peel, organic alpha-hydroxy acid peel, micro-polish gel peel, or micro-dermabrasion.</p>
          <p>We offer four types of Magic Fix™ treatments:</p>
          <p>Flash exfoliation – resurfaces, smooths, and rejuvenates your skin.
            Clear and bright – helps to lighten hyper-pigmentation.
            Age control – stimulates collagen production and promotes a “lifting” effect.
            Blackhead relief – deep cleansing and extraction.</p>
          <h6>Pricing</h6>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Individual Session*</td>
                <td></td>
                <td>Packages</td>
              </tr>
              <tr>
                <td>Single Treatment*</td>
                <td>Price</td>
                <td>Pkg(4)*</td>
                <td>Pkg(8)*</td>
              </tr>
              <tr>
                <td>45 Min</td>
                <td>$165</td>
                <td>$620</td>
                <td>$1160</td>
              </tr>
              <tr>
                <td>60 Min</td>
                <td>$195</td>
                <td>$740</td>
                <td>$1400</td>
              </tr>
            </tbody>
          </table>
          <p className="small">* For Arctic Berry Peel, add $10 per treatment</p>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageMagicFix;