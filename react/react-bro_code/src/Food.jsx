function Food () {
    const foodOne = "Orange";
    const foodTwo = "Tomato";
    const foodThree = "Potato";
    return (
        <>
            <ul>
                <li>Apple</li>
                <li>{foodOne}</li>
                <li>{foodTwo.toUpperCase()}</li>
                <li>{foodThree}</li>
            </ul>
        </>
    );
}
export default Food