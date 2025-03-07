

const UpdatesCard = ({Date, Content}: {Date: string, Content: string}) => {
  return (
    <>
      <div className="bg-white rounded-2xl p-3 space-y-2 w-max mb-4">
        <p className="text-gray-400 text-[11px]">
            {Date}
        </p>
        <p className="font-manrope text-[13px] w-50">
            {Content}
        </p>
        <button className="text-primary font-manrope font-semibold text-[15px]">
            Read More
        </button>
      </div>
    </>
  )
}

export default UpdatesCard;
