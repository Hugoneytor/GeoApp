function main(){
    const lugares = [
        {
            nombre: "Zona Arqueológica La campana",
            latitud: 19.269435459444065,
            longitud:-103.72630666390853,
            codigo1: new Image().src = './imgs/ZonaArqueologica/qr1.png',
            codigo2: new Image().src = './imgs/ZonaArqueologica/qr2.png',
        },
        {
            nombre: "Andador Constitución",
            latitud: 19.24381023927711,
            longitud:-103.72766274490031,
            codigo1: new Image().src = './imgs/Constitucion/qr1.png',
            codigo2: new Image().src = './imgs/Constitucion/qr2.png',
        },
        {
            nombre: "Catedral Basílica Menor",
            latitud: 19.24321728091323,
            longitud:-103.72766662955931,
            codigo1: new Image().src = './imgs/Catedral/qr1.png',
            codigo2: new Image().src = './imgs/Catedral/qr2.png',
        },
        {
            nombre: "Zona Arqueológica el Chanal",
            latitud: 19.292287882416773,
            longitud:-103.70597006024077,
            codigo1: new Image().src = './imgs/Zona/qr1.png',
            codigo2: new Image().src = './imgs/Zona/qr2.png',
        },
        {
            nombre: "Comala",
            latitud: 19.32502604497987,
            longitud: -103.75881812209896,
            codigo1: new Image().src = './imgs/Comala/qr1.png',
            codigo2: new Image().src = './imgs/Comala/qr2.png',
        },
        {
            nombre: "Mercado Álvaro Obregón",
            latitud: 19.240939893698002,
            longitud: -103.72186660257086,
            codigo1: new Image().src = './imgs/Mercado/qr1.png',
            codigo2: new Image().src = './imgs/Mercado/qr2.png',
        },
        {
            nombre: "Zona Mágica",
            latitud: 19.361895861787172,
            longitud: -103.72381442955802,
            codigo1: new Image().src = './imgs/ZonaM/qr1.png',
            codigo2: new Image().src = './imgs/ZonaM/qr2.png',
        },
        {
            nombre: "Laguna Carrizalillo",
            latitud: 19.414664293000452,
            longitud: -103.67469970441574,
            codigo1: new Image().src = './imgs/Laguna/qr1.png',
            codigo2: new Image().src = './imgs/Laguna/qr2.png',
        },
        {
            nombre: "Volcán de Colima",
            latitud: 19.51330364584935,
            longitud: -103.61634856240883,
            codigo1: new Image().src = './imgs/Volcan/qr1.png',
            codigo2: new Image().src = './imgs/Volcan/qr2.png',
        },
        {
            nombre: "Playa El Paraíso",
            latitud: 18.87539777308781,
            longitud: -103.9921781639387,
            codigo1: new Image().src = './imgs/Playa/qr1.png',
            codigo2: new Image().src = './imgs/Playa/qr2.png',
        },
        {
            nombre: "Museo Regional de Historia",
            latitud: 19.24299308697111,
            longitud: -103.72866361606506,
            codigo1: new Image().src = './imgs/Museo/qr1.png',
            codigo2: new Image().src = './imgs/Museo/qr2.png',
        },
        {
            nombre: "Ecoparc",
            latitud: 19.238550169806228,
            longitud: -103.73347644674708,
            codigo1: new Image().src = './imgs/EcoPark/qr1.png',
            codigo2: new Image().src = './imgs/EcoPark/qr2.png',
        },
    ];

    let html = '';

    lugares.forEach((lugar)=>{
        const principal = document.querySelector('#principal');

        html += `
        <div class="card">
            <div class="title">
                <h3>${lugar.nombre}</h3>
            </div>
            <div class="latLong">
                <div class="coordenadas">
                    <h4>Latitud</h4>
                    <p>${lugar.latitud}</p>
                </div>
                <div class="coordenadas">
                    <h4>Longitud</h4>
                    <p>${lugar.longitud}</p>
                </div>
                
            </div>
            <div class="imagenes" ">
                <img src=${lugar.codigo1}>
                <img src=${lugar.codigo2}>
            </div>
        </div>
        <br>`

        principal.innerHTML = html;

    })
}


main();