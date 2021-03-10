import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import CheckoutP from '../../components/checkout'
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const CheckOut =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Checkout'} CrumbsTitle={'Checkout'}/>
            <CheckoutP/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default CheckOut;