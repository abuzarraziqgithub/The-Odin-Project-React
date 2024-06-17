//* Creating ListItem Component
function ListItem(props) {
  return <li>{props.animalItems}</li>;
}

//* Creating List Component
function List(props) {
  return (
    <ul>
      {props.animalsList.map((animal) => (
        <ListItem key={animal} animalItems={animal} />
      ))}
    </ul>
  );
}

function PropsInRendering() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  return (
    <>
      <h1
        style={{
          backgroundColor: "#E34234",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        Animals
      </h1>
      <List animalsList={animals} />
    </>
  );
}
export default PropsInRendering;
