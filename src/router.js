import { createRouter, createWebHistory } from 'vue-router';

// Components
import ProductCollection from '../a_pages/Collection/ProductCollection.vue';
// import CampaignDetails from '../a_pages/Campaign/CampaignDetails.vue';
// import ProductCatalog from '../a_pages/Catalog/ProductCatalog.vue';
import CompanyCommunication from '../a_pages/Communications/CompanyCommunication.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', redirect: '/'},
        { path: '/productCollection', component: ProductCollection},
        // { path: '/campaignDetails', component: CampaignDetails},
        // { path: '/productCatalog', component: ProductCatalog},
        { path: '/companyCommunication', component: CompanyCommunication}
    ]
});

export default router;