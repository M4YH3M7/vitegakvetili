export default function Message({count}){
    let message = "click"
    if (count < 0) 
        {
        message = "negative's click"
    }
    else if (count === 0 )
        {
        message = "click"
    }
    else if (count < 5) 
        {
        message = "click more"
    }
    else if (count >= 10)
        {
        message = "more"
    }
    else if (count === 20)
        {
        message = 'MORE!'
    }

    return <p>{message}</p>
}