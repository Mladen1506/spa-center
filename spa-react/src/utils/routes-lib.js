const routes = [{
        route: 'HOME',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'Home',
    },

    // grupa 2
    {
        route: 'SPA_SKIN_CARE',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'Spa Skin Care',
    },
    {
        route: 'FACIALS',
        breadcrumbs: ['HOME', 'SPA_SKIN_CARE'],
        level: 2,
        title: 'Facials',
    },
    {
        route: 'BASIC_BOTANICAL',
        breadcrumbs: ['HOME', 'SPA_SKIN_CARE', 'FACIALS'],
        level: 3,
        title: 'Basic: Botanical',
    },
    {
        route: 'SPECIALITY_DREAM_SKIN',
        breadcrumbs: ['HOME', 'SPA_SKIN_CARE', 'FACIALS'],
        level: 3,
        title: 'Speciality: Dream Skin',
    },
    {
        route: 'PREMIUM_PAMPER_YOURSELF',
        breadcrumbs: ['HOME', 'SPA_SKIN_CARE', 'FACIALS'],
        level: 3,
        title: 'Premium: Pamper Yourself',
    },
    {
        route: 'MICRO_DERMA_BRASION',
        breadcrumbs: ['HOME', 'SPA_SKIN_CARE'],
        level: 2,
        title: 'Micro-Dermabrasion',
    },
    {
        route: 'MAGIC_FIX',
        breadcrumbs: ['HOME', 'SPA_SKIN_CARE'],
        level: 2,
        title: 'Magic Fix',
    },
    {
        route: 'SKINCEUTICALS_CHEMICAL_PEELS',
        breadcrumbs: ['HOME', 'SPA_SKIN_CARE'],
        level: 2,
        title: 'Skinceuticals Chemical Peels',
    },

    // grupa 3
    {
        route: 'MEDI_SKIN_CARE',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'Medi Skin Care',
    },
    {
        route: 'AQUA_GOLD',
        breadcrumbs: ['HOME', 'MEDI_SKIN_CARE'],
        level: 2,
        title: 'Aqua Gold',
    },

    // grupa 4
    {
        route: 'MASSAGE_BODY',
        breadcrumbs: ['HOME'],
        level: 1,
        title: 'Massage & Body',
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