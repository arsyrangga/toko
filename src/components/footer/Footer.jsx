import "./Footer.css";

const Footer = ({ margin }) => {
  return (
    <div
      className="footer"
      style={{
        width: margin ? "100vw" : "100%",
        bottom: "0 !important",
        right: "0 !important",
        marginLeft: margin ? "-18vh" : "0",
      }}
    >
      <p
        style={{
          marginRight: margin ? "-20vw" : "0",
        }}
      >
        {" "}
        @Siti Fauziah 2021 || All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
