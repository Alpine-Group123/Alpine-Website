const Newsletter = function () {
const handleSubmit = (e) => {
    e.preventDefault();
    const consentCheckbox = document.getElementById("consentCheckbox");
    if (!consentCheckbox.checked) {
        alert("You must agree to the terms and conditions to subscribe.");
        return;
    }
    alert("Thank you for subscribing!");
};

return (
    <section className="my-5 container" id="newsletter">
        <h1 className="text-center mt-4 text-primary fw-bold pt-5">NEWSLETTER</h1>
        <p className="text-center h5 pt-3">Subscribe now to our newsletter!</p>
        <form className="text-center my-4 row mt-5" onSubmit={handleSubmit}>
            <input
                type="name"
                placeholder="Name"
                required
                className="form-control mb-2 col-sm me-4 h6 shadow-sm"
            />
            <input
                type="email"
                placeholder="Email"
                required
                className="form-control mb-2 col-sm me-4 h6 shadow-sm"
            />
            <button type="submit" className="btn btn-primary col-sm h6">
                Subscribe
            </button>
        </form>
        <div className="form-check d-flex justify-content-center align-items-center text-center mt-3">
            <input
                type="checkbox"
                className="form-check-input"
                id="consentCheckbox"
                required
            />
            <label className="form-check-label mt-2 ms-3 opacity-75" htmlFor="consentCheckbox">
            By clicking subscribe you accept the terms of service and the privacy policy.
            </label>
        </div>
        {/* <p className="text-center my-4">Thank you for subscribing!</p> */}
    </section>
);
};

export default Newsletter;
