import millify from "millify";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
   
    return (
        <div>

            <h1 className="text-xl my-3 font-bold">{video.title} </h1>

            <section className="flex justify-between">
                {/* sol */}
                <div className="flex gap-4 items-center">
                    <img className="w-12 h-12 rounded-full cursor-pointer" src={video.channelThumbnail[0].url} alt={video.channelTitle} />
                    <div>
                        <h4 className="font-bold">{video.channelTitle}</h4>
                        <p className="text-gray-400">{video.subscriberCountText} </p>
                    </div>
                </div>

                {/* sağ*/}
                <div className="flex items-center bg-zinc-700 rounded-full cursor-pointer">
                    <div className="flex gap-1 items-center py-2 px-6 text-xl border-r">
                        {millify(video.likeCount)} <AiOutlineLike />
                    </div>
                    <div className="flex gap-1 items-center py-2 px-6 text-xl">
                        <AiOutlineDislike />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ChannelInfo
