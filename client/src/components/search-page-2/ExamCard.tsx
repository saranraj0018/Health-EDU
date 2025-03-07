

const ExamCard = ({Date,Title, Content}: {Date: string, Title: string, Content: string}) => {
  return (
    <>
      <div className="bg-white rounded-2xl p-3 space-y-2 w-max mb-4">
        <p className="text-gray-500 text-[11px] font-medium font-manrope">
            {Date}
        </p>
        <h3 className="font-semibold font-manrope w-50 text-[15px]"> 
          {Title}
        </h3>
        <p className="text-gray-500 text-[12px] w-50">
            {Content}
        </p>
        <button className="text-red-600 font-manrope font-semibold text-[13px]">
            Read More
        </button>
      </div>
    </>
  )
}

export default ExamCard;
