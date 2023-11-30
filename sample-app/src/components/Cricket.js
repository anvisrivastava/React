function Cricket({name,description,image}){
    //const name=props.name;
    //const description =props.description;
    //const image =props.image;
    //const{name,description,image}=props;
    return(
        <li>
            <p>{name}</p>
            <p>{description}</p>
            <p><img src={image} classNmame="img-thumbnail rounded mx-auto d-block" alt={name}/></p>
        </li>
    )
}
export default Cricket;