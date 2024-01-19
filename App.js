const parent = React.createElement("div", { id: "parentWrapper" },
    React.createElement("div", { id: "childWrapper" }, "this is child div",
        [React.createElement("h1", {}, "i am H1 tag"), React.createElement("h2", {}, "i am H2 tag")]
    ));


const heading = React.createElement("h2", { id: "heading", name: "alpha" }, "Welcome React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




console.log(343);