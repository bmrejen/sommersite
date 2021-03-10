import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import ShopSingle from '../../components/shopsingle';
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const ShopDetailsPage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Products Details'} CrumbsTitle={'Products Details'}/>
            <ShopSingle/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default ShopDetailsPage;