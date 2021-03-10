import React, {Fragment} from 'react';
import Header2 from '../../components/header2';
import Hero2 from '../../components/hero2';
import Heroimgn2 from '../../images/resources/vectorrr.png';
import Mareketingarea from '../../components/marketing';
import Profservice from '../../components/profservice';
import Work2 from '../../components/work2';
import TestSlider2 from '../../components/testimonial2';
import PartnerSlider2 from '../../components/partner2';
import News from '../../components/news';
import Subscribe from '../../components/subscribe';
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const HomePage2 =() => {
    return(
        <Fragment>
            <Header2/>
            <Hero2 heroimg={Heroimgn2}/>
            <PartnerSlider2/>
            <Work2/>
            <Mareketingarea/>
            <Profservice/>
            <TestSlider2/>
            <News/>
            <Subscribe subclass={'br-b'}/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default HomePage2;