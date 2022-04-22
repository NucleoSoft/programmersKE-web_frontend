import CodeBar from './CodeBar'
import CodeSpace from './CodeSpace';

function OnlineCompiler(){
    return(
        <div className="bg-white h-screen w-full">
            <CodeBar />
            <h1 className="font-[Audiowide] p-2 w-full text-primary 
                           text-[70px] text-right">Online Compiler</h1>
            <p className="text-right font-[Audiowide] mr-2 p-3">
                Practice your coding and programming here in our 
                interactive online playground. Supports most popular
                languages at the moment.<br /> More coming soon 
            </p>
            <CodeSpace/>
        </div>
    )
}

export default OnlineCompiler;