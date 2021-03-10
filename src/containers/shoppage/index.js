import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import Shop from '../../components/shop';
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const ShopPage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Products'} CrumbsTitle={'Products'}/>
            <Shop/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default ShopPage;