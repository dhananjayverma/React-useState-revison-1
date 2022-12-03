export const Card=({image,title})=>{
    return(
        <div>
            <img src={image} alt="newimg"/>
            <h>{title}</h>
        </div>
    )
}
