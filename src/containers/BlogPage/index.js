import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import Blog from '../../components/blogpage';
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const ServicePage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'News'} CrumbsTitle={'Latest News'}/>
            <Blog/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default ServicePage;