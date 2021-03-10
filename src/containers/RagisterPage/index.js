import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import Register from '../../components/Signup'
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const SignUp =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Sign Up'} CrumbsTitle={'Sign Up'}/>
            <Register/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default SignUp;