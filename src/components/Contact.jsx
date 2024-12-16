import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsSnapchat } from 'react-icons/bs';
import { FaArrowUp } from 'react-icons/fa'; // Arrow-up icon for the button

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4117737-358d-43b5-b047-a160e97e8472");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult("");
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("Something went wrong. Please try again later.");
      setResult("");
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact <span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to make a Move? Let's Build Your Future Together
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="my-6 text-left">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          className={`bg-blue-600 text-white py-2 px-12 mb-10 rounded ${
            result ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!!result}
        >
          {result || "Send Message"}
        </button>
      </form>

      {/* Social Media Links */}
      <div className="text-center mt-10">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://snapchat.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500">
            <BsSnapchat size={24} />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Contact;
