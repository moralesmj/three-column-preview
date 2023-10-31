import Card from "../components/Card";

export default function Home() {
    return (
        <body className="flex flex-col justify-center items-center min-h-screen bg-very-light-gray py-24">
            <main className="flex flex-col sm:flex-row sm:w-full sm:justify-center items-center">
                <Card bgColor="bg-bright-orange" corners="rounded-t-lg sm:rounded-l-lg sm:rounded-r-none" image="/assets/icon-sedans.svg" title="Sedans" content="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." textColor="text-bright-orange" />
                <Card bgColor="bg-dark-cyan" image="/assets/icon-suvs.svg" title="SUVs" content="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." textColor="text-dark-cyan" />
                <Card bgColor="bg-very-dark-cyan" corners="rounded-b-lg sm:rounded-r-lg sm:rounded-l-none" image="/assets/icon-luxury.svg" title="Luxury" content="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." textColor="text-very-dark-cyan" />
            </main>
            <footer className="flex flex-col text-center text-sm space-y-1 pt-2">
                <div>
                    Challenge by <a className="lexend-deca-400 underline" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                </div>
                <div>Coded by <a className="lexend-deca-400 italic" href="https://github.com/moralesmj">moralesmj</a>.</div>
            </footer>
        </body>
    );
}