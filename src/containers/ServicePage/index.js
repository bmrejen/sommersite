import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import Work2 from '../../components/work2';
import Subscribe from '../../components/subscribe';
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const ServicePage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Services'} CrumbsTitle={'Services'}/>
            <Work2/>
            <Subscribe/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default ServicePage;