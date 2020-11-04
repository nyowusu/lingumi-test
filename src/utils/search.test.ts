import { getTopRatedTutorialsForTags, searchForTutorials } from "./search";

const data = [
  {
    id: "3fda6df9-97aa-4039-ac22-5978e6c73d5f",
    videoUrl:
      "https://thisurldoesnotactuallyexist.totallynotreal/3fda6df9-97aa-4039-ac22-5978e6c73d5f",
    videoTitle: "Practice: Places",
    tags: ["Exciting", "Energetic", "Medium", "Exploring"],
    teacherName: "Katy",
    teacherId: "611601f4-7a7a-4e43-a60f-0265cd18dfce",
    averageUserRating: 0.6683530068243697,
  },
  {
    id: "8f29efe0-adf1-4286-b0e9-473ca01d3f11",
    videoUrl:
      "https://thisurldoesnotactuallyexist.totallynotreal/8f29efe0-adf1-4286-b0e9-473ca01d3f11",
    videoTitle: "Activity: Work",
    tags: ["Hard", "Exciting"],
    teacherName: "Sam",
    teacherId: "ccfdefc6-cf1e-4ea9-b384-0fc3291ccee3",
    averageUserRating: 0.7529116068535009,
  },
  {
    id: "3ab40fbd-a6b5-43c0-af3c-ee02c0fb03e6",
    videoUrl:
      "https://thisurldoesnotactuallyexist.totallynotreal/3ab40fbd-a6b5-43c0-af3c-ee02c0fb03e6",
    videoTitle: "Learn: Vehicles",
    tags: ["Passive", "Moving", "Calming"],
    teacherName: "Trevor",
    teacherId: "5a48d52f-7559-4540-bb6c-97aade16e31d",
    averageUserRating: 0.017716561586782253,
  },
  {
    id: "7b7ee96b-1d71-4e08-b4ac-c568411f1538",
    videoUrl:
      "https://thisurldoesnotactuallyexist.totallynotreal/7b7ee96b-1d71-4e08-b4ac-c568411f1538",
    videoTitle: "Activity: Animals",
    tags: ["Passive", "Exploring"],
    teacherName: "Charlie",
    teacherId: "a6cbae1b-f0e5-485f-86b5-2e1c2b21e374",
    averageUserRating: 0.619561562797813,
  },
  {
    id: "ae8baabb-fc1c-4845-944a-bd1ddfb12f35",
    videoUrl:
      "https://thisurldoesnotactuallyexist.totallynotreal/ae8baabb-fc1c-4845-944a-bd1ddfb12f35",
    videoTitle: "Practice: Places",
    tags: ["Passive", "Engaging", "Exploring", "Moving", "Interactive"],
    teacherName: "Jane",
    teacherId: "10bfe35a-c777-437a-867b-0963860a2cfa",
    averageUserRating: 0.8047369007752212,
  },
  {
    id: "c52117e2-605b-419a-9769-08e6fa00202e",
    videoUrl:
      "https://thisurldoesnotactuallyexist.totallynotreal/c52117e2-605b-419a-9769-08e6fa00202e",
    videoTitle: "Learn: School",
    tags: ["Passive", "Exploring"],
    teacherName: "Natalie",
    teacherId: "46619be7-6f95-42a4-84b6-da80789bd321",
    averageUserRating: 0.907188112390815,
  },
];

describe("Search Function: getTopRatedTutorialsForTags", () => {
  it("should getTopRatedTutorialsForTags for: passive", () => {
    const results = getTopRatedTutorialsForTags(data, "passive", 3);

    expect(results.length).toBe(3);
  });

  it("should getTopRatedTutorialsForTags for: passive exploring", () => {
    const results = getTopRatedTutorialsForTags(data, "passive exploring", 3);

    expect(results.length).toBe(3);
  });

  it("should getTopRatedTutorialsForTags for: passive exploring exciting", () => {
    const results = getTopRatedTutorialsForTags(data, "passive exciting", 3);

    expect(results.length).toBe(0);
  });
});

describe("Search Function: searchForTutorials", () => {
  it("should searchForTutorials for: work", () => {
    const results = searchForTutorials(data, "work");

    expect(results.length).toBe(1);
  });

  it("should searchForTutorials for: places", () => {
    const results = searchForTutorials(data, "places");

    expect(results.length).toBe(2);
  });

  it("should searchForTutorials for: jumpy", () => {
    const results = searchForTutorials(data, "jumpy");

    expect(results.length).toBe(0);
  });
});
