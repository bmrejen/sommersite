import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import ShopCart from '../../components/shopingCart'
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const CartPage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Cart'} CrumbsTitle={'Shopping Cart'}/>
            <ShopCart/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default CartPage;