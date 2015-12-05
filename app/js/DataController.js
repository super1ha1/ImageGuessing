/**
 * Data Controller
 */

var B_target = [];
var B_Selected = [5,
    10,
    15,
    16,
    25,
    40,
    44,
    79,
    92,
    95,
    97,
    163,
    169,
    179,
    186,
    206,
    213,
    241,
    276,
    280,
    306,
    314,
    315,
    369,
    370,
    372,
    376,
    405,
    525,
    575,
    577,
    601,
    605,
    629,
    631,
    665,
    683,
    693,
    695,
    700,
    705,
    802,
    810,
    815,
    822,
    1014,
    1052,
    1054,
    1082,
    1083,
    1092,
    1112,
    1139,
    1158,
    1188,
    1204,
    73,
    148,
    326,
    576];
var J_target = [];
angular.module('myApp.DataController', ['ui.bootstrap'])

    .controller('UserController',  function ($scope,  $state) {

        $("#score").text(totalScore);
        $(document).ready(function() {
            if( start === 0){
                scanInterval  = setInterval(function(){
                    checkScore();
                    showOneScan();
                }, 9000);
                showOneTruck();
                truckInterval = setInterval(function () {
                    showOneTruck();
                }, 30 * 1000);
                start = 1;
                console.log("Start the trial here: " + start);
            }else{

            }
        });

        $scope.dispatchTruck = function(){

        };
        function checkScore(){
            //console.log("Start new scan here " );
            $("#movingImage")
                .animate({opacity: "0"}, 200)
                .animate({top: "20", opacity: "1"}, 10 );

            $("#resultScan").text(function(i, originalText){
                //console.log(" New round: Current Text is: " + originalText);
                if( originalText === "TIMEOUT"){
                    //console.log("result: " +  "TIMEOUT");
                }else if(originalText === "CORRECT"){
                    totalScore += 10;
                    //console.log("score: " +  totalScore);
                    $("#score").text(totalScore);
                }else if(originalText ===  "INCORRECT"){
                    //console.log("result: " +  "INCORRECT");
                }
                return "";
            });
        }


        function showOneTruck(){
            var truckTime = getRandomTruckTime();
            console.log("Truck Time: " + truckTime);

            var typeAlarm = getTypeAlarm();
            console.log("Type: " + typeAlarm);

            setTimeout(function(){
                console.log("Start new setTimeout here");
                notifyTruckFull();

                //$("#blue")
                //    .animate( {backgroundColor:'#fce3ac'}, 6 * 1000);
                $('tr')
                    .animate( {height: 300}, 6 * 1000);
                //.animate({
                //    'background-color': '#0000FF'
                //}, truckTime * 1000, function () {
                //    console.log("Callback when truck end here: animate color");
                //    notifyTruckFull();
                //});
                //.delay(10 * 10000)
                //.animate({
                //    backgroundColor : '#FFFFFF'
                //}, 10);

            }, truckTime * 1000);



            if( typeAlarm === 1 ){
                var alarmTimeout = setTimeout(function(){
                    console.log("Set False Alarm truck is full: ");
                    notifyTruckFull();
                },truckTime/2 * 1000);
            }
        }
        function showOneScan(){
            var correctImage =  getRandomImage() ;
            var correctImagePosition = getRandomPosition();
            $("#image" + correctImagePosition).attr('src',  "img/easy/easy" + correctImage + ".png")
                .click(function(){
                    $("#resultScan").text("CORRECT");
                    $("#movingImage").stop(true, false);
                });

            $("#movingImage")
                .attr('src',  "img/easy/easy" + correctImage + ".png");

            $("#image" + correctImagePosition).siblings("img").click(function(){
                $("#resultScan").text("INCORRECT");
                $("#movingImage").stop(true, false);

            });

            var wrongImage = getAnotherRandomImage(correctImage);
            var wrongImagePosition = getAnotherRandomPosition(correctImagePosition);
            $("#image" + wrongImagePosition).attr('src',  "img/easy/easy" + wrongImage + ".png");

            //wrongImage = getAnotherRandomImage(correctImage);
            //wrongImagePosition = getAnotherRandomPosition(correctImagePosition);
            //$("#image" + wrongImagePosition).attr('src',  "img/easy/easy" + wrongImage + ".png");

            $("#movingImage")
                .delay(1.5 * 1000)
                .animate({top: "+=350"}, 7000, function(){
                    $("#resultScan").text(function(i, originalText) {
                        //console.log("End animate, Current Text is: " + originalText);
                        if (originalText === "") {
                            return "TIMEOUT";
                        }
                    });
                });
        }
        function notifyTruckFull(){
            $("#alarm").text("Truck is full");
            setTimeout(function(){
                $("#alarm").text("");
            }, 3 * 1000);
        }

        function getRandomTruckTime(){
            return Math.floor((Math.random() * 11) + 12);
        }
        function getTypeAlarm(){
            return ( Math.floor((Math.random() * 100) + 1) % 2) ;
        }
        function getRandomImage(){
            return Math.floor((Math.random() * 20) + 1);
        }
        function getAnotherRandomImage ( firstImage ){
            var second =  Math.floor((Math.random() * 20) + 1);
            while ( second === firstImage){
                second =  Math.floor((Math.random() * 20) + 1);
            }
            return second;
        }
        function getRandomPosition(){
            return Math.floor((Math.random() * 4) + 1 );
        }
        function getAnotherRandomPosition(firstImage){
            var second =  Math.floor((Math.random() * 4) + 1);
            while ( second === firstImage){
                second =  Math.floor((Math.random() * 4) + 1);
            }
            return second;
        }

        $scope.goToTruck= function(){
            $state.go('truck');
        };
        $scope.goToScan= function(){
            $state.go('scan');
        };
        $scope.cancel = function(){
            clearInterval(scanInterval);
        };
    })

    .controller('QuestionController',  function ($scope,  $state) {
        J_target = getARandomArray(60);
        B_target = sortArrayAccordingToRandomArray(B_Selected, J_target);

        function getARandomArray(N){
            var array = [];
            for( var i = 0 ; i < N; i++){
                array[i] = Math.random();
            }
            return array;
        }
        function sortArrayAccordingToRandomArray(sortArray, randomArray){
           var originalRandomArray = randomArray.slice(0);
            var sortedRandomArray = randomArray.sort(function(a,b){return a-b; });
            var newIndexArray = [];
            for ( var i = 0 ; i < originalRandomArray.length; i++){
                for( var j = 0 ; j < sortedRandomArray.length; j++){
                    if(sortedRandomArray[j] === originalRandomArray[i]){
                        newIndexArray[i] = j;
                        break;
                    }
                }
            }

            var newSortedArray = [];
            for(  i = 0 ; i < sortArray.length; i++){
                newSortedArray[i] = sortArray[newIndexArray[i]];
            }
            return newSortedArray;
        }


    });