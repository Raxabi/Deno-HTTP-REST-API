import { useState, useEffect } from "react"
import { Text } from "@chakra-ui/react"
import { Card } from "react-bootstrap"
import "../assets/css/card.css"

function DistroCard() {
  const [distros, setDistros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((data) => data.json())
      .then((response: Array<Object>) => {
        response.map((item) => setDistros([...distros, item]));
      });
  }, []);
  return (
    <div>
      <Text fontSize={"4xl"} align={"center"}>Distribuciones Linux</Text>
      {distros.map((item) => (
        <Card key={item.name} id={"distro-card"}>
          <Card.Img id={"distro-card-img"} variant="top" style={{scale: "0.7"}} src={"http://localhost:3000/src/assets/images/arch.png"} />
          <Card.Title id={"distro-card-title"}><Text fontSize={"3xl"}>{item.name}</Text></Card.Title>
          <Card.Text />
        </Card>
      ))}
    </div>
  );
};

export default DistroCard
