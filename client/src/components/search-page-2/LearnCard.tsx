const LearnCard = ({
    image, title, description
}: {  image: string, title: string, description: string }) => {
  return (
    <>
      <div className="p-4 border-1 border-[#a9b6fe] rounded-3xl space-y-2 h-full">
        <div className="flex space-x-2">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="my-auto text-[14px] text-primary font-bold font-manrope">
                {title}
            </div>
        </div>
        <p className="text-sm font-manrope text-[13px] font-medium">
            {description}
        </p>

      </div>
    </>
  )
}

export default LearnCard
