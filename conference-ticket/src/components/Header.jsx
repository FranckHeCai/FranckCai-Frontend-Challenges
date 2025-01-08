import logoMark from "../assets/images/logo-full.svg"

export function Header() {
    return(
        <header>
                <img src={logoMark} alt="ticket pattern" />
                <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p>Secure your spot at next year's biggest coding conference</p>
        </header>
    )
}