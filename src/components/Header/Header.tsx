type HeaderProps = {
    mode: string,
    onclick: ()=>void
}
export const Header = ({mode, onclick}:HeaderProps) => {


    return (
        <section className="header">
            <h1>PortFolio</h1>
            <button
                className="mode mode-active"
                id='light-mode'
                onClick={onclick}
            >
                <img src="icons/light-mode.png" alt=""/>
            </button>
            <button
                className="mode"
                id='dark-mode'
                onClick={onclick}
            >
                <img src="icons/dark-mode.png" alt=""/>
            </button>
        </section>
    );
};