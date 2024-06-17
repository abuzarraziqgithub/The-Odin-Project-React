function List(props) {
  !props.animalsList ? <div> Loading ...</div> : null;

  if (props.animalsList.length === 0) {
    return <div> There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animalsList.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function OtherRendTechs() {
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
export default OtherRendTechs;
