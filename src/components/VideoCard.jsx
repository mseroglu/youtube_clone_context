import millify from "millify"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {

  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  if (video.type !== "video") return;
  const link = isHover && video.richThumbnail ? video.richThumbnail[0].url : video.thumbnail[video.thumbnail?.length - 1].url

  return (
    <div className={`${isRow ? 'row' : ''} cursor-pointer`}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      {/* Resim alanı */}
      <div className="">
        <img src={link} alt="img" className="rounded-lg h-full w-full" />
      </div>
      {/*Video alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img src={video.channelThumbnail && video.channelThumbnail[0].url} alt="logo" className="w-14 h-14 rounded-full c-pic" />
        <div>
          <h4 className="text-xl font-bold line-clamp-2">{video.title}</h4>
          <p className="text-gray-400">{video.channelTitle}</p>
          <div className="flex gap-5 text-gray-400">
            <p className="flex gap-2">
              <span>{millify(video.viewCount)}</span>
              <span className="text">Görüntülenme</span>*
            </p>
            <p className="whitespace-nowrap"> {video.publishedTimeText} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
