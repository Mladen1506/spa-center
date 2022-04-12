const routes = [

    {
        route: 'HOME',
        breadcrumbs: [],
        level: 1,
        title: 'Home',
        hasChildren: false,
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
    },
    {
        route: 'ARTISTS',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'Artists',
        hasChildren: false,
    },
    {
        route: 'PRODUCTS',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'Products',
        hasChildren: false,
    },
    {
        route: 'GALLERY',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'Gallery',
        hasChildren: false,
    },
    {
        route: 'GIFTCARDS',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'Giftcards',
        hasChildren: false,
    },
    {
        route: 'CONTACT',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'Contact',
        hasChildren: false,
    },
    {
        route: 'ABOUT',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'About Us',
        hasChildren: false,
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
        route: 'MASSAGE',
        breadcrumbs: ['HOME', 'SERVICES'],
        level: 2,
        title: 'Massage',
        hasChildren: false,
    },
    {
        route: 'BODY',
        breadcrumbs: ['HOME', 'SERVICES'],
        level: 2,
        title: 'Body',
        hasChildren: false,
    },
    {
        route: 'BROW_LASH_BAR',
        breadcrumbs: ['HOME', 'SERVICES'],
        level: 2,
        title: 'Brow & Lash Bar',
        hasChildren: false,
    },
    {
        route: 'MEDI_SPA',
        breadcrumbs: ['HOME', 'SERVICES'],
        level: 2,
        title: 'Medi-Spa Treatmant',
        hasChildren: false,
    },
    {
        route: 'HAIR_REMOVAL',
        breadcrumbs: ['HOME', 'SERVICES'],
        level: 2,
        title: 'Hair Removal',
        hasChildren: false,
    },
    {
        route: 'PERMANENT_MAKEUP',
        breadcrumbs: ['HOME', 'SERVICES'],
        level: 2,
        title: 'Permanent Makeup',
        hasChildren: false,
    },
    {
        route: 'PACKAGES',
        breadcrumbs: ['HOME', 'SERVICES'],
        level: 2,
        title: 'Packages',
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
    let breadcrumbsFull = breadcrumbs.map((bc) => {
        const item = get_route_single(bc);
        return item;
    });
    return breadcrumbsFull;
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