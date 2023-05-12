import { Header, InlineNav } from './components/header';
import DrawerCart from './components/DrawerCart';
import SearchModal from './components/SearchModal';
import PredictiveSearch from './components/PredictiveSearch';
import Slideshow from './components/Slideshow';
import CollectionCarousel from './components/CollectionCarousel';
import FeaturedCarousel from './components/FeaturedCarousel';
import FeaturedArticles from './components/FeaturedArticles';
import ProductMain from './components/ProductMain';
import MainCollection from './components/MainCollection';
import FilterForm from './components/FilterForm';
import MainSearch from './components/MainSearch';
import InputDrawerQuantity from './components/InputDrawerQuantity';
import ButtonRemove from './components/ButtonRemove';
import QuantitySelector from './components/QuantitySelector';
import ShippingSelector from './components/ShippingSelector';
import BillingSelector from './components/BillingSelector';
import MainTips from './components/MainTips';
import CountdownModal from './components/CountdownModal';

customElements.define('header-component', Header);
customElements.define('inline-nav', InlineNav);
customElements.define('drawer-cart', DrawerCart); 
customElements.define('search-modal', SearchModal);
customElements.define('predictive-search', PredictiveSearch);
customElements.define('slideshow-home', Slideshow);
customElements.define('featured-collection', CollectionCarousel);
customElements.define('featured-products', FeaturedCarousel);
customElements.define('featured-articles', FeaturedArticles);
customElements.define('product-main', ProductMain);
customElements.define('main-collection', MainCollection);
customElements.define('filter-form', FilterForm);
customElements.define('main-search', MainSearch);
customElements.define('input-drawer-quantity', InputDrawerQuantity);
customElements.define('cart-remove-button', ButtonRemove);
customElements.define('quantity-selector', QuantitySelector);
customElements.define('shipping-selector', ShippingSelector);
customElements.define('billing-selector', BillingSelector);
customElements.define('main-tips', MainTips);

window.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('#CountdownModal')){
    customElements.define('countdown-modal', CountdownModal);
  }
})