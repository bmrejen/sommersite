import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import PartnerSlider from '../../components/partner'
import Subscribe from '../../components/subscribe';
import Mareketingarea from '../../components/marketing';
import Funfact from '../../components/funfacts'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const Aboutpage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'About Us'} CrumbsTitle={'About Us'}/>
            <Mareketingarea nobg={'no-bg'}/>
            <Funfact/>
            <Subscribe/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default Aboutpage;