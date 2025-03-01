
function Button ({ name, onClick })
{
    return (
        <div 
        onClick = {onClick}
        className="w-1/7 h-[6vh] pt-1.5 flex flex-row font-m6x11 text-4xl text-white bg-gray-900/30 shadow-md rounded-sm justify-center items-center px-5 
        tracking-wide transform transition duration-200 hover:scale-110 hover:cursor-default hover:bg-gray-900/50 select-none">
        {name}
    </div>
    );
}

export default Button