import "./App.css";
import data from "./helper/data";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app">
      <div className="appnavbar">
        <Navbar />
      </div>
      <div className="headerüstü">
        <Header />
        <div className="cardlarındiv">
          {data.map((item) => {
            console.log(item);

            const { id, title, desc, image } = item;

            return <Card key={id} title={title} desc={desc} image={image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
