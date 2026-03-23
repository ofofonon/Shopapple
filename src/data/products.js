import iphone16 from "../Assets/IMG-20260310-WA0006.jpg";
import iphone17pro from "../Assets/IMG-20260310-WA0007.jpg";
import iphone17promax from "../Assets/IMG-20260310-WA0008.jpg";
import iphone17air from "../Assets/IMG-20260310-WA0009.jpg";
import iphone162 from "../Assets/IMG-20260310-WA0010.jpg";
import iphone16plus from "../Assets/IMG-20260310-WA0011.jpg";
import iphone16pro from "../Assets/IMG-20260310-WA0012.jpg";
import iphone16promax from "../Assets/IMG-20260310-WA0013.jpg";
import iphone15 from "../Assets/IMG-20260310-WA0014.jpg";
import iphone15pro from "../Assets/IMG-20260310-WA0015.jpg";
import iphone15promax from "../Assets/IMG-20260310-WA0016.jpg";
import iphone14 from "../Assets/IMG-20260310-WA0017.jpg";
import iphone14plus from "../Assets/IMG-20260310-WA0018.jpg";
import iphone14pro from "../Assets/IMG-20260310-WA0019.jpg";
import iphone13 from "../Assets/IMG-20260310-WA0020.jpg";
import iphone13mini from "../Assets/IMG-20260310-WA0021.jpg";
import iphone13pro from "../Assets/IMG-20260310-WA0022.jpg";
import iphone13promax from "../Assets/IMG-20260310-WA0023.jpg";
import iphone12 from "../Assets/IMG-20260310-WA0024.jpg";
import iphone12mini from "../Assets/IMG-20260310-WA0025.jpg";
import iphone12pro from "../Assets/IMG-20260310-WA0026.jpg";
import iphone12promax from "../Assets/IMG-20260310-WA0027.jpg";
import iphonese from "../Assets/IMG-20260310-WA0028.jpg";
import iphone11 from "../Assets/IMG-20260310-WA0029.jpg";
import iphone11pro from "../Assets/IMG-20260310-WA0030.jpg";
import iphone11promax from "../Assets/IMG-20260310-WA0031.jpg";
import iphonexs from "../Assets/IMG-20260310-WA0032.jpg";
import iphonexsmax from "../Assets/IMG-20260310-WA0033.jpg";
import iphonexr from "../Assets/IMG-20260310-WA0034.jpg";
import iphonex from "../Assets/IMG-20260310-WA0035.jpg";
import iphone8 from "../Assets/IMG-20260310-WA0035.jpg";
import iphone8plus from "../Assets/IMG-20260310-WA0036.jpg";





import macbookairm4 from "../Assets/IMG-20260321-WA0002.jpg";
import macbookairm42 from "../Assets/IMG-20260321-WA0003.jpg";
import macbookairm3 from "../Assets/IMG-20260321-WA0004.jpg";
import macbookairm32 from "../Assets/IMG-20260321-WA0005.jpg";
import macbookairm33 from "../Assets/IMG-20260321-WA0006.jpg";

import macbookprom3pro from "../Assets/IMG-20260321-WA0007.jpg";
import macbookprom3max from "../Assets/IMG-20260321-WA0008.jpg";
import macbookairm2 from "../Assets/IMG-20260321-WA0009.jpg";
import macbookairm1 from "../Assets/IMG-20260321-WA0010.jpg";
import macbookairm22 from "../Assets/IMG-20260321-WA0011.jpg";
import macbookairm1pro from "../Assets/IMG-20260321-WA0012.jpg";
import macbookairm1max from "../Assets/IMG-20260321-WA0013.jpg";


import ipadprom5 from "../Assets/IMG-20260318-WA0001.jpg";
import ipadprom52 from "../Assets/IMG-20260318-WA0002.jpg";
import ipadprom42 from "../Assets/IMG-20260318-WA0003.jpg";
import ipadairm2 from "../Assets/IMG-20260318-WA0004.jpg";
import ipadprom2 from "../Assets/IMG-20260318-WA0005.jpg";
import ipad10 from "../Assets/IMG-20260318-WA0006.jpg";
import ipadmini from "../Assets/IMG-20260318-WA0007.jpg";
















const products = [
{
id: 1,
name: "iPhone 17",
category: "iphone",
price: 1500000,

rom: ["128GB","256GB","512GB"],

romPrice:{
"128GB":0,
"256GB":100000,
"512GB":300000
},

colors:[
{ name:"black", hex:"#1f1f1f", image:iphone17promax, price:0 },
{ name:"blue", hex:"#6fa8dc", image:iphone17promax, price:0 },
{ name:"pink", hex:"#f4c2c2", image:iphone17promax, price:0 }
],

sim:["Physical & esim","eSIM"],

simPrice:{
"Physical & esim":0,
"eSIM":-50000
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-170000,
"Used":-330000
}
},

{
id: 2,
name: "iPhone 17 pro",
category: "iphone",
price: 1950000,

rom:["128GB","256GB","512GB","1TB"],

romPrice:{
"128GB":0,
"256GB":150000,
"512GB":350000,
"1TB":650000
},

colors:[
{ name:"black", hex:"#1f1f1f", image:iphone17pro, price:0 },
{ name:"green", hex:"#7dbb6d", image:iphone17pro, price:0 },
{ name:"pink", hex:"#f4c2c2", image:iphone17pro, price:0 }
],

sim:["Physical & esim","eSIM"],

simPrice:{
"Physical & esim":0,
"eSIM":-80000
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-250000,
"Used":-350000
}
},

{
id: 3,
name: "iPhone 17 pro max",
category: "iphone",
price: 2200000,

rom:["128GB","256GB","512GB","1TB"],

romPrice:{
"128GB":0,
"256GB":150000,
"512GB":400000,
"1TB":750000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image:iphone17promax, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image:iphone17promax, price:0 },
{ name:"natural titanium", hex:"#8f8f8f", image:iphone17promax, price:0 }
],

sim:["Physical & esim","eSIM"],

simPrice:{
"Physical & esim":0,
"eSIM":-100000
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-270000,
"Used":-700000
}
},

{
id: 4,
name: "iPad Pro M5 (screen size 11)",
category: "ipad",
price: 449,

rom:["64GB","256GB"],

romPrice:{
"64GB":0,
"256GB":150
},

colors:[
{ name:"silver", hex:"#cfcfcf", image:ipadprom5, price:0 },
{ name:"blue", hex:"#6fa8dc", image:ipadprom5, price:20 },
{ name:"yellow", hex:"#f7d774", image:ipadprom5, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-40,
"Used":-100
}
},

{
id: 5,
name: "iPad Pro M5 (screen size 13)",
category: "ipad",
price: 599,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":200
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:ipadprom52, price:0 },
{ name:"starlight", hex:"#f5f5dc", image:ipadprom52, price:20 },
{ name:"purple", hex:"#c8a2c8", image:ipadprom52, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-60,
"Used":-140
}
},

{
id: 6,
name: "iPad Pro M4 (screen size 13)",
category: "ipad",
price: 999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":300
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:ipadprom42, price:0 },
{ name:"silver", hex:"#cfcfcf", image:ipadprom42, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-200
}
},

{
id:7,
name:"MacBook Air M4 (screen size: 13)",
category:"mac",
price:1099,

rom:["256GB","512GB","1TB"],

romPrice:{
"256GB":0,
"512GB":200,
"1TB":400
},

colors:[
{ name:"midnight", hex:"#1b1f2a", image:macbookairm4, price:0 },
{ name:"starlight", hex:"#f5f5dc", image:macbookairm4, price:20 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm4, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-120,
"Used":-300
}
},

{
id:8,
name:"MacBook Air M4 (screen size: 15)",
category:"mac",
price:1199,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":300
},

colors:[
{ name:"midnight", hex:"#1b1f2a", image:macbookairm42, price:0 },
{ name:"space gray", hex:"#5c5c5c", image:macbookairm42, price:20 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm42, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-120,
"Used":-320
}
},

{
id:9,
name:"MacBook Air M3 (2024)",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookairm3, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm3, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id:10,
name:"iPhone 17 air",
category:"iphone",
price:1600000,

rom:["128GB","256GB","512GB"],

romPrice:{
"128GB":0,
"256GB":100000,
"512GB":350000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image:iphone17air, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image:iphone17air, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image:iphone17air, price:20 }
],

sim:["Physical"],

simPrice:{
"Physical":0

},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-170000,
"Used":-350000
}
},

{
id:11,
name:"iPhone 16",
category:"iphone",
price:1300000,

rom:["128GB","256GB","512GB"],

romPrice:{
"128GB":0,
"256GB":100000,
"512GB":270000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone162, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone162, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone162, price:20 }
],

sim:["Physical & esim","eSIM"],

simPrice:{
"Physical & esim":0,
"eSIM":-50000
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-170000,
"Used":-330000
}
},

{
id:12,
name:"iPhone 16 plus",
category:"iphone",
price:1400000,

rom:["128GB","256GB","512GB"],

romPrice:{
"256GB":100000,
"512GB":300000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone16plus, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone16plus, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone16plus, price:20 }
],

sim:["Physical",],

simPrice:{
"Physical":0,

},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-200000,
"Used":-400000
}
},

{
id:13,
name:"iPhone 16 pro",
category:"iphone",
price:1750000,

rom:["128GB","256GB","512GB","1TB"],

romPrice:{
"128GB":0,
"256GB":100000,
"512GB":300000,
"1TB":500000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone16pro, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone16pro, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone16pro, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":-80000
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-320000,
"Used":-450000
}
},

{
id:14,
name:"iPhone 16 pro max",
category:"iphone",
price:2000000,

rom:["128GB","256GB","512GB", "1TB"],

romPrice:{
"128GB":0,
"256GB":100000,
"512GB":300000,
"1TB":600000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone16promax, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone16promax, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone16promax, price:20 }
],

sim:["eSIM","Physical & esim"],

simPrice:{
"Physical & esim":0,
"eSIM":-330000
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-300000,
"Used":-570000
}
},

{
id:15,
name:"iPhone 15",
category:"iphone",
price:1100000,

rom:["128GB","256GB","512GB"],

romPrice:{
"128GB":0,
"256GB":100000,
"512GB":250000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone15, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone15, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone15, price:20 }
],

sim:["eSIM","Physical & esim"],

simPrice:{
"Physical & esim":0,
"eSIM":-50000
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-130000,
"Used":-300000
}
},

{
id:16,
name:"iPhone 15 pro",
category:"iphone",
price:1400000,

rom:["128GB","256GB","512GB"],

romPrice:{
"128GB":0,
"256GB":100000,
"512GB":300000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone15pro, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone15pro, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone15pro, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":-70000
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-200000,
"Used":-350000
}
},

{
id:17,
name:"iPhone 15 pro max",
category:"iphone",
price:160000,

rom:["128GB","256GB","512GB","1TB"],

romPrice:{
"128GB":0,
"256GB":150000,
"512GB":350000,
"1TB":600000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone15promax, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone15promax, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone15promax, price:20 }
],

sim:["Physical"],

simPrice:{
"Physical":0,
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-270000,
"Used":-400000
}
},

{
id:18,
name:"iPhone 14",
category:"iphone",
price:930000,

rom:["128GB","256GB","512GB"],

romPrice:{
"128GB":0,
"256GB":70000,
"512GB":100000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone14, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone14, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone14, price:20 }
],

sim:["eSIM","Physical & esim"],

simPrice:{
"Physical & esim":0,
"eSIM":-150000
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-200000,
"Used":-320000
}
},

{
id:19,
name:"iPhone 14 plus",
category:"iphone",
price:970000,

rom:["128GB","256GB","512GB"],

romPrice:{
"128GB":0,
"256GB":35000,
"512GB":230000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone14plus, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone14plus, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone14plus, price:20 }
],

sim:["Physical"],

simPrice:{
"Physical":0,

},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-160000,
"Used":-280000
}
},

{
    id:20,
    name:"iPhone 14 pro",
    category:"iphone",
    price:1150000,
    
    rom:["128GB","256GB","512GB","1TB"],
    
    romPrice:{
    "128GB":0,
    "256GB":100000,
    "512GB":250000,
    "1TB":550000
    },
    
    colors:[
    { name:"black titanium", hex:"#2b2b2b", image: iphone14pro, price:0 },
    { name:"blue titanium", hex:"#3f4c6b", image: iphone14pro, price:20 },
    { name:"natural titanium", hex:"#8f8f8f", image: iphone14pro, price:20 }
    ],
    
    sim:["Physical"],
    
    simPrice:{
    "Physical":0,
    
    },
    
    condition:["Boxed","Unboxed","Used"],
    
    conditionPrice:{
    "Boxed":0,
    "Unboxed":-150000,
    "Used":-250000
    }
    },



{
id:21,
name:"iPhone 13",
category:"iphone",
price:830000,

rom:["128GB","256GB"],

romPrice:{
"128GB":0,
"256GB":60000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone13, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone13, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone13, price:20 }
],

sim:["Physical"],

simPrice:{
"Physical":0,

},

condition:["Unboxed"],

conditionPrice:{

"Unboxed":-80

}
},

{
id:22,
name:"iPhone 13 mini",
category:"iphone",
price:790000,

rom:["128GB","256GB"],

romPrice:{
"128GB":0,
"256GB":60000
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone13mini, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone13mini, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone13mini, price:20 }
],

sim:["Physical"],

simPrice:{
"Physical":0
},

condition:["Unboxed"],

conditionPrice:{

"Unboxed":-80,

}
},

{
id:23,
name:"iPhone 13 pro",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone13pro, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone13pro, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone13pro, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:24,
name:"iPhone 13 pro max",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone13promax, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone13promax, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone13promax, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:25,
name:"iPhone 12",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone12, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone12, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone12, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:26,
name:"iPhone 12 mini",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone12mini, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone12mini, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone12mini, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:27,
name:"iPhone 12 pro",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone12pro, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone12pro, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone12pro, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:28,
name:"iPhone 12 pro max",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone12promax, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone12promax, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone12promax, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:29,
name:"iPhone SE (3rd Generation)",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphonese, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphonese, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphonese, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:30,
name:"iPhone 11",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone11, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone11, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone11, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:31,
name:"iPhone 11 pro",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone11pro, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone11pro, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone11pro, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:32,
name:"iPhone 11 pro max",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone11promax, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone11promax, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone11promax, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:33,
name:"iPhone xs",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphonexs, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphonexs, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphonexs, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:34,
name:"iPhone xs max",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphonexsmax, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphonexsmax, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphonexsmax, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:35,
name:"iPhone xr",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphonexr, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphonexr, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphonexr, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:36,
name:"iPhone x",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphonex, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphonex, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphonex, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:37,
name:"iPhone 8",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone8, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone8, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone8, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:38,
name:"iPhone 8 plus",
category:"iphone",
price:999,

rom:["256GB","512GB"],

romPrice:{
"256GB":0,
"512GB":150
},

colors:[
{ name:"black titanium", hex:"#2b2b2b", image: iphone8plus, price:0 },
{ name:"blue titanium", hex:"#3f4c6b", image: iphone8plus, price:20 },
{ name:"natural titanium", hex:"#8f8f8f", image: iphone8plus, price:20 }
],

sim:["eSIM","Physical"],

simPrice:{
"Physical":0,
"eSIM":10
},

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-180
}
},

{
id:39,
name:"MacBook Air M3 (screen size: 15)",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookairm32, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm32, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id:40,
name:"MacBook Air M3 (screen size: 14)",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookairm33, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm33, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id:41,
name:"MacBook Pro M3 Pro",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookprom3pro, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookprom3pro, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id:42,
name:"MacBook Pro M3 max",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookprom3max, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookprom3max, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id:43,
name:"MacBook Air M2",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookairm2, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm2, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id:44,
name:"MacBook Air M1",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookairm1, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm1, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id:45,
name:"MacBook Pro M2",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookairm22, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm22, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id:46,
name:"MacBook Pro M1 Pro",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookairm1pro, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm1pro, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id:46,
name:"MacBook Pro M1 Max",
category:"mac",
price:1999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":400
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:macbookairm1max, price:0 },
{ name:"silver", hex:"#cfcfcf", image:macbookairm1max, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-150,
"Used":-400
}
},

{
id: 47,
name: "iPad Air M2 (screen size 11)",
category: "ipad",
price: 999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":300
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:ipadairm2, price:0 },
{ name:"silver", hex:"#cfcfcf", image:ipadairm2, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-200
}
},

{
id: 48,
name: "iPad Pro M2 (screen size 13)",
category: "ipad",
price: 999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":300
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:ipadprom2, price:0 },
{ name:"silver", hex:"#cfcfcf", image:ipadprom2, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-200
}
},

{
id: 49,
name: "iPad (10th Gen)",
category: "ipad",
price: 999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":300
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:ipad10, price:0 },
{ name:"silver", hex:"#cfcfcf", image:ipad10, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-200
}
},

{
id: 50,
name: "iPad Mini (6th Gen) screen size 8.3",
category: "ipad",
price: 999,

rom:["512GB","1TB"],

romPrice:{
"512GB":0,
"1TB":300
},

colors:[
{ name:"space gray", hex:"#5c5c5c", image:ipad10, price:0 },
{ name:"silver", hex:"#cfcfcf", image:ipad10, price:20 }
],

condition:["Boxed","Unboxed","Used"],

conditionPrice:{
"Boxed":0,
"Unboxed":-80,
"Used":-200
}
}






]

export default products