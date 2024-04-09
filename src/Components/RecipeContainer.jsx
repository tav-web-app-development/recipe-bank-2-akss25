import React, { useState } from "react";

function RecipeContainer({ recipe, onEdit, onDelete }) {
  const [editable, setEditable] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  const handleEdit = () => {
    if (editable) {
      // Save changes
      onEdit(editedRecipe);
    }
    setEditable(!editable);
  };

  const handleDelete = () => {
    onDelete(recipe.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value
    }));
  };

  return (
    <>
      <div className="recipe-container">
        <div className="recipe">
          <h2>
            {editable ? (
              <input
                type="text"
                name="title"
                value={editedRecipe.title}
                onChange={handleChange}
              />
            ) : (
              recipe.title
            )}
          </h2>
          <p>
            <strong>Description:</strong>{" "}
            {editable ? (
              <textarea
                name="description"
                value={editedRecipe.description}
                onChange={handleChange}
              />
            ) : (
              recipe.description
            )}
          </p>
          <p>
            <strong>Ingredients:</strong>{" "}
            {editable ? (
              <textarea
                name="ingredients"
                value={editedRecipe.ingredients}
                onChange={handleChange}
              />
            ) : (
              recipe.ingredients
            )}
          </p>
          <p>
            <strong>Directions:</strong>{" "}
            {editable ? (
              <textarea
                name="directions"
                value={editedRecipe.directions}
                onChange={handleChange}
              />
            ) : (
              recipe.directions
            )}
          </p>
          <img src={recipe.photoUrl} alt={recipe.title} width={300} height={300} />
          <div>
            {editable ? (
              <button onClick={handleEdit}>Save</button>
            ) : (
              <button onClick={handleEdit}>Edit</button>
            )}
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
