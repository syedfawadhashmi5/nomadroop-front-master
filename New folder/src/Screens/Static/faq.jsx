// import * as React from "react";
import React from "react";

import { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Banner from "../../Components/Menu/Banner";
import Footer from "../../Components/Menu/Footer";

const Faqs = (props) => {
  return (
    <>
      <div className="container-fluid container-bg">
        <div className="row pt-5 pb-4">
          <div className="col-md-12 text-center">
            <div className="st-title">
              <span className="upper-case"> Information For LandLords </span>
            </div>

            <div className="sb-title mt-2">
              <div> Here you will find a collection of information. </div>
              <div> Contact us if you have more question. </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="faq-box">
              <div className="row text-center">
                <div className="col-md-12 mt-3">
                  <div className="title"> Starting with Nomadroof </div>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-12 pt-2 pb-2">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item mt-3">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          <div className="circle"> + </div>
                          <span> What is Nomadroof? </span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the first
                          item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          <div className="circle"> + </div>
                          <span>Why is Nomadroof the ideal place to publish my properties?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          <div className="circle"> + </div>
                          <span>How do you advertise my property?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-heading4">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse4"
                          aria-expanded="false"
                          aria-controls="flush-collapse4"
                        >
                          <div className="circle"> + </div>
                          <span>How can I create an account?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapse4"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-heading4"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-heading5">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse5"
                          aria-expanded="false"
                          aria-controls="flush-collapse5"
                        >
                          <div className="circle"> + </div>
                          <span>How do I update my contact information?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapse5"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-heading5"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-heading6">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse6"
                          aria-expanded="false"
                          aria-controls="flush-collapse6"
                        >
                          <div className="circle"> + </div>
                          <span>What information in my profile is public?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapse6"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-heading6"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-heading7">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse7"
                          aria-expanded="false"
                          aria-controls="flush-collapse7"
                        >
                          <div className="circle"> + </div>
                          <span>How do I change my password?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapse7"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-heading7"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-heading8">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse8"
                          aria-expanded="false"
                          aria-controls="flush-collapse8"
                        >
                          <div className="circle"> + </div>
                          <span>How do I change my password?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapse8"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-heading8"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-heading9">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse9"
                          aria-expanded="false"
                          aria-controls="flush-collapse9"
                        >
                          <div className="circle"> + </div>
                          <span>I forgot my password. How do I restore it?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapse9"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-heading9"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-heading10">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse10"
                          aria-expanded="false"
                          aria-controls="flush-collapse10"
                        >
                          <div className="circle"> + </div>
                          <span>How do I access my Dashboard?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapse10"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-heading10"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item  mt-3">
                      <h2 class="accordion-header" id="flush-heading11">
                        <div
                          className="d-flex align-items-center collapsed question"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse11"
                          aria-expanded="false"
                          aria-controls="flush-collapse11"
                        >
                          <div className="circle"> + </div>
                          <span>Why is very important to add my phone number and email?</span>
                        </div>
                      </h2>
                      <div
                        id="flush-collapse11"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-heading11"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faqs;
