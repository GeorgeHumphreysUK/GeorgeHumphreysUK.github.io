
ApplyFilter("all");
function ApplyFilter(filter)
{
    var entries = document.getElementsByClassName("filterDiv");
    console.log(entries.length);
    if(filter == "all")
    {
        filter = "";
    }

    for(var i = 0; i < entries.length; i++)
    {
        HideElement(entries[i], "show");
        if(entries[i].className.indexOf(filter) > -1)
        {
            ShowElement(entries[i], "show");
        }
    }
}


function ShowElement(element, name)
{
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for(var i = 0; i < arr2.length; i++)
    {
        if(arr1.indexOf(arr2[i]) == -1)
        {
            element.className += " " + arr2[i];
        }
    }
}


function HideElement(element, name)
{
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for(var i = 0; i < arr2.length; i++)
    {
        while(arr1.indexOf(arr2[i]) > -1)
        {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


var buttonContainer = document.getElementById("buttonFilterContainer");
var buttons = buttonContainer.getElementsByClassName("button");
for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function(){
        var active = document.getElementsByClassName("primary");
        active[0].className = active[0].className.replace(" primary", "");
        this.className += " primary";
        var arr1 = this.className.split(" ");
        ApplyFilter(arr1[arr1.indexOf("filterMode") + 1]);
    })
}