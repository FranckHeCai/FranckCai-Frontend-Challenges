import { useEffect, useState } from "react";

const Base = ({setFilled , mail , setMail}) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 770);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = (e) =>{
        e.preventDefault()
        setFilled(true)
    }

    return (
        <>
            <div className="all flex flex-col gap-5 w-full md:flex-row bg-[var(--white)] md:max-w-4xl p-5 rounded-3xl">
                <div className="left flex-1 flex flex-col justify-center gap-7 md:px-7">
                <h2 className="text-3xl sm:text-5xl text-center font-bold text-[var(--blue800)]">Stay updated!</h2>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className="list flex flex-col gap-1.5">
                    <div className="flex gap-3">
                    <img src="./icon-list.svg" alt="" />
                    <p className="text-[var(--blue800)] font-medium">Product discovery and building what matters</p>
                    </div>
                    <div className="flex gap-3">
                    <img src="./icon-list.svg" alt="" />
                    <p className="text-[var(--blue800)] font-medium">Measuring to ensure updates are a success</p>
                    </div>
                    <div className="flex gap-3">
                    <img src="./icon-list.svg" alt="" />
                    <p className="text-[var(--blue800)] font-medium">And much more!</p>
                    </div>
                </div>
                <form className="mail flex flex-col gap-1">
                    <label className="font-medium " htmlFor="email">Email address</label>
                    <input required className="outline-1 rounded py-2 px-3.5" id="email" type="email" value={mail} onChange={(e)=>{setMail(e.target.value)}} placeholder="email@company.com" />
                    <button onClick={handleClick} className="bg-[var(--blue800)] mt-4.5 font-medium text-white py-2.5 px-3.5 rounded-lg active:bg-[var(--red)]">Subscribe to monthly newsletter</button>
                </form>
                </div>
                <div className="right flex-1">
                <img className="w-full object-cover" 
                    src={window.innerWidth>770
                        ? "/illustration-sign-up-desktop.svg"
                        : "/illustration-sign-up-mobile.svg"
                    } 
                    alt="" />
                </div>
            </div>
        </>
    )
}

export default Base;