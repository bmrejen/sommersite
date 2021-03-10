import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import ErrorSec from '../../components/error'
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const ErrorPage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'404'} CrumbsTitle={'Page Not Found'}/>
            <ErrorSec/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default ErrorPage;