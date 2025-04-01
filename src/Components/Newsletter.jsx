// Newsletter component for subscribing to a newsletter
const Newsletter = function () {
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Get the consent checkbox element
        const consentCheckbox = document.getElementById("consentCheckbox");

        // Check if the consent checkbox is checked
        if (!consentCheckbox.checked) {
            alert("You must agree to the terms and conditions to subscribe."); // Alert user if not checked
            return; // Exit the function
        }

        // Alert user on successful subscription
        alert("Thank you for subscribing!");
    };

    return (
        <section className="my-5 container" id="newsletter">
            {/* Newsletter heading */}
            <h1 className="text-center mt-4 text-primary fw-bold pt-5">NEWSLETTER</h1>
            {/* Newsletter description */}
            <p className="text-center h5 pt-3">Subscribe now to our newsletter!</p>
            
            {/* Subscription form */}
            <form className="text-center my-4 row mt-5" onSubmit={handleSubmit}>
                {/* Input field for name */}
                <input
                    type="name"
                    placeholder="Name"
                    required
                    className="form-control mb-2 col-sm me-4 h6 shadow-sm"
                />
                {/* Input field for email */}
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="form-control mb-2 col-sm me-4 h6 shadow-sm"
                />
                {/* Submit button */}
                <button type="submit" className="btn btn-primary col-sm h6">
                    Subscribe
                </button>
            </form>

            {/* Consent checkbox */}
            <div className="form-check d-flex justify-content-center align-items-center text-center mt-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="consentCheckbox"
                    required
                />
                {/* Label for the consent checkbox */}
                <label className="form-check-label mt-2 ms-3 opacity-75" htmlFor="consentCheckbox">
                    By clicking subscribe you accept the terms of service and the privacy policy.
                </label>
            </div>

            {/* Placeholder for a thank-you message (currently commented out) */}
            {/* <p className="text-center my-4">Thank you for subscribing!</p> */}
        </section>
    );
};

export default Newsletter;
