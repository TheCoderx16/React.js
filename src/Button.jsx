function Button(){
    let count = 0;

    const handleClick = (name)=> {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} Stop Clicking me`)
        }
    }

    
    return(
        <button onClick={() => handleClick("Jagdeep")}> click me😒</button>
    )
}
export default Button