import "./home.css";
import icon from "../app/assets/icons/Icon.png";
import hero from "../app/assets/img/Hero area Image.png";
import webDesimg from "../app/assets/img/icon.png";
import webDesimg2 from "../app/assets/img/icon (2).png";
import branding from "../app/assets/img/background (2).png";
import brandicon from "../app/assets/img/Group 59.png";
import writingicon from "../app/assets/img/icon (3).png";
import johndoe from "../app/assets/img/Image.png";
import bacground from "../app/assets/img/Background (3).png";
import playBtn from "../app/assets/img/Play button (1).png";
import animation from "../app/assets/img/icon (4).png";
import logoip from "../app/assets/img/Logo (1).png";
import Profile from "../app/assets/img/Image (2).png";

export default function HomePage() {
  return (
    <>
      <header>
        <nabar className="navbar">
          <div className="logo">
            <img src={icon} alt="" />
            <p>Maker</p>
          </div>
          <div className="pages">
            <p style={{ color: "#35AFBF", borderBottom: "2px solid #35AFBF" }}>
              Home
            </p>
            <p>Service</p>
            <p>About</p>
            <p>The Team</p>
            <p>Pricing</p>
            <p>Contact</p>
          </div>
          <div className="sign">
            <button>Sign Up</button>
          </div>
        </nabar>
        <section>
          <div className="left">
            <h1 style={{ fontSize: "48px", color: "#35AFBF" }}>
              Make{" "}
              <span style={{ color: "black" }}>
                {" "}
                a Creative solutions for your Creative{" "}
              </span>{" "}
              ideas.
            </h1>
            <p style={{ color: "#707273", width: "85%", fontSize: "20px" }}>
              We are here to give you effective ideas. We help the brands to
              become what they want.{" "}
            </p>
            <button
              style={{
                border: "none",
                outline: "none",
                padding: "3vh 6vh",
                borderRadius: "5px",
                fontWeight: "700",
                fontSize: "16px",
                backgroundColor: "#35AFBF",
                color: "white",
              }}
            >
              Get Started
            </button>
          </div>
          <div className="right">
            <img src={hero} alt="" />
          </div>
        </section>
      </header>
      <section className="service">
        <h2>We provide great services</h2>
        <p>
          We help people to think independent. Be the boss of your brand and be
          the storyteller. An appropriate approach.
        </p>
        <div className="services">
          <div className="webDesigne">
            <img src={webDesimg} alt="" />
            <h3>Web Design</h3>
            <p>Powerful creations for the practice safe design.</p>
          </div>
          <div className="Branding">
            <img src={webDesimg2} alt="" />
            <h3>Identity & Branding</h3>
            <p>Powerful creations for the practice safe design.</p>
          </div>
          <div
            className="print"
            style={{
              paddingTop: "6vh",
              paddingBottom: "0vh",
              position: "relative",
            }}
          >
            <img className="imgback" src={branding} alt="" />
            <img className="imgicon" src={brandicon} alt="" />
            <h3 style={{ paddingTop: "20px" }}>Print and Packaging</h3>
            <p>Powerful creations for the practice safe design.</p>
          </div>
          <div className="writing">
            <img className="imgback" src={branding} alt="" />
            <img className="imgicon" src={writingicon} alt="" />
            <h3 style={{ paddingTop: "20px" }}>Content Writing</h3>
            <p>Powerful creations for the practice safe design.</p>
          </div>
        </div>
      </section>
      <section className="JohnDoe">
        <div className="about">
          <h2 style={{ fontSize: "36px" }}>Johnatan Doe </h2>
          <p>Marketing Specialist _______</p>
          <p>
            To make your web design company famous in the little we are here to
            provide you as many as catchy and useful web design company will
            surely help your company.
          </p>
          <button>Learn More</button>
        </div>
        <div className="img">
          <img src={johndoe} alt="" />
        </div>
      </section>
      <section className="watch">
        <h2>Watch how we work</h2>
        <p style={{ textAlign: "center" }}>
          Capture more customers with a great brand recall. Whether you need a
          tising or as a tagline for your business, our slogan generator will
          help you come up with us.
        </p>
        <img src={playBtn} alt="" />
      </section>
      <section className="features">
        <h2>Best features in the world</h2>
        <p>
          Capture more customers wd recall. Whether you need a tising or as a
          tagline for you. Capture more customers wd recall. Whether you need a
          tising or as a tagline for you.
        </p>
        <div className="feature">
          <div className="animation">
            <img src={animation} alt="" />
            <h3>Sleek and smooth animation</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
          </div>
          <div className="animation">
            <img src={animation} alt="" />
            <h3>Sleek and smooth animation</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
          </div>
          <div className="animation">
            <img src={animation} alt="" />
            <h3>Sleek and smooth animation</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
          </div>
          <div className="animation">
            <img src={animation} alt="" />
            <h3>Sleek and smooth animation</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
          </div>
          <div className="animation">
            <img src={animation} alt="" />
            <h3>Sleek and smooth animation</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
          </div>
          <div className="animation">
            <img src={animation} alt="" />
            <h3>Sleek and smooth animation</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
          </div>
        </div>
      </section>
      <section className="logoip">
        <img src={logoip} alt="" />
        <h3>
          “Always a pleasure to work with The Agency Creative. Such professional
          and happy people and you know you’ll receive a quick innovative and no
          fuss service.”
        </h3>
        <div className="profil">
          <img src={Profile} alt="" />
          <h3 style={{ lineHeight: "0.5", marginTop: "30px" }}>
            Johnatan Doe
            <br />
            <p style={{ fontWeight: "200", fontSize: "14px" }}>Web Designer</p>
          </h3>
        </div>
      </section>
      <section className="getStarted">
        <h2>People have tried to predict the future since the dawn of time.</h2>
        <button>Get Started</button>
      </section>
      <footer className="footer">
        <div className="columns">
          <div>
            <h3>Freelancer</h3>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "24px",
                gap: "5px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  paddingBottom: "5px",
                }}
              >
                $
              </p>
              19
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  paddingTop: "5px",
                }}
              >
                /mo
              </p>
            </h3>
            <p style={{color:"#fee",lineHeight:"2"}}>
              Freelancer <br />
              24 hours free support <br />
              Multiple features installed <br />
              100 Elements PSD + Al
            </p>
            <button style={{backgroundColor:"transparent",border:"1px solid #fee",borderRadius:"5px",padding:"2vh 4vh"}}>subscribe</button>
          </div>
          <div>
            <h3>Freelancer</h3>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "24px",
                gap: "5px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  paddingBottom: "5px",
                }}
              >
                $
              </p>
              19
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  paddingTop: "5px",
                }}
              >
                /mo
              </p>
            </h3>
            <p style={{color:"#fee",lineHeight:"2"}}>
              Freelancer <br />
              24 hours free support <br />
              Multiple features installed <br />
              100 Elements PSD + Al
            </p>
            <button style={{backgroundColor:"transparent",border:"1px solid #fee",borderRadius:"5px",padding:"2vh 4vh"}}>subscribe</button>
          </div>
          <div>
            <h3>Freelancer</h3>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "24px",
                gap: "5px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  paddingBottom: "5px",
                }}
              >
                $
              </p>
              19
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  paddingTop: "5px",
                }}
              >
                /mo
              </p>
            </h3>
            <p style={{color:"#fee",lineHeight:"2"}}>
              Freelancer <br />
              24 hours free support <br />
              Multiple features installed <br />
              100 Elements PSD + Al
            </p>
            <button style={{backgroundColor:"transparent",border:"1px solid #fee",borderRadius:"5px",padding:"2vh 4vh"}}>subscribe</button>
          </div>
          <div>
            <h3>Freelancer</h3>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "24px",
                gap: "5px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  paddingBottom: "5px",
                }}
              >
                $
              </p>
              19
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  paddingTop: "5px",
                }}
              >
                /mo
              </p>
            </h3>
            <p style={{color:"#fee",lineHeight:"2"}}>
              Freelancer <br />
              24 hours free support <br />
              Multiple features installed <br />
              100 Elements PSD + Al
            </p>
            <button style={{backgroundColor:"transparent",border:"1px solid #fee",borderRadius:"5px",padding:"2vh 4vh"}}>subscribe</button>
          </div>
        </div>
      </footer>
    </>
  );
}
