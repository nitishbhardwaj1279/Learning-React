import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = (<h1 id="heading" 
className="head" tabIndex={"5"}>NAMASTE JSX</h1>);

// const jsxhead = React.createElement("h1", { id: "heading" }, "NAMASTE REACT");
const root = ReactDOM.createRoot(document.getElementById("root"));
const TitleComponent=()=>(
    <h4>TITLE COMPONENT OF PROJECT</h4>
)
//component composition
 const HeadingComponent=()=>(
    <>
    {100+500}
        <TitleComponent/>
        <h2>My first functional component</h2>;
    </  >
   
 );

 const FooterComponent=()=>(<footer>
    FOOTER SECTION
 </footer>);
 root.render(<FooterComponent/>);