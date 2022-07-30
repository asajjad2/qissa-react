export default function input({label,type,onChange,placeholder,value,className,name,isRequired,width}){
    
    let customStyle= {
        width: width?(width):null
    }
    
    return (

        <div id="input" style={customStyle} className={className}>
        
            {
                label?(        
                    <h4 className="text-sm medium text-gray label">{label}</h4>
                ):null
            }

            {
                isRequired?(
                    <input
                        onChange={e=>onChange(e.target)}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        className="text-md normal"
                        name={name}
                        required
                    />
                ):(
                    <input
                        onChange={e=>onChange(e.target)}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        className="text-md normal"
                        name={name}
                    />
                )
            }

            
        
        
        
    </div>
    );
}