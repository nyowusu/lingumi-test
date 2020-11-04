import { IVideo } from "../state/types";

/*
Inputs: a collection of tags, typed by the user
Outputs: the top 20 rated video tutorials, which contain any of the tags provided
*/
export function getTopRatedTutorialsForTags(
  videos: IVideo[],
  searchValue: string,
  topRated = 20
): IVideo[] {
  if (searchValue?.trim()) {
    const searchValues = searchValue.split(" ");

    let filteredData: IVideo[] = videos;

    searchValues.forEach((search) => {
      filteredData = filteredData.reduce((acc, next) => {
        const tags = next.tags.join(", ").toLowerCase();

        if (tags.includes(search.trim())) acc.push(next);

        return acc;
      }, [] as IVideo[]);
    });

    filteredData = filteredData
      .sort((one, two) => two.averageUserRating - one.averageUserRating)
      .slice(0, topRated);

    return filteredData;
  }

  return videos;
}

/*
Inputs: words typed by the user
Outputs: a collection of tutorials, which match the user search term
*/
export function searchForTutorials(
  videos: IVideo[],
  searchValue: string
): IVideo[] {
  if (searchValue?.trim()) {
    const searchValues = searchValue.split(" ");

    let filteredData: IVideo[] = videos;

    searchValues.forEach((search) => {
      filteredData = filteredData.reduce((acc, next) => {
        if (next.videoTitle.toLowerCase().includes(search.trim()))
          acc.push(next);

        return acc;
      }, [] as IVideo[]);
    });

    return filteredData;
  }

  return videos;
}
