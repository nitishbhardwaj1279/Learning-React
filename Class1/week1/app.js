 // Create a React element
 const parent = React.createElement
("div", {id:"parent"}, 
 React.createElement("div", {id:"child"}, React.createElement
 ("div", {id:"childofchild"},[React.createElement("h1",{id:"heading"},"Inside h1"),React.createElement("h2",{id:"h2"},"Inside h2")]))) 

 // Create a root
 const root = ReactDOM.createRoot(document.getElementById("root"));

 // Render the element into the root
 root.render(parent);
 console.log(parent); //reactelement is js object
 //render convert reactelement which js object to h1 tag and putting to roots