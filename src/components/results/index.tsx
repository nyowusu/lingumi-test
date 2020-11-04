import React from "react";
import { IVideo } from "../../state/types";
import EmptyResults from "../empty-results";

import Video from "../video";

import "./styles.css";

export interface ISearchResults {
  results: IVideo[];
}

export default function SearchResults({ results = [] }: ISearchResults) {
  return (
    <>
      {results.length ? (
        <div className="results-container">
          <div className="results">
            {results.map((video) => (
              <Video {...video} key={video.id} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyResults />
      )}
    </>
  );
}
