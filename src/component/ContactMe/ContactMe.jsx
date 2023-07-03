import { MdCall, MdEmail, MdLocationCity } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tyw2kdu",
        "template_isbs1lv",
        form.current,
        "qCPobOgf38l-nkAIj"
      )
      .then(
        (result) => {
          console.log(result.text);
          //   console.log("message sent");
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-20">
      <h1 className="md:text-5xl lg:text-5xl text-center font-bold font-serif">
        Contact Me
      </h1>
      <div className="divider w-2/6 mx-auto"></div>
      <div className="divider w-1/6 mx-auto"></div>
      <h1 className="text-3xl text-center mt-8 text-red-500 font-bold">
        Have You Any Question
      </h1>
      <p className="mt-4 text-center font-semibold">I AM AT YOUR SERVICES</p>

      <div className="md:flex lg:flex justify-evenly md:mt-12 lg:mt-12 grid items-center mt-8">
        <div>
          <p className="text-5xl text-red-500 mb-5">
            <MdCall></MdCall>
          </p>
          <h1 className="font-bold text-xl">Call</h1>
          <p>+880 1860-861105</p>
        </div>
        <div>
          <p className="text-5xl text-red-500 mb-5">
            <MdEmail></MdEmail>
          </p>
          <h1 className="font-bold text-xl">Email</h1>
          <p>shahidhasan1105@gmail.com</p>
        </div>
        <div>
          <p className="text-5xl text-red-500 mb-5">
            <MdLocationCity></MdLocationCity>
          </p>
          <h1 className="font-bold text-xl">Location</h1>
          <p>Rangpur , Bangladesh</p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center mt-20 text-red-500 font-bold">
          SEND ME AN EMAIL
        </h1>
        <p className="text-xl text-center mt-8">
          I AM VERY RESPONSIVE TO MESSAGE
        </p>
        <div className="mt-12">
          <form ref={form} onSubmit={sendEmail} className="md:px-12 lg:px-16">
            <div className="md:flex lg:flex md:gap-12 lg:gap-12 gap-8">
              <div className="form-control md:w-1/2 lg:w-1/2 ">
                <label className="label">
                  <span className="label-text font-bold text-xl">Name</span>
                </label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Name"
                  className="input border-lime-300"
                  required
                />
              </div>
              <div className="form-control md:w-1/2 lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">Email</span>
                </label>
                <input
                  name="user_email"
                  type="Email"
                  placeholder="Email"
                  className="input border-lime-300"
                  required
                />
              </div>
            </div>
            <textarea
              className="w-full mt-20 p-5 border border-lime-300 rounded-lg"
              placeholder="Massage"
              name="message"
              id=""
              cols="30"
              rows="5"
              required></textarea>
            <input
              className="btn bg-gradient-to-r from-blue-500 to-orange-500 w-full mt-8 text-white"
              type="submit"
              value="send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
