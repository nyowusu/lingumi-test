import React from "react";
import SearchResults from "../../components/results";
import Header, { RadioButtonValues } from "../../components/header";
import {
  getTopRatedTutorialsForTags,
  searchForTutorials,
} from "../../utils/search";
import { ITutorials, IVideo } from "../../state/types";
import { useSelector } from "react-redux";
import EmptyResults from "../../components/empty-results";
import { BounceLoader } from "react-spinners";

import "./styles.css";

export const loadingText = "please wait we are loading tutorials ...";

export default function TheContent() {
  const { videos, searchBy, searchValue, loading } = useSelector(
    ({ videos, searchBy, searchValue, loading }: ITutorials) => ({
      videos,
      searchBy,
      searchValue,
      loading,
    })
  );

  let results: IVideo[] = [];

  if (searchBy === RadioButtonValues.term)
    results = searchForTutorials(videos, searchValue);

  if (searchBy === RadioButtonValues.tag)
    results = getTopRatedTutorialsForTags(videos, searchValue);

  return (
    <div>
      <Header />
      {!loading ? (
        <SearchResults results={results} />
      ) : (
        <div className="empty-results">
          <div className="loading">
            <BounceLoader loading={loading} color="blue" />
          </div>
          <EmptyResults text={loading ? loadingText : ""} />
        </div>
      )}
    </div>
  );
}
