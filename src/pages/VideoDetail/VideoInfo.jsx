import millify from "millify"
import { useState } from "react"

const VideoInfo = ({ video }) => {
    // metnin ne kadarı gösterilecek state i
    const [isFull, setIsFull] = useState(false);

    // tarih formatlama
    const date = new Date(video.publishDate).toLocaleDateString("tr", {
        day: "numeric",
        month: "short",
        year: "numeric"
    })

    const text = isFull ? video.description : video.description.slice(0, 150) + " ..daha fazla";
    return (
        <div className="bg-zinc-700 rounded-lg p-2 mt-4 cursor-pointer hover:bg-opacity-80"
            onClick={() => setIsFull(!isFull)}>
            <div className="flex gap-4 mb-2">
                <p>{millify(video.viewCount)} Görüntülenme</p>
                <p>{date} </p>
            </div>
            <p>{text.split("\n").map((line, i) => (
                <div key={200+i}>
                    {line} <br />
                </div>
            ))} </p>
        </div>
    )
}

export default VideoInfo
