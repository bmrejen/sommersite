import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import Team2 from '../../components/team2'
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const TeamPage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Our Team'} CrumbsTitle={'Our Team'}/>
            <Team2/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default TeamPage;