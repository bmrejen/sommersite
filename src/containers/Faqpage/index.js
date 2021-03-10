import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import Faqs from '../../components/faq'
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const Faq =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'FAQs'} CrumbsTitle={'FAQs'}/>
            <Faqs/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default Faq;