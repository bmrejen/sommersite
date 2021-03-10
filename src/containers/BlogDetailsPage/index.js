import React, {Fragment} from 'react';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs'
import BlogDetails from '../../components/blogdetails';
import PartnerSlider from '../../components/partner'
import Gettouch from '../../components/gettous'
import FooterT from '../../components/footerTop';
import FooterBottom from '../../components/footerbottom';

const BlogDetailsPage =() => {
    return(
        <Fragment>
            <Header/>
            <Breadcrumbs pagename={'Blog Details'} CrumbsTitle={'Blog Details'}/>
            <BlogDetails/>
            <PartnerSlider/>
            <Gettouch/>
            <FooterT/>
            <FooterBottom/>
        </Fragment>
    )
};
export default BlogDetailsPage;