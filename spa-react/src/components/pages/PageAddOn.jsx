import Page from "../Page";
import PageContent from "../PageContent";

const PageAddOn = () => {
  return (
    <Page>
      <PageContent>
        <div className="fl-rich-text">
          <h6>Addons</h6>
          <p>Scalp massage $30</p>
          <p>Organic hand exfoliation $25</p>
          <p>Organic feet exfoliation $30</p>
          <p>Organic eye treatment $35</p>
          <p>Dermaplaning $45</p>
          <p>Microdermabrasion $65</p>

          <h6>Medi Spa Addons</h6>
          <p>BT Peel $50</p>
          <p>LED Light $50</p>
          <p>Lymphatic Drainage $100</p>
          <p>High Frequency Firming $100</p>
          <p>High Frequency Acne $50</p>

          <h6>Hydra Facial Addons</h6>
          <p>Lip $80</p>
          <p>Eye $80</p>
          <p>Lip & Eye $120</p>
          <p>Decolette $100</p>
          <p>Upgrade Serum $35</p>

          <h6>Micro Dermabrassion Addons</h6>
          <p>Neck $30</p>
          <p>Décolletage $45</p>
          <p>Neck & Décolletage $70</p>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageAddOn;