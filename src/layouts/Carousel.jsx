import {useState, useEffect} from 'react'
import leftArrow from '/leftarrow.svg'
import rigthArrow from '/rigtharrow.svg'
import circle from '/circle.svg'
import circleEmpty from '/circleEmpty.svg'
import Icon from './Icon'

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
                <Icon fn={previous} icon={leftArrow}/>
                {selectedElement}
                <Icon fn={next} icon={rigthArrow}/>
            </div>
            <div className='selectors'>
                {elementsArray.map((child,indexmap) =>{
                        let selector
                        indexmap === selectedIndex ? selector = circle :  selector = circleEmpty
                        return <Icon key={indexmap} fn={()=>select(indexmap)} icon={selector}/>
                    })
                }
            </div>
        </div>
    )
}