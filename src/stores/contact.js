import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import emailjs from "@emailjs/browser";

export const useContactStore = defineStore("contact", () => {
    let refName = ref("");
    let form = reactive({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    let validation = reactive({
        name: true,
        email: true,
        subject: true,
        message: true,
    });
    const emailValidation = (e) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(e);
    };
    function trimFormValue() {
        form.name = form.name.trim();
        form.email = form.email.trim();
        form.subject = form.subject.trim();
        form.message = form.message.trim();
    }

    function isValidate() {
        trimFormValue();
        validation.name = form.name == "" ? false : true;
        validation.email = emailValidation(form.email) ? true : false;
        validation.subject = form.subject == "" ? false : true;
        validation.message = form.message == "" ? false : true;

        return (
            validation.name &&
            validation.name &&
            validation.name &&
            validation.name
        );
    }
    function initForm() {
        form.name = "";
        form.email = "";
        form.subject = "";
        form.message = "";
    }
    function submit() {
        console.log("send ...");

        if (isValidate()) {
            emailjs
                .sendForm(
                    "service_mpjkp5l",
                    "template_kjn5jty",
                    formRef.value,
                    "8c7YCi1q_9ViT92Tn"
                )
                .then(
                    (result) => {
                        console.log("SUCCESS!", result.text);
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }
                );
            initForm();
        }
    }
    function contacter(subject) {
        initForm();
        form.subject = subject;
    }

    return { form, submit, validation, contacter, refName };
});
