import { createRouter, createWebHistory } from 'vue-router';

// Components
import FurnitureCollection from '../a_pages/Collection/FurnitureCollection.vue';
import FabricCollection from '../a_pages/Collection/FabricCollection.vue';
// import CampaignDetails from '../a_pages/Campaign/CampaignDetails.vue';
// import ProductCatalog from '../a_pages/Catalog/ProductCatalog.vue';
import CompanyCommunication from '../a_pages/Communications/CompanyCommunication.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', redirect: '/'},
        { path: '/mobilya', component: FurnitureCollection},
        { path: '/kumas', component: FabricCollection},
        // { path: '/campaignDetails', component: CampaignDetails},
        // { path: '/productCatalog', component: ProductCatalog},
        { path: '/iletisim', component: CompanyCommunication}
    ]
});

export default router;