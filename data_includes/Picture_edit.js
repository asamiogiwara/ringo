/*Example experiment for the ComicCaption controller.
Preload images using Alex Drummond's Preloader controller for better performance, as shown below.*/

//List of images to be used in items
p1 = "https://i.imgur.com/G44f7Sf.jpg";
p2 = "https://i.imgur.com/4QqJgx4.jpg";
p3 = "https://imgur.com/a/qd4upEo";
p4 = "https://imgur.com/a/YIOFS4l";

var IMAGES_TO_PRELOAD = [p1],[p2],[p3],[p4]; //array of images to be preloaded

var items = [

["preload", "Preloader", {images: IMAGES_TO_PRELOAD}],

 ["intro", "Message", {consentRequired: false,
                html: ["div",
                        ["p", "Welcome to the experiment!"]
                      ]}],


["sep", "Separator", {}],

//Practice items
	["practice", "ComicCaption", ,{s: {html: "<big> アーニーはバートよりたくさん入れた．"}, q: "質問：この文は上の絵の状況と合っていますか？", html: p3}],
    ["practice", "ComicCaption", {s: {html: "<big> アーニーはバートよりたくさん収穫した．"}, q: "質問：この文は上の絵の状況と合っていますか？", html: p4}],


/// Stimuli go below here.

["fill","ComicCaption",{s: {html: "<big> ここに　ねこが　います．"}, q: "質問：この文は上の絵の状況と合っていますか？", html: p1}], //supply link to image as html option
["fill","ComicCaption",{s: {html: "<big> この人は　独裁者です．"}, q: "質問：この文は上の絵の状況と合っていますか？", html: p2}], //supply link to image as html option




["end", "Message", {transfer: 2000,
                html: ["div",
                        ["p", "All done!"]
                      ]}],
];

//Define sequence of experiment; preload must be first
var shuffleSequence = seq("preload","intro", "practice", sepWith("sep", seq(rshuffle("i","fill"))), "end");

//これは4ゼミのshuffle 
//var shuffleSequence = seq("intro", "intro2", "intro3", "postpractice", "setcounter",seq(rshuffle(anyOf("ea", "eb", "ec", "ed", "ee", "ef"), "filler")));
var showProgressBar = true;

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "",
        errorMessage: "Wrong. Please wait for the next trial.",
        ignoreFailure: true
    },
    "ComicCaption", { //Options for ComicCaption items
        as: ["〇", "×"],
        presentAsScale: true,
        instructions: "「〇」か「×」をクリックしてください。",
        leftComment: "合っている",
        rightComment: "合っていない"
    }
];
