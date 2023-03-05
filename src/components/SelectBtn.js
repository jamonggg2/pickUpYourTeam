import '../fonts/font.css';

export default function SelectBtn({text, onClick}){
    const handleClick = () => {
        onClick();
      };
    
      return (
        <button className="btn m-[20px] font-light w-1/2" onClick={handleClick} style={{ fontFamily: 'neodgm' }}>
          {text}
        </button>
      );
}