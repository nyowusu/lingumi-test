export interface ITutorials {
  loading: boolean;

  searchBy: string;

  searchValue: string;

  videos: IVideo[];
}

export interface IVideo {
  id: string;
  videoUrl: string;
  videoTitle: string;
  tags: string[];
  teacherName: string;
  teacherId: string;
  averageUserRating: number;
}
