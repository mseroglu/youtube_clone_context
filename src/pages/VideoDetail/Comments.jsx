import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Comments = ({ data }) => {
    
    return (
        <div className="my-6">
            <h2 className="text-xl font-bold">{data.commentsCount} Yorum </h2>
            <input type="text" placeholder="Yorum ekleyiniz"
                className="w-full bg-transparent border-b p-2 outline-none mb-5" />

            <div className="flex flex-col gap-3">
                {data.data.map((comment, i) => (
                    <div key={100+i} className="flex gap-3 items-start px-1 py-2">
                        <img src={comment.authorThumbnail[0].url} alt="img"
                            className="rounded-full w-10 h-10" />

                        <div className="flex flex-col gap-2">
                            <h5 className="flex gap-2 items-center">
                                <span className="font-semibold">{comment.authorText} </span>
                                <span className="text-gray-400">{comment.publishedTimeText} </span>
                            </h5>

                            <p>{comment.textDisplay} </p>

                            <div className="flex gap-3 items-center">
                                <div className="flex gap-1 p-1 items-center hover:bg-zinc-700 rounded cursor-pointer"> <AiOutlineLike /> {comment.likesCount} </div>
                                <div className="p-2 items-center hover:bg-zinc-700 rounded cursor-pointer"> <AiOutlineDislike /> </div>
                                <button className="p-1 items-center hover:bg-zinc-700 rounded cursor-pointer">Yanıtla</button>
                            </div>

                            {comment.replyCount >0 && <div className="flex w-fit items-center p-1 rounded-md gap-1 text-blue-500 hover:bg-[#36639662]"><IoMdArrowDropdown /> {comment.replyCount} yanıt </div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments
