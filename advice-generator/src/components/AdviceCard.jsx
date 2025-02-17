export default function AdviceCard ({ advice = "You have no enemies", id = 0, getAdvice}){

    return(
        <div className="max-w-lg bg-slate-700 rounded-xl p-10 flex flex-col gap-5 items-center relative">
            <h2 className="text-md sm:text-lg text-emerald-400 font-medium">Advice #{id}</h2>
            <p className="text-lg sm:text-xl text-center font-medium">"{advice}"</p>
            <img className="mb-5" src="/pattern-divider-desktop.svg" alt="" />
            <button onClick={()=>{ getAdvice() }} className="bg-emerald-400 p-3.5 rounded-full absolute bottom-[-25px] active:shadow-[0_0_10px_5px_rgba(16,185,129,1)]"><img src="/icon-dice.svg" alt="" /></button>
        </div>
    )
}