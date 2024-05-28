import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { StaticImageData } from "next/image";

export type ProjectCardProps = {
  imgUrl: StaticImageData | string;
  title: string;
  description: string;
  previewUrl: string;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  previewUrl,
}: ProjectCardProps) => {
  return (
    <div >
      <div
        className="projectCard_Container group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="icon_overlay">
          {/* <Link
            href={gitUrl}
            className="overlay_links"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link> */}
          <Link href={previewUrl} className="overlay_links" target="_blank">
            <EyeIcon className="projectCard_icon" />
          </Link>
        </div>
      </div>
      <div className="details_container">
        <h5 className="details_heading">{title}</h5>
        <p className="details_description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
