import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import HomePage2 from "../HomePage2";
import HomePage3 from "../HomePage3";
import HomePage4 from "../HomePage4";
import Aboutpage from "../AboutPage";
import ServicePage from "../ServicePage";
import TeamPage from "../TeamPage";
import ServiceDetails from "../ServiceDetails";
import BlogPage from "../BlogPage";
import BlogDetailsPage from "../BlogDetailsPage";
import Faq from "../Faqpage";
import ShopPage from "../shoppage";
import ShopDetailsPage from "../shopdetailspage";
import CheckOut from "../Checkoutpage";
import CartPage from "../CartPage";
import ErrorPage from "../404page";
import SignIn from "../Signin";
import SignUp from "../RagisterPage";
import ContactPage from "../ContactPage";
import ComeingSoon from "../ComeingSoon";

// Normal Route
import PrivateRoute from "../_PrivateRoute";
import PublicRoute from "../_PublicRoute";

export default function Routes() {
    return (
        <Switch>
            <PublicRoute
                exact
                path="/"
                component={HomePage}
            />
            <PrivateRoute
                exact
                path="/home"
                component={HomePage}
            />
            <PrivateRoute
                exact
                path="/home2"
                component={HomePage2}
            />
            <PrivateRoute
                exact
                path="/home3"
                component={HomePage3}
            />
            <PrivateRoute
                exact
                path="/home4"
                component={HomePage4}
            />
            <PrivateRoute
                exact
                path="/about"
                component={Aboutpage}
            />
            <PrivateRoute
                exact
                path="/service"
                component={ServicePage}
            />
            <PrivateRoute
                exact
                path="/team"
                component={TeamPage}
            />
            <PrivateRoute
                exact
                path="/servicedetails"
                component={ServiceDetails}
            />
            <PrivateRoute
                exact
                path="/blog"
                component={BlogPage}
            />
            <PrivateRoute
                exact
                path="/blogdetails"
                component={BlogDetailsPage}
            />
            <PrivateRoute
                exact
                path="/faq"
                component={Faq}
            />
            <PrivateRoute
                exact
                path="/shop"
                component={ShopPage}
            />
            <PrivateRoute
                exact
                path="/shopdetails"
                component={ShopDetailsPage}
            />
            <PrivateRoute
                exact
                path="/checkout"
                component={CheckOut}
            />
            <PrivateRoute
                exact
                path="/404"
                component={ErrorPage}
            />
            <PrivateRoute
                exact
                path="/cart"
                component={CartPage}
            />
            <PrivateRoute
                exact
                path="/login"
                component={SignIn}
            />
            <PrivateRoute
                exact
                path="/signup"
                component={SignUp}
            />
            <PrivateRoute
                exact
                path="/contact"
                component={ContactPage}
            />
            <PrivateRoute
                exact
                path="/coming"
                component={ComeingSoon}
            />
            {/* <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} /> */}
            <Route exact component={HomePage} />
        </Switch>
    );
}
