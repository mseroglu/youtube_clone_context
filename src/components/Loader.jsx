
const Loader = () => {
    const arr = new Array(20).fill(1);
    return arr.map((item, index) => (
        <div key={index} className="p-4 md:p-6 animate-pulse">
            <div className="h-56 bg-gray-700 rounded"></div>

            <div className="flex items-center mt-4 gap-4">
                <div className="bg-gray-700 h-12 w-12 rounded-full" />

                <div className="flex-1">
                    <div className="h-3 rounded-full bg-gray-700 w-full" />
                    <div className="h-3 rounded-full bg-gray-700 w-44 my-3" />

                    <div className="flex gap-2">
                        <div className="w-28 h-2 rounded-full bg-gray-700 " />
                        <div className="w-28 h-2 rounded-full bg-gray-700 " />
                    </div>
                </div>

            </div>
        </div>
    ))
}

export default Loader