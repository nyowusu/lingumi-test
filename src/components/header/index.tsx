import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../App";
import { loadingText } from "../../containers/content";
import { setSearchBy, setSearchValue } from "../../state/actions";
import { ITutorials } from "../../state/types";
import useDebounce from "../../utils/debounce";

import "./styles.css";

export const RadioButtonValues = {
  term: "term",
  tag: "tag",
};

export default function Header() {
  const dispatch = useDispatch();

  const { loading } = useSelector(({ loading }: ITutorials) => ({ loading }));

  const [searchByTerm, setSearchByTerm] = useState<string>(
    RadioButtonValues.term
  );
  const [value, setValue] = useState<string>("");

  function handleSearchByChange(e: FormEvent<HTMLInputElement>) {
    setSearchByTerm(e.currentTarget.value);
    setValue("");
  }

  function handleSearchValueChange(e: FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  function handleReload() {
    loadData(dispatch);
  }

  const debounceValue = useDebounce(value);

  useEffect(() => {
    dispatch(setSearchValue(debounceValue));
    dispatch(setSearchBy(searchByTerm));
    return () => {};
  }, [debounceValue, searchByTerm, dispatch]);

  useEffect(() => {
    dispatch(setSearchBy(RadioButtonValues.term));
    return () => {};
  }, []);

  return (
    <div className="container">
      <div className="search">
        <div className="search-by">
          <span>Search:</span>
          <div>
            <input
              type="radio"
              name="search"
              id="search"
              defaultChecked
              value={RadioButtonValues.term}
              onChange={handleSearchByChange}
            />
            <label htmlFor="search">by topics</label>
          </div>
          <div>
            <input
              type="radio"
              name="search"
              id="searchByTag"
              value={RadioButtonValues.tag}
              onChange={handleSearchByChange}
            />
            <label htmlFor="searchByTag">by activity</label>
          </div>
        </div>
        <div className="search-data">
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            className="search-term"
            value={value}
            onChange={handleSearchValueChange}
            placeholder={
              searchByTerm === RadioButtonValues.term
                ? "e.g. places or animals"
                : "e.g. exciting, exploring, energetic"
            }
          />
          <button
            type="submit"
            disabled={loading}
            className="search-button"
            onClick={handleReload}
          >
            {loading ? loadingText : "Refresh Tutorials"}
          </button>
        </div>
      </div>
    </div>
  );
}
