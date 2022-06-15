import { imagesFolderUrl } from "../../utils/url-lib";
import Image from "../Image";
import ImageCover2 from "../ImageCover2";
import Page from "../Page";
import PageContent from "../PageContent";

const PageOurTeam = () => {
  const parallaxImage2 = imagesFolderUrl("spa-wallpapers-our-team.jpg");

  return (
    <>
      <section className="image-large image-large-services">
        <ImageCover2 src={parallaxImage2} />
      </section>
      <div className="services-bg artists-bg">
        <div className="page-inner page-inner-special">
          <div className="services-3-columns">
            <div className="left-flex"></div>
            <div className="page-content-wrapper">
              <PageContent>
                <h6>Meet Our Staff</h6>

                <h6>LEILA ESPARI</h6>
                <p><b>Founder & Owner, Azure Dream Day Spa</b></p>
                <Image left small150 src={imagesFolderUrl('team-leila.jpeg')} />
                <p>With a long and successful career in skin care and esthetics, Leila was confident that she could offer her clients the ultimate spa experience if she launched her own business. With this vision as her guide, she began the journey, choosing a convenient location in the heart of Arlington, installing state-of-the-art equipment, and assembling a team of skilled and caring professionals.</p>
                <p>A soothing retreat, Azure Dream offers clients a full range of services and products. Leila’s personal warmth and exacting standards combine to offer the ultimate spa experience in a luxurious and welcoming environment.</p>
                <p> Leila is top referral choice by many doctors in the area and well known for being quick yet efficient.{/* LEILA’S EXPERTISE Well-known in Northern Virginia, Leila has specialized in skin care and electrolysis since 1993. .Leila’s electrolysis clients appreciate her expertise, she is famous for being quick and efficient and is the top referral choice of many doctors in the area. */} </p>
                <p>LEILA’S CREDENTIALS Certified Professional Electrologist, Member of the American Electrolysis Association, Master Esthetician, MediSpa Technician, Laser Hair Removal Technician, and Face and Neck Manual Lymph Drainage Certified.</p>

                <h6>DR. SAEED MAREFAT, MD, FACS</h6>
                <p><b>Medical Director</b></p>
                <Image left small150 src={imagesFolderUrl('team-said.jpeg')} />
                <p>Dr. Saeed Marefat is a leading Virginia plastic surgeon providing quality service in all aspects of cosmetic plastic surgery for men and women, including facial surgery, body sculping, breast enhancement, liposuction, cosmetic injections, and non-surgical treatment.</p>
                <p>Continuing to stay abreast of the most effective means to help tighten skin, remove unwanted fat, and efface wrinkles Dr. Marefat is at the forefront of methods and techniques used in integrative, regenerative, and anti-aging medicine utilizing the body’s own regenerative powers to maintain natural beauty and youthfulness. Dr. Marefat, the director of Metropolitan Plastic Surgery PC, is a board-certified plastic surgeon who has practiced plastic surgery in Northern Virginia since 1992. He received his medical degree from Georgetown University School of Medicine in 1985. After medical school, Dr. Marefat did his surgical training at Georgetown University and New York University Hospitals.</p>
                <h6>DESIREE</h6>
                <p><b>Spa Manager / Licensed Massage Therapist</b></p>
                <Image left small150 src={imagesFolderUrl('team-desiree.jpeg')} />
                <p>Desiree has been managing Azure Dream since 2018, and she is known for her warm and friendly personality. Desiree has been practicing massage therapy in Northern Virginia since 2007, as a nationally certified and licensed therapist. She has been performing electrolysis and laser hair removal since 2011.</p>

                <h6>FARNAZ</h6>
                <p><b>Skin Care Department Lead</b></p>
                <p>Medi-Spa & Master Esthetician</p>
                <Image left small150 src={imagesFolderUrl('team-farnaz.png')} />
                <p>Farnaz specializes in Medi-spa skin care and is continuously educated on all the latest skin care lines and devices being offered in the industry.  She is a Licensed Master Esthetician and a Certified Laser Technician. Her many clients love receiving their regular beauty treatments with her bright personality and gentle touch.</p>

                <h6>FARAH</h6>
                <p><b>Skin Care & Threading Specialist</b></p>
                <Image left small150 src={imagesFolderUrl('team-farah.jpeg')} />
                <p>With more than 30 years of experience, Farah brings the art of esthetics to modern spa services. Book a facial with her to enjoy her skilled hands with her comfortable, caring, and soothing touch.</p>
                <br />
                <br />
                <h6>REZVAN</h6>
                <p><b>Medi-Spa & Master Esthetician</b></p>
                <Image left small150 src={imagesFolderUrl('team-rezvan.jpeg')} />
                <p>Rezvan specializes in all skincare services and medi-spa treatments, along with permanent makeup artistry. She is a licensed Master Esthetician and a Certified Laser Technician.</p>
                <br />
                <h6>JENNA</h6>
                <p><b>Licensed Massage Therapist</b></p>
                <Image left small150 src={imagesFolderUrl('team-jenna.jpeg')} />
                <p>Jenna's passion for the healing arts and alternative medicine led her to become a certified licensed massage therapist in 2010. Jenna loves to tailor each session to meet her client's needs and improve their quality of life.</p>
              </PageContent>
            </div>
            <div className="right-flex"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageOurTeam;