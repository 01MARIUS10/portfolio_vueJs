<script setup>

import { reactive,ref  } from 'vue';
import { useContactStore } from '../../stores/contact.js';

// const url = 'http://localhost:8000'
// const url = 'http://01marius10-api.000.pe/sendMail/index.php'
// const url = 'https://pizzerialaravel.000webhostapp.com/'
//9DAsT4Bhpsm 

let useForm = useContactStore();


</script>

<template>
    <div class="contact">
        <div class="row mx-0 justify-content-center">
            <div class="col-md-12 p-0">
                <div class="wrapper">
                    <div class="row no-gutters">
                        <div
                            class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch"
                        >
                            <div class="contact-wrap d-flex align-items-center w-100 p-md-5 p-4">
                                <!-- <h3 class="mb-4">Get in touch</h3> -->
                                <form
                                    method="POST"
                                    id="contactForm"
                                    name="contactForm"
                                    class="contactForm"
                                    @submit.prevent="useForm.submit"
                                    ref="formRef"
                                >
                                    <div class="row">
                                        <div class="col-md-6 pb-3">
                                            <div class="form-group">
                                                <label class="label" for="name"
                                                    >Votre Nom</label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="name"
                                                    id="name"
                                                    placeholder="nom"
                                                    ref="useForm.refName"
                                                    v-model="useForm.form.name"
                                                    :class="useForm.validation.name? '':'invalid'"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="label" for="email"
                                                    >Votre adresse Email</label
                                                >
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="email"
                                                    v-model="useForm.form.email"
                                                    :class="useForm.validation.email? '':'invalid'"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <div class="form-group">
                                                <label
                                                    class="label"
                                                    for="subject"
                                                    >Sujet</label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="sujet"
                                                    v-model="useForm.form.subject"
                                                    :class="useForm.validation.subject? '':'invalid'"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <div class="form-group">
                                                <label class="label" for="#"
                                                    >votre message</label
                                                >
                                                <textarea
                                                    name="message"
                                                    class="form-control"
                                                    id="message"
                                                    cols="30"
                                                    rows="4"
                                                    placeholder="message"
                                                    v-model="useForm.form.message"
                                                    :class="useForm.validation.message? '':'invalid'"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <button class="btn" type="submit"> Envoyer</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div
                            class="col-lg-4 col-md-5 d-flex align-items-stretch"
                        >
                            <div class="info-wrap  w-100 p-md-4 ">
                                <h3 class="mb-4">Contactez-moi</h3>
                                <p class="mb-4"> N'hésitez pas à
                                      me contacter pour toute question ou demande d'information.
                                </p>
                                <div
                                    class="dbox w-100 "
                                >
                                    <div
                                        class="icon me-2 d-flex align-items-center justify-content-center"
                                    >
                                        <span class="IconSpan">
                                            <img src="/icons/footer/gps.png" alt="">
                                        </span>
                                    </div>
                                    <div class="text d-flex align-items-center pl-3">
                                        <p>
                                            <span>ville:</span> 
                                            Antananarivo Madagascar
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="dbox w-100 d-flex align-items-center"
                                >
                                    <div
                                        class="icon me-2 d-flex align-items-center justify-content-center"
                                    >
                                        <span class="IconSpan">
                                            <img src="/icons/footer/whatsapp(1).png" alt="">
                                        </span>
                                    </div>
                                    <div class="text d-flex align-items-center pl-3">
                                        <p>
                                            <span>whatsapp:</span>
                                            <a href="tel://1234567920"
                                                >+ 261 34 99 486 84</a
                                            >
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="dbox w-100 d-flex align-items-center"
                                >
                                    <div
                                        class="icon me-2 d-flex align-items-center justify-content-center"
                                    >
                                        <span class="IconSpan">
                                            <img src="/icons/footer/email.png" alt="">
                                        </span>
                                    </div>
                                    <div class="text d-flex align-items-center pl-3">
                                        <p>
                                            <span>Email:</span>
                                            <a href="mailto:mariustsiorimbola@gmail.com"
                                                >mariustsiorimbola@gmail.com</a
                                            >
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="dbox w-100 d-flex align-items-center"
                                >
                                    <div
                                        class="icon me-2 d-flex align-items-center justify-content-center"
                                    >
                                        <span class="IconSpan">
                                            <img src="/icons/footer/linkedin(1).png" alt="">
                                        </span>
                                    </div>
                                    <div class="text d-flex align-items-center pl-3">
                                        <p>
                                            <span>linkedIn : </span>
                                            <a href="https://www.linkedin.com/in/razafitsalama-marius-08517b227/">Razafitsalama Marius</a>
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
.contact{
    .wrapper {
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 21px 41px -13px;
        .no-gutters {
            margin-right: 0px;
            margin-left: 0px;
            .contact-wrap{
                background: var(--f4);
            }
            #contactForm {
                input,textarea{
                    padding: 5px !important;
                }
                .label {
                  color: rgb(0, 0, 0);
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                }
                .form-control {
                  font-size: 16px;
                }
                .form-control {
                  border-color: currentcolor currentcolor rgba(0, 0, 0, 0.1);
                  border-style: none none solid;
                  border-width: medium medium 1px;
                  border-image: none 100% / 1 / 0 stretch;
                  padding: 0px;

                    height: 36px;
                    font-size: 14px;
                    border-radius: 2px;
                    box-shadow: none !important;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }
                textarea{
                    height: auto !important;
                }
                .btn{
                    background: var(--f1);
                    color: white;
                }
            }
            .info-wrap{
                background: var(--f1);
                color:var(--f1pt);
                a{
                    color:var(--f1pt);
                }

                .dbox {
                    width: 100%;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    .icon {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        border: 2px solid rgba(255, 255, 255, 0.2);
                        .IconSpan{
                            width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
      border-radius: 50%;
      background: #f5f5f5;
    width: 95%;
    height: 95%;
  }
                        }
                        span {
                            font-size: 20px;
                        }
                    }
                    .text {
                        width: calc(100% - 50px);
                    }
                    p {
                        margin-bottom: 0px;
                        span {
                            font-weight: 500;
                            margin:0 5px 0 0;
                        }
                    }
                }
            }
        }
        .no-gutters > .col,
        .no-gutters > [class*="col-"] {
            padding-right: 0px;
            padding-left: 0px;
        }
    }
}


.fa-map-marker::before {
  content: "\f041";
}
.invalid{
    border:2px solid red !important;
}


@media screen and (max-width:800px){
.info-wrap{
        padding: 2rem !important;
    }
}
@media screen and (max-width:800px){
    .dbox{
        margin-bottom: 8px !important;

    }
}
</style>
