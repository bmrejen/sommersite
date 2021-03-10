import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import Login from '../../components/Login'
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const SignIn =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Sign In'} CrumbsTitle={'Sign In'}/>
            <Login/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default SignIn;