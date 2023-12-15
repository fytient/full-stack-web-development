// import About from "./page/About";
// import Menu from "./page/Menu";
// import Order from "./page/Order";
// import Home from "./page/Home";
// import Photo from "./page/Photo";



function Mainpage({ page}) {
  return (
    <main id="main-content" className="content">
      {(page === "#/" || page === "/" || page === "") }
      {/* {page === "/about" && <About />}
      {page === "/menu" && <Menu />}

      {page === "/photo" && <Photo />} */}
      
    </main>
  );
}
export default Mainpage;