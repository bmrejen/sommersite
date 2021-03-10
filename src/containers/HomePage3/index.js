import React, {Fragment} from 'react';
import Header3 from '../../components/header3';
import Hero3 from '../../components/hero3';
import Heroimgn3 from '../../images/resources/bg-vector.png';
import Grow from '../../components/grow';
import Whyus from '../../components/whyus';
import Service from '../../components/service';
import VisualSlider from '../../components/visual';
import PartnerSlider3 from '../../components/partner3';
import AppSection from '../../components/appsection';
import ClientSay from '../../components/clientsay';
import FooterT2 from '../../components/footerTop2';
import FooterBottom from '../../components/footerbottom';

const HomePage2 =() => {
    return(
        <Fragment>
            <Header3/>
            <Hero3 heroimg={Heroimgn3}/>
            <Service/>
            <Grow/>
            <Whyus/>
            <PartnerSlider3/>
            <VisualSlider/>
            <AppSection/>
            <ClientSay/>
            <FooterT2/>
            <FooterBottom/>
        </Fragment>
    )
};
export default HomePage2;