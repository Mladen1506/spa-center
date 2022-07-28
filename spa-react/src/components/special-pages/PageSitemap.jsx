import { useDispatch } from "react-redux";
import { actionRouteSet } from "../../redux/actions";
import { useExpandSingle } from "../../hooks/use-expand-single";
import Page from "../Page";
import PageContent from "../PageContent";
import PageComboTreats from "../pages/PageComboTreats";
import PageHairBar from "../pages/PageHairBar";
import PageNails from "../pages/PageNails";
import PageOccasional from "../pages/PageOccasional";
import WidgetExpandable from "../WidgetExpandable";
import PageServicesBrowAndLash from "./PageServicesBrowAndLash";
import PageServicesFacials from "./PageServicesFacials";
import PageServicesHairRemoval from "./PageServicesHairRemoval";
import PageServicesMassage from "./PageServicesMassage";
import PageServicesBody from "./PageServicesMassageBody";
import PageServicesMediSpa from "./PageServicesMediSpa";
import PageServicesPermanentMakeup from "./PageServicesPermanentMakeup";


const PageSitemap = (props) => {
  const { expandedId, _expandSingle } = useExpandSingle();

  const dispatch = useDispatch();

  // const _handleClickRoute = (route) => {
  const _click = (route) => {
    dispatch(actionRouteSet(route));
  };

  return (
    <>
      <div className="page-sitemap">
        <div className="page-inner">
          <div className="page-content">
            <h1>Sitemap</h1>


            <div className="sitemap-group">
              <p><a href="/">Home</a></p>
              <p><a href="/services">Services</a></p>
              <div className="sitemap-group">

                <p><a href="/services/facials" onClick={(e) => { e.preventDefault(); _click('FACIALS') }}>Facials</a></p>

                <p><a href="#" onClick={(e) => { e.preventDefault(); _click('MEDI_SPA') }}>Medi-Spa</a></p>
                <div className="sitemap-group">

                  <p><a href="/services/medi-spa/face" onClick={(e) => { e.preventDefault(); _click('MEDI_SPA_FACE') }}>Face</a></p>
                  <p><a href="/services/medi-spa/body" onClick={(e) => { e.preventDefault(); _click('MEDI_SPA_BODY') }}>Body</a></p>
                  <p><a href="/services/medi-spa/wellness-and-health" onClick={(e) => { e.preventDefault(); _click('MEDI_SPA_WELLNESS') }}>Wellness & Health</a></p>

                </div>

                <p><a href="/services/hair-removal" onClick={(e) => { e.preventDefault(); _click('HAIR_REMOVAL') }}>Hair Removal</a></p>

                <p><a href="/services/permanent-makeup" onClick={(e) => { e.preventDefault(); _click('PERMANENT_MAKEUP') }}>Permanent Makeup</a></p>

                <p><a href="/services/massage" onClick={(e) => { e.preventDefault(); _click('MASSAGE') }}>Massage</a></p>

                <p><a href="/services/body" onClick={(e) => { e.preventDefault(); _click('BODY') }}>Body</a></p>

                <p><a href="/services/brow-and-lash-bar" onClick={(e) => { e.preventDefault(); _click('BROW_LASH_BAR') }}>Brow & Lash Bar</a></p>

                <p><a href="/services/nail-bar" onClick={(e) => { e.preventDefault(); _click('NAILS') }}>Nail Bar</a></p>

                <p><a href="/services/hair-bar" onClick={(e) => { e.preventDefault(); _click('HAIR') }}>Hair Bar</a></p>

                <p><a href="/services/combo-treats" onClick={(e) => { e.preventDefault(); _click('PACKAGES') }}>Combo Treats</a></p>

                <p><a href="/services/occasional-offers" onClick={(e) => { e.preventDefault(); _click('OCCASIONAL') }}>Occasional Offers</a></p>

              </div>
              <p><a href="/artists">Our Team</a></p>
              <p><a href="/products">Products</a></p>
              <p><a href="/gallery">Gallery</a></p>
              {/*<p><a href="/gallery">Giftcads</a></p>*/}
              <p><a href="/contact-us">Contact</a></p>
              <p><a href="/about-us">Testimonials</a></p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default PageSitemap;