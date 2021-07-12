const INITIAL_STATE = [
    {
        name:"Hats",
        url:"https://i.ibb.co/ypkgK0X/blue-beanie.png",
        size:'',
        path:'hats'
    },
    {
        name:"Jackets",
        url: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        size:'',
        path:''
    },
    {
        name:"sneakers",
        url: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        size:'',
        path:''
    },
    {
        name:"Men",
        url: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        size:'large',
        path:''
    },
    {
        name:"women",
        url: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        size:'large',
        path:''               
    }
]

export const sectionsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default : return(state)
    }
}
