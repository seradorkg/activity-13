/* eslint-disable react/prop-types */
function Footer({ copyright }) {
  return (
    <footer className="bg-dark text-center text-white text-lg-start fixed-bottom">
      <div className="text-center p-3">
        © 2023 Copyright:&nbsp;
        <a href="#">{copyright}</a>
      </div>
    </footer>
  );
}

export default Footer;
