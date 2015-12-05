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
var last_45_Distractor = [1005,
    707,
    651,
    686,
    1090,
    351,
    104,
    349,
    116,
    846,
    1264,
    1260,
    547,
    273,
    375,
    519,
    1,
    36,
    96,
    509,
    271,
    373,
    624,
    125,
    1044,
    654,
    1179,
    136,
    526,
    537,
    324,
    297,
    1073,
    555,
    250,
    404,
    808,
    408,
    805,
    333,
    145,
    122,
    1208,
    216,
    1193];
var first_45_Distractor = [353,
    412,
    587,
    255,
    295,
    401,
    158,
    522,
    637,
    1248,
    1162,
    299,
    521,
    345,
    368,
    590,
    230,
    621,
    1064,
    143,
    14,
    628,
    1227,
    403,
    173,
    812,
    1125,
    362,
    23,
    196,
    380,
    636,
    307,
    1105,
    332,
    1159,
    559,
    516,
    579,
    1290,
    1101,
    1238,
    1291,
    309,
    650];

var J_target = [];
var All_Image_Show_Array = [];
var L_target = [];
var N_target = [];
var M_target = [];
var O_target = [];
var AA_array = [];
var BC_array = [];
var AABC_array = [];
var S_target = [];
var QR_target = [];
var U_target = [];
var V_target = [];
var WX_target = [];
var Y_target = [];


const CORRECT_IMAGE_SIZE = 60;
const EACH_TYPE_IMAGE_SIZE = 20;
const PAIR_IMAGE_SHOWING = 40;
const LEFT_SIDE = "a";
const RIGHT_SIDE = "b";
const Y_LEFT = true;

var AI_correct_percentage = 0.8;
var AI_initial_Hit_Miss = [];
var NUMBER_OF_AI_CORRECT_GUESSING;
var AI_AA_random = [];
var AI_BC_random = [];
var AI_AA_Hit_miss = [];
var AI_BC_Hit_miss = [];
var AI_final_Hit_Miss = [];
var AI_suggestion = [];

angular.module('myApp.DataController', ['ui.bootstrap'])

    .controller('UserController',  function ($scope,  $state) {

    })

    .controller('QuestionController',  function ($scope,  $state) {
        var Pair = function (left, right){
            this.left = left;
            this.right = right;
        };

        J_target = getARandomArray(CORRECT_IMAGE_SIZE);
        B_target = sortArrayAccordingToRandomArray(B_Selected, J_target);
        L_target = getARandomArray(CORRECT_IMAGE_SIZE);
        M_target = getARandomArray(CORRECT_IMAGE_SIZE);
        generateNOTargetArray(L_target, M_target, B_target);

        first_45_Distractor = convertArrayElementFromIntToString(first_45_Distractor);
        last_45_Distractor = convertArrayElementFromIntToString(last_45_Distractor);
        All_Image_Show_Array = first_45_Distractor.concat(N_target, last_45_Distractor);


        AA_array = generateAAArray(N_target, O_target);
        BC_array = generateBCArray(N_target, O_target);
        AABC_array = AA_array.concat(BC_array);

        S_target = getARandomArray(PAIR_IMAGE_SHOWING);
        QR_target = sortArrayAccordingToRandomArray(AABC_array, S_target);

        U_target = getARandomArray(PAIR_IMAGE_SHOWING);
        V_target = getARandomArray(PAIR_IMAGE_SHOWING);

        WX_target = generateWXYTargetArray(QR_target, U_target, V_target);


        NUMBER_OF_AI_CORRECT_GUESSING = PAIR_IMAGE_SHOWING * AI_correct_percentage;

        AI_initial_Hit_Miss = generateInitialAIGuessingArray(NUMBER_OF_AI_CORRECT_GUESSING);
        AI_AA_random = getARandomArray(PAIR_IMAGE_SHOWING/2);
        AI_BC_random = getARandomArray(PAIR_IMAGE_SHOWING/2);

        AI_AA_Hit_miss = sortArrayAccordingToRandomArray(AI_initial_Hit_Miss, AI_AA_random);
        AI_BC_Hit_miss = sortArrayAccordingToRandomArray(AI_initial_Hit_Miss, AI_BC_random);

        AI_final_Hit_Miss = AI_AA_Hit_miss.concat(AI_BC_Hit_miss);
        AI_final_Hit_Miss = sortArrayAccordingToRandomArray(AI_final_Hit_Miss, S_target);
        console.log(AI_final_Hit_Miss);


        AI_suggestion = generateAISuggestion(AI_final_Hit_Miss, Y_target);
        console.log(Y_target);
        console.log(AI_suggestion);


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
        function generateNOTargetArray(L_target, M_target, B_target){
            for ( var i = 0 ; i < CORRECT_IMAGE_SIZE; i++){
                if( L_target[i] > M_target[i]){ //N is left side
                    N_target[i] = B_target[i].toString() + LEFT_SIDE;
                    O_target[i] = B_target[i].toString() + RIGHT_SIDE;
                }else{ // N is right side
                    N_target[i] = B_target[i].toString() + RIGHT_SIDE;
                    O_target[i] = B_target[i].toString() + LEFT_SIDE;
                }
            }
        }
        function convertArrayElementFromIntToString(first_45_Distractor) {
            var newArray = [];
            for (var i = 0 ; i < first_45_Distractor.length; i++){
                newArray[i] = first_45_Distractor[i].toString() + LEFT_SIDE;
            }
            return newArray;
        }
        function generateAAArray(N_target, O_target){
            var newAAArray = [];
            for ( var i = 0 ; i < EACH_TYPE_IMAGE_SIZE; i++){
                var pair = new Pair(N_target[i], O_target[i]);
                newAAArray[i] = pair;
            }
            return newAAArray;
        }
        function generateBCArray(N_target, O_target){
            var newBCArray = [];
            for ( var i = EACH_TYPE_IMAGE_SIZE ; i < PAIR_IMAGE_SHOWING; i++){
                var pair = new Pair(N_target[i], O_target[i+ EACH_TYPE_IMAGE_SIZE]);
                newBCArray[i-EACH_TYPE_IMAGE_SIZE] = pair;
            }
            return newBCArray;
        }
        function generateWXYTargetArray(QR_target, U_target, V_target){
            var i, WX_target = [];
            for (i = 0 ; i < QR_target.length; i++ ){
                if( U_target[i] > V_target[i]){ // W = Q, X = R, Y = LEFT = True,
                    var pair = new Pair(QR_target[i].left, QR_target[i].right);
                    WX_target[i] = pair;
                    Y_target [i] = Y_LEFT;
                }else { // W = R, X = Q, Y = RIGHT = 1,
                    var pair = new Pair(QR_target[i].right, QR_target[i].left);
                    WX_target[i] = pair;
                    Y_target [i] = !Y_LEFT;
                }
            }
            return WX_target;
        }
        function generateInitialAIGuessingArray(NUMBER_OF_AI_CORRECT_GUESSING){
            var newArray = [];
            var each_type_correct = NUMBER_OF_AI_CORRECT_GUESSING /2;
            for ( var i = 0 ; i < PAIR_IMAGE_SHOWING/2; i++){
                newArray[i] = i < each_type_correct ;
            }
            return newArray;
        }

        function generateAISuggestion (AI_final_Hit_Miss, Y_target) {
            var i, AI_suggestion = [];
            for ( i =0 ; i < PAIR_IMAGE_SHOWING; i++) {
                if(AI_final_Hit_Miss[i]){
                    AI_suggestion[i] = Y_target[i];
                }else{
                    AI_suggestion[i] = !Y_target[i];
                }
            }
            return AI_suggestion;
        };
    });