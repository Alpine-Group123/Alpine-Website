import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faFacebook, faXTwitter} from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(fab, faInstagram, faFacebook, faXTwitter);

const Footer = () => {
  return (
    <footer
      className="container-fluid text-white row p-5 mt-5"
      style={{ backgroundColor: "rgb(19, 48, 74)" }}
    >
      <div className="col-sm m-4" id="contact us">
        <h3 className="">Alpine Ascents</h3>
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
        <div>
          <a href="#">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="2x"
              className="p-2 text-white"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="2x"
              className="p-2 text-white"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="2x"
              className="p-2 text-white"
            />
          </a>

          <a href="#">
            <FontAwesomeIcon
              icon={["fab", "x-twitter"]}
              size="2x"
              className="p-2 text-white"
            />
          </a>
        </div>
        <p className="mt-3 lh-lg">
          {" "}
          Subscribe to our newsletter of follow us on our social channels to
          stay tuned
        </p>
      </div>
      <hr></hr>
      <div className="text-center m-0 w-0 ">2025 Alpine Ascents APTECH </div>
    </footer>
  );
};

export default Footer;
