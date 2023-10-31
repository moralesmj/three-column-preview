import Button from "./Button";

export default function Card({ bgColor = "bg-bright-orange", corners = "rounded-none", image = "default.jpg", title = "cars", content = "lorem ipsum", textColor = "text-bright-orange"}) {
    return (
        <main className={`${bgColor} w-5/6 sm:w-80 p-12 space-y-10 ${corners}`}>
            <section>
                <img src={image} alt="cars" />
            </section>
            <h2 className="big-shoulders-700 text-very-light-gray text-4xl uppercase">{title}</h2>
            <p className="lexend-deca-400 text-transparent-white text-[15px] pb-0 sm:pb-14">{content}</p>
            <Button textColor={textColor}/>
        </main>
    );
}