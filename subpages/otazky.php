<?php
$predvolenyKod = "XK83LE52DER";
$zadanyKod = $_POST["kod"];

if ($zadanyKod === $predvolenyKod) 
{
    header("Location: otazky.html");
} 
else 
{
    echo "
    <style>.tlacitkodomov {
        padding: 10px 100px;
        margin: 10px;
        margin-top:20px;
        border-radius: 8px;
        border: 1px solid transparent;
        font-size: 25px;
        font-weight: 700;
        background-color: #1a1a1a;
        cursor: pointer;
        color: var(--biela);
        transition: 0.5s;
    }
    .tlacitkodomov:hover {
        box-shadow: 0px 0px 17px -4px #976cff;
        border-color: #976cff;
        color: #f7f5ff;
        background-color: #2e2546;
    }
    .tlacitkodomov:active {
        box-shadow: 0px 0px 17px -7px #976cff;
        border-color: #976cff;
        transform: scale(0.95);
    }</style>
    <body style='margin: 0;'>
        
        <section style='display: grid; align-items: center; justify-content: center; height: 100vh; width: 100%; margin: 0; background-color: black;'>
        <p style='font-size: 50px; margin: 10px; font-weight: 700; text-shadow:2px 2px 2px #8950dd; color: white; '>
        Zadali ste Nesprávny kód! </p>
        <button class='tlacitkodomov'><a href='produkt.php' style='text-decoration: none; color: white;'>Späť</a></button>
    </section>
    </body>
    ";
}
?>