function List(props) {
  return (
    <ul>
      {props.animalsList.map(
        (animal) =>
          //* Using Ternary operator
          // animal.startsWith("L") ? <li key={animal}>{animal}</li> : null
          //* Using && operator
          animal.startsWith("L") && <li key={animal}>{animal}</li>
      )}
    </ul>
  );
}

function CondRenderingUI() {
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
export default CondRenderingUI;
