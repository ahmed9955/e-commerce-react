import CollectionItem from "../collection-item/collection-item"
import './preview-style.scss'
 const Preview = ({items}) => {
    return(
       <div className="preview" >
           {items.filter((item,idx) => idx < 4).map(({id,...otherProps}) => <CollectionItem key={id} {...otherProps} />)}       
       </div>
    )
}

export default Preview