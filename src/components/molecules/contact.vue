<template>
    <div id="contact">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="wrapper">
                    <div class="row no-gutters">
                        <div
                            class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch"
                        >
                            <div class="contact-wrap w-100 p-md-5 p-4">
                                <h3 class="mb-4">Get in touch</h3>
                                <form
                                    method="POST"
                                    id="contactForm"
                                    name="contactForm"
                                    class="contactForm"
                                >
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label" for="name"
                                                    >Full Name</label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label" for="email"
                                                    >Email Address</label
                                                >
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label
                                                    class="label"
                                                    for="subject"
                                                    >Subject</label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="label" for="#"
                                                    >Message</label
                                                >
                                                <textarea
                                                    name="message"
                                                    class="form-control"
                                                    id="message"
                                                    cols="30"
                                                    rows="4"
                                                    placeholder="Message"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input
                                                    type="submit"
                                                    value="Send Message"
                                                    class="btn btn-primary"
                                                />
                                                <div class="submitting"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div
                            class="col-lg-4 col-md-5 d-flex align-items-stretch"
                        >
                            <div class="info-wrap bg-primary w-100 p-md-5 p-4">
                                <h3>Let's get in touch</h3>
                                <p class="mb-4">
                                    We're open for any suggestion or just to
                                    have a chat
                                </p>
                                <div
                                    class="dbox w-100 d-flex align-items-start"
                                >
                                    <div
                                        class="icon d-flex align-items-center justify-content-center"
                                    >
                                        <span class="fa fa-map-marker"></span>
                                    </div>
                                    <div class="text d-flex align-items-center pl-3">
                                        <p>
                                            <span>Address:</span> 198 West 21th
                                            Street, Suite 721 New York NY 10016
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="dbox w-100 d-flex align-items-center"
                                >
                                    <div
                                        class="icon d-flex align-items-center justify-content-center"
                                    >
                                        <span class="fa fa-phone"></span>
                                    </div>
                                    <div class="text d-flex align-items-center pl-3">
                                        <p>
                                            <span>Phone:</span>
                                            <a href="tel://1234567920"
                                                >+ 1235 2355 98</a
                                            >
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="dbox w-100 d-flex align-items-center"
                                >
                                    <div
                                        class="icon d-flex align-items-center justify-content-center"
                                    >
                                        <span class="fa fa-paper-plane"></span>
                                    </div>
                                    <div class="text d-flex align-items-center pl-3">
                                        <p>
                                            <span>Email:</span>
                                            <a href="mailto:info@yoursite.com"
                                                >info@yoursite.com</a
                                            >
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="dbox w-100 d-flex align-items-center"
                                >
                                    <div
                                        class="icon d-flex align-items-center justify-content-center"
                                    >
                                        <span class="fa fa-globe"></span>
                                    </div>
                                    <div class="text d-flex align-items-center pl-3">
                                        <p>
                                            <span>Website</span>
                                            <a href="#">yoursite.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 21px 41px -13px;
}
.no-gutters {
    margin-right: 0px;
    margin-left: 0px;
}
.no-gutters > .col,
.no-gutters > [class*="col-"] {
    padding-right: 0px;
    padding-left: 0px;
}
.contact-wrap {
    background: rgb(255, 255, 255);
}
.contactForm .label {
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
}
#contactForm .form-control {
  font-size: 16px;
}
.contactForm .form-control {
  border-color: currentcolor currentcolor rgba(0, 0, 0, 0.1);
  border-style: none none solid;
  border-width: medium medium 1px;
  border-image: none 100% / 1 / 0 stretch;
  padding: 0px;
}
.form-control {
  height: 36px;
  background: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  border-radius: 2px;
  box-shadow: none !important;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.btn.btn-primary {
  background: rgb(1, 210, 142) !important;
  border-color: rgb(1, 210, 142) !important;
  color: rgb(255, 255, 255);
}
.info-wrap {
  color: rgba(255, 255, 255, 0.8);
}
.bg-primary {
  background: rgb(1, 210, 142) !important;
}
.info-wrap h3 {
  color: rgb(255, 255, 255);
}
.info-wrap .dbox {
  width: 100%;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
}
.info-wrap .dbox .icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
}
.info-wrap .dbox .icon span {
  font-size: 20px;
  color: rgb(255, 255, 255);
}
.fa-map-marker::before {
  content: "\f041";
}
.info-wrap .dbox .icon span {
  font-size: 20px;
  color: rgb(255, 255, 255);
}
.info-wrap .dbox .text {
  width: calc(100% - 50px);
}
.info-wrap .dbox p {
  margin-bottom: 0px;
}
.info-wrap .dbox p span {
  font-weight: 500;
  color: rgb(255, 255, 255);
}
</style>
