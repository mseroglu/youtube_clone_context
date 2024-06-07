import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import api from "../../utils/api";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";
import VideoCard from "../../components/VideoCard";


const VideoDetail = () => {
    const [video, setVideo] = useState(null);
    const [comments, setComments] = useState(null);
    // arama parametrelerine erişim için kullandık
    const [searchParams] = useSearchParams();
    // urlden "v" isimli parametrenin değerine ulaşıyoruz
    const id = searchParams.get("v");

    useEffect(() => {
        api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data)).catch((err) => console.log(err));

        api.get(`/comments?id=${id}`).then((res) => setComments(res.data)).catch((err) => console.log(err));
    }, [id])
    return (
        <div className="detail-page h-screen px-[40px] py-[60px] max-md:p-[20px] overflow-auto gap-3">
            {/* Video içeriği*/}
            <div className="" >
                <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] ">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        controls
                        playing={true}
                        width={"100%"}
                        height={"100%"}
                    />
                </div>

                {!video || !comments
                    ? <p>Yükleniyor</p>
                    : (<>
                        <ChannelInfo video={video} />
                        <VideoInfo video={video} />
                        <Comments data={comments} />
                    </>)}


            </div>

            {/* İlgili videolar */}
            <div className="wrapper flex flex-col gap-2 hover:overflow-auto">

                {video?.relatedVideos.data.map((item) => (
                    <VideoCard isRow ={true} key={item.videoId} video={item} />
                ))}

            </div>

        </div>
    )
}

export default VideoDetail
