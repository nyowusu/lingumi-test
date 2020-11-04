import React from "react";
import { IVideo } from "../../state/types";
import Teacher from "../icons/teacher";
import VideoImage from "../icons/video";

import "./styles.css";

export default function Video(video: IVideo) {
  return (
    <div className="vid-container">
      <div className="image">
        <a href="#">
          <VideoImage height={200} width={200} />
        </a>
      </div>
      <div className="details">
        <span className="title">{video.videoTitle}</span>
        <p>{video.tags.join(", ")}</p>
      </div>
      <div className="teacher-ratings">
        <div className="teacher">
          <Teacher />
          <span className="teacher-name">{`I'm ${video.teacherName}`}</span>
        </div>
        <div className="ratings">
          <span>People have rated by lesson:&nbsp;</span>
          <span>{`${Math.round(video.averageUserRating * 100)}%`}</span>
        </div>
      </div>
    </div>
  );
}
