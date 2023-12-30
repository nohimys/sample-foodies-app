import MealItem from './meal-item';
import classes from './meals-grid.module.css';
const MealsGrid = ({meals}: any) => {
    return (
        <ul className={classes.meals}>
            {meals.map((meal:any) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}
export default MealsGrid;