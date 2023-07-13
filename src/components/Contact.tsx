import { FormEvent } from "react";

const Contact = () => {
  const submitEmail = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you, we will contact you soon!");
  };
  return (
    <div className="text-center p-10" id="contact">
      <h1 className="text-4xl font-Diphylleia pb-10 font-bold">Contact Us</h1>
      <div className="flex justify-around flex-col sm:flex-row">
        <div className="text-left mb-4 sm:mr-4">
          Need more details, please share your email !
          <form onSubmit={(e) => submitEmail(e)}>
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@domain.com"
            />
          </form>
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            We’ll never share your details. Read our{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Privacy Policy
            </a>
            .
          </p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-[#382821] text-white"
            onClick={(e) => submitEmail(e)}
          >
            Submit
          </button>
        </div>
        <div className="text-left mb-4 sm:mr-4">
          <b>Address</b>
          <br />
          123, ABC Road,<br></br> XYZ Area, 482002
        </div>

        <div className="text-left">
          <b className="mt-4">Timings</b>
          <br />
          Monday - Saturday : 8am-2pm
          <br />
          Sunday: 10am-8pm
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
