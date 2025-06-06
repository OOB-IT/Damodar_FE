import React from "react";

const TitleBar = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        zIndex: "9",
        background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
        color: "#fff",
        paddingBottom: "3px",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 30px",
      }}
    >
      <div className="container location">
        <a href="mailto:info@damodarr.com" target="blank_">
          <i className="fa fa-envelope-o"></i> info@damodarr.com
        </a>
      </div>
      <div className="container social-links text-right text-md-right">
        <a href="https://www.linkedin.com/company/damodarr/">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61551837035808">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/damodarr__llp?igsh=MTV4bnJwaXpvdW9xNQ==">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://wa.me/+919104403474">
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default TitleBar;
