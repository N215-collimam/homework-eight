var homeContent = `<div class="hero"></div>

            
<div class="content">
    <h1>HOME</h1>
    <div class="products">
        <div class="product">
            <div class="prod-image"></div>
            <div class="prod-desc">
                <h4>BIG CITY</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dicta officia, reprehenderit sapiente quo numquam neque eaque ducimus accusamus inventore.</p>
            </div>
        </div>
    </div>
</div>`;

var aboutContent = `<div class="hero"></div>

<div class="content">
                <h1>ABOUT</h1>
                <div class="products">
                    <div class="product">
                        <div class="prod-image"></div>
                        <div class="prod-desc">
                            <h4>BIG CITY</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dicta officia, reprehenderit sapiente quo numquam neque eaque ducimus accusamus inventore.</p>
                        </div>
                    </div>
                </div>
            </div>`;

function initListeners(){
    $("nav a").click(function (e) {
        let btnID = e.currentTarget.id;
        loadPageContent(btnID);
        
        
        //console.log("click " + contentID);
    });
}

function loadPageContent(pageName){
    let contentID = pageName + "Content";
    $("#app").html(eval(contentID));
}

function initApp(){
    initListeners();
}


$(document).ready(function () {
    loadPageContent("home");
    initApp();
});

//for project 6, change index names to respective names. The sass sheets should be condensed into a class that changes the background images to be right on each page. take out one ../ on the pictures becuase its coming from css file, not the original typed in one.