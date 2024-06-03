
export let distance = {
    metre : {
      metre : 1,
      centimetre : 100,
      kilometre : 0.001,
      millimetre : 1000,
      micrometre : 1000000,
      mile : 0.000621371,
      yard : 1.09361 ,
      foot : 3.28084,
      inch : 39.3701 , 
      nautical_mile : 0.000539957
    },
    centimetre:{
        metre: 0.01,
        centimetre: 1,
        kilometre: 0.00001,
        millimetre: 10,
        micrometre: 10000,
        mile: 0.00000621371,
        yard: 0.0109361,
        foot: 0.0328084,
        inch: 0.393701,
        nautical_mile: 0.00000539957
    },
    kilometre:{
        metre: 1000,
        centimetre: 100000,
        kilometre: 1,
        millimetre: 1000000,
        micrometre: 1000000000,
        mile: 0.621371,
        yard: 1093.61,
        foot: 3280.84,
        inch: 39370.1,
        nautical_mile: 0.539957
      },
      millimetre:{
        metre: 0.001,
        centimetre: 0.1,
        kilometre: 0.000001,
        millimetre: 1,
        micrometre: 1000,
        mile: 0.000000621371,
        yard: 0.00109361,
        foot: 0.00328084,
        inch: 0.0393701,
        nautical_mile: 0.000000539957
      },
      micrometre:{
        metre: 0.000001,
        centimetre: 0.0001,
        kilometre: 0.000000001,
        millimetre: 0.001,
        micrometre: 1,
        mile: 0.000000000621371,
        yard: 0.00000109361,
        foot: 0.00000328084,
        inch: 0.0000393701,
        nautical_mile: 0.000000000539957
      },
      mile :{
        metre: 1609.34,
        centimetre: 160934,
        kilometre: 1.60934,
        millimetre: 1609340,
        micrometre: 1609340000,
        mile: 1,
        yard: 1760,
        foot: 5280,
        inch: 63360,
        nautical_mile: 0.868976
      },
      yard:{
        metre: 0.9144,
        centimetre: 91.44,
        kilometre: 0.0009144,
        millimetre: 914.4,
        micrometre: 914400,
        mile: 0.000568182,
        yard: 1,
        foot: 3,
        inch: 36,
        nautical_mile: 0.000493737
      },
      foot:{
        metre: 0.3048,
        centimetre: 30.48,
        kilometre: 0.0003048,
        millimetre: 304.8,
        micrometre: 304800,
        mile: 0.000189394,
        yard: 0.333333,
        foot: 1,
        inch: 12,
        nautical_mile: 0.000164579
      },
      inch:{
        metre: 0.0254,
        centimetre: 2.54,
        kilometre: 0.0000254,
        millimetre: 25.4,
        micrometre: 25400,
        mile: 0.0000157828,
        yard: 0.0277778,
        foot: 0.0833333,
        inch: 1,
        nautical_mile: 0.0000137149
      },
      nautical_mile:{
        metre: 1852,
        centimetre: 185200,
        kilometre: 1.852,
        millimetre: 1852000,
        micrometre: 1852000000,
        mile: 1.15078,
        yard: 2025.37,
        foot: 6076.12,
        inch: 72913.4,
        nautical_mile: 1
      }                                          
}
        


export let weight = {
  tonne:{
    tonne:1,
    kilogram:1000,
    gram:100000
  },
  kilogram:{
    kilogram:1,
    gram:1000,
    tonne:0.001
  },
  gram:{
    gram:1,
    kilogram:0.001,
    tonne:0.000001
  }
}
export let speed = {
  metre_per_second:{
    metre_per_second:1,
    kilometre_per_hour:3.6
  } ,
  kilometre_per_hour:{
    kilometre_per_second:1,
    metre_per_second:0.27
  } 
}
export const default1 ={

}
export let quantities = {
  distance:1,
  weight:4,
  speed:5,
  default1:10
}