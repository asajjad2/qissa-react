
export default function LinksColumn({data}){

    let linksList = data.map((dataItem)=>{
        return (<a href={dataItem.url} className="text-md medium"><li>{dataItem.name}</li> </a>);
    })

    linksList = linksList.filter((dataItem,index)=>{
        return index > 0;
    })


    return(
        <div className="links-column">
            <h4 className="text-sm semibold">{data[0].name}</h4>
            <ul className="links">
                {linksList}
            </ul>
        </div>
    );
}