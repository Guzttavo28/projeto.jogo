
//posições dos carros
// let xCarro1 = 599;
// let xCarro2 = 399;
// let xCarro3 = 299;
let xCarros = [599, 599, 599, 599, 599, 599]
let comprimentoCarros=40;
let alturaCarros=30;
let yCarros = [50, 100, 150, 200, 250, 300]
let velocidadeCarros = [8,6.3,6.2,6.2,2.8,7]


function movimentoCarros() {
    for (let i = 0; i < imagensCarros.length; i++) {
    
        xCarros[i] -= velocidadeCarros[i];
        if (xCarros[i] < -50) {
            xCarros[i] = 700
            
        }
        
    }
    
}

function mostrarCarros() {
    for (let i = 0; i < imagensCarros.length; i++) {
    
        image(imagensCarros[i], xCarros[i], yCarros[i],comprimentoCarros, alturaCarros);

        
    }
    
    
    
    
    
    
    
    
    
    
    



    // image(imagemDoCarro1, xCarro1, 40, comprimentoCarros, alturaCarros);
    // image(imagemDoCarro2, xCarro2, 100, 40,40 );
    // image(imagemDoCarro3, xCarro3, 150, 40, 40 );

    
}

