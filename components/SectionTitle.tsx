interface Props{
    title: string;
}

const SectionTitle = ({title}:Props) => {
  return (
    <h2 className='font-bodyFont text-2xl font-semibold flex items-center'>{title}
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-blue-900 ml-6'></span>
    </h2>
  )
}

export default SectionTitle