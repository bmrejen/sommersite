import React, {Fragment} from 'react';
import Header from '../../components/header';
import Hero4 from '../../components/hero4';
import Heroimgn3 from '../../images/resources/vectorr.png';
import Lytsec from '../../components/lytsec';
import Lytsec2 from '../../components/lytsec2';
import Service2 from '../../components/service2';
import OurUser from '../../components/ouruser';
import FeedBack from '../../components/feedback';
import Subscribe from '../../components/subscribe';
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const HomePage2 =() => {
    return(
        <Fragment>
            <Header/>
            <Hero4 heroimg={Heroimgn3}/>
            <Service2/>
            <Lytsec/>
            <Lytsec2/>
            <OurUser/>
            <FeedBack/>
            <Subscribe subclass={'br-b'}/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default HomePage2;