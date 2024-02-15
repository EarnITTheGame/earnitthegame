<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Produkt</title>
  <script src="https://kit.fontawesome.com/cb6b993352.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Mulish:ital,wght@1,200&family=Open+Sans&family=Playfair+Display&family=Roboto+Slab:wght@600&family=Roboto:ital,wght@0,300;0,400;1,300&family=Unbounded:wght@300&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="../style/hlavny.css">
  <link rel="stylesheet" href="../style/produkt.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>
</head>

<body >

<section id="nav-bar">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link" href="../index.html">Domov</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pravidla.html">Pravidlá</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="produkt.php">The Game</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="kontakt.html">Kontakt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="checkout.php"><i class="fa-solid fa-cart-shopping"></i> </a>
          </li>        
        </ul>
      </div>
    </div>
  </nav>
</section>

<section id="sekcia0">
  <div class="container">
    <div class="row">
    <div class="col-md-6">
      <p class="sekcia0-nadpis">Earn IT <p class="podnadpis-hra"> The Game</p></p>
      <p>Tu si môžete zakúpiť našu stolnú-spoločenskú hru</p>
      <a href="#produkt"><i class="fa-solid fa-angles-down sipka-dole"></i></a>
      </div>
      <div class="col-md-6 text-center">
      <img src="../img/produkt-E-hl.png" alt="" class="img-fluid">
    </div>
    </div>
  </div>
  <img src="../img/vlnka1.png" class="vlnka">
</section>


<a name="produkt"></a>
<section id="product-page">
  <div class="product-details">
    <div class="product-img">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"> 
            <img src="../img/produkt-hraciadoska.png" />
            
          </div>
          <div class="swiper-slide">
            <img src="../img/produkt-E-zetony.png" />
          </div>
          <div class="swiper-slide">
            <img src="../img/produkt-kocky.png" />
          </div>
          <div class="swiper-slide">
            <img src="../img/produkt-podlozka1.png"/>
          </div>
        </div>
          <div class="slider-btns">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
    <div class="product-text">
      <h1>Earn IT The Game</h1>
      <p>Hra podporuje vzdelávanie v oblasti programovania, IT a ekonomiky.
        Hra "Earn IT the Game" kombinuje vzdelávanie a zábavu, vytvárať pre hráčov príležitosti pre kreativitu, súťaživosť, a zároveň testovať ich schopnosti v oblasti Programovania, Ekonomiky, Počítačovej Grafiky.
      <br></p>
      <div class="cart">             
        <div class="listCart"></div>
        <div class="buttons"></div>    
        <div class="container">
        <br>
        <div class="listProduct">      
          <div class="item">                         
            <div class="product-button">
            <button class="add-bag-btn">Pridať do košíka</button>
            <button><a href="checkout.php" class="add-wishlist-btn">Košík</a></button>
          </div>  
        </div>                  
      </div>
    </div>    
    <a href="kontakt.html" class="pomoc">Potrebujete pomôcť?</a>
  </div>
</div>
</section>
<div class="center">
  <hr class="rozdelenie">
  </div>
  <br><br><br>
<section id="sekciaRecenzie"> 
  <div class="container">
    <h1 class="sekcia3-nadpis text-center ">Recenzie</h1>
    <div class="row offset-2">
      <div class="col-md-7 sekcia3-text">
        <p>---------------------------------</p>
        <img src="../img/recenzia-logoM.png" alt="">
        <p class="zakaznik"><b>Tomáš </b> *******</p>
      </div>
      <div class="col-md-5 sekcia3-text">
        <p>---------------------------------</p>
        <img src="../img/recenzia-logoZ.png" alt="">
        <p class="zakaznik"><b>Zuzana </b> *******</p>   
      </div>
      <br><br>
    </div> 
    <div class="center">
    <hr class="rozdelenie">
    </div> <br><br>
    <div class="R">
      <h1>Zanechajte Nám Hodnotenie</h1>
      <form method="POST" action="../attachments/connectR.php">
      <div class="rating">
        <input value="5" name="hodnotenie" id="star5" type="radio">
        <label for="star5"></label>
        <input value="4" name="hodnotenie" id="star4" type="radio">
        <label for="star4"></label>
        <input value="3" name="hodnotenie" id="star3" type="radio">
        <label for="star3"></label>
        <input value="2" name="hodnotenie" id="star2" type="radio">
        <label for="star2"></label>
        <input value="1" name="hodnotenie" id="star1" type="radio">
        <label for="star1"></label>
      </div>
      <br> <br>
      <textarea name="recenzie_zakaznikov" placeholder="Vaša recenzia:" class="recenzia-text" required></textarea>
      <br>
      <input name="submit" type="submit" value="Odoslať" class="odoslat">
    </form>
    </div>
  </div>
  </section>
  <br><br><br>
<section id="galleria sekcia2">
  <div class="container">

  <div class="row">
      <div class="col-md-6">
        <p class="produkt-text">Hracia doska s nádherným vesmírnym dizajnom! Táto hracia doska bola špeciálne vytvorená nami, aby priniesla do vašich herných zážitkov nový level pôvabu a pohodlia. 
        <br>  
        S jej magnetickým povrchom nebudete musieť mať obavy o to, že vaše panáčiky sa nejakým spôsobom pohybujú alebo sa premiestňujú, pretože ostaňú spoľahlivo na svojom mieste aj pri úderoch a pohyboch.</p>
        </div>
        <div class="col-md-6 "> 
          <img src="../img/produkt-hraciadoska.png" class="img-fluid" style="margin-top: 25%">
        </div>
  </div>

    <div class="row">
      <div class="col-md-6">
        <img src="../img/produkt-E-zetony.png" class="img-fluid">
      </div>
      <div class="col-md-6 "> 
        <p class="produkt-text">Hracie žetóny sú zázrakom moderného technologického sveta, vyrobené pomocou 3D tlačiarne. E-žetóny prinášajú do vašej hry úplne nový rozmer, pretože sa zmenia na dynamické prvky, ktoré ovplyvňujú herné prostredie.
        <br>
        E-žetóny sú ideálnym spôsobom, ako pridať do hry nový prvok zábavy a vzrušenia.</p>
    </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <p class="produkt-text">Hracia kocka cosmic, tento úžasný komponent nie je len obyčajnou kockou, ale vstupuje do hry s nádherným dizajnom, ktorý vás prenesie do hlbín vesmíru pri každom hode.</p>
        </div>
        <div class="col-md-6 "> 
          <img src="../img/produkt-kocky.png" class="img-fluid ">
        </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <img src="../img/produkt-podlozka.png" class="img-fluid">
    </div>
    <div class="col-md-6 "> 
      <p class="produkt-text2">Predstavujeme vám nový a štýlový herný doplnok, ktorý zaručene prinesie do vášho hrania nový level pohodlia a štýlu - Fialovú Podložku na Hádzanie Hracou Kockou!
      <br>
      Táto podložka nie je len esteticky príjemná s jej jemným fialovým dizajnom, ale je tiež vyrobená z kvalitných materiálov, aby vydržala aj tie najnáročnejšie hry a zostala v perfektnom stave dlhodobo.</p>
  </div>
   </div>

  <div class="row">
    <div class="col-md-6 "> 
      <p class="produkt-text2"> <h1>Tu zadajte kód z vašej hry</h1>
      <form action="otazky.php" method="post">
          <input type="text" name="kod" placeholder="Tu Zadajte kód" class="kod-text">
          <button type="submit" class="odoslat2">Odoslať</button>
      </form>
  </div>
    <div class="col-md-6">
    <video autoplay muted class="video-kod">
          <source src="../video/magicky-kruh.mov" type="video/mp4">
      </video> 
    </div>
   </div>
 
</section>

  <script src="https://code.jquery.com/jquery-3.6.1.js"
  integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
  crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
<script>
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        450: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        820: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween:0,
        },
      },
    });
    $('.s-checkbox').on('change', function() {
		$('.s-checkbox').not(this).prop('checked', false);  
	});
</script>

<!-- /* ----Footer---- */ --> 
<section id="footer">
  <img src="../img/vlnka2.png" alt="vlnka" class="vlnka2">
  <div class="container">
    <div class="row">
      <div class="col-md-4 footer-box">
          
      </div>
      <div class="col-md-4 footer-box">
       <p class="footer-nadpis">Navigácia :</p>
       <P><a href="../index.html">Domov</a></P>
       <P><a href="pravidla.html">Pravidlá</a></P>
       <P><a href="produkt.html">The Game</a></P>
       <P><a href="kontakt.html">Kontakt</a></P>
    </div>
    <div class="col-md-4 footer-box">
      <p class="footer-nadpis">Kontakt :</p>
      <P><a  target="_blank" href="https://www.instagram.com/earn_it_the_game/">Instagram</a></P>
      <P><a href="tel: +421 915082718">+421 915 082 718</a></P>
      <P><a href="mailto: earnitthegame@gmail.com">earnitthegame@gmail.com</a></P>
      <P><a href="kontakt.html">Kontaktný Formulár</a></P>
   </div>
   <hr>
   <p class="copyright">Copyright E-shop made by Peter Juríčka</p>
  </div>
</section>
<!-- /* ----Footer---- */ --> 

<button onclick="topFunction()" id="tlacitkoisthore" title="Go to top">△</button>

    <script>
    var mybutton = document.getElementById("tlacitkoisthore");
    
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    </script> 

  <script src="../script/produkta.js"></script>  
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>
</html>