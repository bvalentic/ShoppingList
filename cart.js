$(function() {
    
    function MakeList(array) {
       
        var list = document.createElement('ul');
        list.setAttribute("id","main-list-text")
    
        for (var i = 0; i < array.length; i++) {
            
            var item = document.createElement('li');
            item.setAttribute("class","list-item");

            var pic = document.createElement('img');
            pic.setAttribute("class","list-image")
            pic.src = i + '.jpg';

            item.appendChild(pic);
            
            var name = document.createTextNode(array[i][0]);
            item.appendChild(name);

            item.appendChild(document.createTextNode(" - "));

            var description = document.createTextNode(array[i][1]);
            item.appendChild(description);

            item.appendChild(document.createTextNode(" Price: $"));
            var price = document.createTextNode(array[i][2]);
            item.appendChild(price);

            var button = document.createElement("button");
            button.setAttribute("class","cart-button");
            button.innerHTML = "Add to cart";

            button.onclick = function(){AddToCart(item)};

            item.appendChild(button);

            list.appendChild(item);
        }
    
        return list;
    }
    debugger;
    MakeList(localStorage.getItem("cartList"));
});