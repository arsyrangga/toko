import "./Footer.css";

const Footer = ({ margin }) => {
  return (
    <div className="footer">
      <p style={{ marginRight: margin ? "-20vw" : "0" }}>
        {" "}
        @Siti Fauziah 2021 || All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
