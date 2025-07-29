import cardImageOne from '../assets/av-4.gif'
// import cardImageTwo from '../assets/flight_2.gif'

function Card () {

    return (
        <div className="card">
            <img className="card__img" src={cardImageOne} alt="image" title="image"></img>
            <h3>Title</h3>
            <div>Content</div>
        </div>
    );
}
export default Card;

