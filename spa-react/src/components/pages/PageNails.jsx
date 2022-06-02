import Page from "../Page";
import PageContent from "../PageContent"

const PageNails = () => {
  return (
    <Page>
      <PageContent>
        <div class="fl-rich-text">
          <h5>Azure Nail Bar</h5>
          <p class="p1">Azure strives for best in class nail services, innovative wellness standards, and endless creative touches.</p>
          <p class="p1">Treat yourself to a facial for your hands/feet. Uplift your soul as you soak your hands/feet into sea salt water, followed by organic scrub exfoliation. Lavender essential oil is massaged into your skin for a fragrant mind-body boost.</p>
          <p class="p1">ALL AZURE NAIL SERVICES ARE OFFERED IN A WATERLESS VERSION AS WELL</p>
          <h5>Azure Manicures</h5>

          <ul>

            <li class="p1">Basic Manicure $28</li>
            <li class="p1">Organic Luxury Manicure $48</li>
            <li class="p1">Azure Deluxe Manicure $68</li>
            <li class="p1">Gel Add On $20</li>
            <li class="p1">SNS Dipping Powder $68</li>
            <li class="p1">Pink &amp; White SNS $78</li>
            <li class="p1">Ombre SNS $88</li>
          </ul>

          {/* <ul>
            <li class="p1"></li>
            <li class="p1"></li>
            <li class="p1"></li>
            <li class="p1"></li>
            <li class="p1"></li>
          </ul> */}
          <h5>Azure Pedicures</h5>

          <ul>
            <li class="p1">Basic Pedicure $48</li>
            <li class="p1">Organic Luxury Pedicure $68</li>
            <li class="p1">Azure Deluxe Pedicure $88</li>
            <li class="p1">Gel Add On $20</li>
          </ul>


          <h5>Add-ons may be added to enhance your nail services</h5>
          <ul>
            <li class="p1">Nail Art per nail $10</li>
            <li class="p1">French Polish $10</li>
            <li class="p1">Nail Repair $10</li>
            <li class="p1">Callus Elimination $10</li>
            <li class="p1">Gel Removal $10</li>
          </ul>
        </div>
      </PageContent>
    </Page>
  );
};

export default PageNails;