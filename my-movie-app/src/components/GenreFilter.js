import React from "react";
import "../App.css";

function GenreFilter({genres,onGenreSelect}) {

  const handleGenreClick = (genre) => {
    onGenreSelect(genre);
  };

  return (
    <div className="GenreFilter">
      <h2>Filter by Genre</h2>
      <div className="GenreBtn"> {
          genres.map((genre) => (
            <div key={genre}>
              <button
              className="FilterBtn"
              onClick={() => {handleGenreClick(genre)
                console.log(genre);
              }}
            >
              {genre}
            </button>
            </div>
          ))
        }
        </div>
    </div>
  );
}

export default GenreFilter;