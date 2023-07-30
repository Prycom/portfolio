

const Card = () => {
    return (
        <div className='wrapper flex flex-col h-80 w-full border-2 bg-black border-black md:w-80'>
            <div id='portfolio' className='flex flex-col w-full h-full bg-purple-500 rounded px-2 py-2'>
                <span className='text-2xl'>{title}</span>
                <div className='works_content flex flex-row h-full w-full'>
                    <div className='left_part flex h-full w-1/5'>
                        <img src={left} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' />
                    </div>
                    <div className='middle_part flex h-full w-full'>
                        
                    </div>
                    <div className='right_part  flex h-full w-1/5'>
                        <img src={right} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' />
                    </div>
                </div>
            </div>
        </div>
    )
}