// import { copyrightSign } from "../assets/icons";
// import { footerLogo } from "../assets/images";
// import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer
      className="container-fluid text-white row p-5 mt-5"
      style={{ backgroundColor: "rgb(19, 48, 74)" }}
    >
      <div className="col-sm m-4 ">
        <h3 className="">Alpins</h3>
        <p className="lh-lg mt-4">
          Somewhere between the bottom of the climb and the summit is the answer
          to the mystery why we climb
        </p>
      </div>
      <div className="col-sm m-4 ">
        <h3 className="">Contacts</h3>
        <div className="lh-lg mt-4">- Lagos, Nigeria</div>
        <div className="lh-lg">- hello@example.com</div>
        <div className="lh-lg">- 090909090909</div>
      </div>
      <div className="col-sm m-4 ">
        <h3 className="">Contacts</h3>
        <div className="lh-lg mt-4">- Lagos, Nigeria</div>
        <div className="lh-lg">- hello@example.com</div>
        <div className="lh-lg">- 090909090909</div>
      </div>
      <hr></hr>
      <div className="text-center m-0 w-0 ">2025 Alpine Ascent APTECH </div>
    </footer>
  );
};

export default Footer;
