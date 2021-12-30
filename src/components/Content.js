import propTypes from "prop-types";

function Content({bgImg, title, desc_full, genres}) {
    return (
        <div>
            <img src={bgImg} alt={title} />
            <h2>{title}</h2>
            <ul>
                {genres.map((g, index) => (
                    <li key={index}>{g}</li>
                ))}
            </ul>
            <p>{desc_full}</p>
            
        </div>
    )
}

export default Content;