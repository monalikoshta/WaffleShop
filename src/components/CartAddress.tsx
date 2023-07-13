import { FormEvent, useState } from "react";

const CartAddress = () => {
  const [address, setAddress] = useState("");
  const [landMark, setLandMark] = useState("");
  const [contact, setContact] = useState("");
  //   const [submitClicked, setSubmitClicked] = useState(false);
  const [addAddress, setAddAddress] = useState("add");

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (address.length == 0) {
      alert("Please provide address");
    } else if (contact.length != 10) {
      alert("Please provide a valid 10 digit mobile number");
      setContact("");
    } else {
      setAddAddress("edit");
      console.log(address, landMark, contact);
    }
  };

  return (
    <div className="mt-6 p-4 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row mb-4 w-full">
      {addAddress === "add" ? (
        <div className="block w-full justify-between items-start">
          {/* <p>
            Address : <br />
          </p> */}
          <button
            type="submit"
            className="rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-[#382821] text-white"
            onClick={() => setAddAddress("show")}
          >
            Add Address
          </button>
        </div>
      ) : addAddress === "show" ? (
        <form onSubmit={(e) => submitForm(e)}>
          <div>
            <label htmlFor="completeAddr">Complete Address</label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your address..."
              required
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="landmark">Landmark(optional)</label>
            <input
              type="text"
              id="landmark"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Near..."
              onChange={(e) => setLandMark(e.target.value)}
              value={landMark}
            />
          </div>
          <div className="flex justify-between mt-2 items-end">
            <div>
              <label htmlFor="contact">Contact No.</label>
              <input
                type="text"
                id="contact"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Mobile number..."
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
            </div>
            <button
              type="submit"
              className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-[#382821] text-white"
              onClick={(e) => submitForm(e)}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-between items-start">
          <p>
            Address : <br />
            {address}
            <br />
            {landMark}
            <br />
            {contact}
          </p>
          <button
            type="submit"
            className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-[#382821] text-white"
            onClick={() => setAddAddress("show")}
          >
            Edit Address
          </button>
        </div>
      )}
    </div>
  );
};

export default CartAddress;
