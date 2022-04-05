var homeContent = `<div class="hero"></div>

            
<div class="content">
    <h1>BLUE DRAGON GAMES</h1>
    <h2>HOME</h2>
    <div class="products">
        <div class="product">
        <div class="home-images">
            <div class="home-image1"></div>
            <div class="home-image2"></div>
            <div class="home-image3"></div>
        </div>
            <div class="home-desc">
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptate non at quo. Itaque quia ut totam iure placeat sit, excepturi voluptatibus asperiores voluptatum in ab molestias, temporibus earum corrupti.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet vitae, fugiat distinctio esse dicta accusamus soluta enim, nisi, beatae at vel quod. Dolorum quod, dignissimos fuga vero, sed tempore aspernatur laudantium illo veniam officiis ad molestiae dolorem! Excepturi in quis consequuntur tempora adipisci nostrum ad sed libero obcaecati maxime.</p>
                <h2>Shop for supplies and games!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique tempore est ad, deleniti aspernatur obcaecati dolorum perspiciatis dicta animi quas enim hic dolor dignissimos! Sequi aspernatur iste tempore amet, quaerat dolor ipsam voluptates corporis, facilis eum veniam dignissimos cupiditate pariatur? Fugit, aut veritatis!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, aliquam. Recusandae et omnis at dolore tempora, architecto perferendis odio obcaecati.</p>
                <h2>Scedule an event today!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cupiditate culpa quidem, nam cum obcaecati sunt iste ratione id eveniet, vitae eligendi voluptate quia in!</p>
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

var suppliesContent = `<div class="hero"></div>

<div class="content">
                <h1>SUPPLIES</h1>
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

var eventContent = `<div class="hero"></div>

<div class="content">
                <h1>EVENTS</h1>
                <div class="products">
                        <div class="product">
                                <div class="prod-image"></div>
                                <div class="prod-desc">
                                    <h4>BIG CITY</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dicta officia, reprehenderit sapiente quo numquam neque eaque ducimus accusamus inventore.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dicta officia, reprehenderit sapiente quo numquam neque eaque ducimus accusamus inventore.</p>
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

