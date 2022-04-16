import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import Page from "../Page";
import PageContent from "../PageContent";

const PageMassageBody = (props) => {
  return (
    <Page>
      <PageContent>
        <div className="fl-module-content fl-node-content">
          <div className="fl-rich-text">
            <h3>Massage &amp; Body</h3>
            <Image left src={imagesFolderUrl("pages/Massage_woman_trifolf_cover-150x150.jpeg")} alt="Neki alt" caption="Neki caption" />
            <p>Azure Dream Spa wants you to walk through our door and leave your cares behind. Let us pamper you with a variety of body spa treatments designed to relax, detox, and revive.</p>
            <h6>Massage</h6>
            <Image right src={imagesFolderUrl("/static/img/pages/Massage_woman_trifolf_cover-150x150.jpeg")} alt="Neki alt" />
            <p>Experience the healing hands of our nationally-certified massage therapists, who are trained in a variety of therapies -- from hot stone to stress-relief to deep tissue. <a href="https://azuredreamspa.com/massage-body/massage-2/">See more...</a></p>
            <h6>Organic Hydrating Body Spa</h6>
            <p>A gentle yet thorough exfoliation of the entire body, using organic sugar crystals, followed by a light massage with organic body oil and lotion to moisturize your skin, this aromatic treatment leaves your body smooth and your soul relaxed. <a href="https://azuredreamspa.com/massage-body/organic-hydrating-body-spa/">See more...</a></p>
            <h6>Cellulite Body Wrap</h6>
            <p>Cocoon yourself in our body wrap, for softer, firmer, silkier skin, and enjoy the benefits of cellulite reduction. Let the relaxation begin! <a href="https://azuredreamspa.com/massage-body/cellulite-body-wrap/">See more...</a></p>
            <h6>Organic Back Skincare Treatment</h6>
            <p>The only way to improve on the enjoyment of a back massage is to add a "back facial." With this two-in-one treatment, you'll enjoy all the relaxation of a back massage, combined with the cleansing, moisturizing, and soothing effects of an organic facial. Look and feel beautiful! <a href="https://azuredreamspa.com/massage-body/organic-back-skincare/">See more...</a></p>
          </div>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageMassageBody;