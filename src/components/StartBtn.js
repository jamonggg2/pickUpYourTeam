import '../fonts/font.css';
export default function StartBtn({ text, onClick }){

    const handleClick = () => {
        onClick();
      };

    return(
        <button className="btn btn-outline w-[250px] h-[50px] rounded-full text-white text-center m-[10px] p-[10px] text-[20px]"
            style={{fontFamily:'neodgm'}}
            onClick={handleClick}>
            {text}
        </button>
    );
};
