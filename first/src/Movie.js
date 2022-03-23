import { Link } from "react-router-dom";

const Movie = ({ v }) => {
  return (
    <div>
      <h2>
        <Link to={`/movie/${v.id}`}>
          {v.title} ({v.rating})
        </Link>
      </h2>
      <img src={v.medium_cover_image} />
      {v.genres.map((g) => (
        <small key={g}>{g}</small>
      ))}
      <p>{v.summary}</p>
    </div>
  );
};

export default Movie;
