/**
 * Controllers
 */

var start = 0;
var totalScore = 0 ;
var scanInterval;
var truckInterval;
var RATING_RETURN;
var allImageArray=[1001,
    1002,
    1003,
    1004,
    1005,
    1006,
    1007,
    1008,
    1009,
    100,
    1010,
    1011,
    1012,
    1013,
    1014,
    1015,
    1016,
    1017,
    1018,
    1019,
    101,
    1020,
    1021,
    1022,
    1023,
    1024,
    1025,
    1026,
    1027,
    1028,
    1029,
    102,
    1030,
    1031,
    1032,
    1033,
    1034,
    1035,
    1036,
    1037,
    1038,
    1039,
    103,
    1040,
    1041,
    1042,
    1043,
    1044,
    1045,
    1046,
    1047,
    1048,
    1049,
    104,
    1050,
    1051,
    1052,
    1053,
    1054,
    1055,
    1056,
    1057,
    1058,
    1059,
    105,
    1060,
    1061,
    1062,
    1063,
    1064,
    1065,
    1066,
    1067,
    1068,
    1069,
    106,
    1070,
    1071,
    1072,
    1073,
    1074,
    1075,
    1076,
    1077,
    1078,
    1079,
    107,
    1080,
    1081,
    1082,
    1083,
    1084,
    1085,
    1086,
    1087,
    1088,
    1089,
    108,
    1090,
    1091,
    1092,
    1093,
    1094,
    1095,
    1096,
    1097,
    1098,
    1099,
    109,
    10,
    1100,
    1101,
    1102,
    1103,
    1104,
    1105,
    1106,
    1107,
    1108,
    1109,
    110,
    1110,
    1111,
    1112,
    1113,
    1114,
    1115,
    1116,
    1117,
    1118,
    1119,
    111,
    1120,
    1121,
    1122,
    1123,
    1124,
    1125,
    1126,
    1127,
    1128,
    1129,
    112,
    1130,
    1131,
    1132,
    1133,
    1134,
    1135,
    1136,
    1137,
    1138,
    1139,
    113,
    1140,
    1141,
    1142,
    1143,
    1144,
    1145,
    1146,
    1147,
    1148,
    1149,
    114,
    1150,
    1151,
    1152,
    1153,
    1154,
    1155,
    1156,
    1157,
    1158,
    1159,
    115,
    1160,
    1161,
    1162,
    1163,
    1164,
    1165,
    1166,
    1167,
    1168,
    1169,
    116,
    1170,
    1171,
    1172,
    1173,
    1174,
    1175,
    1176,
    1177,
    1178,
    1179,
    117,
    1180,
    1181,
    1182,
    1183,
    1184,
    1185,
    1186,
    1187,
    1188,
    1189,
    118,
    1190,
    1191,
    1192,
    1193,
    1194,
    1195,
    1196,
    1197,
    1198,
    1199,
    119,
    11,
    1200,
    1201,
    1202,
    1203,
    1204,
    1205,
    1206,
    1207,
    1208,
    1209,
    120,
    1210,
    1211,
    1212,
    1213,
    1214,
    1215,
    1216,
    1217,
    1218,
    1219,
    121,
    1220,
    1221,
    1222,
    1223,
    1224,
    1225,
    1226,
    1227,
    1228,
    1229,
    122,
    1230,
    1231,
    1232,
    1233,
    1234,
    1235,
    1236,
    1237,
    1238,
    1239,
    123,
    1240,
    1241,
    1242,
    1243,
    1244,
    1245,
    1246,
    1247,
    1248,
    1249,
    124,
    1250,
    1251,
    1252,
    1253,
    1254,
    1255,
    1256,
    1257,
    1258,
    1259,
    125,
    1260,
    1261,
    1262,
    1263,
    1264,
    1265,
    1266,
    1267,
    1268,
    1269,
    126,
    1270,
    1271,
    1272,
    1273,
    1274,
    1275,
    1276,
    1277,
    1278,
    1279,
    127,
    1280,
    1281,
    1282,
    1283,
    1284,
    1285,
    1286,
    1287,
    1288,
    1289,
    128,
    1290,
    1291,
    1292,
    1293,
    1294,
    1295,
    129,
    12,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    13,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    14,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    15,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    16,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    17,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    18,
    190,
    191,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    19,
    1,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    20,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    21,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    22,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    23,
    240,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    24,
    250,
    251,
    252,
    253,
    254,
    255,
    256,
    257,
    258,
    259,
    25,
    260,
    261,
    262,
    263,
    264,
    265,
    266,
    267,
    268,
    269,
    26,
    270,
    271,
    272,
    273,
    274,
    275,
    276,
    277,
    278,
    279,
    27,
    280,
    281,
    282,
    283,
    284,
    285,
    286,
    287,
    288,
    289,
    28,
    290,
    291,
    292,
    293,
    294,
    295,
    296,
    297,
    298,
    299,
    29,
    2,
    300,
    301,
    302,
    303,
    304,
    305,
    306,
    307,
    308,
    309,
    30,
    310,
    311,
    312,
    313,
    314,
    315,
    316,
    317,
    318,
    319,
    31,
    320,
    321,
    322,
    323,
    324,
    325,
    326,
    327,
    328,
    329,
    32,
    330,
    331,
    332,
    333,
    334,
    335,
    336,
    337,
    338,
    339,
    33,
    340,
    341,
    342,
    343,
    344,
    345,
    346,
    347,
    348,
    349,
    34,
    350,
    351,
    352,
    353,
    354,
    355,
    356,
    357,
    358,
    359,
    35,
    360,
    361,
    362,
    363,
    364,
    365,
    366,
    367,
    368,
    369,
    36,
    370,
    371,
    372,
    373,
    374,
    375,
    376,
    377,
    378,
    379,
    37,
    380,
    381,
    382,
    383,
    384,
    385,
    386,
    387,
    388,
    389,
    38,
    390,
    391,
    392,
    393,
    394,
    395,
    39,
    3,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    409,
    40,
    410,
    411,
    412,
    413,
    414,
    415,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    4,
    501,
    502,
    503,
    504,
    505,
    506,
    507,
    508,
    509,
    50,
    510,
    511,
    512,
    513,
    514,
    515,
    516,
    517,
    518,
    519,
    51,
    520,
    521,
    522,
    523,
    524,
    525,
    526,
    527,
    528,
    529,
    52,
    530,
    531,
    532,
    533,
    534,
    535,
    536,
    537,
    538,
    539,
    53,
    540,
    541,
    542,
    543,
    544,
    545,
    546,
    547,
    548,
    549,
    54,
    550,
    551,
    552,
    553,
    554,
    555,
    556,
    557,
    558,
    559,
    55,
    560,
    561,
    562,
    563,
    564,
    565,
    566,
    567,
    568,
    569,
    56,
    570,
    571,
    572,
    573,
    574,
    575,
    576,
    577,
    578,
    579,
    57,
    580,
    581,
    582,
    583,
    584,
    585,
    586,
    587,
    588,
    589,
    58,
    590,
    591,
    592,
    593,
    594,
    59,
    5,
    601,
    602,
    603,
    604,
    605,
    606,
    607,
    608,
    609,
    60,
    610,
    611,
    612,
    613,
    614,
    615,
    616,
    617,
    618,
    619,
    61,
    620,
    621,
    622,
    623,
    624,
    625,
    626,
    627,
    628,
    629,
    62,
    630,
    631,
    632,
    633,
    634,
    635,
    636,
    637,
    638,
    639,
    63,
    640,
    641,
    642,
    643,
    644,
    645,
    646,
    647,
    648,
    649,
    64,
    650,
    651,
    652,
    653,
    654,
    655,
    656,
    657,
    658,
    659,
    65,
    660,
    661,
    662,
    663,
    664,
    665,
    666,
    667,
    668,
    669,
    66,
    670,
    671,
    672,
    673,
    674,
    675,
    676,
    677,
    678,
    679,
    67,
    680,
    681,
    682,
    683,
    684,
    685,
    686,
    687,
    688,
    689,
    68,
    690,
    691,
    692,
    693,
    694,
    695,
    696,
    697,
    698,
    699,
    69,
    6,
    700,
    701,
    702,
    703,
    704,
    705,
    706,
    707,
    708,
    709,
    70,
    710,
    711,
    712,
    713,
    714,
    715,
    716,
    717,
    718,
    719,
    71,
    720,
    721,
    722,
    723,
    724,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    7,
    801,
    802,
    803,
    804,
    805,
    806,
    807,
    808,
    809,
    80,
    810,
    811,
    812,
    813,
    814,
    815,
    816,
    817,
    818,
    819,
    81,
    820,
    821,
    822,
    823,
    824,
    825,
    826,
    827,
    828,
    829,
    82,
    830,
    831,
    832,
    833,
    834,
    835,
    836,
    837,
    838,
    839,
    83,
    840,
    841,
    842,
    843,
    844,
    845,
    846,
    847,
    848,
    84,
    85,
    86,
    87,
    88,
    89,
    8,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    9];
var MAX_VALUE_RATING = 9;
var MIN_VALUE_RATING = 1;

angular.module('myApp.controller', ['ui.bootstrap'])
    .service('scoreService', function(){
        var result = {
            score: 0,
            round : 5
        };
        return {
            getScore: function () {
                return result.score;
            },
            setScore: function(value) {
                result.score = value;
            },
            getRound : function () {
                return result.round;
            },
            setRound : function (value) {
                result.round = value;
            }
        };
    })

    .controller("ShowController", function($scope, $state){

        var imageArray = All_Image_Show_Array;
        var currentIndex = 0 ;
        $scope.finishShowing = false;
        $scope.first = "bg/11a";
        console.log("length before start: " + imageArray.length);

        var imageInterval = setInterval(function(){
            showOnePairImage();
        }, 2 * 1000);

        function showOnePairImage(){
            var imageNumber = imageArray[currentIndex++];
            console.log("Image: " + imageNumber  +" index: " + currentIndex);
            $scope.first = "bg/" + imageNumber;
            $scope.$apply();
            checkFinishShowing();
        }

        function checkFinishShowing(){
            if( currentIndex === imageArray.length ){
                clearInterval(imageInterval);
                console.log("Clear interval here");
                $scope.$apply(function(){
                    $scope.finishShowing = true;
                });
            }
        }
        function getRandomImage( max){
            return Math.floor((Math.random() * max) );
        }

        function getImagePosition(){
            return ( Math.floor((Math.random() * 100) + 1) % 2) ;
        }
        function generateImageArray() {
            var imageArray =  [] ;
            for( var i = 0; i < 150; i++){
                var randomIndex = getRandomImage(allImageArray.length);
                imageArray.push(allImageArray[randomIndex]);
            }
            return imageArray;
        }
    })

    .controller("TestController", function($scope, $state, $timeout,  $modal, $log, scoreService) {
        var LEFT_CLICKED, LEFT_TRUE;
        var QuestionNumber = 0, AI_SUGGEST, TOTAL_SCORE = 0 ;
        var  INITIAL_DELAY_TIMEOUT;

        var imagePairs = WX_target;
        var AI_choice = AI_suggestion;
        var resultArray = Y_target;

        $scope.animationsEnabled = true;
        $scope.first = "bg/11a";
        $scope.second = "bg/11b";
        $scope.showAnswer = false;


        $scope.open = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'RatingModalController',
                size: size,
                resolve: {
                    result: function () {
                        return $scope.result;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                console.log("Return rating value: " + selectedItem);
                if( selectedItem >= MIN_VALUE_RATING && selectedItem <= MAX_VALUE_RATING){
                    console.log("User select to close the dialog");
                    if( QuestionNumber < 5){
                        setTimeout(function(){
                            resetToStartNewRound();
                            showOnePairImage();
                        },  1000);
                    }else{
                        scoreService.setRound(QuestionNumber);
                        scoreService.setScore(TOTAL_SCORE);
                        $state.go('summary');
                    }
                }
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        INITIAL_DELAY_TIMEOUT = setTimeout(function(){
            showOnePairImage();
        }, 3 * 1000);

        function resetToStartNewRound(){
            $scope.selectImage = "";
            $scope.suggestImage = "";
            $scope.showAnswer = false;

        }

        function setCounter (){
            $scope.counter = 7;
            COUNTER_TIMEOUT = $timeout($scope.onTimeout(),  1000);
        }
        function showOnePairImage(){
            QuestionNumber++;
            AI_SUGGEST = AI_choice[QuestionNumber];

            if( resultArray[QuestionNumber]){
                LEFT_TRUE = true;
            }else{
                LEFT_TRUE = false;
            }

            console.log("Image Left: " + imagePairs[QuestionNumber].left
                +" Image Right " + imagePairs[QuestionNumber].right + " current question: " + QuestionNumber);

            setImage(imagePairs[QuestionNumber].left, imagePairs[QuestionNumber].right);

            checkFinishShowing();

        }


        $scope.clickImage = function (leftClick) {

            $scope.showAnswer = true;

            LEFT_CLICKED = leftClick;

            if( LEFT_CLICKED){
                $scope.selectImage = "LEFT";
            }else{
                $scope.selectImage = "RIGHT";
            }

            if( AI_SUGGEST ){
                $scope.suggestImage = "LEFT";
            }else{
                $scope.suggestImage = "RIGHT";
            }
        };

        $scope.clickFinalAnswer = function(leftClick){
            LEFT_CLICKED = leftClick;
            checkResult();
            $scope.open('lg');
        };

        function checkResult(){
            if( (LEFT_CLICKED && LEFT_TRUE)  || (!LEFT_CLICKED && !LEFT_TRUE) ){
                $scope.result = true;
                TOTAL_SCORE++;
            }else{
                $scope.result = false;
            }
        }

        function setImage(leftImage,rightImage ){
                $scope.first = "bg/" + leftImage;
                $scope.second =  "bg/" + rightImage;
                $scope.$apply();
        }

        function checkFinishShowing(){
            if( QuestionNumber === PAIR_IMAGE_SHOWING){
                console.log("Finish the test here");
            }
        }
    })

    .controller('RatingModalController',  function ($scope, $modalInstance, result) {

        if( result){
            $scope.finalResult = "CORRECT";
        }else{
            $scope.finalResult = "WRONG";
        }

        $scope.rate = {
            value : 5
        };

        $scope.max = MAX_VALUE_RATING;
        $scope.isReadonly = false;

        $scope.next = function () {
            $modalInstance.close($scope.rate.value);
        };

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = value;
        };

        $scope.ratingStates = [
            {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            {stateOn: 'glyphicon-heart'},
            {stateOff: 'glyphicon-off'}
        ];
    })

    .controller('SummaryController', function($scope, scoreService){

        $scope.rate = {
            value : 5
        };

        $scope.max = MAX_VALUE_RATING;

        $scope.isReadonly = false;

        $scope.showScore = false;

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = value;
        };

        $scope.guess = function () {
            $scope.score = scoreService.getScore();
            $scope.round = scoreService.getRound();
            $scope.showScore = true;
        };

        $scope.ratingStates = [
            {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            {stateOn: 'glyphicon-heart'},
            {stateOff: 'glyphicon-off'}
        ];
    })

;

