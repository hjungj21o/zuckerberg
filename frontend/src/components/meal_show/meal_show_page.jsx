import React from "react";
import parse from "html-react-parser";

class MealShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMeal(this.props.match.params.meal_id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.meal_id !== this.props.match.params.meal_id) {
      this.props.fetchMeal(this.props.match.params.meal_id);
    }
  }

  render() {
    // debugger;
    const { meal } = this.props;
    
    let mealInfo;
    if (meal) {

      const mealInstructionsHtml = "<span> <h2>Instructions</h2>  "+meal.instructions+"</span>" ;

      mealInfo = (
        <div className="main-container2">
          <div className="main-text-container">
            <h1>{meal.title}</h1>

            <div className="meal-summary">
              {parse(meal.summary)}
            </div>

            <div class="meal-details">
              <img className="big-image" src={meal.image} />

              <div className="meals-instructions">
                <h2>Ingredients</h2>
                <ul>
                  {meal.ingredients.map((ingredient) => {
                    return <li>{ingredient}</li>;
                  })}
                </ul>
                <br></br>
                {parse(mealInstructionsHtml)}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      mealInfo = "";
    }
    return <div>{mealInfo}</div>;
  }
}

export default MealShowPage;
