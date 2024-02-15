<?php
    if(isset($_POST['submit']))
    {
        $meno = $_POST['meno'];
        $priezvisko = $_POST['priezvisko'];
        $mail = $_POST['mail'];
        $ulica = $_POST['ulica'];
        $cislo_domu = $_POST['cislo_domu'];
        $psc = $_POST['psc'];
        $mesto = $_POST['mesto'];
        $stat = $_POST['stat'];
        $tel_kontakt = $_POST['tel_kontakt'];
        $totalQuantity = $_POST['totalQuantity'];
        $totalPrice = $_POST['totalPrice'];
    }
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "earnit";
    $con = mysqli_connect($host, $username, $password, $dbname);
    if (!$con)
    {
        die("Pripojenie neprebehlo" . mysqli_connect_error());
    }
    $sql = "INSERT INTO checkout ( meno, priezvisko, mail, ulica, cislo_domu, psc, mesto, stat, tel_kontakt, mnozstvo, cena) VALUES ('$meno', '$priezvisko', '$mail', '$ulica', '$cislo_domu', '$psc', '$mesto', '$stat', '$tel_kontakt','$totalQuantity','$totalPrice')";
  
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        echo "
        <!DOCTYPE html>
        <html>
        <head>
            <title>Potvrdenie Objednávky</title>
            <style>
                body {
                    overflow-y: hidden;
                    background: linear-gradient(to left,#868F96, #596164);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    
                }
                .container {
                    width: 500px;
                    height: 450px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 23px;
                    background: rgba( 255, 255, 255, 0.8 );
                    box-shadow:  30px 30px 76px #5a5a5a,
                                 -30px -30px 76px #ffffff;
                }
                .title {
                    font-size: 26px;
                    margin-bottom: 20px;
                }
                .image {
                    width: 200px;
                    height: 150px;
                    border-radius: 50%;
                    margin-bottom: 50px;
                }
                .button {
                    background-color: #7700b6;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin-top: 20px;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: 0.5s;
                }
                .button:hover{
                    background-color:#9c17e4;
                    color: black;
                }
            </style>
        </head>
        <body>
            <div class='container'>
                <img src='../img/potvrdenie-ikona.png' alt='Image' class='image'>
                <div class='title'>Ďakujeme Za Vašu Objednávku!</div>
                <form action='../index.html'>
                    <button type='submit' class='button'>Spät na Stránku</button>
                </form>
            </div>
        </body>
        </html>";
    }
    mysqli_close($con);
?>