/* eslint-disable react/prop-types */
function Header({ title }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{title}</h1>
      </div>
    </div>
  );
}

export default Header;
