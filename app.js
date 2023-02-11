// *******************     DATA       **************************************************

const shows = [
    {
        id: 1,
        Name: "First show",
        img :'/Images/show1.jpg',
    },
    {
        id: 2,
        Name: "Second show",
        img : "/Images/show2.jpg"
    },
    {
        id: 3,
        Name: "Third show",
        img : "/Images/show3.jpg"
    }
    ,{
        id: 4,
        Name: "Third show",
        img : "/Images/show4.jpg"
    }
    ,{
        id: 5,
        Name: "Third show",
        img : "/Images/show5.jpg"
    }
    ,{
        id: 6,
        Name: "Third show",
        img : "/Images/show6.jpg"
    }
    ,{
        id: 7,
        Name: "Third show",
        img : "/Images/show7.jpg"
    }
    ,{
        id: 8,
        Name: "Third show",
        img : "/Images/show8.jpeg"
    }
    ,{
        id: 9,
        Name: "Third show",
        img : "/Images/show9.jpg"
    }
    ,{
        id: 10,
        Name: "Third show",
        img : "/Images/show10.jpg"
    }
    ,{
        id: 11,
        Name: "Third show",
        img : "/Images/show11.jpg"
    }
    ,{
        id: 12,
        Name: "Third show",
        img : "/Images/show12.jpg"
    }
    ,{
        id: 13,
        Name: "Third show",
        img : "/Images/show13.jpg"
    },
    {
        id: 14,
        Name: "Third show",
        img : "/Images/show14.jpeg"
    },
    {
        id: 15,
        Name: "Third show",
        img : "/Images/show15.jpeg"
    },
] 



// ***********************   Add To Favorite   **************************************************************************/

document.getElementById("view_favorite").onclick = function(){
    document.getElementById("fav_container").style.display = "block";
}
document.getElementById("close").onclick = function(){
    document.getElementById("fav_container").style.display = "none";
}

//    Shows  ARRAY    *******************************

const arr = [];

function add_fav(index,img){

    if(arr.includes(index)){
        console.log(arr.includes(index));
    }
    else{

    arr.push(index);

    let count = 1;
    var div1 = document.createElement("div");
    div1.id = "item" +  count +"";
    div1.style.height = "270px";
    div1.style.width = "200px";
    div1.style.borderRadius = "8px";
    div1.style.backgroundColor = "rgb(108, 108, 108, 0.200)";
    div1.style.padding = "10px";
    div1.style.textAlign = "center";
    div1.style.marginLeft = "20px";


    document.getElementById("fav_item").appendChild(div1);

    var x = document.createElement("IMG");
    x.setAttribute("src", img);
    x.setAttribute("height", "200");
    x.style.borderRadius = "5px";
    div1.appendChild(x);

    var watch =  document.createElement("BUTTON");
    var text = document.createTextNode("Watch");
    watch.appendChild(text);
    watch.id = "watch";
    watch.style.backgroundColor  = "rgb(57, 57, 57)";
    watch.style.color = "white";
    watch.style.border = "none";
    watch.style.padding = "10px";
    watch.style.marginTop = "10px";
    watch.style.fontSize = "17px";
    watch.style.width = "100%";
    watch.style.borderRadius = "5px";
    watch.style.letterSpacing = "0.5px";

    div1.appendChild(watch);

}
}

