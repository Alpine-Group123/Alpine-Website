import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Button } from "react-bootstrap";

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (label) => setActiveLink(label);

  return (
    <div
      className="text-center py-5"
      id="about"
      style={{ backgroundColor: "white", paddingTop: "100px" }}
    >
      {/* Section Title */}
      <h1 className="text-center my-4 pt-5 text-primary fw-bold">ABOUT US</h1>
      <p className="x text-muted">We live for the nature</p>

      {/* 2 Column Flex Grid */}
      <div className="row my-4 d-flex justify-content-center me-1 ms-1 py-5">
        <div className="col-md-6 text-start">
          <p
            className="fs-6"
            style={{
              fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
              maxHeight: expanded ? "none" : "10em",
              overflow: "hidden",
            }}
          >
            Alpine Ascents is a leader in the Mountaineering and Climbing
            industry and has been instrumental in setting guiding standards in
            the international climbing community. Our mission and goals are
            simple: by using the best climbing talent in the country, we offer
            the opportunity for climbers at all levels to achieve their personal
            aspirations through quality, challenging, safe and fun expeditions.
            Unparalleled mountain adventures are what we do.
            <br />
            <br />
            Mountaineering, also called mountain climbing, the sport of
            attaining, or attempting to attain, high points in mountainous
            regions, mainly for the pleasure of the climb. Although the term is
            often loosely applied to walking up low mountains that offer only
            moderate difficulties, it is more properly restricted to climbing in
            localities where the terrain and weather conditions present such
            hazards that, for safety, a certain amount of previous experience
            will be found necessary. For the untrained, mountaineering is a
            dangerous pastime.
            <br /> <br />
            Unlike most sports, mountaineering lacks widely-applied formal
            rules, regulations, and governance; mountaineers adhere to a large
            variety of techniques and philosophies when climbing mountains.
          </p>
          <div className="d-flex align-items-center">
            {/* Join Us Button */}
            <Button variant="primary" className="px-4 py-2">
              <a href="#newsletter" className="link">Join us now</a>
            </Button>
            {/* Read More Link */}
            <a href="#read-more"  className="ms-3 text-primary text-decoration-none"
              onClick={(e) => {
                e.preventDefault();
                setExpanded(!expanded);
              }}
            >
              {expanded ? "Show less" : "Read more"}
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <Accordion defaultActiveKey="0">
            {/* History */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>History</Accordion.Header>
              <Accordion.Body>
                <p>
                  Did you know? <br />
                  Mountaineering dates back to the early explorations of the
                  Alps in the 18th century. It evolved from scientific
                  expeditions into a sport by the 19th century, with famous
                  ascents like the first successful climb of Mont Blanc (1786)
                  and the first Everest summit (1953).
                </p>
                <p>
                  Today, mountaineering blends tradition with modern techniques,
                  pushing human endurance to new limits.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Types/Styles */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Types/Styles</Accordion.Header>
              <Accordion.Body>
                <p>
                  Mountaineering styles vary based on terrain and difficulty:
                </p>
                <strong>Alpine Style:</strong> Fast and light, no fixed camps,
                used in high-altitude climbs.
                <br />
                <strong>Traditional Climbing:</strong> Uses removable protection
                for scaling rock faces.
                <br />
                <strong>Ice Climbing:</strong> Scaling frozen waterfalls and
                glaciers using ice axes.
                <br />
                <strong>Via Ferrata:</strong> Routes with fixed cables and
                ladders for safe climbing.
              </Accordion.Body>
            </Accordion.Item>

            {/* Techniques */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Techniques</Accordion.Header>
              <Accordion.Body>
                <p>
                  Mastering key techniques is essential for safety and success:
                </p>
                <p>
                  <strong>Rope Management:</strong> Ensuring proper belaying,
                  knots, and rappelling.
                </p>
                <p>
                  <strong>Crampon & Ice Axe Use:</strong> Walking, climbing, and
                  self-arrest techniques on ice.
                </p>
                <p>
                  <strong>Navigation & Route Finding:</strong> Using maps, GPS,
                  and compasses to avoid getting lost.
                </p>
                <p>
                  <strong>Acclimatization:</strong> Adapting to high altitudes
                  to prevent altitude sickness.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Sheltering */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Sheltering</Accordion.Header>
              <Accordion.Body>
                <p>Proper sheltering is critical in harsh conditions:</p>
                <p>
                  <strong>Tents:</strong> Lightweight, four-season tents for
                  alpine environments.
                </p>
                <p>
                  <strong>Snow Caves & Igloos:</strong> Insulated shelters built
                  from compacted snow.
                </p>
                <p>
                  <strong>Bivouac (Bivy) Shelters:</strong> Emergency
                  single-person shelters for extreme weather.
                </p>
                <p>
                  <strong>Mountain Huts:</strong> Found in popular climbing
                  regions, offering refuge and supplies.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Hazards */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>Hazards</Accordion.Header>
              <Accordion.Body>
                <p>Understanding and mitigating hazards is essential:</p>
                <p>
                  <strong>Weather:</strong> Rapidly changing conditions, storms,
                  and extreme cold.
                </p>
                <p>
                  <strong>Avalanches:</strong> Snow slides that can be triggered
                  by weight or weather changes.
                </p>
                <p>
                  <strong>Altitude Sickness:</strong> Headaches, nausea, and
                  dizziness due to low oxygen.
                </p>
                <p>
                  <strong>Falling Rocks & Ice:</strong> Common in unstable
                  mountain terrain.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Records & Achievements */}
            <Accordion.Item eventKey="5">
              <Accordion.Header>Records & Achievements</Accordion.Header>
              <Accordion.Body>
                <p>
                  Some of the most remarkable records in mountaineering history:
                </p>

                <strong>🏆 First Summits:</strong>
                <ul>
                  <li>
                    Mont Blanc: Jacques Balmat & Michel-Gabriel Paccard (1786)
                  </li>
                  <li>
                    Mount Everest: Sir Edmund Hillary & Tenzing Norgay (1953)
                  </li>
                  <li>K2: Achille Compagnoni & Lino Lacedelli (1954)</li>
                </ul>

                <strong>⏱️ Fastest Ascents:</strong>
                <ul>
                  <li>
                    Mount Everest: Kilian Jornet (26 hours, no supplemental
                    oxygen, 2017)
                  </li>
                  <li>
                    Mont Blanc: François D’Haene (4 hours, 57 minutes, 2013)
                  </li>
                  <li>Aconcagua: Karl Egloff (11 hours, 52 minutes, 2014)</li>
                </ul>

                <strong>🧗‍♂️ Extreme Feats:</strong>
                <ul>
                  <li>Reinhold Messner: First solo ascent of Everest (1980)</li>
                  <li>
                    Nirmal Purja: Climbed all 14 peaks above 8,000m in just 6
                    months (2019)
                  </li>
                  <li>
                    Jasmin Paris: First woman to win the Montane Spine Race
                    (2019)
                  </li>
                </ul>

                <p>
                  Mountaineering continues to evolve, with climbers breaking
                  limits and achieving new heights!
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
