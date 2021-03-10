import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero from '../../components/hero'
import Heroimgn from '../../images/resources/vector.png'
import Work from '../../components/work'
import Tipsarea from '../../components/tipsarea'
import TipBusiness from '../../components/tipsareabusiness'
import Seo from '../../components/seosection'
import SimpleSlider from '../../components/casesection'
import Funfact from '../../components/funfacts'
import Team from '../../components/team'
import TestSlider from '../../components/testimonial'
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop'
import FooterBottom from '../../components/footerbottom'

const HomePage =() => {
    return(
        <Fragment>
            <Header/>
            <Hero heroimg={Heroimgn}/>
            <Work/>
            <Tipsarea/>
            <TipBusiness/>
            <Seo/>
            <SimpleSlider/>
            <Funfact/>
            <Team/>
            <TestSlider/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default HomePage;