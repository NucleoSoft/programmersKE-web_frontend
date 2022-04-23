function errorPage()
{
    return(
        <div className="h-screen ">
            <h1 className="text-[70px] text-center font-[TechnoBoard]
                        text-primary mt-10">Yikess!</h1>
            <h3 className="text-center m-2 text-primary font-[Audiowide]
                            text-[50px]">This page does not exist!</h3>
            <span className="text-center text-secondary text-lg font-[Audiowide]">

            </span>

            <goBack />

        </div>
    )
}

const goBack = () =>
{
    <button className="text-center text-white bg-black rounded-full 
                        hover:rounded-xl transition-all delay-300">Go Back to previous page
    </button>
}

export default errorPage;