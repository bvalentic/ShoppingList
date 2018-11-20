$(function() {
    
    //list of famous stolen paintings
    var items = [
        item0 = [
            "\"Landscape with Cottages\" by Rembrandt van Rijn", 
            "A rare Rembrandt landscape stolen from the museum by armed robbers in 1972.", 
            1000000
        ],
        item1 = [
            "\"View of Auvers-sur-Oise\" by Paul Cézanne", 
            "A landscape painting by Paul Cézanne, never signed or dated as Cézanne thought of it as being unfinished.", 
            10000000
        ],
        item2 = [
            "\"Poppy Flowers\" by Vincent van Gogh",
            "A vase of yellow and red poppies, contrasted against a dark background. "+
            "Seen as a reflection of Van Gogh's deep admiration for Adolphe Monticelli, "+
            "an older painter whose work influenced him when first he saw it in Paris in 1886.",
            50000000
        ],
        item3 = [
            "\"Portrait of a Lady\" by Gustav Klimt",
            "Portrait of a female figure, composed in an unusually lively expressionistic style. "+
            "In 1996, X-ray analysis revealed that the portrait was an overpainted version of Klimt's "+
            "lost work \"Portrait of a Young Lady (in hat and with scarf)\", which disappeared in 1917.",
            75000000
        ],
        item4 = [
            "\"Landscape with an Obelisk\" by Govert Flinck",
            "Formerly attributed to Rembrandt, this oil-on-wood painting was part of the $500 million " +
            "Isabella Stewart Gardner Museum theft in 1990.",
            5000000
        ],
        item5 = [
            "\"The Concert\" by Johannes Vermeer",
            "The most expensive stolen painting in the world, this shows three musicians: a young woman " +
            "sitting at a harpsichord, a man playing the lute, and a woman who is singing.",
            500000000
        ],
        item6 = [
            "\"Nativity with St. Francis and St. Lawrence\" by Caravaggio",
            "Also known as \"The Adoration\", this Baroque nativity scene was stolen by the Sicilian mafia.",
            20000000
        ],
        item7 = [
            "\"The Pigeon with Green Peas\" by Pablo Picasso",
            "A classic Cubist work by the genre's foremost master.",
            28000000
        ],
        item8 = [
            "\"Still Life with Candlestick\" by Fernand Léger",
            "A still life with a candlestick.",
            28000000
        ],
        item9 = [
            "Portrait of a Young Man by Raphael",
            "The subject's identity is unverified, but many scholars have traditionally regarded it as " +
            "Raphael's self-portrait. The facial features are perceived by specialists as compatible with, " +
            "if not clearly identical to, the only undoubted self-portrait by Raphael in his fresco \"The " +
            "School of Athens at the Vatican\".",
            100000000
        ]
    ]

    var cart = [];

    //makes list out of array
    function MakeList(array,string) {
       
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

    function AddToCart(item) {
        cart.push(item);
        document.getElementById("cart-list").appendChild(MakeList(cart));
        alert("Added to cart!");        
    }

    //appends created list to specified div
    document.getElementById("main-list").appendChild(MakeList(items));
    
  });