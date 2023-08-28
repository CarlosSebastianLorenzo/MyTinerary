import {useState, useEffect} from 'react'
import { BsCircle, BsCircleFill, BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Carousel({children}) {
    const elementsArray = children.map(child => child)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedElement, setSelectedElement] = useState(elementsArray[0]);

    const previous = () => {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : elementsArray.length - 1;
        setSelectedElement(elementsArray[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const next = () => {
        const condition = selectedIndex < elementsArray.length - 1;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedElement(elementsArray[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const select = (index) => {
        setSelectedElement(elementsArray[index]);
        setSelectedIndex(index);
    }

    useEffect(() => {
        let intervalID = setInterval(()=>{
            next();
        }, 7000)
        return () =>{
            clearInterval(intervalID);
        }
    })

    return (
        <div className='slide'>
            <div className="contentSlide">
                <BsChevronLeft onClick={previous} size="10rem" className="icon"/>
                {selectedElement}
                <BsChevronRight onClick={next} size="10rem" className="icon"/>
            </div>
            <div className='selectors'>
                {elementsArray.map((child,indexmap) =>{
                        let selector
                        indexmap === selectedIndex ?
                        selector = <BsCircleFill className="icon" key={indexmap} onClick={()=>select(indexmap)}/> :
                        selector = <BsCircle className="icon" key={indexmap} onClick={()=>select(indexmap)}/>
                        return selector
                    })
                }
            </div>
        </div>
    )
}