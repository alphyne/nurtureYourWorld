const audio = document.getElementById('audio');

var pressed = false;
var hover = false;
var entered = false;
var clickCount = 0;
var mobileStep = 0;

var rotationRateX = 0.003;
var rotationRateY = 0.007;
var reachedLimit = false;

var mouseX = 0, mouseY = 0;
var prevMouseX = 0, prevMouseY = 0;

var cameraX = 100;
var cameraY = 0;
var cameraZ = 240;

var savedX = 0;
var savedY = 0;
var savedZ = 0;

var savedCanvasWidth = 0;
var savedCanvasHeight = 0;

var increasingX = true;
var increasingY = false;
var increasingZ = true;

var sphereColor = 0x06F2FF;

var windowColorLoad = 0x000000;
var pageColorLoad = "#000000";

var windowColorHold = 0xffffff;
var pageColorHold = "#000000";

var windowColorCurrent = windowColorLoad;

const canvas = document.querySelector('#c');
//var renderer = new THREE.WebGLRenderer({ alpha: true });
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha : true});

const coordinateX1 = document.querySelector('#x1');
const coordinateY1 = document.querySelector('#y1');
const coordinateZ1 = document.querySelector('#z1');

const coordinateX2 = document.querySelector('#x2');
const coordinateY2 = document.querySelector('#y2');
const coordinateZ2 = document.querySelector('#z2');

const zlabel1 = document.querySelector('#z1label');
const zlabel2 = document.querySelector('#z2label');

const mouseXLabel = document.querySelector('#mouseX');
const mouseYLabel = document.querySelector('#mouseY');

const pageCanvas = document.querySelector('#page-canvas');
const context = pageCanvas.getContext('2d');

const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();
const scene3 = new THREE.Scene();

var cube;
var tunnel;
var group = new THREE.Group();

var still = true;
var draw = true;
var moveCount = 0;

// Create camera
var camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth/window.innerHeight, 
    1, 
    1000
);