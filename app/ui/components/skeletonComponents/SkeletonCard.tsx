export default function SkeletonCard(){

    return(<div className=" w-[285px] h-[352px] border border-solid border-gray-600 border-3 rounded-2xl bg-orange-100 flex flex-col items-center shadow-lg">
    <div className="flex flex-col justify-between  w-full h-full rounded-xl  border-2 border-solid border-gray-600 border-t-none">
      <div>
        <div className="skeletonContent"></div>
        <div className="w-full w-[283px] h-[180px] object-cover">
              </div>
        
        <div className="flex flex-col items-center gap-3 ">
          <div className="flex w-full justify-between border border-solid border-gray-600 bg-gray-600 text-white p-1">
          <div className="skeletonContent"></div>
          </div>
          <div className="skeletonContent"></div>

        </div>
      </div>
      <div className="w-full font-bold text-center p-[10px] flex gap-2">
      <div className="skeletonContent"></div>
      </div>
    </div>
  </div>
    )
}