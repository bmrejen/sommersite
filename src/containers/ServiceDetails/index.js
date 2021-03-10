import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import Servicedetails from '../../components/servicedetails';
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const ServiceDetails =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Service Details'} CrumbsTitle={'Service Details'}/>
            <Servicedetails/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default ServiceDetails;