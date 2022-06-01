import Page from "../Page";
import PageContent from "../PageContent";


const PageAbout = (props) => {
  return (
    <>
      <Page>
        <PageContent>
          {/* <div className="fl-rich-text">
            <h2>A Warm and Welcoming Environment</h2>
            <p>Welcome to Azure Dream, where we connect your inner peace with your body, mind, and spirit. We invite you to visit us and indulge yourself at our luxurious yet cozy day spa – enjoy pampering, comfort, and a sense of belonging.</p>
            <p>Our professional team is dedicated to each and every one of our clients. We are committed to providing excellent service and a superlative customer experience. Our technicians are highly-trained professionals who offer the best in skin care, massage, hair removal, body and cellulite treatments, and lash and brow treatments. Our equipment is new, state-of-the-art technology, delivering results that will satisfy the most discerning clients.</p>
            <p>Azure Dream is located in the beautiful heart of Arlington, VA -- minutes away from historic Georgetown in Washington, DC, and walking distance from Arlington’s Courthouse Metro.</p>
          </div> */}
          <div className="fl-rich-text">
            <h3>Azure Dream Spa Philosophy</h3>
            <p>Azure Dream Day Spa was founded by Leila and Arash in 2010, creating a luxurious yet cozy escape to all visiting clients. They carefully hand-picked their staff, ensuring not only the highest professional standards, expertise, and certification, but also warm and caring personalities. Azure offers the latest, state of the art equipment to achieve the best results possible, along with the best skin care products available.

            Every guest will find a soothing retreat, with discreet, friendly, personal service – and results that will keep them returning. So, step through the door and be greeted by friendly staff and experience the ultimate spa experience, only at Azure.</p>
          </div>
        </PageContent>
      </Page>
    </>
  );
};

export default PageAbout;