import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { useEffect, useState } from "react";
// Add icons to the library
library.add(fab, faInstagram, faFacebook, faXTwitter);

const Footer = () => {
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  // Function to update Date and Time
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDateTime(now.toLocaleString());
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Function to fetch Geolocation
  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;
  //         try {
  //           const response = await fetch(
  //             `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  //           );
  //           const data = await response.json();
  //           // console.log(data);
  //           setLocation(data.address.city + ", " + data.address.country);
  //         } catch (error) {
  //           setLocation("Location unavailable");
  //         }
  //       },
  //       () => setLocation("Location denied")
  //     );
  //   } else {
  //     setLocation("Geolocation not supported");
  //   }
  // }, []);
  useEffect(() => {
    console.log("Fetching location...");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            console.log("Location data:", data);

            // If city is undefined, fall back to state
            const city =
              data.address.city || data.address.state || "Unknown location";
            const country = data.address.country || "Unknown country";

            setLocation(`${city}, ${country}`);
          } catch (error) {
            console.error("Error fetching location:", error);
            setLocation("Location unavailable");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocation("Location denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

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
      <marquee>
        📅 {dateTime} | 📍 {location}
      </marquee>
      <hr></hr>
      <div className="text-center m-0 w-0 ">2025 Alpine Ascents APTECH </div>
    </footer>
  );
};

export default Footer;
