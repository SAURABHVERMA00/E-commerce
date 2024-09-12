export const color=[
    "White",
    "Black",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Pink",
    "Beige"
]

export const filters=[
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white",label:"White"},
            {value:"black",label:"Black"},  
            {value:"red",label:"Red"},
            {value:"blue",label:"Blue"},
            {value:"green",label:"Green"},
            {value:"yellow",label:"Yellow"},
            {value:"pink",label:"Pink"},
            {value:"purple",label:"Purple"},
            {value:"beige",label:"Beige"},
        ]
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"xs",label:"XS"},
            {value:"s",label:"S"},
            {value:"m",label:"M"},
            {value:"l",label:"L"},
            {value:"xl",label:"XL"},
            {value:"xxl",label:"XXL"},
        ]
    }


];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
          
            {value:"100-200",label:"₹100 To ₹200"},
            {value:"300-400",label:"₹300 To  ₹400"},
            {value:"400-500",label:"₹400 To ₹500"},
            {value:"500-600",label:"₹500 To ₹600"},
            {value:"600-700",label:"₹600 To ₹700"},
            {value:"700-800",label:"₹700 To ₹800"},
            {value:"800-900",label:"₹800 To ₹900"},
            {value:"900-1000",label:"₹900 To ₹1000"},
            {value:"1000-3000",label:"₹3000 To Above"},
        ]
    },{
        id:"discount",
        name:" Discount Range",
        options:[
            {value:"10",label:"10% And Above"},
            {value:"20",label:"20% And Above"},
            {value:"30",label:"30% And Above"},
            {value:"40",label:"40% And Above"},
            {value:"50",label:"50% And Above"},
            {value:"60",label:"60% And Above"},
            {value:"70",label:"70% And Above"},
            {value:"80",label:"80% And Above"},
            {value:"90",label:"90% And Above"},
           
        ]
    },{
        id:"stock",
        name:"Availability",
        options:[
            {value:"inStock",label:"In Stock"},
            {value:"outOfStock",label:"Out Of Stock"},
        ]
    }

]

export const sortOptions=[
    {name:"Price: Low to High",query:"price_low" ,  current:false},
    {name:"Price: High to Low",query:"price_high" ,  current:false},
   
]