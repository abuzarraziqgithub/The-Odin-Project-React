import PropsInRendering from "./PropsInRend";

function Rendering() {
  //* Rendering for static Lists

  //* Array of Animals:
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const listStyling = {
    fontWeight: "bold",
    margin: "30px",
    listStyle: "none",
    textAlign: "center",
    margin: "10px",
  };
  const listComps = {
    border: "1px solid whitesmoke",
    marginTop: "10px",
    padding: "5px",
    textAlign: "center",
    backgroundColor: "#E32227",
    borderRadius: "20px",
  };

  const dynamicListItems = animals.map((animalsItem) => (
    <li key={animalsItem} style={listComps}>
      {animalsItem}
    </li>
  ));

  return (
    <>
      {/* <h1
        style={{
          backgroundColor: "#E34234",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        Animals
      </h1> */}
      {/* Instead of doing this, we can implement it dynamically */}
      {/* <ul style={listStyling}>
        <li style={listComps}>Lion</li>
        <li style={listComps}>Cow</li>
        <li style={listComps}>Snake</li>
        <li style={listComps}>Lizzard</li>
      </ul> */}

      {/* We will use the map method for rendering the list items */}
      <ul style={listStyling}>
        {/* We used key to let React know the identity of each element in the list. */}
        {/* {animals.map((animalItem) => {
          return (
            <li key={animalItem} style={listComps}>
              {animalItem}
            </li>
          );
        })} */}

        {/* We can even store this expression inside a Variable to look moew dynamically */}
        {/* {dynamicListItems} */}

        {/* We can render the entire Component */}

        <PropsInRendering />
      </ul>
    </>
  );
}

export default Rendering;

//* We created another file for Rendring using props for readability.
//* It is just this code but with props used.
