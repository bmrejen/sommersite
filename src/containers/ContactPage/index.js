import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import Contact from '../../components/contact'
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const ContactPage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Contact Us'} CrumbsTitle={'Contact Us'}/>
            <Contact/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default ContactPage;