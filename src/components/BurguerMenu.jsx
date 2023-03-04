function BurguerMenu({fn, condition}) {
    return (
        <div className="burguer" onClick={()=> fn()}>
            <span className={condition ? 'burguerTop' : ''}></span>
            <span className={condition ? 'burguerMiddle' : ''}></span>
            <span className={condition ? 'burguerBottom' : ''}></span>
        </div>
    )
}

export default BurguerMenu
