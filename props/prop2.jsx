function Listvalue(props){
    const data=props.value
    const store=data.map((store,index)=>{
        console.log(store);
        return<li>{index+1} {store}</li>
    }
    )
    return(<>
        <ul>
            {store}
        </ul>
        </>
    )
}

export default Listvalue;

