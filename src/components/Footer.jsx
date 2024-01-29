import "./Footer.css";

const TwitterIconClicked = () => {
  alert("I dont have twitter");
};

const FacebookIconclicked = () => {
  window.open("https://www.facebook.com/profile.php?id=100009256508702");
};

const InstagramIconClicked = () => {
  alert("I dont have Instagram");
};

const GitHubIconClicked = () => {
  window.open("https://github.com/Emmam02");
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-image-container">
        <img
          src="src/assets/Twitter-Icon.png"
          alt="twitter link"
          className="footer-image"
          onClick={TwitterIconClicked}
        />
        <img
          src="src/assets/Facebook-Icon.png"
          alt="facebook link"
          className="footer-image"
          onClick={FacebookIconclicked}
        />
        <img
          src="src/assets/Instagram-Icon.png"
          alt="instagram link"
          className="footer-image"
          onClick={InstagramIconClicked}
        />
        <img
          src="src/assets/GitHub-Icon.png"
          alt="github link"
          className="footer-image"
          onClick={GitHubIconClicked}
        />
      </div>
    </div>
  );
};

export default Footer;
