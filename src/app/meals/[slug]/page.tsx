const MealDetailsPage = ({params}: any) => {
    return (
        <>
            <h1>Meal Details Page</h1>
            <h2>Param: {params && params.slug}</h2>
        </>
    );
}
export default MealDetailsPage;