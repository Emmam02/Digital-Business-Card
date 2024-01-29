import "./Info.css";

const WebsiteClicked = () => {
  alert("This is just an example link.");
};

const LinkedInButtonClicked = () => {
  window.open("https://www.linkedin.com/in/emma-myhra");
};

const EmailButtonClicked = () => {
  const email = "emma00myhra@gmail.com";

  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard: " + email);
    })
    .catch((err) => {
      console.error("could not copy text: ", err);
    });
};

const Info = () => {
  return (
    <div className="info-container">
      <img
        src="src/assets/profile-picture.png"
        alt="profile-picture"
        width="200px"
        className="info-image"
      />
      <h3 className="info-name"> Emma Myhra</h3>
      <p className="info-career">
        IT-student hos{" "}
        <a href="https://getacademy.no/" className="info-GET">
          GET Academy
        </a>
      </p>
      <p onClick={WebsiteClicked} className="info-website">
        emmamyhra.website.no
      </p>
      <div className="info-button-div">
        <button
          type="button"
          className="info-button-email"
          onClick={EmailButtonClicked}
        >
          <img src="src/assets/Mail.png" className="info-button-email-image" />
          Email
        </button>
        <button
          type="button"
          className="info-button-linkedIn"
          onClick={LinkedInButtonClicked}
        >
          <img
            src="src/assets/linkedin.png"
            className="info-button-linkedIn-image"
          />
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
