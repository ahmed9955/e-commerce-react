export const handleCardItems = (itemsInCard, newItem ) => {
    const existingItem = itemsInCard.find( item => item.id === newItem.id)
    
    if (existingItem) {
        return itemsInCard.map(item => item.id === existingItem.id? {...item, quantity: item.quantity + 1}:item) 
    }   
    
    return [...itemsInCard, {...newItem, quantity: 1 }]
}   

