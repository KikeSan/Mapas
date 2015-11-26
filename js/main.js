$(document).ready(function(){
    var path = 'assets/';
    var avion;
    var circulos = new Array();
    var posX = [313,363,321,420,266,284,320,266,247,196,232,138,261,293,159,302,357,551,573,586,594,605,619,627,687,797,653,1040,1056,1048,1100];
    var posY = [535,568,473,483,409,379,363,367,359,310,263,241,248,233,180,197,169,226,222,169,185,169,179,214,225,293,553,260,232,293,238];
    var rotar = [-90,-40,-10,10];
    var LimaX = 278;
    var LimaY = 449;
    var pTempX, pTempY;
    var escala, hoverPais, conteHovers, puntoFin, contePuntoFin, flag, rutaBase, conteRuta;
    var ruta0 = [2,0];
    var ruta1 = [1];
    var ruta2 = [2];
    var ruta3 = [1,3];
    var ruta4 = [4];
    var ruta5 = [4,5];
    var ruta6 = [4,5,6];
    var ruta7 = [7];
    var ruta8 = [7,8];
    var ruta9 = [9];
    var ruta10 = [10];
    var ruta11 = [];
    var ruta12 = [];
    var ruta13 = [10,13];
    var ruta14 = [12,11,14];
    var ruta15 = [15];
    var ruta16 = [15,16];
    var ruta17 = [17];
    var ruta18 = [7,12,18];
    var ruta19 = [7,12,18,21,20,22,19];
    var ruta20 = [7,12,18,21,20];
    var ruta21 = [7,12,18,21];
    var ruta22 = [7,12,18,21,20,22];
    var ruta23 = [17,21,23];
    var ruta24 = [17,21,23,24];
    var ruta25 = [10,13,25];
    var ruta26 = [1,3,26];
    var ruta27 = [9,11,30,29,27];
    var ruta28 = [9,11,30,29,27,28];
    var ruta29 = [9,11,30,29];
    var ruta30 = [9,11,30];
    
    var rutas = [ruta0,ruta1,ruta2,ruta3,ruta4,ruta5,ruta6,ruta7,ruta8,ruta9,ruta10,ruta11,ruta12,ruta13,ruta14,ruta15,ruta16,ruta17,ruta18,ruta19,ruta20,ruta21,ruta22,ruta23,ruta24,ruta25,ruta26,ruta27,ruta28,ruta29,ruta30];
    
    var rotar0 = [90,110];
    var rotar1 = [120];
    var rotar2 = [100];
    var rotar3 = [50,10];
    var rotar4 = [-20];
    var rotar5 = [-20,0];
    var rotar6 = [-20,0,15];
    var rotar7 = [-30];
    var rotar8 = [-30,-60];
    var rotar9 = [-80];
    var rotar10 = [-10];
    var rotar11 = [-10,0];
    var rotar12 = [-10];
    var rotar13 = [-10,0];
    var rotar14 = [-10,-90,-50];
    var rotar15 = [-10];
    var rotar16 = [-10,10];
    var rotar17 = [0];
    var rotar18 = [-30,40,10];
    var rotar19 = [-30,40,40,20,50,30,-80];
    var rotar20 = [-30,40,40,20,50];
    var rotar21 = [-30,40,40,20];
    var rotar22 = [-30,40,40,20,50,30];
    var rotar23 = [-10,20,90];
    var rotar24 = [-10,20,90,50];
    var rotar25 = [-10,0,60];
    var rotar26 = [90,70,50];
    var rotar27 = [-80,20,60,200,280];
    var rotar28 = [-80,20,60,200,300,360];
    var rotar29 = [-80,20,60,200];
    var rotar30 = [-80,20,60];
    
    var rotacion = [rotar0,rotar1,rotar2,rotar3,rotar4,rotar5,rotar6,rotar7,rotar8,rotar9,rotar10,rotar11,rotar12,rotar13,rotar14,rotar15,rotar16,rotar17,rotar18,rotar19,rotar20,rotar21,rotar22,rotar23,rotar24,rotar25,rotar26,rotar27,rotar28,rotar29,rotar30];
    
//  var rotaLima = [00,01,02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,27, 28, 29, 30];
    var rotaLima = [50,80,50,120,-60,-60,-60,-65,-65,-70,-75,-75,-70,-75,-70,-60,-60,-10,-65,-65,-65,-65,-65,-10,-10,-75,80,-70,-70,-70,-70];
    
//  var hoverX = [chi,arg,bol,bra,ecu,col,ven,pan,cos,mex,usa,usa,usa,usa,can,can,can,por,esp,ing,fra,hol,ale,ita,tur,emA,suA,chi,kor,tai ,jap];
    var hoverX = [299,309,304,282,251,263,287,247,238,132,124,124,124,124,138,138,138,544,546,556,565,594,601,605,674,777,641,848,848,1040,1066];
    var hoverY = [479,499,443,377,390,343,345,356,351,252,179,179,179,179, 79, 79, 79,212,203,137,172,160,154,189,211,283,501,159,159,286, 196];
    
//    Rutas
    var rutasBaseX = [000,000,000,266,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,241];
    var rutasBaseY = [000,000,000,449,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,158];
    
    //creamos el Stage
    var stage = new createjs.Stage("myCanvas");
    stage.update();

    createjs.Touch.enable(stage);
    stage.enableMouseOver(10);
    stage.mouseMoveOutside = true;
    
    
    var queue = new createjs.LoadQueue();
    queue.on("complete", handleComplete, this);
    queue.on("progress", cargando, this);
    queue.loadManifest([
        {id: "mapa", src:path+"mapa.png"},
        {id: "avion", src:path+"avion.png"},
        {id: "punto", src:path+"punto.png"},
        {id: "puntoFinal", src:path+"puntoFinal.png"},
        
 {id: "flag0", src:path+"flagChi.png"},{id: "flag1", src:path+"flagArg.png"},{id: "flag2", src:path+"flagBol.png"},{id: "flag3", src:path+"flagBra.png"},{id: "flag4", src:path+"flagEcu.png"},{id: "flag5", src:path+"flagCol.png"},{id: "flag6", src:path+"flagVen.png"},{id: "flag7", src:path+"flagPan.png"},{id: "flag8", src:path+"flagCos.png"},{id: "flag9", src:path+"flagMex.png"},{id: "flag10", src:path+"flagUsaH.png"},{id: "flag11", src:path+"flagUsaL.png"},{id: "flag12", src:path+"flagUsaA.png"},{id: "flag13", src:path+"flagUsaW.png"},{id: "flag14", src:path+"flagCanV.png"},{id: "flag15", src:path+"flagCanT.png"},{id: "flag16", src:path+"flagCanQ.png"},{id: "flag17", src:path+"flagPor.png"},{id: "flag18", src:path+"flagEsp.png"},{id: "flag19", src:path+"flagIng.png"},{id: "flag20", src:path+"flagFra.png"},{id: "flag21", src:path+"flagHol.png"},{id: "flag22", src:path+"flagAle.png"},{id: "flag23", src:path+"flagIta.png"},{id: "flag24", src:path+"flagTur.png"},{id: "flag25", src:path+"flagEmA.png"},{id: "flag26", src:path+"flagSuA.png"},{id: "flag27", src:path+"flagChin.png"},{id: "flag28", src:path+"flagKor.png"},{id: "flag29", src:path+"flagTai.png"},{id: "flag30", src:path+"flagJap.png"},
        
        {id: "hover0", src:path+"hoverChi.png"},{id: "hover1", src:path+"hoverArg.png"},{id: "hover2", src:path+"hoverBol.png"},{id: "hover3", src:path+"hoverBra.png"},{id: "hover4", src:path+"hoverEcu.png"},{id: "hover5", src:path+"hoverCol.png"},{id: "hover6", src:path+"hoverVen.png"},{id: "hover7", src:path+"hoverPan.png"},{id: "hover8", src:path+"hoverCos.png"},{id: "hover9", src:path+"hoverMex.png"},{id: "hover10", src:path+"hoverUsa.png"},{id: "hover11", src:path+"hoverUsa.png"},{id: "hover12", src:path+"hoverUsa.png"},{id: "hover13", src:path+"hoverUsa.png"},{id: "hover14", src:path+"hoverCan.png"},{id: "hover15", src:path+"hoverCan.png"},{id: "hover16", src:path+"hoverCan.png"},{id: "hover17", src:path+"hoverPor.png"},{id: "hover18", src:path+"hoverEsp.png"},{id: "hover19", src:path+"hoverIng.png"},{id: "hover20", src:path+"hoverFra.png"},{id: "hover21", src:path+"hoverHol.png"},{id: "hover22", src:path+"hoverAle.png"},{id: "hover23", src:path+"hoverIta.png"},{id: "hover24", src:path+"hoverTur.png"},{id: "hover25", src:path+"hoverEmA.png"},{id: "hover26", src:path+"hoverSuA.png"},{id: "hover27", src:path+"hoverKor.png"},{id: "hover28", src:path+"hoverKor.png"},{id: "hover29", src:path+"hoverTai.png"},{id: "hover30", src:path+"hoverJap.png"},
        
        {id: "rutaAzul3", src:path+"ruta3.png"},
        {id: "rutaAzul19", src:path+"ruta19.png"}
        
    ]);
    
    function cargando(event){
        console.log('cargando... ' + event.progress);

        var loaderIMG = new createjs.Bitmap(path+"loader.png");
        stage.addChild(loaderIMG);
        loaderIMG.x = $(document).width() / 2;
        loaderIMG.y = $(document).height() / 2;
        /*var porcentaje = event.progress * 100; 
        var almedio = $(document).height() / 2;
        var alcentro = $(document).width() / 2;

        $('.precarga').css('width',porcentaje+ '%');

        $('.texto').html(Math.floor(porcentaje)+"%");
        $('.texto').css('top',almedio+15);*/


    }
    
    function handleComplete(event) {
        init();
    }

    function init () {
        var mapa = new createjs.Bitmap(queue.getResult("mapa"));
        stage.addChild(mapa);
        
        conteHovers = new createjs.Container();
        stage.addChild(conteHovers);
        
        for (var i=0; i<posX.length; i++){
            var circle = new createjs.Bitmap(queue.getResult("punto"));
            circulos.push(circle);
            circle.regX = 9;
            circle.regY = 9;
            circle.alpha = 0.5;
            TweenMax.to(circle, 0.5, {scaleX:1.3, scaleY:1.3, alpha:1, repeat:-1, delay:Math.random(), yoyo:true});
            createjs.Ticker.addEventListener("tick", tick);
            
            circulos[i].x = posX[i];
            circulos[i].y = posY[i];
            
            stage.addChild(circulos[i]);
            
            circulos[i].addEventListener("mouseover", function(event){
                console.log('ID--- '+(event.target.id-3));
                document.body.style.cursor='pointer';
                var ID = event.target.id-3;
                flag = new createjs.Bitmap(queue.getResult("flag"+String(ID)));
                stage.addChild(flag);
                flag.alpha = 0; flag.scaleX = 0.1; flag.scaleY = 0.1;
                flag.y = posY[ID];
                if(ID>26) {
                    flag.x = posX[ID]-10;
                    flag.regX = 322;    
                }else{
                    flag.x = posX[ID]+15;
                    flag.regX = 0;
                }
                flag.regY = 35;
                TweenMax.to(flag, 0.5, {scaleX:1, scaleY:1, alpha:1, ease:Expo.easeOut});
                
                pintaPais(ID);
                
                stage.update();
            });
            circulos[i].addEventListener("mouseout", function(event){
                document.body.style.cursor='default';
                stage.removeChild(flag);
                ocultaPais(); 
                stage.update();
            });
            circulos[i].addEventListener("click", function(event){
                pTempX = LimaX;
                pTempY = LimaY;
                if(event.target.id-3 == 3){
                    mueveAvion(event.target.id-3);
                }
                stage.update();
                
            });
        }
        
        contePuntoFin = new createjs.Container();
        stage.addChild(contePuntoFin);
        
        conteRuta = new createjs.Container();
        stage.addChild(conteRuta);
        
        avion = new createjs.Bitmap(queue.getResult("avion"));
        stage.addChild(avion);
        avion.rotation = 30;
        avion.regX = 10;
        avion.regY = 10;
        avion.x = LimaX;
        avion.y = LimaY;
        
        stage.update();

    }
    function BorrarObject (arguments) {
        conteHovers.removeChild(arguments);
    }
    function pintaPais(p) {
        hoverPais = new createjs.Bitmap(queue.getResult("hover"+String(p)));
        conteHovers.addChild(hoverPais);
        hoverPais.x = hoverX[p];
        hoverPais.y = hoverY[p];
        hoverPais.alpha = 0;
        TweenMax.to(hoverPais, 0.5, {alpha:1, ease:Power3.easeOut});
    }
    function ocultaPais () {
        TweenMax.to(hoverPais, 0.5, {alpha:0, ease:Expo.easeOut, onComplete:BorrarObject, onCompleteParams:[hoverPais]});
    }
    
    var tempBoton;
    function mueveAvion (cual) {
        try{
            contePuntoFin.removeChild(puntoFin);
            tempBoton.mouseEnabled = true;
            conteHovers.removeAllChildren();
            conteRuta.removeAllChildren();
            stage.removeChild(flag);
        }catch(Error){
            
        }
        
        circulos[cual].mouseEnabled = false;
        tempBoton = circulos[cual];
        ocultaPais();
        
        rutaBase = new createjs.Bitmap(queue.getResult("rutaAzul"+cual));
        conteRuta.addChild(rutaBase);
        rutaBase.x = rutasBaseX[cual];
        rutaBase.y = rutasBaseY[cual];
        
        puntoFin = new createjs.Bitmap(queue.getResult("puntoFinal"));
        contePuntoFin.addChild(puntoFin);
        puntoFin.x = posX[cual];
        puntoFin.y = posY[cual];
        puntoFin.regX = puntoFin.regY = 21;
        
        var i = 0;
        avion.rotation = rotaLima[cual];
        avion.x = LimaX;
        avion.y = LimaY;
        function animate () {
            if(i<rutas[cual].length){
                console.log('DistanciaX -> A: ' + avion.x + ' MEDIO: ' + (((pTempX+posX[rutas[cual][i]])/2)-Math.abs((posX[rutas[cual][i]]-pTempX))) + " B: " + posX[rutas[cual][i]]);
                console.log('DistanciaY -> A: ' + avion.y + ' MEDIO: ' + (((pTempY+posY[rutas[cual][i]])/2)-Math.abs((posY[rutas[cual][i]]-pTempY))) + " B: " + posY[rutas[cual][i]]);
                var vals = [];
                if(Math.abs((posX[rutas[cual][i]]-pTempX))<Math.abs((posY[rutas[cual][i]]-pTempY))) {
                    vals = [
                        {x:((pTempX+posX[rutas[cual][i]])/2)-Math.abs((posX[rutas[cual][i]]-pTempX)*0.9), y:((pTempY+posY[rutas[cual][i]])/2)-Math.abs((posY[rutas[cual][i]]-pTempY)/5)}, 
                        {x:posX[rutas[cual][i]], y:posY[rutas[cual][i]]}
                    ]
                }else{
                    vals = [
                        {x:((pTempX+posX[rutas[cual][i]])/2)-Math.abs((posX[rutas[cual][i]]-pTempX)/5), y:((pTempY+posY[rutas[cual][i]])/2)-Math.abs((posY[rutas[cual][i]]-pTempY)*0.9)}, 
                        {x:posX[rutas[cual][i]], y:posY[rutas[cual][i]]}
                    ]
                }
                TweenMax.to(avion, 3, {
                    bezier:{
                        type:"soft",  
                        values:vals, 
                        autoRotate:false}, 
                    rotation:rotacion[cual][i],
                    ease:Power3.easeInOut,
                    onComplete:animate
                });
                TweenMax.delayedCall(2.2,pintaPais,[rutas[cual][i]]);

                pTempX = posX[rutas[cual][i]];
                pTempY = posY[rutas[cual][i]];
                TweenMax.delayedCall(2.5,muestraPais,[i]);

                i++;

                createjs.Ticker.addEventListener("tick", tick);
            }
            
        }
        animate();
        
        function muestraPais (paisID) {
            console.log("i:-> "+paisID);
            escala = new createjs.Bitmap(queue.getResult("r4_e"+String(paisID)));
            stage.addChild(escala);
            escala.alpha = 0; escala.scaleX = 0.1; escala.scaleY = 0.1;
            escala.x = posX[paisID]+15;
            escala.y = posY[paisID];
            escala.regX = 0;
            escala.regY = 65;
            TweenMax.to(escala, 0.5, {scaleX:1, scaleY:1, alpha:1, ease:Expo.easeOut});
            
            TweenMax.delayedCall(1,quitaPais);
            
            function quitaPais () {
                stage.removeChild(escala);
            }
        }
    }
    function tick (e) {
        stage.update();
    }
    function vibrar (e) {
        console.log(e.currentTarget);
        TweenMax.to(mc, 1, {x:100, repeat:1, yoyo:true});
        stage.update();
    }
})
<<<<<<< HEAD

=======
>>>>>>> a5bd12eb0f39c7bb4b962229d200eb6861bf8881
