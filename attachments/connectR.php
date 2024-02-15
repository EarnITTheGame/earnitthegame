<?php
    if(isset($_POST['submit'])){
        $recenzie_zakaznikov = $_POST['recenzie_zakaznikov'];
        $hodnotenie = $_POST['hodnotenie'];  
    }  
        $host = "localhost";
        $username = "root";
        $password = "";
        $dbname = "earnit";
        $con = mysqli_connect($host, $username, $password, $dbname);
        if (!$con){
            die("Pripojenie neprebehlo" . mysqli_connect_error());
        }
        $sql = "INSERT INTO recenzie (recenzie_zakaznikov,hodnotenie) VALUES ('$recenzie_zakaznikov','$hodnotenie')";
        $rs = mysqli_query($con, $sql);
        if($rs){
            echo "<html>
           <style> 
           body{
            margin: 0;
        }
        .center{
            height: 100vh;
            width: 100%;
            background-color: #212121;
            display: flex;
         justify-content: center;
         align-items: center;
        }
        .card {
            overflow: hidden;
            position: relative;
            border-radius: 26px;
            width: 290px;
            box-shadow:  11px 11px 22px #d5d5d5,
                        -11px -11px 22px #ebebeb;
            background-color: black;
        }
        .header {
            padding: 1.25rem 1rem 1rem 1rem;
        }
        .image {
            display: flex;
            margin-left: auto;
            margin-right: auto;
            background-color: rgb(181, 119, 233);
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            width: 3rem;
            height: 3rem;
            border-radius: 9999px;
            animation: animate .6s linear alternate-reverse infinite;
            transition: .6s ease;
        }
        .image svg {
            width: 2rem;
            height: 2rem;
        }
        .content {
            margin-top: 0.75rem;
            text-align: center;
        }
        .title {
            color: rgb(181, 119, 233);
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.5rem;
        }
        .message {
            margin-top: 0.5rem;
            color: white;
            font-size: 0.875rem;
            line-height: 1.25rem;
        }
        .actions {
            margin: 0.75rem 1rem;
            display: flex;
           justify-content: center;
           align-items: center;
        }
        .button {
          margin-top:7%;
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            background-color: #1a1a1a;
            cursor: pointer;
            color: white;
            transition: 0.5s;
        }
        .button:hover {
            box-shadow: 0px 0px 17px -4px #976cff;
            border-color: #976cff;
            color: #f7f5ff;
            background-color: #2e2546;
        }
        .button:active {
            box-shadow: 0px 0px 17px -7px #976cff;
            border-color: #976cff;
            transform: scale(0.95);
        }
          @keyframes animate {
            from {
              transform: scale(1);
            }
          
            to {
              transform: scale(1.09);
            }
            }
           </style>
            <body>
            <div class='center'>
                <div class='card'> 
                    <div class='header'> 
                      <div class='image'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'><g stroke-width='0' id='SVGRepo_bgCarrier'></g><g stroke-linejoin='round' stroke-linecap='round' id='SVGRepo_tracerCarrier'></g><g id='SVGRepo_iconCarrier'> <path stroke-linejoin='round' stroke-linecap='round' stroke-width='1.5' stroke='#000000' d='M20 7L9.00004 18L3.99994 13'></path> </g></svg>
                        </div> 
                        <div class='content'>
                           <span class='title'>Recenzia Odoslaná</span> 
                           <p class='message'>Ďakujeme za Váš názor!</p> 
                           </div> 
                           <div class='actions'> 
                            <button class='button'> <a href='../index.html' style='text-decoration: none; color: white;'>Späť na stránku</a></button>
                        </div> 
                    </div> 
                </div>
            </div>      
            </body>
            </html>'";
        }
        mysqli_close($con);
    
?>