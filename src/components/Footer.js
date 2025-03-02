import React from "react";

const Footer = () => {
  return (
    <div class="footer">
      <div class="sb-footer-top_div">
        <div class="sb-footer-text">
            <p>Get connected with us on social networks:</p>
        </div>
        <div class="sb-footer-social-platforms">
            <ul class="social-platforms">
                <li class="social-platforms-fb"><a href="/"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li class="social-platforms-tw"><a href="/"></a><i class="fa-brands fa-twitter"></i></li>
                <li class="social-platforms-gm"><a href="/"><i class="fa-solid fa-envelope"></i></a></li>
                <li class="social-platforms-ig"><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
                <li class="social-platforms-lkin"><a href="/"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
      </div>
      <div class="sb-footer-section section-padding">
        <div class="sb-footer-section_descrip">
          <h1>RegalStay</h1>
          <p>
            A seamless hotel management system designed for efficiency and
            excellence. From reservations to guest services, RegalStay
            streamlines operations, ensuring a premium hospitality experience.
          </p>
        </div>
        <div class="sb-footer-section_services pos-rel">
          <h1>Services <div className="underline"><span></span></div></h1>
          <div class="sb-footer-section_services_lists">
            <ul class="servicesList">
              <li class="servicesList_1"><a href="">Online Booking Management</a></li>
              <li class="servicesList_2"><a href="">Room & Inventory Management</a></li>
              <li class="servicesList_3"><a href="">Guest Management</a></li>
              <li class="servicesList_4"><a href="">Billing & Invoicing</a></li>
              <li class="servicesList_5"><a href="">Reports & Analytics</a></li>
            </ul>
          </div>
        </div>
        <div class="sb-footer-section_quickLinks pos-rel">
          <h1>Quick Links<div className="underline"><span></span></div></h1>
          <div class="sb-footer-section_quickLinks_lists">
            <ul class="quickLinksList">
              <li class="quickLinksList_1"><a href="">Online Booking Management</a></li>
              <li class="quickLinksList_2"><a href="">Room & Inventory Management</a></li>
              <li class="quickLinksList_3"><a href="">Guest Management</a></li>
              <li class="quickLinksList_4"><a href="">Billing & Invoicing</a></li>
              <li class="quickLinksList_5"><a href="">Reports & Analytics</a></li>
            </ul>
          </div>
        </div>
        <div class="sb-footer-section_supportLinks pos-rel">
          <h1>Support<div className="underline"><span></span></div></h1>
          <div class="sb-footer-section_supportLinks_lists">
            <ul class="supportList">
              <li class="supportList_1"><a href="">Online Booking Management</a></li>
              <li class="supportList_2"><a href="">Room & Inventory Management</a></li>
              <li class="supportList_3"><a href="">Guest Management</a></li>
              <li class="supportList_4"><a href="">Billing & Invoicing</a></li>
              <li class="supportList_5"><a href="">Reports & Analytics</a></li>
            </ul>
          </div>
        </div>
        <div class="sb-footer-section_contact pos-rel">
          <h1>Contact<div className="underline"><span></span></div></h1>
          <div class="sb-footer-section_contact_lists">
            <ul class="contactList">
              <li class="contactList_1">
                Email : rikeshshrestha9821@gmail.com
              </li>
              <li class="conatctList_2">Phone: +977-9841879297</li>
              <li class="contactList_3">Address : Sanepa, Lalitpur</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom-content">
        <p>@2025 Copyright: RegalStay.com</p>
      </div>
    </div>
  );
};

export default Footer;
