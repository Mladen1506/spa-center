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
                <h5>Meet Our Staff</h5>

                <h6>LEILA ESPARI</h6>
                <p><b>Founder & Owner, Azure Dream Day Spa</b></p>
                <Image left small src={imagesFolderUrl('team-leila.jpeg')} />
                <p>With a long and successful career in skin care and esthetics, Leila was confident that she could offer her clients the ultimate spa experience if she launched her own business. With this vision as her guide, she began the journey, choosing a convenient location in the heart of Arlington, installing state-of-the-art equipment, and assembling a team of skilled and caring professionals.</p>
                <p>Paying attention to the smallest detail – right down to the soothing, nature-inspired décor and comfy couches – Leila brought her vision to fruition with Azure Dream Day Spa. A soothing retreat, Azure Dream offers clients a full range of services and products. Step through the door and be greeted by tranquil blue walls, friendly smiles, and a cup of the most delicious tea. Leila’s personal warmth and exacting standards combine to offer the ultimate spa experience in a luxurious and welcoming environment.</p>
                <p>Leila is proud to invite her clients to visit her at Azure Dream Day Spa.</p>
                <p>LEILA’S EXPERTISE Well-know in Northern Virginia, Leila has specialized in skin care and electrolysis since 1994. Leila’s electrolysis clients appreciate her expertise: she is famous for being a quick and efficient technician who produces excellent results. Leila’s artistry and skill cover a broad range of techniques, from micro-dermabrasion to chemical peels to photo therapy.</p>
                <p>LEILA’S CREDENTIALS Certified Professional Electrolygist, Member of the American Electrolysis Association, Master Esthetician, Laser Hair Removal Technician, Face and Neck Manual Lymph Drainage certification, Certified Xtreme Lashes® Stylist.</p>

                <h5>DR. SAEED MAREFAT, MD, FACS</h5>
                <p><b>Medical Director</b></p>
                <Image left small src={imagesFolderUrl('team-said.jpeg')} />
                <p>Dr. Saeed Marefat is a leading Virginia plastic surgeon providing quality service in all aspects of cosmetic plastic surgery for men and women, including facial surgery, body sculping, breast enhancement, liposuction, cosmetic injections, and non-surgical treatment.</p>
                <p>Continuing to stay abreast of the most effective means to help tighten skin, remove unwanted fat, and efface wrinkles Dr. Marefat is at the forefront of methods and techniques used in integrative, regenerative, and anti-aging medicine utilizing the body’s own regenerative powers to maintain natural beauty and youthfulness. Dr. Marefat, the director of Metropolitan Plastic Surgery PC, is a board-certified plastic surgeon who has practiced plastic surgery in Northern Virginia since 1992. He received his medical degree from Georgetown University School of Medicine in 1985. After medical school, Dr. Marefat did his surgical training at Georgetown University and New York University Hospitals.</p>
                <h5>DESIREE</h5>
                <p><b>Spa Manager / Licensed Massage Therapist</b></p>
                <Image left small src={imagesFolderUrl('team-desiree.jpeg')} />
                <p>Since 2007, Desiree has been practicing massage therapy in Northern Virginia, as a nationally certified and licensed therapist. She specializes in Swedish, deep tissue, pregnancy and hot stone massage, as well as Reflexology. During her sessions, Desiree loves to bring her clients into a mental and physical state of relaxation, to melt away any stress and tension from the body and soul. Her caring spirit and love of helping others has led her on this path, and her many clients are delighted that she has taken this journey</p>
                <h5>FARAH</h5>
                <p><b>Skin Care & Threading Specialist</b></p>
                <Image left small src={imagesFolderUrl('team-farah.jpeg')} />
                <p>With more than 30 years of experience, Farah brings the ancient Middle-Eastern art of threading to modern spa services. Suitable for women and men, threading is a gentle and efficient method of semi-permanent hair removal. And with a practitioner as skilled as Farah, clients put down the tweezers and razors for good, preferring, instead, to enjoy Farrah’s comfortable, discreet service, and a hot cup of tea.</p>
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