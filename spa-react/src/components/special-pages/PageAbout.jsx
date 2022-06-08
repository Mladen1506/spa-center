import { imagesFolderUrl } from "../../utils/url-lib";
import ImageCover2 from "../ImageCover2";
import Page from "../Page";
import PageContent from "../PageContent";


const PageAbout = (props) => {
  const parallaxImage2 = imagesFolderUrl("spa-wallpapers6.jpg");
  return (
    <>
      <section className="image-large image-large-services">
        <ImageCover2 src={parallaxImage2} />
      </section>
      <div className="services-bg about-bg">
        <div className="page-inner page-inner-special">
          <div className="services-3-columns">
            <div className="left-flex"></div>
            <div className="page-content-wrapper">
              <PageContent>
                {/* <div className="fl-rich-text">
            <h2>A Warm and Welcoming Environment</h2>
            <p>Welcome to Azure Dream, where we connect your inner peace with your body, mind, and spirit. We invite you to visit us and indulge yourself at our luxurious yet cozy day spa – enjoy pampering, comfort, and a sense of belonging.</p>
            <p>Our professional team is dedicated to each and every one of our clients. We are committed to providing excellent service and a superlative customer experience. Our technicians are highly-trained professionals who offer the best in skin care, massage, hair removal, body and cellulite treatments, and lash and brow treatments. Our equipment is new, state-of-the-art technology, delivering results that will satisfy the most discerning clients.</p>
            <p>Azure Dream is located in the beautiful heart of Arlington, VA -- minutes away from historic Georgetown in Washington, DC, and walking distance from Arlington’s Courthouse Metro.</p>
          </div> */}
                <div className="fl-rich-text">
                  <h5>Azure Dream Spa Philosophy</h5>
                  <p>Azure Dream Day Spa was founded by Leila and Arash in 2010, creating a luxurious yet cozy escape to all visiting clients. They carefully hand-picked their staff, ensuring not only the highest professional standards, expertise, and certification, but also warm and caring personalities. Azure offers the latest, state of the art equipment to achieve the best results possible, along with the best skin care products available.</p>
                  <p>Every guest will find a soothing retreat, with discreet, friendly, personal service – and results that will keep them returning. So, step through the door and be greeted by friendly staff and experience the ultimate spa experience, only at Azure.</p>

                  <h5>Testimonials</h5>
                  <p>Azure Dream Day Spa really is fantastic. Leila is the only person I will allow to touch my face! I have been a client of Leila’s for a long time and really love the great results I always get from her. Recently, I decided to go for it and bought the sublative rejuvenation treatment package. I have fair skin, and have sun damage, and a number of old small acne scars. For this treatment, the laser was hot – and felt like small rubber bands were snapping on my face. It stung quite a bit, but it was tolerable. Leila was great throughout the treatment and explained what she was doing and why she was focusing on some areas on my face versus others. After the last zap, I looked in the mirror and my face was definitely red, but no more red than after a microdermabrasion treatment. After my face cooled down, Leila gave applied a cool lotion that soothed my face. Normal activities for that day….. I woke up the next morning and while my face was a little splotchy, I could already tell how great the results were going to be! I covered any redness with make-up and it was business as usual for the day. I love the spa, the gals at the front desk (who always call me to remind me of my appointments) and of course, Leila. The spa is cute, comfortable and there is always a professional vibe there. Love you gals!</p>

                  <p className="text-right">--- Diane Schmidt*</p>

                  <p>I want express my appreciation for your professional and enjoyable services. My favorite service of yours is your massages. Over the last 4 years, I have averaged a massage every 2 weeks. I keep a list of excellent massage therapists for places I live and travel to across the United States. I have Melissa McCutcheon at the top of my list for Northern Virginia massage therapist. Thank you for your quality and consistency.</p>
                  <p className="text-right">--- Mark*</p>
                </div>
              </PageContent>
            </div>
            <div className="right-flex"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAbout;