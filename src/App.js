import Nav from "./components/nav/Nav";
import Card from "./components/card/Card";
import Mpage from "./components/mpage/Mpage";
const App = () => {
  const cname="mahendra engineering college";
  const cardData = [`${cname}`,`${cname}` , `${cname}`,`${cname}`,`${cname}`,`${cname}`,`${cname}`,`${cname}`]; // Add more card titles as needed
  return (
    <div>
      <Nav/>
      <div>
      {cardData.map((cardTitle, index) => (
        <Card key={index} cardTitle={cardTitle} />
      ))}
    </div>
    <Mpage/>
    </div>
  );
};

export default App;
