import Draggable from './Drag';
import './Letters.css';



function Letters() {
    function handleClick(e) {
        e.preventDefault();
        console.log('the letter was clicked');
    }
    return(
        <div className="container">        
            <div >
            <div className="Letters item item-1">
                
          <Draggable><span onClick={handleClick} className="Letter" id="Vowel">A </span></Draggable>
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span onClick={handleClick} className="Letter" id="Vowel">E </span>
        </div>
        
        </div>
        <div >
            <div className="Letters item item-2">
          <span onClick={handleClick} className="Letter" id="Vowel">A </span> 
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span onClick={handleClick} className="Letter" id="Vowel">E </span>
        </div>
        </div>
        <div>
            <div className="Letters item item-3">
          <span onClick={handleClick} className="Letter" id="Vowel">A </span> 
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span onClick={handleClick} className="Letter" id="Vowel">E </span>
        </div>
        </div>
        <div>
            <div className="Letters item item-4">
          <span onClick={handleClick}  className="Letter" id="Vowel">A </span> 
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span onClick={handleClick} className="Letter" id="Vowel">E </span>
        </div>
        </div>
        <div>
            <div className="Letters item item-5">
          <span onClick={handleClick}  className="Letter" id="Vowel">A </span> 
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span onClick={handleClick} className="Letter" id="Vowel">E </span>
        </div>
        </div>
        </div>

        
        
    );
};

export default Letters;