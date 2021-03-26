async1();
async2();
async3();


function ejecutarEnSerie(cbGeneral) {
    async1(function (err) {
        if (err) {
            return cbGeneral(err);
        }       
        // terminó async1
        async2(function (err) {
            if (err) {
                return cbGeneral(err);
            }
            // terminó async2
            async4(cbGeneral);
        });
    });
};


ejecutarEnSerie(function (err) {
    if (err) return console.log('Hubo un problema', err);
    console.log('Terminaron todas las funciones');
});
