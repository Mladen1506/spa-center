const routes = [

  {
    route: 'SITEMAP',
    breadcrumbs: [],
    level: null,
    title: 'Sitemap',
    hasChildren: false,
    slug: '/sitemap',
  },

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
    title: 'Our Team',
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
    title: 'Testimonials',
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
    slug: '/services/facials',
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
    route: 'AZURE_DREAM',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Azure Dream Deluxe Facial',
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
    route: 'DERMAPLANING',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Dermaplaning',
    hasChildren: false,
  },
  {
    route: 'HYDRAFACIALS',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Hydrafacials',
    hasChildren: false,
  },

  // Hydrafacial podopcije

  {
    route: 'HYDRAFACIAL_MEMBERSHIP',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS', 'HYDRAFACIALS',],
    level: 4,
    title: 'Hydrafacial Packages And Pricing',
    hasChildren: false,
  },
  {
    route: 'HYDRAFACIAL_TAKE_HOME',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES', 'HYDRAFACIALS',],
    level: 4,
    title: 'Signature Hydrafacial Packages',
    hasChildren: false,
  },
  {
    route: 'HYDRAFACIAL',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES', 'HYDRAFACIALS',],
    level: 4,
    title: 'Hydrafacial',
    hasChildren: false,
  },

  // {
  //   route: 'HYDRAFACIAL',
  //   breadcrumbs: ['HOME', 'SERVICES', ''],
  //   level: 2,
  //   title: 'Facial ',
  //   hasChildren: false,
  // },


  {
    route: 'SKINCEUTICAL',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Chemical Peel',
    hasChildren: false,
  },
  {
    route: 'ADD_ON',
    breadcrumbs: ['HOME', 'SERVICES', 'FACIALS'],
    level: 3,
    title: 'Add On',
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
    title: 'Medi-Spa',
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
    route: 'IPL',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'IPL',
    hasChildren: false,
  },
  // {
  //   route: 'VENUS_CONCEPT',
  //   breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
  //   level: 3,
  //   title: 'Venus Concept',
  //   hasChildren: false,
  // },
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
    title: 'Pico Laser',
    hasChildren: false,
  },
  {
    route: 'CANDELA_SKIN',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Candela Skin Tightening',
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
    title: 'Microneedling',
    hasChildren: false,
  },
  {
    route: 'MORPHEUS_8',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Morpheus 8',
    hasChildren: false,
  },
  {
    route: 'ERBIUM',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Erbium Yag Resurfacing',
    hasChildren: false,
  },
  {
    route: 'VASCULAR',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Vascular Treatment',
    hasChildren: false,
  },
  {
    route: 'VAGINAL_REJUVENATION',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Vaginal Rejuvenation',
    hasChildren: false,
  },
  {
    route: 'FORMA',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'Forma',
    hasChildren: false,
  },
  {
    route: 'CO_2',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'CO-2',
    hasChildren: false,
  },
  {
    route: 'HIGH_FREQUENCY_FACIAL',
    breadcrumbs: ['HOME', 'SERVICES', 'MEDI_SPA'],
    level: 3,
    title: 'High Frequency Facial',
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
    route: 'WOMEN',
    breadcrumbs: ['HOME', 'SERVICES', 'HAIR_REMOVAL', 'LASER'],
    level: 3,
    title: 'Women',
    hasChildren: false,
  },
  {
    route: 'MEN',
    breadcrumbs: ['HOME', 'SERVICES', 'HAIR_REMOVAL', 'LASER'],
    level: 3,
    title: 'Men',
    hasChildren: false,
  },
  {
    route: 'ELECTROLYSIS',
    breadcrumbs: ['HOME', 'SERVICES', 'HAIR_REMOVAL'],
    level: 2,
    title: 'ELECTROLYSIS',
    hasChildren: false,
  },

  // segment nails

  {
    route: 'NAILS',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Nail Bar',
    hasChildren: false,
  },

  {
    route: 'HAIR',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Hair Bar',
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
  {
    route: 'MAKEUP_TOUCH_UPS',
    breadcrumbs: ['HOME', 'SERVICES', 'PERMANENT_MAKEUP'],
    level: 2,
    title: 'Touch-Ups',
    hasChildren: false,
  },

  // segment packages
  {
    route: 'PACKAGES',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Combo Treats',
    hasChildren: false,
  },

  // podopcije

  // {
  //   route: 'SPA_COMBO_PACKAGES',
  //   breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES'],
  //   level: 2,
  //   title: 'Spa Combo Packages',
  //   hasChildren: false,
  // },

  /*
  {
    route: 'HYDRAFACIAL_MENU',
    breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES', 'FACIAL_PACKAGES'],
    level: 3,
    title: 'Hydrafacial',
    hasChildren: false,
  },
  */
  // {
  //   route: 'MASSAGE_PACKAGES',
  //   breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES'],
  //   level: 2,
  //   title: 'Massage Packages',
  //   hasChildren: false,
  // },
  // {
  //   route: 'LASER_PACKAGES',
  //   breadcrumbs: ['HOME', 'SERVICES', 'PACKAGES'],
  //   level: 2,
  //   title: 'Laser Packages',
  //   hasChildren: false,
  // },

  // segment occasional offers
  {
    route: 'OCCASIONAL',
    breadcrumbs: ['HOME', 'SERVICES'],
    level: 2,
    title: 'Occasional Offers',
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