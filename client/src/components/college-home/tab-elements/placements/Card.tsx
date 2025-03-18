type Props = {
    Icon: React.ReactNode;
    Title:string,
    Content: React.ReactNode;    
}
const Card = ({Icon, Title, Content}:Props) => {
  return (
    <>
    <div className="space-y-2">
        <div className="bg-[#D0D9FF] rounded-lg p-2 w-max">
            {Icon}
        </div>
        <h3 className="text-primary font-manrope font-semibold">
            {Title}
        </h3>
        <div>
            {Content}
        </div>
    </div>
      
    </>
  )
}

export default Card
