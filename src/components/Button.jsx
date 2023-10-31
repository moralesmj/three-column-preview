export default function Button({textColor}) {
    
    return (
        <button type="button" className={`lexend-deca-400 p-3 w-36 ${textColor} bg-very-light-gray hover:bg-very-light-gray/0 hover:border-solid hover:border-2 hover:border-very-light-gray hover:text-very-light-gray  rounded-full`}>Learn More</button>
    );
}