import './Title.css'

function Title( {content} ) {
    return (
        <div id={ content } className='div_title'>
            <h2 className='h2_title'>{content}</h2>
        </div>
    )
}

export default Title
