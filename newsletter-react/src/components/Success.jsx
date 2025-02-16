export default function Success( {setFilled, mailName = "defaultMail@gmail.com"} ){
    return (
        <div className="filled sm:max-w-md bg-white rounded-3xl p-10 flex flex-col gap-6">
            <img className="max-w-13" src="./icon-success.svg" alt="" />
            <h2 className=" text-3xl sm:text-5xl font-bold" >Thanks for subscribing!</h2>
            <p>
                A confirmation email has been sent to <span className="font-bold">{mailName}.</span> Please open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={() => {setFilled(false)}} className="bg-[var(--blue800)] mt-4.5 font-medium text-white py-2.5 px-3.5 rounded-lg active:bg-[var(--red)]">
              Dismiss message
            </button>              

        </div>
    )
}