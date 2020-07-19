import React from "react";
import footerlogo from "./images/devikTech.Logo.png"


function Footer() {
     return (
          <div className="mainfooter">
               {/* footerWhyUs Seaction */}
               <div className="footerwhydiv">

                    {/* footer Image */}

                    <div className="footerlogodiv">
                         <img alt="DevkiTech" src={footerlogo} width="400px" height="200px" />
                    </div>

                    {/* footer WhatElseToKnow para Seaction */}

                    <div className="footerwhatparadiv">

                         <div className="whatheadingdiv">
                              <h1>What Else To Know</h1>
                         </div>
                         <div className="whatparadiv">
                              <p>We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.</p>
                              <p>Contact us 9117018454 or 9718365756</p>
                         </div>

                    </div>
               </div>

               {/* footerlinks Seaction */}

               <div className="linksfooterdiv">
                    <div className="footercourseslinks">
                         <div className="footercourses1">
                              <h3>Courses</h3>
                              <li><a href="#index">C++</a></li>
                              <li><a href="#index">Python</a></li>
                              <li><a href="#index">Core Java</a></li>
                              <li><a href="#index">MERN Stack</a></li>
                              <li><a href="#index">DSA</a></li>
                         </div>
                    </div>
                    <div className="footerk12courseslinks">
                         <div className="footerk12courses1">
                              <h3>K-12 Courses</h3>
                              <li><a href="#index">MIT APP</a></li>
                              <li><a href="#index">Scratch</a></li>
                              <li><a href="#index">Python</a></li>
                              <li><a href="#index">Game Development</a></li>
                              <li><a href="#index">Frontend Development</a></li>
                         </div>
                    </div>
                    <div className="footerworklinks1">
                         <h3>Work with Us</h3>
                         <li><a href="#index">Instructor</a></li>
                         <li><a href="#index">Marketing</a></li>
                         <li><a href="#index">Content Development</a></li>
                         <li><a href="#index">Intership</a></li>
                         <li><a href="#index">Web Developer</a></li>
                    </div>
                    <div className="footerimage1">
                         <img alt="DevkiTech" src={require("C:/Users/Hp/first-app-sample/src/images/footerImage.png")} width="170px" height="170px" />
                    </div>
               </div>






               <div className="footersocialdiv">
                    <p>Copyright © 2020 DevikTech Company India. All rights reserved. | <a className="footer-link" href="index.html">DevikTech</a></p>
                    <p> <a className="footer-link" href="index.html">Teams and conditions</a></p>
                    <p><a className="footer-link" href="index.html">Privacy policy</a></p>         
                    <div className="copyrightdiv">
                         <div className="socialmedia">
                              <a href="index.html"><img alt="DevkiTech" src={require("C:/Users/Hp/first-app-sample/src/images/facebook.png")} width="40px" height="40px" /></a>
                         </div>

                         <div className="socialmedia">
                              <a href="index.html"><img alt="DevkiTech" src={require("C:/Users/Hp/first-app-sample/src/images/instagram.png")} width="40px" height="40px" /></a>
                         </div>

                         <div className="socialmedia">
                              <a href="index.html"><img alt="DevkiTech" src={require("C:/Users/Hp/first-app-sample/src/images/linkdin.png")} width="40px" height="40px" /></a>
                         </div>
                    </div>
               </div>




               {/* <footer id="footer" class="body-footer">
                    <div className="container">
                         <div class="row mg-none mg-bottom-lv4-i row--vertical-center footer__top">
                              <a href="#index"><img src="https://media.flaticon.com/dist/min/img/logo/flaticon_white.svg" alt="Flaticon" width="154"/></a>

                                   <div class="push-right footer__buttons">
                                        <div class="row mg-none">
                                             <a href="https://contributor.flaticon.com/?utm_source=menu&amp;utm_medium=menu_en&amp;utm_campaign=earn_money_en2" class="bj-button bj-button--outline bj-button--green" target="_blank" rel="noreferrer noopener">Become a contributor</a>
                                             <a href="https://www.flaticon.com/profile/premium?lang=en" class="bj-button bj-button--flat bj-button--yellow mg-left-lv2 fi-not-premium track" data-track-arguments="ga, event, premium, footer">Go Premium</a>
                                        </div>
                                   </div>
		               </div>

                              <div class="row mg-none">

                                   <div class="footer__column">
                                        <p class="footer__title"><label for="footer__content">Content<i class="bj-icon bj-icon--sm bj-icon--next floatr show-phone"></i></label></p>
                                        <input type="checkbox" id="footer__content"/>
                                             <ul>
                                                  <li><a href="https://www.flaticon.com/most-downloaded">Top icons</a></li>
                                                  <li><a href="https://www.flaticon.com/latest-icons" id="link-menu-latest-icons">New icons</a></li>
                                                  <li><a href="https://www.flaticon.com/packs">New packs</a></li>
                                                  <li><a href="https://www.flaticon.com/tags">Tags</a></li>
                                                  <li><a href="https://www.flaticon.com/categories" id="link-menu-categories">Categories</a></li>
                                                  <li><a href="https://www.flaticon.com/authors">Authors</a></li>
                                             </ul>
			                    </div>

                                        <div class="footer__column">
                                             <p class="footer__title"><label for="footer__apps">APPs<i class="bj-icon bj-icon--sm bj-icon--next floatr show-phone"></i></label></p>
                                             <input type="checkbox" id="footer__apps"/>
                                                  <ul>
                                                       <li><a href="https://developer.flaticon.com/">API</a></li>
                                                       <li><a href="https://www.flaticon.com/font-face">@font-face generator</a></li>
                                                       <li class="hide-mobile"><a href="https://www.flaticon.com/pattern">Patterns generator</a></li>
                                                       <li><a href="https://www.flaticon.com/for-google">Google Suite</a></li>
                                                  </ul>
			               </div>

                                             <div class="footer__column">
                                                  <p class="footer__title"><label for="footer__help">Help<i class="bj-icon bj-icon--sm bj-icon--next floatr show-phone"></i></label></p>
                                                  <input type="checkbox" id="footer__help"/>
                                                       <ul>
                                                            <li><a href="https://www.flaticon.com/profile/support">Support</a></li>
                                                            <li><a href="https://support.flaticon.com/hc/en-us">FAQs</a></li>
                                                            <li><a href="https://www.flaticon.com/styles">Icon styles</a></li>
                                                            <li><a href="https://www.flaticon.com/icons-editor">Icons editor</a></li>
                                                            <li><a href="https://www.flaticon.com/collections">Flaticon Collections</a></li>
                                                            <li><a href="https://www.flaticon.com/pattern-generator">Patterns generator</a></li>
                                                            <li><a href="https://www.flaticon.com/follow">Follow</a></li>
                                                       </ul>
			     </div>

                                                  <div class="footer__column">
                                                       <p class="footer__title"><label for="footer__company">Company<i class="bj-icon bj-icon--sm bj-icon--next floatr show-phone"></i></label></p>
                                                       <input type="checkbox" id="footer__company"/>
                                                            <ul>
                                                                 <li><a href="https://www.freepikcompany.com/about_us" target="_blank" rel="noreferrer noopener">About</a></li>
                                                                 <li><a href="https://www.flaticon.com/profile/support">Contact us</a></li>
                                                                 <li><a href="https://www.freepikcompany.com/legal#nav-flaticon-agreement" target="_blank" rel="noreferrer noopener">Our license</a></li>
                                                                 <li><a href="https://www.flaticon.com/affiliates">Affiliation</a></li>
                                                                 <li><a href="https://www.freepik.com/blog?__hstc=57440181.2e40f478c9aff8002b82e2835e35dd5f.1595070132812.1595070132812.1595141671183.2&amp;__hssc=57440181.1.1595141671183&amp;__hsfp=3041347479" target="_blank" rel="noreferrer noopener">Blog</a></li>
                                                                 <li><a href="https://www.flaticon.com/profile/premium?lang=en" target="_blank" rel="noreferrer noopener">Plans and Pricing</a></li>
                                                            </ul>
			                                   </div>

                                                       <div class="footer__column footer__social">
                                                            <p class="footer__title"><label for="footer__social">Social media</label></p>
                                                            <ul class="share">
                                                                 <li><a href="https://www.facebook.com/theflaticon" class="flaticon-facebook bg-facebook" title="Facebook" target="_blank" rel="noreferrer noopener"></a></li>
                                                                 <li><a href="https://twitter.com/theflaticon" class="flaticon-twitter bg-twitter" title="Twitter" target="_blank" rel="noreferrer noopener"></a></li>
                                                                 <li><a href="https://www.pinterest.com/flaticon" class="flaticon-pinterest bg-pinterest" title="Pinterest" target="_blank" rel="noreferrer noopener"></a></li>
                                                                 <li><a href="https://www.instagram.com/freepik" class="flaticon-instagram bg-instagram" title="Instagram" target="_blank" rel="noreferrer noopener"></a></li>
                                                                 <li><a href="https://www.youtube.com/channel/UC9wPXN2TIWoUamqONb7v8Pw" class="flaticon-youtube bg-youtube" title="YouTube" target="_blank" rel="noreferrer noopener"></a></li>
                                                            </ul>

                                                            <div class="gr_not-connected">
                                                                 <p class="bold">Get exclusive resources straight to your inbox</p>
                                                                 <a href="https://www.flaticon.com/register" class="bj-button bj-button--outline bj-button--green bj-button--sm track" data-track-arguments="ga, event, register, click, footer-register">Sign up</a>
                                                            </div>
                                                       </div>

                                                  </div>

                                                  <ul class="footer__legal font-xs mg-top-lv3">
                                                       <li class="inline-block"><a href="https://www.freepikcompany.com/legal#nav-flaticon" target="_blank" rel="noreferrer noopener" title="Terms &amp; conditions">Terms &amp; conditions</a></li>
                                                       <li class="inline-block mg-left-lv2"><a href="https://www.freepikcompany.com/privacy" target="_blank" rel="noreferrer noopener" title="Privacy policy">Privacy policy</a></li>
                                                       <li class="inline-block mg-left-lv2"><a href="https://www.freepikcompany.com/cookie" target="_blank" rel="noreferrer noopener" title="Cookies policy">Cookies policy</a></li>
                                                       <li class="inline-block mg-left-lv2"><a href="https://www.freepikcompany.com/copyright" target="_blank" rel="noreferrer noopener" title="Copyrights Notification">Copyrights Notification</a></li>
                                                  </ul>

                                                  <div class="copyright">
                                                       <div class="row mg-none">
                                                            <div class="col mg-none pd-none alignl pd-right-lv2-i">
                                                                 <div class="row row--vertical-center mg-none">
                                                                      <a href="https://www.freepikcompany.com" target="_blank" rel="noreferrer noopener"><img src="https://media.flaticon.com/dist/min/img/logo/freepikcompany.svg" alt="Freepik Company" class="mg-right-lv1"/></a>
                                                                           <p class="mg-none">Copyright © 2010-2020 Freepik Company S.L. All rights reserved.</p>
					                                        </div>
                                                            </div>
                                                       </div>
                                                  </div>

                                                  </div>

                                                  <div class="footer__projects">
                                                       <div class="container">
                                                            <span>Freepik company projects</span>
                                                            <ul>
                                                                 <li><a href="https://www.freepik.com/?__hstc=57440181.2e40f478c9aff8002b82e2835e35dd5f.1595070132812.1595070132812.1595141671183.2&amp;__hssc=57440181.1.1595141671183&amp;__hsfp=3041347479" target="_blank" rel="noreferrer noopener">Freepik</a></li>
                                                                 <li><a href="/">Flaticon</a></li>
                                                                 <li><a href="http://www.piktab.com" target="_blank" rel="noreferrer noopener">Piktab</a></li>
                                                                 <li><a href="https://www.slidesgo.com" target="_blank" rel="noreferrer noopener">Slidesgo</a></li>
                                                            </ul>
                                                       </div>
                                                  </div>
</footer> */}
                                        </div>
     )
}

export default Footer