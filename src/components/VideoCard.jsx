import Image from "next/image";
import Link from "next/link";

const VideoCard = ({
  publishedAt,
  channelId,
  title,
  description,
  thumbnails,
  channelTitle,
}) => {
  return (
    <div>
      <div className="w-auto h-[220px] xl:h-[250px]">
        <Image
          src={thumbnails?.medium?.url}
          width={300}
          height={300}
          alt={title}
          className="object-cover w-full h-full sm:rounded-2xl"
        />
      </div>
      <div className="p-3">
        <p className="font-bold text-md">{title}</p>
        <Link href="/" className="text-sm text-gray-500">
          {channelTitle}
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
