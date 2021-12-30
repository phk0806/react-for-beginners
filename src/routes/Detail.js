import { useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
import Content from "../components/Content";
import { useState, useEffect } from "react";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);
    const {id} = useParams();
    // console.log(id);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setContent(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            {loading? (
                <h1>Loading....</h1>
            ) : (
                <Content
                    bgImg={content.background_image_original}
                    title={content.title}
                    desc_full={content.description_full}
                    genres={content.genres}/>
            )}
        </div>
        
    );
}

export default Detail;
