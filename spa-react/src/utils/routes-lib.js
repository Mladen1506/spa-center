const routes = [{
        route: 'HOME',
        breadcrumbs: [],
        level: 1,
        title: 'Home',
    },

    // grupa 2
    {
        route: 'SPA_SKIN_CARE',
        breadcrumbs: [],
        level: 1,
        title: 'Spa Skin Care',
    },
    {
        route: 'FACIALS',
        breadcrumbs: ['SPA_SKIN_CARE'],
        level: 2,
        title: 'Facials',
    },
    {
        route: 'BASIC_BOTANICAL',
        breadcrumbs: ['SPA_SKIN_CARE', 'FACIALS'],
        level: 3,
        title: 'Basic: Botanical',
    },
    {
        route: 'SPECIALITY_DREAM_SKIN',
        breadcrumbs: ['SPA_SKIN_CARE', 'FACIALS'],
        level: 3,
        title: 'Speciality: Dream Skin',
    },
    {
        route: 'PREMIUM_PAMPER_YOURSELF',
        breadcrumbs: ['SPA_SKIN_CARE', 'FACIALS'],
        level: 3,
        title: 'Premium: Pamper Yourself',
    },
    {
        route: 'MICRO_DERMA_BRASION',
        breadcrumbs: ['SPA_SKIN_CARE'],
        level: 2,
        title: 'Micro-Dermabrasion',
    },
    {
        route: 'MAGIC_FIX',
        breadcrumbs: ['SPA_SKIN_CARE'],
        level: 2,
        title: 'Magic Fix',
    },
    {
        route: 'SKINCEUTICALS_CHEMICAL_PEELS',
        breadcrumbs: ['SPA_SKIN_CARE'],
        level: 2,
        title: 'Skinceuticals Chemical Peels',
    },

    // grupa 3
    {
        route: 'MEDI_SKIN_CARE',
        breadcrumbs: [],
        level: 1,
        title: 'Medi Skin Care',
    },
    {
        route: 'AQUA_GOLD',
        breadcrumbs: ['MEDI_SKIN_CARE'],
        level: 2,
        title: 'Aqua Gold',
    },

];


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