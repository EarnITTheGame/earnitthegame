<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Košík</title>
    <link rel="stylesheet" href="../style/produkt.css">
</head>
<body style="background-color: var(--cierna); color: var(--biela);">
<div class="container">
    <div class="checkoutLayout">         
        <div class="returnCart">
            <a href="produkt.php">Pokračovať v nákupe</a>
            <h1>Košík</h1>
                <div class="list">   
                    <div class="item">
                        <div class="info">
                            <div class="name">Earn IT The Game</div>
                            <div class="price">49.99€</div>
                        </div>
                        <div class="quantity">1</div>
                        <div class="returnPrice">49.99€</div>
                    </div>
                </div>
                <div class="right">
                <h1>Vaše údaje:</h1>
                <br>
                <form method="POST" action="../attachments/connect.php" autocomplete="on">
                    <label for="meno"></label>
                    <input type="text" name="meno" id="meno" placeholder="Meno:" class="formular"  >
                    <br>
                    <label for="priezvisko"> </label>
                <input type="text" name="priezvisko" id="priezvisko" placeholder="Priezvisko:" class="formular" >
                    <br>
                    <label for="mail"></label>
                    <input type="email" name="mail" id="mail" placeholder="Mail:" class="formular" >
                    <br>
                    <label for="ulica"></label>
                    <input type="text" name="ulica" id="ulica" placeholder="Ulica:" class="formular" >
                    <br>
                    <label for="cislo_domu"></label>
                    <input type="text" name="cislo_domu" id="cislo_domu" placeholder="Číslo domu:" class="formular" >
                    <br>
                    <label for="psc"></label>
                    <input type="text" name="psc" id="psc" placeholder="PSČ:" class="formular" >
                    <br>
                    <label for="mesto"></label>
                    <input type="text" name="mesto" id="mesto" placeholder="Mesto:" class="formular" >
                    <br>
                    <label for="stat"></label>
                    <input type="text" name="stat" id="stat" placeholder="Štát:" class="formular" >
                    <br>
                    <label for="tel_kontakt"></label>
                    <input type="text" name="tel_kontakt" id="tel_kontakt" placeholder="Tel. č.:" class="formular" >              
                    <br>
                    <div class="return">
                        <div class="row">
                            <div><h3>Množstvo:</h3></div>
                            <div class="mnozstvo">
                            <input class="totalQuantity" value="0" disabled>
                        </div>
                    </div>
                        <input class="totalQuantity" type="hidden" name="totalQuantity" value="0">
                        <div class="row ">
                            <div><h3>Cena:</h3> </div>
                            <div class="cena">
                        <input class="totalPrice" value="0" disabled>
                    </div>
                </div>
                <input class="totalPrice" type="hidden" name="totalPrice" value="0">
                </div>
                    <button type="submit" name="submit" id="submit" class="objednat">OBJEDNAŤ</button>
                </div>
            </div>
        </div>
   </form> 
</div>   
<script src="../script/checkout.js"></script>
</body>
</html>