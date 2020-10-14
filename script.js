var val1 = "";
            var val2="";
            document.getElementsByClassName('success')[0].onclick = function(){
                document.getElementsByClassName('btns')[0].style.display = 'none';
                document.getElementsByClassName('cont')[0].style.display = 'block';
                
            }
           
            document.getElementsByClassName('sbmt')[0].onclick = function(){
                
                val1 = document.getElementsByClassName('inpt')[0].value;
                val2 = document.getElementsByClassName('inpt')[1].value;
                if(val1 != "" && val2 != ""){
                    document.getElementsByClassName('user')[0].style.display = "block";
                    document.getElementsByClassName('btns')[0].style.display = 'none';
                    document.getElementsByClassName('cont')[0].style.display = 'none';
                    document.getElementsByClassName('slogan-cont')[0].style.display = "block";
                    document.getElementsByClassName('name')[0].innerHTML = val1;
                }

            }
            document.getElementsByClassName('primary')[0].onclick = function(){
                document.getElementsByClassName('btns')[0].style.display = 'none';
                document.getElementsByClassName('login')[0].innerHTML = 'Sign Up';
                document.getElementsByClassName('cont')[0].style.display = 'block';
                document.getElementsByClassName('txt')[0].style.display = 'none';
            }
            
            document.getElementsByClassName('grid-itm')[0].onclick = function(){
                window.location.href = "shoes.html";
            }
            document.getElementsByClassName('grid-itm')[1].onclick = function(){
                window.location.href = "trousers.html";
            }
            document.getElementsByClassName('grid-itm')[2].onclick = function(){
                window.location.href = "T-Shirts.html";
            }
            document.getElementsByClassName('grid-itm')[3].onclick = function(){
                window.location.href = "Watches.html";
            }
            