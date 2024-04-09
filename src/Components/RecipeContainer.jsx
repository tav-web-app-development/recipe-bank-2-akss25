/* eslint-disable react/prop-types */
function RecipeContainer({ recipe }) {
  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = recipe.title;
        }}
      >
        <div className="recipe">
          <h2>{recipe.title}</h2>
          <p>
            <strong>Description:</strong>
            {recipe.description}
          </p>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>
          <p>
            <strong>Directions:</strong> {recipe.directions}
          </p>
          <img
            src={recipe.photoUrl}
            alt={recipe.title}
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
