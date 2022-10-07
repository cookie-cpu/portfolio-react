import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, index}) => {
    return (
        <span>
            {
                strArray.map((elem, i) =>(
                    <span key={elem + i} className={`${letterClass} _${i + index}`}>
                        {elem}
                    </span>

                ))
            }
        </span>
    )
}

export default AnimatedLetters