import {useState} from 'react'
import leftArrow from '/leftarrow.svg'
import rigthArrow from '/rigtharrow.svg'
import Icon from './Icon'

export default function Carrousel({children}) {
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

    return (
        <>
            <Icon fn={previous} icon={leftArrow}/>
            {selectedElement}
            <Icon fn={next} icon={rigthArrow}/>
        </>
    )
}