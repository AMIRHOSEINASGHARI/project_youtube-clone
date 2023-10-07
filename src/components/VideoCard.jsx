//* Next
import Image from "next/image";
import Link from "next/link";
//* Components
import millify from "millify";
import moment from "moment/moment";
//* React Icons
import { AiFillCheckCircle } from "react-icons/ai";

const VideoCard = ({
  videoId,
  publishedAt,
  channelId,
  title,
  thumbnails,
  channelTitle,
}) => {
  //? Generate a random number of views
  const maxViews = 10000;
  const randomViews = Math.floor(Math.random() * maxViews);

  return (
    <div>
      <Link href={`/watch?v=${videoId}`}>
        <div className="w-auto h-[220px] xl:h-[250px]">
          <Image
            src={thumbnails?.medium?.url}
            width={300}
            height={300}
            alt={title}
            className="object-cover w-full h-full sm:rounded-2xl"
          />
        </div>
      </Link>
      <div className="p-3">
        <p className="font-bold text-md">{title}</p>
        <Link
          href={`/channel/${channelId}`}
          className="text-sm text-gray-500 flex items-center gap-1 w-fit pt-1"
        >
          <span>
            <AiFillCheckCircle />
          </span>
          {channelTitle}
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <p>{millify(randomViews)} Views</p>
          &bull;
          <p>{moment(publishedAt).startOf("ss").fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
