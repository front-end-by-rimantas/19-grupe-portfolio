/***************
ALL IMPORTS
****************/
/* header */
import { renderHeader } from './components/header/renderHeader.js';
import { headerData } from './data/headerData.js';
import { enableLangs } from './components/header/enableLangs.js';
/* hero */
/* stats */
import { Counter } from './components/counter/Counter.js';
import { statsData } from './data/statsData.js';
/* features */
import { renderPremiumFeatures } from './components/premium-features/renderPremiumFeatures.js';
import { premiumFeaturesData } from './data/premiumFeaturesData.js';
/* app promo */
/* app promo 2 */
/* how works */
/* gallery */
/* testimonials */
import { Slider } from './components/slider/Slider.js';
import { Testimonial } from './components/testimonial/Testimonial.js';
import { testimonialData } from './data/testimonialsData.js';

import { PortfolioDesign } from './components/portfolio-design/PortfolioDesign.js';
import { portfolioDesignData } from './data/portfolioDesignData.js';

/* pricing */
/* faq */
/* team */
/* app store */
/* subscribe */
/* contact */
/* footer */

/***************
EXECUTION
****************/
/* header */
renderHeader('header nav', headerData);
enableLangs();

/* hero */
/* stats */
new Counter({
    selector: '#stats_counter_block',
    data: statsData,
});

/* features */
renderPremiumFeatures('#premium_features_block', premiumFeaturesData);

/* app promo */
/* app promo 2 */
/* how works */
/* gallery */
/* testimonials */
new Slider({
    selector: '#testimonials_block',
    data: testimonialData,
    renderEngine: Testimonial,
    isArrowControlsVisible: true,
    // itemsPerView: 1
});
new Slider({
    selector: '#testimonials_block2',
    data: portfolioDesignData,
    renderEngine: PortfolioDesign,
    isArrowControlsVisible: true,
    // itemsPerView: 1
});

/* pricing */
/* faq */
/* team */
/* app store */
/* subscribe */
/* contact */
/* footer */