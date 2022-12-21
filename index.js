
        let message = document.getElementById("message");
        let btnEncriptar = document.getElementById("btnEncriptar");
        let btnDecifrar = document.getElementById("btnDecifrar");
        let btnCopiar = document.getElementById("btnCopiar");
        const message2 = document.getElementById("message2");
        
        console.log("probando indexof");
        let word = "Hola";
        console.log(word.search("x"));
        function encryptVowels(messageencriptar) 
        
        {
        // Creamos un diccionario con las vocales y los caracteres con los que queremos reemplazarlas
        const vowelsDict = 
        {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
        };

        // Recorremos la palabra y reemplazamos cada vocal por el carácter correspondiente
            let encryptedWord = '';
            for (const letter of messageencriptar) {
                encryptedWord += vowelsDict[letter.toLowerCase()] || letter;
                console.log(encryptedWord);
            }

            return encryptedWord;
        }
        function decryptWords(paragraph) {
        // dividimos el párrafo en una matriz de palabras
        let words = paragraph.split(" ");

        // recorremos la matriz de palabras y reemplazamos las letras
        for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let confirmacion = 0;
        let searchStrings = ["ai", "enter", "imes", "ober", "ufat"];

            while(confirmacion !== -1){
            word = word.replace("ai", "a");     
            word = word.replace("enter", "e");       
            word = word.replace("imes", "i");       
            word = word.replace("ober", "o");       
            word = word.replace("ufat", "u");
            for(let j = 0; j < searchStrings.length; j++){
                confirmacion = word.search(searchStrings[j]);
                if(confirmacion !== -1){
                    break;
                }
            }
        
        }
        words[i] = word;
        
        }

        // unimos la matriz de palabras en un párrafo nuevo
        paragraph = words.join(" ");

        return paragraph;
        }   


        btnEncriptar.addEventListener("click", function(){           
            message2.textContent = encryptVowels(message.value);
        })
        btnDecifrar.addEventListener("click", function(){           
            message2.textContent = decryptWords(message.value);
            console.log("probando decifrar")
        })
        btnCopiar.addEventListener("click", function(){
            message2.select();
            document.execCommand("copy");
        })

