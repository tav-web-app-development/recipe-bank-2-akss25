import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/recipes/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  function handleEdit(index) {
    const updatedRecipes = [...recipes];
    updatedRecipes[index].editable = true;
    setRecipes(updatedRecipes);
  }

  function handleSave(index) {
    const updatedRecipes = [...recipes];
    updatedRecipes[index].editable = false;
    setRecipes(updatedRecipes);
  }

  function handleDelete(index) {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  }

  return (
    <>
      <Navbar />
      {recipes.map((recipe, index) => (
        <RecipeContainer
          recipe={recipe}
          key={recipe.id}
          index={index}
          onEdit={handleEdit}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
