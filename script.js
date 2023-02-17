// Variáveis para aplicar os resultados do teste. Não as altere.

gender = process.argv[2]; // Sexo
height = process.argv[3]; // Altura
barReps = process.argv[4]; // Repetições com barra
barSeconds = process.argv[5]; // Tempo das repetições com barra
abs = process.argv[6]; // Abdominais
runDistance = process.argv[7]; // Distância da corrida
runTime = process.argv[8]; // Tempo da corrida
swimDistance = process.argv[9]; // Distância da natação
swimTime = process.argv[10]; // Tempo da natação
diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;
 
//Testes Male

// Condição de gênero e altura
if(gender === "male" && height >= 1.70){
//Condição das repetições de barra ou tempo das repetições com barra
    if(barReps >= 6 || (barSeconds == 15)){
//Condição referente as abdominais
        if(abs >= 41){
//Condição para corrida (distância e tempo)
            if((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)){
//Condição para natação (distância do nado e tempo do nado ou tempo do mergulho)
                if(swimDistance >= 100 && (swimTime <= 60 || diveTime <= 30)){
//Condição de passe
                    passed = true;
                }
            }
        }
    }
}

//Testes Female

// Condição de gênero e altura
if(gender === "female" && height >= 1.60){
//Condição das repetições de barra ou tempo das repetições com barra
    if(barReps >= 5 || (barSeconds == 12)){
//Condição referente as abdominais
        if(abs >= 41){
//Condição para corrida (distância e tempo)
            if((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)){
//Condição para natação (distância do nado e tempo do nado ou tempo do mergulho)
                if(swimDistance >= 100 && (swimTime <= 60 || diveTime <= 30)){
//Condição de passe
                    passed = true;
                }
            }
        }
    }    
} 

// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);
