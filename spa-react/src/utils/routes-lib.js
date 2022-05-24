const routes = [

  {
    route: 'HOME',
    breadcrumbs: [],
    level: 1,
    title: 'Home',
    hasChildren: false,
    slug: '/',
  },
  /*
  home
  services
  artists
  products
  gallery
  giftcards
  contact
  about us
  */

  {
    route: 'SERVICES',
    breadcrumbs: ['HOME'],
    level: 1,
    title: 'Services',
    hasChildren: false,
    slug: '/services',
  },
  {
    route: 'ARTISTS',
    breadcrumbs: ['HOME'],
    level: 1,
    title: 'Artists',
    hasChildren: false,
    slug: '/artists',
  },
  {
    route: 'PRODUCTS',
    breadcrumbs: ['HOME'],
    level: 1,
    title: 'Products',
    hasChildren: false,
    slug: '/products',
  },
  {
    route: 'GALLERY',
    breadcrumbs: ['HOME'],
    level: 1,
    title: 'Gallery',
    hasChildren: false,
    slug: '/gallery',
  },
  {
    route: 'GIFTCARDS',
    breadcrumbs: ['HOME'],
    level: 1,
    title: 'Giftcards',
    hasChildren: false,
    slug: '/gift-certificates',
  },
  {
    route: 'CONTACT',
    breadcrumbs: ['HOME'],
    level: 1,
    title: 'Contact',
    hasChildren: false,
    slug: '/contact-us',
  },
  {
    route: 'ABOUT',
    breadcrumbs: ['HOME'],
    level: 1,
    title: 'About Us',
    hasChildren: false,
    slug: '/about-us',
  },


  // SERVICES
  /*
  8 komada usluge:
  facials
  massage
  body
  brow and lash bar
  medi spa tretmant
  hair removal
  permanent makeup
  packages
  */

  // segment facials
  {
    route: 'FACIALS',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Facials',
    hasChildren: false,
  },
  {
    route: 'BASIC_BOTANICAL',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Basic: Botanical',
    hasChildren: false,
  },
  {
    route: 'SPECIALTY_DREAM_SKIN',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Specialty: Dream Skin',
    hasChildren: false,
  },
  {
    route: 'PREMIUM_PAMPER',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Premium: Pamper Yourself',
    hasChildren: false,
  },
  {
    route: 'MICRO_DERMABRASION',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Micro Dermabrasion',
    hasChildren: false,
  },
  {
    route: 'MAGIC_FIX',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Magic Fix',
    hasChildren: false,
  },
  {
    route: 'SKINCEUTICAL',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Skinceutical',
    hasChildren: false,
  },

  // sekgment massage
  {
    route: 'MASSAGE',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Massage',
    hasChildren: false,
  },
  // ovde pod ocpije za masage
  {
    route: 'CLASSIC_MASSAGE_EXP',
    breadcrumbs: ['HOME', 'SERVICES', 'MASSAGE'],
    level: 3,
    title: 'Classic Massage Experience',
    hasChildren: false,
  },
  {
    route: 'PREMIUM_MASSAGE_EXP',
    breadcrumbs: ['HOME', 'SERVICES', 'MASSAGE'],
    level: 3,
    title: 'Premium Massage Experience',
    hasChildren: false,
  },
  {
    route: 'COUPLE_MASSAGE_EXP',
    breadcrumbs: ['HOME', 'SERVICES', 'MASSAGE'],
    level: 3,
    title: 'Couple Massage Experience',
    hasChildren: false,
  },


  // segment body
  {
    route: 'BODY',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Body',
    hasChildren: false,
  },
  // ovde podopcije
  {
    route: 'ORGANIC_BODY_SPA',
    breadcrumbs: ['HOME', 'SERVICES', 'BODY'],
    level: 3,
    title: 'Organic Body Spa',
    hasChildren: false,
  },
  {
    route: 'ORGANIC_BACK_SKINCARE',
    breadcrumbs: ['HOME', 'SERVICES', 'BODY'],
    level: 3,
    title: 'Organic Back Skincare',
    hasChildren: false,
  },
  {
    route: 'CELLULITE_BODY_WRAP',
    breadcrumbs: ['HOME', 'SERVICES', 'BODY'],
    level: 3,
    title: 'Cellulite Body Wrap',
    hasChildren: false,
  },

  //  segment brow & lash bar
  {
    route: 'BROW_LASH_BAR',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Brow & Lash Bar',
    hasChildren: false,
  },
  // podopcije
  {
    route: 'LASH_LIFT',
    breadcrumbs: ['HOME', 'SERVICES', 'BROW_LASH_BAR'],
    level: 3,
    title: 'Lash Lift',
    hasChildren: false,
  },
  {
    route: 'TINTING',
    breadcrumbs: ['HOME', 'SERVICES', 'BROW_LASH_BAR'],
    level: 3,
    title: 'TINTING',
    hasChildren: false,
  },
  {
    route: 'WAXING_AND_THREADING',
    breadcrumbs: ['HOME', 'SERVICES', 'BROW_LASH_BAR'],
    level: 3,
    title: 'Waxing And Threading',
    hasChildren: false,
  },
  {
    route: 'BROW_LAMINATION',
    breadcrumbs: ['HOME', 'SERVICES', 'BROW_LASH_BAR'],
    level: 3,
    title: 'Brow Lamination',
    hasChildren: false,
  },



  //segment medi spa
  {
    route: 'MEDI_SPA',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Medi-Spa Treatmant',
    hasChildren: false,
  },
  //podopcije
  {
    route: 'AQUA_GOLD',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Aqua Gold',
    hasChildren: false,
  },
  {
    route: 'VENUS_CONCEPT',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Venus Concept',
    hasChildren: false,
  },
  {
    route: 'VENUS_VIVA',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA', 'VENUS_CONCEPT'],
    level: 4,
    title: 'Venus VIva',
    hasChildren: false,
  },
  {
    route: 'IPL',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA', 'VENUS_CONCEPT'],
    level: 4,
    title: 'IPL',
    hasChildren: false,
  },
  {
    route: 'LASER_SKIN_TIGHTENING',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Laser Skin Tightening',
    hasChildren: false,
  },
  {
    route: 'LASER_DISCOLORATION_REMOVAL',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Laser Discoloration Removal',
    hasChildren: false,
  },
  {
    route: 'CAPILLARY_REPAIR',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Capillary Repair',
    hasChildren: false,
  },
  {
    route: 'MICRO_NEEDLING',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Micro Needling',
    hasChildren: false,
  },

  // segment hair removal

  {
    route: 'HAIR_REMOVAL',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Hair Removal',
    hasChildren: false,
  },

  // podopcije

  {
    route: 'LASER',
    breadcrumbs: ['HOME', 'SERVICES', 'HAIR_REMOVAL'],
    level: 2,
    title: 'Laser',
    hasChildren: false,
  },
  {
    route: 'ELECTROLYSIS',
    breadcrumbs: ['HOME', 'SERVICES', 'HAIR_REMOVAL'],
    level: 2,
    title: 'ELECTROLYSIS',
    hasChildren: false,
  },

  // segment permanent makeup

  {
    route: 'PERMANENT_MAKEUP',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Permanent Makeup',
    hasChildren: false,
  },

  // podopcije

  {
    route: 'MICROBLADING',
    breadcrumbs: ['HOME', 'SERVICES', 'PERMANENT_MAKEUP'],
    level: 2,
    title: 'Microblading',
    hasChildren: false,
  },
  {
    route: 'OMBRE_SHADING',
    breadcrumbs: ['HOME', 'SERVICES', 'PERMANENT_MAKEUP'],
    level: 2,
    title: 'Ombre Shading (Eyebrows)',
    hasChildren: false,
  },
  {
    route: 'MICROBLADING_AND_OMBRE_SHADING_COMB0',
    breadcrumbs: ['HOME', 'SERVICES', 'PERMANENT_MAKEUP'],
    level: 2,
    title: 'Microblading And Ombre Shading Combination',
    hasChildren: false,
  },
  {
    route: 'MICROBLADING_OMBRE_TOUCH_UP',
    breadcrumbs: ['HOME', 'SERVICES', 'PERMANENT_MAKEUP'],
    level: 2,
    title: 'Microblading Or Ombre Shading Touch-Ups',
    hasChildren: false,
  },
  {
    route: 'PERMANENT_EYELINER',
    breadcrumbs: ['HOME', 'SERVICES', 'PERMANENT_MAKEUP'],
    level: 2,
    title: 'Permanent Eyeliner',
    hasChildren: false,
  },
  {
    route: 'LASH_ENHANCEMENT',
    breadcrumbs: ['HOME', 'SERVICES', 'PERMANENT_MAKEUP'],
    level: 2,
    title: 'Lash Enhancement (Lash Liner)',
    hasChildren: false,
  },
  {
    route: 'LIP_LINER',
    breadcrumbs: ['HOME', 'SERVICES', 'PERMANENT_MAKEUP'],
    level: 2,
    title: 'Lip Liner',
    hasChildren: false,
  },

  // segment packages
  {
    route: 'PACKAGES',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Packages',
    hasChildren: false,
  },

  // podopcije

  {
    route: 'SPA_COMBO_PACKAGES',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES'],
    level: 2,
    title: 'Spa Combo Packages',
    hasChildren: false,
  },
  {
    route: 'FACIAL_PACKAGES',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES'],
    level: 2,
    title: 'Facial Packages',
    hasChildren: false,
  },

  /*
  {
    route: 'HYDRAFACIAL_MENU',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES', 'FACIAL_PACKAGES'],
    level: 3,
    title: 'Hydrafacial',
    hasChildren: false,
  },
  */

  {
    route: 'HYDRAFACIAL_MEMBERSHIP',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES', 'FACIAL_PACKAGES', 'HYDRAFACIAL_MENU'],
    level: 4,
    title: 'Hydrafacial Membership',
    hasChildren: false,
  },
  {
    route: 'HYDRAFACIAL_TAKE_HOME',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES', 'FACIAL_PACKAGES', 'HYDRAFACIAL_MENU'],
    level: 4,
    title: 'Hydrafacial Take Home Guidelines',
    hasChildren: false,
  },
  {
    route: 'HYDRAFACIAL',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES', 'FACIAL_PACKAGES', 'HYDRAFACIAL_MENU'],
    level: 4,
    title: 'Hydrafacial',
    hasChildren: false,
  },



  {
    route: 'MASSAGE_PACKAGES',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES'],
    level: 2,
    title: 'Massage Packages',
    hasChildren: false,
  },
  {
    route: 'LASER_PACKAGES',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES'],
    level: 2,
    title: 'Laser Packages',
    hasChildren: false,
  },

];


export const get_route_single = (route) => {
  let x = false;
  routes.forEach((item) => {
    if (item.route === route) {
      x = item;
    }
  });
  return x;
};


export const get_route_title = (route) => {
  const item = get_route_single(route);
  if (item) {
    const title = item.title;
    return title;
  }
  return 'NOT FOUND!';
};

export const get_breadcrumbs_single = (route) => {
  const item = get_route_single(route);
  const breadcrumbs = item.breadcrumbs;
  return breadcrumbs;
};


export const get_breadcrumbs_single_full = (route) => {
  // const home_breadcrumbs = get_breadcrumbs_single('HOME');
  const breadcrumbs = get_breadcrumbs_single(route);
  if (Array.isArray(breadcrumbs)) {
    let breadcrumbsFull = breadcrumbs.map((bc) => {
      const item = get_route_single(bc);
      return item;
    });
    return breadcrumbsFull;
  } else {
    // error
    return [];
  }
};


export const get_level_1_routes = () => {
  let level1 = routes.filter((item) => {
    if (item.level === 1) {
      return true;
    }
    return false;
  });
  return level1;
};

export const get_children_routes = (parentRoute, childrenLevel) => {
  let x = routes.filter((item) => {
    if (item.breadcrumbs.includes(parentRoute) && item.level === childrenLevel) {
      return true;
    }
    return false;
  });
  return x;
};