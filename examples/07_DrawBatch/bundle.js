;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Foam = require('../../src/foam/foam.js');

function App()
{
    Foam.Application.apply(this,arguments);

    this.setFullWindowFrame(true);

    this.setTargetFPS(60);
    this.setSize(800,600);
}

App.prototype = Object.create(Foam.Application.prototype);

App.prototype.setup = function()
{
    var kgl = this.fgl;

    var light0 = this._light0 = new Foam.Light(kgl.LIGHT_0);
        light0.setAmbient3f(0,0,0);
        light0.setDiffuse3f(0.8,0.8,0.8);
        light0.setSpecular3f(1,1,1);
        light0.setPosition3f(1,1,1);

    var light1 = this._light1 = new Foam.Light(kgl.LIGHT_1);
        light1.setAmbient3f(0,0,0);
        light1.setDiffuse3f(0.8,0.8,0.8);
        light1.setSpecular3f(1,1,1);
        light1.setPosition3f(1,1,1);

    var light2 = this._light2 = new Foam.Light(kgl.LIGHT_2);
        light2.setAmbient3f(0,0,0);
        light2.setDiffuse3f(0.8,0.8,0.8);
        light2.setSpecular3f(1,1,1);
        light2.setPosition3f(1,1,1);

    var material = this._material0 = new Foam.Material();
        material.setDiffuse3f(0.7,0.7,0.7);
        material.setAmbient3f(0.7,0.7,0.7);
        material.setSpecular3f(1,1,1);
        material.shininess = 20.0;


};

App.prototype.update = function()
{
    var fgl = this.fgl;
    var cam = this.camera;

    var time = this.getSecondsElapsed(),
        zoom = 3 + Math.sin(time) * 0.25;

    fgl.clear3f(0.1,0.1,0.1);
    fgl.loadIdentity();

    var light0 = this._light0,
        light1 = this._light1,
        light2 = this._light2;


    cam.setPosition3f(light1.position[0] * zoom,light1.position[1] * zoom,light1.position[2] * zoom);

    cam.updateMatrices();

    fgl.drawMode(fgl.LINE_LOOP);
   // this.drawSystem();

    var glMath = Foam.Math;

    var material = this._material0;







    light0.setPosition3f(6*Math.cos(time), 0, 6*Math.sin(time));
    light1.setPosition3f(2*Math.cos(time*Math.PI), Math.sin(time), 2*Math.sin(time+Math.PI));
    light2.setPosition3f(4*Math.cos(time*Math.PI*0.25), Math.cos(time), 4*Math.sin(time+Math.PI*0.25));

    cam.setTarget3f(0,0,0);
    cam.updateMatrices();

    fgl.drawMode(fgl.LINE_LOOP);

    //this.drawSystem();

    /*---------------------------------------------------------------------------------------------------------*/


    var material = this._material0;

    fgl.useLighting(true);
    fgl.light(light0);
    fgl.light(light1);
    fgl.light(light2);

    fgl.useMaterial(true);

    material.setDiffuse3f(0.6,0.6,0.6);
    material.setAmbient3f(0.6,0.6,0.6);
    material.setSpecular3f(1,1,1);
    material.shininess = 200.0;

    fgl.material(material);

    fgl.drawMode(fgl.TRIANGLES);
    fgl.sphereDetail(20);




    //fgl.cube();


    fgl.material(material);
    fgl.color3f(1,1,1);
    fgl.drawMode(fgl.TRIANGLES);
    fgl.cube(70);

    fgl.sphereDetail(10);

    var iN,jN,kN,
        iP,jP,kP;


    var len      = 10,
        minScale = 2,
        scaleijk,
        scaleijkpos,
        scaleijkobj;

    var pi_3 = Math.PI / 3;


    fgl.drawMode(fgl.TRIANGLES);


    fgl.pushMatrix();
    fgl.translate3f(0,2,0);
    fgl.cube(0.25);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(0,-2,0);
    fgl.cube(0.25);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(2,0,0);
    fgl.scale1f(0.25);
    fgl.sphere();
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(0,0,2);
    fgl.cube(0.25);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(0,0,-2);
    fgl.cube(0.25);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(-2,0,0);
    fgl.cube(0.25);
    fgl.popMatrix();



    fgl.beginDrawElementArrayBatch();


    fgl.pushMatrix();
    fgl.translate3f(0,2,0);
    fgl.cube(0.25);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(0,-2,0);
    fgl.cube(0.25);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(2,0,0);
    fgl.scale1f(0.25);
    //fgl.cube();
    //fgl.sphereDetail(8);
    fgl.sphere();
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(0,0,2);
    fgl.cube(0.25);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(0,0,-2);
    fgl.cube(0.25);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(-2,0,0);
    fgl.cube(0.25);
    fgl.popMatrix();

    fgl.endDrawElementArrayBatch();


    material.setDiffuse3f(0.8,0.2,0.2);
    material.setAmbient3f(0.8,0.2,0.2);
    material.setSpecular3f(1,1,1);
    material.shininess = 200.0;
    fgl.material(material);

    var i = -1;
    var n;

    //visually nono

    while(++i < 200)
    {
        n = i / 20;
        fgl.pushMatrix();
        fgl.translate3f(Math.cos(n*Math.PI*5),(-0.5 + n) * 5,Math.sin(n*Math.PI*5));
        fgl.drawElementArrayBatch();
        fgl.popMatrix();

    }


    fgl.useLighting(false);


};

App.prototype.drawSystem =  function()
{
    var kgl = this.fgl;

    kgl.color1f(0.10);
    Foam.fGLUtil.drawGridCube(kgl,70,1);

    kgl.color1f(0.075);
    kgl.pushMatrix();
    {
        kgl.translate3f(0,-0.01,0);
        Foam.fGLUtil.drawGrid(kgl,70,1);
    }
    kgl.popMatrix();


    //Foam.fGLUtil.drawAxes(fgl,20);

    kgl.color1f(1);

    kgl.pushMatrix();
    {
        kgl.translate(this._light0.position);
        Foam.fGLUtil.octahedron(kgl,0.075);
    }
    kgl.popMatrix();

    kgl.pushMatrix();
    {
        kgl.translate(this._light1.position);
        Foam.fGLUtil.octahedron(kgl,0.075);
    }
    kgl.popMatrix();

    kgl.pushMatrix();
    {
        kgl.translate(this._light2.position);
        Foam.fGLUtil.octahedron(kgl,0.075);
    }
    kgl.popMatrix();
};

var app = new App();

},{"../../src/foam/foam.js":6}],2:[function(require,module,exports){
var Default = require('../system/fDefault'),
    fError  = require('../system/fError');

function AppImpl()
{
    this._context3d = null;
    this._context2d = null;

    this._windowTitle       = 0;
    this._isFullWindowFrame = false;
    this._isFullscreen      = false;
    this._isBorderless      = false;
    this._displayId         = 0;

    this._keyDown   = false;
    this._keyStr    = '';
    this._keyCode   = '';

    this._mouseDown       = false;
    this._mouseMove       = false;
    this._mouseWheelDelta = 0.0;

    this._mouseMove   = false;
    this._mouseBounds = true;

    this._targetFPS     = Default.APP_FPS;
    this._bUpdate       = true;

    this._frames        = 0;
    this._frametime     = 0;
    this._framenum      = 0;
    this._time          = 0;
    this._timeStart     = -1;
    this._timeNext      = 0;
    this._timeInterval  = this._targetFPS / 1000.0;
    this._timeDelta     = 0;

    this._width  = -1;
    this._height = -1;
    this._ratio  = -1;

    this._isInitialized = false;
}

AppImpl.prototype.isInitialized = function()    {return this._isInitialized;};

AppImpl.prototype.setUpdate     = function(bool){this._bUpdate = bool;};

AppImpl.prototype.init    = function(appObj)      {throw new Error(fError.METHOD_NOT_IMPLEMENTED);};
AppImpl.prototype.setSize = function(width,height){throw new Error(fError.METHOD_NOT_IMPLEMENTED);};

AppImpl.prototype.setFullWindowFrame = function(bool){throw new Error(fError.METHOD_NOT_IMPLEMENTED);};
AppImpl.prototype.isFullWindowFrame  = function()    {return this._isFullWindowFrame;};

AppImpl.prototype.setFullscreen = function(bool){return false;};
AppImpl.prototype.isFullscreen  = function(){return this._isFullscreen;};

AppImpl.prototype.setBorderless = function(bool){return false;};
AppImpl.prototype.isBorderless  = function(){return this._isBorderless;}

AppImpl.prototype.setDisplay = function(num){return false;};
AppImpl.prototype.getDisplay = function(){return this._displayId;}


AppImpl.prototype.getWidth  = function()            {return this._width;};
AppImpl.prototype.getHeight = function()            {return this._height;};
AppImpl.prototype.getAspectRatioWindow = function(){return this._ratio;};

AppImpl.prototype.setTargetFPS = function(fps){this._targetFPS = fps;this._timeInterval  = this._targetFPS / 1000.0;};
AppImpl.prototype.getTargetFPS = function()   {return this._targetFPS;};

AppImpl.prototype.setWindowTitle       = function(title){this._windowTitle = title;};
AppImpl.prototype.restrictMouseToFrame = function(bool) {this._mouseBounds = bool;};

AppImpl.prototype.getFramesElapsed  = function(){throw new Error(fError.METHOD_NOT_IMPLEMENTED);};
AppImpl.prototype.getSecondsElapsed = function(){throw new Error(fError.METHOD_NOT_IMPLEMENTED);};
AppImpl.prototype.getTime           = function(){throw new Error(fError.METHOD_NOT_IMPLEMENTED);};
AppImpl.prototype.getTimeStart      = function(){throw new Error(fError.METHOD_NOT_IMPLEMENTED);};
AppImpl.prototype.getTimeNext       = function(){throw new Error(fError.METHOD_NOT_IMPLEMENTED);};
AppImpl.prototype.getTimeDelta      = function(){throw new Error(fError.METHOD_NOT_IMPLEMENTED);};

AppImpl.prototype.isKeyDown          = function(){return this._keyDown;};
AppImpl.prototype.isMouseDown        = function(){return this._mouseDown;};
AppImpl.prototype.isMouseMove        = function(){return this._mouseMove;};
AppImpl.prototype.getKeyCode         = function(){return this._keyCode;};
AppImpl.prototype.getKeyStr          = function(){return this._keyStr;};
AppImpl.prototype.getMouseWheelDelta = function(){return this._mouseWheelDelta;};


AppImpl.prototype.setMouseListenerTarget = function(obj){return false;};
AppImpl.prototype.setKeyListenerTarget   = function(obj){return false;};
AppImpl.prototype.getParent              = function()   {return false;};
AppImpl.prototype.setParent              = function(obj){return false;};

module.exports = AppImpl;
},{"../system/fDefault":37,"../system/fError":38}],3:[function(require,module,exports){
var Default     = require('../system/fDefault'),
    fError      = require('../system/fError'),
    fGL         = require('../graphics/fGL'),
    AppImpl     = require('./fAppImpl'),
    CameraBasic = require('../graphics/fCameraBasic'),
    plask       = require('plask');

function AppImplPlask()
{
    AppImpl.apply(this,arguments);
}

AppImplPlask.prototype = Object.create(AppImpl.prototype);

AppImplPlask.prototype.setSize = function(width,height)
{
    if(this._isInitialized)throw new Error(fError.PLASK_WINDOW_SIZE_SET);

    this._width  = width;
    this._height = height;
    this._ratio  = width / height;
};

//TODO: Fix time delta, double measuring of time in general

AppImplPlask.prototype.init = function(appObj)
{
    var self = this;
    var mouse;
    var prevTime = 0,
        timeDelta,
        time;


    function updateMouse(x,y)
    {
        appObj.mouse._positionLast[0] = appObj.mouse._position[0];
        appObj.mouse._positionLast[1] = appObj.mouse._position[1];

        if(self._mouseBounds)
        {
            appObj.mouse._position[0] = Math.max(0,Math.min(x,self._width));
            appObj.mouse._position[1] = Math.max(0,Math.min(y,self._height));
        }
        else
        {
            appObj.mouse._position[0] = x;
            appObj.mouse._position[1] = y;
        }
    }

    plask.simpleWindow({

        settings:
        {
            width:       self._width  || Default.APP_WIDTH,
            height:      self._height || Default.APP_HEIGHT,
            type:        Default.APP_PLASK_TYPE,
            vsync:       Default.APP_PLASK_VSYNC,
            multisample: Default.APP_PLASK_MULTISAMPLE,
            borderless:  self._isBorderless,
            fullscreen:  self._isFullscreen,
            title:       self._windowTitle || Default.APP_PLASK_WINDOW_TITLE
        },

        init:function()
        {
            appObj.fgl    = new fGL(this.gl,null);
            appObj.camera = new CameraBasic();
            appObj.fgl.setCamera(appObj.camera);
            appObj.camera.setPerspective(Default.CAMERA_FOV,
                                         self._ratio,
                                         Default.CAMERA_NEAR,
                                         Default.CAMERA_FAR);

            appObj.camera.setTarget3f(0,0,0);
            appObj.camera.updateMatrices();

            if(self._bUpdate)this.framerate(self._targetFPS);
            appObj.setup();

            self._timeStart = Date.now();
            self._timeNext  = Date.now();

            this.on('mouseMoved',
                function(e)
                {
                    updateMouse(e.x, e.y);
                    appObj.onMouseMove(e);
                });

            this.on('leftMouseDragged',
                function(e)
                {
                    updateMouse(e.x, e.y);
                    appObj.onMouseMove(e);

                });

            this.on('leftMouseDown',
                function(e)
                {
                    self._mouseDown = true;
                    appObj.onMouseDown(e);
                }
            );

            this.on('leftMouseUp',
                function(e)
                {
                    self._mouseDown = false;
                    appObj.onMouseUp(e);
                }
            );

            this.on('scrollWheel',
                function(e)
                {
                    self._mouseWheelDelta += Math.max(-1,Math.min(1,e.dy)) * -1;
                    appObj.onMouseWheel(e);
                }
            );

            this.on('keyUp',
                function(e)
                {
                    self._keyDown = false;
                    self._keyStr  = e.str;
                    self._keyCode = e.keyCode;
                    appObj.onKeyUp(e);
                }
            );

            this.on('keyDown',
                function(e)
                {
                    self._keyDown = true;
                    self._keyStr  = e.str;
                    self._keyCode = e.keyCode;
                    appObj.onKeyDown(e);
                }
            );

            self._isInitialized = true;
        },

        draw:function()
        {
            self._framenum  = this.framenum;
            time            = self._frametime = this.frametime;

            mouse           = appObj.mouse;
            self._mouseMove = mouse._position[0] != mouse._positionLast[0] ||
                              mouse._position[1] != mouse._positionLast[1];


            //eh jo, TODO: check
            self._timeDelta = Math.min((time - prevTime)*10,1);
            appObj.update();
            prevTime = time;

        }});
};

AppImplPlask.prototype.getSecondsElapsed = function(){return this._frametime;};
AppImplPlask.prototype.getFramesElapsed  = function(){return this._framenum;};
AppImplPlask.prototype.getTimeDelta      = function(){return this._timeDelta;};
AppImplPlask.prototype.getTimeStart      = function(){return this._timeStart;};

AppImplPlask.prototype.setFullWindowFrame = function(bool){this._isFullWindowFrame = bool;return true;};
AppImplPlask.prototype.setFullscreen      = function(bool){this._isFullscreen = bool;return true;};
AppImplPlask.prototype.setBorderless      = function(bool){this._isBorderless = bool;return true;};


module.exports = AppImplPlask;




},{"../graphics/fCameraBasic":16,"../graphics/fGL":17,"../system/fDefault":37,"../system/fError":38,"./fAppImpl":2,"plask":43}],4:[function(require,module,exports){
var Default     = require('../system/fDefault'),
    AppImpl     = require('./fAppImpl'),
    fGL         = require('../graphics/fGL'),
    CameraBasic = require('../graphics/fCameraBasic');

function AppImplWeb()
{
    AppImpl.apply(this,arguments);

    var canvas3d = this._canvas3d = document.createElement('canvas');
        canvas3d.setAttribute('tabindex','0');
        canvas3d.focus();

    this._context3d = canvas3d.getContext('webkit-3d') ||
                      canvas3d.getContext("webgl") ||
                      canvas3d.getContext("experimental-webgl");

    var canvas2d = this._canvas2d = document.createElement('canvas');

    this._parent           = null;
    this._mouseEventTarget = canvas3d;
    this._keyEventTarget   = canvas3d;

    this._context2d = canvas2d.getContext('2d');

    window.requestAnimationFrame = window.requestAnimationFrame ||
                                   window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame;

}

AppImplWeb.prototype = Object.create(AppImpl.prototype);

AppImplWeb.prototype.getParent = function()   {return this._context3d.parentNode;};
AppImplWeb.prototype.setParent = function(obj){this._parent = obj;};


AppImplWeb.prototype.setSize = function(width,height)
{
    if(this._isFullWindowFrame){width = window.innerWidth; height = window.innerHeight;}
    if(width == this._width && height == this._height)return;

    this._width  = width;
    this._height = height;
    this._ratio  = width / height;

    if(!this._isInitialized) return;

    this._updateCanvas3dSize();
};

AppImplWeb.prototype._init = function(appObj)
{
    var self   = this;
    var mouse  = appObj.mouse;
    var canvas = this._canvas3d;

    document.title = this._windowTitle || document.title;

    if(!this._parent)document.body.appendChild(canvas);
    else this._parent.appendChild(canvas);

    this._updateCanvas3dSize();

    var mouseEventTarget = this._mouseEventTarget,
        keyEventTarget   = this._keyEventTarget;


    appObj.fgl = new fGL(this._context3d,this._context2d);
    appObj.fgl.gl.viewport(0,0,this._width,this._height);

    appObj.camera = new CameraBasic();
    appObj.fgl.setCamera(appObj.camera);
    appObj.camera.setPerspective(Default.CAMERA_FOV,
                                 self._ratio,
                                 Default.CAMERA_NEAR,
                                 Default.CAMERA_FAR);
    appObj.camera.setTarget3f(0,0,0);
    appObj.camera.updateMatrices();

    appObj.setup();

    mouseEventTarget.addEventListener('mousemove',
        function(e)
        {
            mouse._positionLast[0] = mouse._position[0];
            mouse._positionLast[1] = mouse._position[1];

            mouse._position[0] = e.pageX;
            mouse._position[1] = e.pageY;

            appObj.onMouseMove(e);

        });

    mouseEventTarget.addEventListener('mousedown',
        function(e)
        {
            self._mouseDown = true;
            appObj.onMouseDown(e);

        });

    mouseEventTarget.addEventListener('mouseup',
        function(e)
        {
            self._mouseDown = false;
            appObj.onMouseUp(e);

        });

    mouseEventTarget.addEventListener('mousewheel',
        function(e)
        {
            self._mouseWheelDelta += Math.max(-1,Math.min(1, e.wheelDelta)) * -1;
            appObj.onMouseWheel(e);
        });


    keyEventTarget.addEventListener('keydown',
        function(e)
        {
            self._keyDown = true;
            self._keyCode = e.keyCode;
            self._keyStr  = String.fromCharCode(e.keyCode);//not reliable;
            appObj.onKeyDown(e);

        });

    keyEventTarget.addEventListener('keyup',
        function(e)
        {
            self._keyDown = false;
            self._keyCode = e.keyCode;
            self._keyStr  = String.fromCharCode(e.keyCode);
            appObj.onKeyUp(e);

        });


    var fullWindowFrame = this._isFullWindowFrame;
    var camera;
    var gl;

    var windowWidth,
        windowHeight;

    function updateCameraRatio()
    {
        camera = appObj.camera;
        camera.setAspectRatio(self._ratio);
        camera.updateProjectionMatrix();
    }

    function updateViewportGL()
    {
        gl = appObj.fgl;
        gl.gl.viewport(0,0,self._width,self._height);
        gl.clearColor(gl.getClearBuffer());
    }


    window.addEventListener('resize',
        function(e)
        {
            windowWidth  = window.innerWidth;
            windowHeight = window.innerHeight;

            if(fullWindowFrame)
            {
                self.setSize(windowWidth,windowHeight);

                updateCameraRatio();
                updateViewportGL();
            }

            appObj.onWindowResize(e);

            if(!fullWindowFrame && (self._width == windowWidth && self._height == windowHeight))
            {
                updateCameraRatio();
                updateViewportGL();
            }
        });

    if(this._bUpdate)
    {
        var time, timeDelta;
        var timeInterval = this._timeInterval;
        var timeNext;

        function update()
        {
            requestAnimationFrame(update,null);

            time      = self._time = Date.now();
            timeDelta = time - self._timeNext;

            self._timeDelta = Math.min(timeDelta / timeInterval, 1);

            if(timeDelta > timeInterval)
            {
                timeNext = self._timeNext = time - (timeDelta % timeInterval);

                appObj.update();

                self._timeElapsed = (timeNext - self._timeStart) / 1000.0;
                self._framenum++;
            }



        }

        update();

    }
    else appObj.update();

    this._parent = null;
    this._isInitialized = true;

};


AppImplWeb.prototype.init = function(appObj)
{
    var self = this;
    window.addEventListener('load',function(){self._init(appObj);});
};

AppImplWeb.prototype._updateCanvas3dSize = function()
{
    var canvas = this._canvas3d,
        width  = this._width,
        height = this._height;

        canvas.style.width  = width  + 'px';
        canvas.style.height = height + 'px';
        canvas.width        = width;
        canvas.height       = height;
};

AppImplWeb.prototype.getSecondsElapsed = function(){return this._timeElapsed;};
AppImplWeb.prototype.getTimeDelta      = function(){return this._timeDelta;};

AppImplWeb.prototype.setMouseListenerTarget = function(obj){this._mouseEventTarget = obj;};
AppImplWeb.prototype.setKeyListenerTarget   = function(obj){this._keyEventTarget = obj;};
AppImplWeb.prototype.setFullWindowFrame     = function(bool){this._isFullWindowFrame = bool;return true;};


module.exports = AppImplWeb;


},{"../graphics/fCameraBasic":16,"../graphics/fGL":17,"../system/fDefault":37,"./fAppImpl":2}],5:[function(require,module,exports){
var fError       = require('../system/fError'),
    Platform     = require('../system/fPlatform'),
    AppImplWeb   = require('./fAppImplWeb'),
    AppImplPlask = require('./fAppImplPlask'),
    Mouse        = require('../util/fMouse'),
    CameraBasic  = require('../graphics/fCameraBasic');


function Application()
{
    if(Application.__instance)throw new Error(fError.CLASS_IS_SINGLETON);

    var target  = Platform.getTarget();
    if(typeof target === 'undefined' )throw new Error(fError.WRONG_PLATFORM);

    this._appImpl = target == Platform.WEB   ? new AppImplWeb(arguments) :
                    target == Platform.PLASK ? new AppImplPlask(arguments) :
                    null;

    this.mouse  = new Mouse();
    this.fgl    = null;
    this.camera = null;

    Application.__instance = this;
}

Application.prototype.setup  = function(){throw new Error(fError.APP_NO_SETUP);};
Application.prototype.update = function(){throw new Error(fError.APP_NO_UPDATE);};

Application.prototype.setSize = function(width,height)
{
    var appImpl = this._appImpl;
        appImpl.setSize(width,height);

    if(!appImpl.isInitialized())appImpl.init(this);
};
Application.prototype.getWidth  = function(){return this._appImpl.getWidth();};
Application.prototype.getHeight = function(){return this._appImpl.getHeight();};

Application.prototype.setUpdate = function(bool){this._appImpl.setUpdate(bool);};



Application.prototype.setWindowTitle       = function(title){this._appImpl.setWindowTitle(title);};
Application.prototype.restrictMouseToFrame = function(bool) {this._appImpl.restrictMouseToFrame(bool);};

Application.prototype.setFullWindowFrame  = function(bool){return this._appImpl.setFullWindowFrame(bool);};
Application.prototype.setFullscreen       = function(bool){return this._appImpl.setFullscreen(true);};
Application.prototype.isFullscreen        = function()    {return this._appImpl.isFullscreen();};
Application.prototype.setBorderless       = function(bool){return this._appImpl.setBorderless(bool);};
Application.prototype.isBorderless        = function()    {return this._appImpl.isBorderless();};
Application.prototype.setDisplay          = function(num) {return this._appImpl.setDisplay(num);};
Application.prototype.getDisplay          = function()    {return this._appImpl.getDisplay();};

Application.prototype.setTargetFPS = function(fps){this._appImpl.setTargetFPS(fps);};


Application.prototype.isKeyDown          = function(){return this._appImpl.isKeyDown();};
Application.prototype.isMouseDown        = function(){return this._appImpl.isMouseDown();};
Application.prototype.isMouseMove        = function(){return this._appImpl.isMouseMove();};
Application.prototype.getKeyStr          = function(){return this._appImpl.getKeyStr();};
Application.prototype.getKeyCode         = function(){return this._appImpl.getKeyCode();};
Application.prototype.getMouseWheelDelta = function(){return this._appImpl.getMouseWheelDelta();};


Application.prototype.onKeyDown    = function(e){};
Application.prototype.onKeyUp      = function(e){};
Application.prototype.onMouseUp    = function(e){};
Application.prototype.onMouseDown  = function(e){};
Application.prototype.onMouseWheel = function(e){};
Application.prototype.onMouseMove  = function(e){};

Application.prototype.onWindowResize = function(e){};

Application.prototype.getFramesElapsed  = function(){return this._appImpl.getFramesElapsed();};
Application.prototype.getSecondsElapsed = function(){return this._appImpl.getSecondsElapsed();};
Application.prototype.getTime           = function(){return this._appImpl.getTime();};
Application.prototype.getTimeStart      = function(){return this._appImpl.getTimeStart();};
Application.prototype.getTimeNext       = function(){return this._appImpl.getTimeNext();};
Application.prototype.getTimeDelta      = function(){return this._appImpl.getTimeDelta();};

Application.prototype.getAspectRatioWindow = function(){return this._appImpl.getAspectRatio();};

Application.__instance = null;
Application.getInstance = function(){return Application.__instance;};

module.exports = Application;






},{"../graphics/fCameraBasic":16,"../system/fError":38,"../system/fPlatform":39,"../util/fMouse":41,"./fAppImplPlask":3,"./fAppImplWeb":4}],6:[function(require,module,exports){
/**
 *
 *
 *  F | O | A | M
 *
 *
 * Foam - A Plask/Web GL toolkit
 *
 * Foam is available under the terms of the MIT license.  The full text of the
 * MIT license is included below.
 *
 * MIT License
 * ===========
 *
 * Copyright (c) 2013 Henryk Wollik. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

module.exports =
{
    Math        : require('./math/fMath'),
    Vec2        : require('./math/fVec2'),
    Vec3        : require('./math/fVec3'),
    Vec4        : require('./math/fVec4'),
    Mat33       : require('./math/fMat33'),
    Mat44       : require('./math/fMat44'),
    Quaternion  : require('./math/fQuaternion'),


    MatGL        : require('./graphics/gl/fMatGL'),
    ProgLoader   : require('./graphics/gl/shader/fProgLoader'),
    ShaderLoader : require('./graphics/gl/shader/fShaderLoader'),
    CameraBasic  : require('./graphics/fCameraBasic'),

    Light            : require('./graphics/gl/fLight'),
    PointLight       : require('./graphics/gl/fPointLight'),
    DirectionalLight : require('./graphics/gl/fDirectionalLight'),
    SpotLight        : require('./graphics/gl/fSpotLight'),

    Material    : require('./graphics/gl/fMaterial'),
    Texture     : require('./graphics/gl/fTexture'),

    fGLUtil     : require('./graphics/util/fGLUtil'),
    fGL         : require('./graphics/fGL'),

    Mouse       : require('./util/fMouse'),
    Color       : require('./util/fColor'),
    Util        : require('./util/fUtil'),

    Platform    : require('./system/fPlatform'),

    Geom3d            : require('./geom/fGeom3d'),
    ParametricSurface : require('./geom/fParametricSurface'),
    ISOSurface        : require('./geom/fISOSurface'),
    ISOBand           : require('./geom/fISOBand'),
    LineBuffer2d      : require('./geom/fLineBuffer2d'),
    LineBuffer3d      : require('./geom/fLineBuffer3d'),
    Spline            : require('./geom/fSpline'),
    Line2dUtil        : require('./geom/fLine2dUtil'),
    Polygon2dUtil     : require('./geom/fPolygon2dUtil'),


    Application : require('./app/fApplication')

};


},{"./app/fApplication":5,"./geom/fGeom3d":7,"./geom/fISOBand":8,"./geom/fISOSurface":9,"./geom/fLine2dUtil":10,"./geom/fLineBuffer2d":11,"./geom/fLineBuffer3d":12,"./geom/fParametricSurface":13,"./geom/fPolygon2dUtil":14,"./geom/fSpline":15,"./graphics/fCameraBasic":16,"./graphics/fGL":17,"./graphics/gl/fDirectionalLight":18,"./graphics/gl/fLight":19,"./graphics/gl/fMatGL":20,"./graphics/gl/fMaterial":21,"./graphics/gl/fPointLight":22,"./graphics/gl/fSpotLight":23,"./graphics/gl/fTexture":24,"./graphics/gl/shader/fProgLoader":26,"./graphics/gl/shader/fShaderLoader":28,"./graphics/util/fGLUtil":29,"./math/fMat33":30,"./math/fMat44":31,"./math/fMath":32,"./math/fQuaternion":33,"./math/fVec2":34,"./math/fVec3":35,"./math/fVec4":36,"./system/fPlatform":39,"./util/fColor":40,"./util/fMouse":41,"./util/fUtil":42}],7:[function(require,module,exports){
function Geom3d()
{
    this.vertices  = null;
    this.normals   = null;
    this.colors    = null;
    this.texCoords = null;
    this.indices   = null;
}

//TODO merge
Geom3d.prototype.updateVertexNormals = function()
{
    var indices  = this.indices,
        vertices = this.vertices,
        normals  = this.normals;

    var i;
    var a, b, c;
    var e2x, e2y, e2z,
        e1x, e1y, e1z;

    var nx, ny, nz,
        vbx, vby, vbz,
        a0, a1, a2,
        b0, b1, b2,
        c0, c1, c2;

    i = 0;
    while( i < normals.length )
    {
        normals[i] = normals[i+1] = normals[i+2] = 0.0;
        i+=3;
    }

    i = 0;
    while( i < indices.length )
    {
        a = indices[i  ]*3;
        b = indices[i+1]*3;
        c = indices[i+2]*3;

        a0 = a;
        a1 = a+1;
        a2 = a+2;

        b0 = b;
        b1 = b+1;
        b2 = b+2;

        c0 = c;
        c1 = c+1;
        c2 = c+2;

        vbx = vertices[b0];
        vby = vertices[b1];
        vbz = vertices[b2];

        e1x = vertices[a0]-vbx;
        e1y = vertices[a1]-vby;
        e1z = vertices[a2]-vbz;

        e2x = vertices[c0]-vbx;
        e2y = vertices[c1]-vby;
        e2z = vertices[c2]-vbz;

        nx = e1y * e2z - e1z * e2y;
        ny = e1z * e2x - e1x * e2z;
        nz = e1x * e2y - e1y * e2x;

        normals[a0] += nx;
        normals[a1] += ny;
        normals[a2] += nz;

        normals[b0] += nx;
        normals[b1] += ny;
        normals[b2] += nz;

        normals[c0] += nx;
        normals[c1] += ny;
        normals[c2] += nz;

        i+=3;
    }

    var x, y, z, l;

    i = 0;
    while(i < normals.length)
    {

        x = normals[i  ];
        y = normals[i+1];
        z = normals[i+2];

        l = Math.sqrt(x*x+y*y+z*z);
        l = 1 / (l || 1);

        normals[i  ] *= l;
        normals[i+1] *= l;
        normals[i+2] *= l;

        i+=3;
    }

};


Geom3d.prototype.setVertex = function(index,v)
{
    index *= 3;
    var vertices = this.vertices;
    vertices[index  ] = v[0];
    vertices[index+1] = v[1];
    vertices[index+2] = v[2];
};

Geom3d.prototype.setVertex3f = function(index,x,y,z)
{
    index*=3;
    var vertices = this.vertices;
    vertices[index  ] = x;
    vertices[index+1] = y;
    vertices[index+2] = z;
};

Geom3d.prototype.setColor4f = function(index,r,g,b,a)
{
    index *= 4;
    var colors = this.colors;
    colors[index  ] = r;
    colors[index+1] = g;
    colors[index+2] = b;
    colors[index+3] = a;
};

Geom3d.prototype.setColor3f = function(index,r,g,b)
{
    index *= 4;
    var colors = this.colors;
    colors[index  ] = r;
    colors[index+1] = g;
    colors[index+2] = b;
};

Geom3d.prototype.setColor2f = function(index,k,a)
{
    index *= 4;
    var colors = this.colors;
    colors[index  ] = k;
    colors[index+1] = k;
    colors[index+2] = k;
    colors[index+3] = a;
};

Geom3d.prototype.setColor1f = function(index,k)
{
    index *= 4;
    var colors = this.colors;
    colors[index  ] = k;
    colors[index+1] = k;
    colors[index+2] = k;
};

Geom3d.prototype.setColor = function(index,color)
{
    index*=4;
    var colors = this.colors;
    colors[index  ] = color[0];
    colors[index+1] = color[1];
    colors[index+2] = color[2];
    colors[index+3] = color[3];
};

Geom3d.prototype.setTexCoord2f = function(index,u,v)
{
    index*=2;
    var texCoords = this.texCoords;
    texCoords[index  ] = u;
    texCoords[index+1] = v;
};

Geom3d.prototype.setTexCoord = function(index,v)
{
    index*=2;
    var texCoords = this.texCoords;
    texCoords[index  ] = v[0];
    texCoords[index+1] = v[1];
};


Geom3d.prototype._draw = function(gl)
{
    gl.drawElements(this.vertices,this.normals,this.colors,this.texCoords,this.indices,gl._drawMode);
};

Geom3d.fromBatch = function(batch)
{
    var geom3d = new Geom3d();
        geom3d.vertices  = new Float32Array(batch[0]);
        geom3d.normals   = new Float32Array(batch[1]);
        geom3d.colors    = new Float32Array(batch[2]);
        geom3d.texCoords = new Float32Array(batch[3]);
        geom3d.indices   = new Uint16Array( batch[4]);

    return geom3d;
};

module.exports = Geom3d;
},{}],8:[function(require,module,exports){
var Geom3d = require('./fGeom3d');

function ISOBand(sizeX,sizeZ,unitScaleX,unitScaleZ)
{
    this._vertSizeX  = null;
    this._vertSizeZ  = null;
    this._unitScaleX = 1;
    this._unitScaleZ = 1;

    switch(arguments.length)
    {
        case 1:
            this._vertSizeX = this._vertSizeZ = arguments[0];
            break;
        case 2:
            this._vertSizeX = arguments[0];
            this._vertSizeZ = arguments[1];
            break;
        case 3:
            this._vertSizeX = arguments[0];
            this._vertSizeZ = arguments[1];
            this._unitScaleX = this._unitScaleZ = arguments[2];
            break;
        case 4:
            this._vertSizeX  = arguments[0];
            this._vertSizeZ  = arguments[1];
            this._unitScaleX = arguments[2];
            this._unitScaleZ = arguments[3];
            break;
        default :
            this._vertSizeX = this._vertSizeZ = 3;
            break;
    }

    /*---------------------------------------------------------------------------------------------------------*/


    this._cellSizeX = this._vertSizeX - 1;
    this._cellSizeZ = this._vertSizeZ - 1;

    this._func     = function(x,y,arg0,arg1,arg2){return 0;};
    this._funcArg0 = 0;
    this._funcArg1 = 0;
    this._funcArg2 = 0;
    this._isoLevel = 0;

    this._interpolateValues = true;

    this._numTriangles = 0;

    //TODO CHECK MAX ELEMENT EXCEED
    this._verts = new Float32Array(this._vertSizeX * this._vertSizeZ * 4); // grid calculated norm values + function result value ...,x,y,z,v,...
    this._cells = new Array(this._cellSizeX * this._cellSizeZ);

    this._edges = new Float32Array((this._cellSizeZ * this._cellSizeX * 2 +
                                    this._cellSizeZ + this._cellSizeX) * 3);


    this._tempCellVerticesVals = new Float32Array(4);

    this._indices = [];

    /*
    //temp TODO remove
    this.__appUintTypeEnabled = Foam.Application.getInstance().gl.isUIntElementTypeAvailable();
    */

    /*---------------------------------------------------------------------------------------------------------*/

    this._genSurface();
}

/*---------------------------------------------------------------------------------------------------------*/

ISOBand.prototype = Object.create(Geom3d.prototype);

/*---------------------------------------------------------------------------------------------------------*/


//dont need this
ISOBand.prototype.setFunction = function(func,isoLevel)
{
    var funcArgsLength = func.length;

    if(funcArgsLength < 2)throw 'Function should satisfy function(x,y){}';
    if(funcArgsLength > 5)throw 'Function has to many arguments. Arguments length should not exceed 5. E.g function(x,y,arg0,arg1,arg2).';

    var funcString = func.toString(),
        funcArgs   = funcString.slice(funcString.indexOf('(') + 1, funcString.indexOf(')')).split(','),
        funcBody   = funcString.slice(funcString.indexOf('{') + 1, funcString.lastIndexOf('}'));

    this._func     = new Function(funcArgs[0], funcArgs[1],
        funcArgs[2] || 'arg0', funcArgs[3] || 'arg1', funcArgs[4] || 'arg2',
        funcBody);
    this._isoLevel = isoLevel || 0;


};

/*---------------------------------------------------------------------------------------------------------*/
// Setup points
/*---------------------------------------------------------------------------------------------------------*/

ISOBand.prototype._genSurface = function()
{
    var vertSizeX = this._vertSizeX,
        vertSizeZ = this._vertSizeZ;

    var cellSizeX = this._cellSizeX,
        cellSizeZ = this._cellSizeZ;

    var scaleX = this._unitScaleX,
        scaleZ = this._unitScaleZ;

    var verts = this._verts,
        vertsIndex,
        vertsIndexRowNext,
        cells = this._cells,
        cellsIndex;

    var i,j;

    i = -1;
    while(++i < vertSizeZ)
    {
        j = -1;
        while(++j < vertSizeX)
        {
            vertsIndex          = (vertSizeX * i + j)*4;
            verts[vertsIndex  ] = (-0.5 + (j/(vertSizeX - 1))) * scaleX;
            verts[vertsIndex+1] = 0;
            verts[vertsIndex+2] = (-0.5 + (i/(vertSizeZ - 1))) * scaleZ;
            verts[vertsIndex+3] = -1;

            if(i < cellSizeZ && j < cellSizeX)
            {
                vertsIndexRowNext = (vertSizeX * i + j + vertSizeX) * 4;

                cellsIndex        = cellSizeX * i + j;
                cells[cellsIndex] = [vertsIndex,
                                     vertsIndex + 4,
                                     vertsIndexRowNext + 4,
                                     vertsIndexRowNext ];

            }
        }
    }
};

/*---------------------------------------------------------------------------------------------------------*/
// apply function to data points
/*---------------------------------------------------------------------------------------------------------*/

ISOBand.prototype.applyFunction = function(arg0,arg1,arg2)
{
    var verts = this._verts,
        vertsIndex;

    var vertSizeX = this._vertSizeX,
        vertSizeZ = this._vertSizeZ;

    var i, j;

    i = -1;
    while(++i < vertSizeZ)
    {
        j = -1;
        while(++j < vertSizeX)
        {
            vertsIndex = (vertSizeX * i + j) * 4;
            verts[vertsIndex + 3] = this._func(verts[vertsIndex],verts[vertsIndex+2],arg0,arg1,arg2);
        }
    }

    this.march();
};

ISOBand.prototype.applyFunctionMult = function(arg0,arg1,arg2)
{
    var verts = this._verts,
        vertsIndex;

    var vertsSizeX = this._vertSizeX,
        vertsSizeZ = this._vertSizeZ;

    var i, j;

    i = -1;
    while(++i < vertsSizeZ)
    {
        j = -1;
        while(++j < vertsSizeX)
        {
            vertsIndex = (vertsSizeX * i + j) * 4;
            verts[vertsIndex + 3] *= this._func(verts[vertsIndex],verts[vertsIndex+2],arg0,arg1,arg2);
        }
    }

    this.march();
};

ISOBand.prototype.setData = function(data,width,height)
{

    var vertsSizeX = this._vertSizeX,
        vertsSizeZ = this._vertSizeZ;

    if(width > vertsSizeZ || height > vertsSizeX)
        throw 'Data exceeds buffer size. Should not exceed ' + vertsSizeZ + ' in width and ' + vertsSizeX + ' in height';

    var verts = this._verts;

    var i ,j;
    i = -1;
    while(++i < width)
    {
        j = -1;
        while(++j < height)
        {
            verts[(height * i + j) * 4 + 3] = data[height * i + j];
        }
    }
};



/*---------------------------------------------------------------------------------------------------------*/
// march
/*---------------------------------------------------------------------------------------------------------*/

ISOBand.prototype.march = function()
{
    //reset indices
    var indices = this._indices = [];

    var verts = this._verts;

    var i, j, k;

    var cells    = this._cells,
        indices  = this._indices;

    var cellSizeX = this._cellSizeX,
        cellSizeZ = this._cellSizeZ;

    var cellIndex,
        cell,
        cellState;

    //Cell vertex indices in global vertices
    var v0Index,  // 0 1
        v1Index,  // 3 2
        v2Index,
        v3Index;

    //Cell vertex values ...,x,y,z,VALUE,...
    var vVals = this._tempCellVerticesVals,
        v0Val,v1Val,v2Val,v3Val;

    //Topologic entry / lookup
    var entryTopLu,
        ISOBAND_TOP_LU     = ISOBand.TOP_TABLE;

    var entryTopLu0,
        entryTopLu1,
        entryTopLu2,
        entryTopLu3;

    var edgeIndexTop,
        edgeIndexRight,
        edgeIndexBottom,
        edgeIndexLeft,
        edgeIndexTemp;

    var edges = this._edges;


    //
    //  0 ------- 1
    //  |    0    |
    //  | 1       | 2
    //  |         |
    //  3 ------- 2
    //       3


    i = -1;
    while(++i < cellSizeZ)
    {
        j = -1;
        while(++j < cellSizeX)
        {
            cellIndex        = cellSizeX * i + j;
            cell             = cells[cellIndex];

            v0Index = cell[0];
            v1Index = cell[1];
            v2Index = cell[2];
            v3Index = cell[3];

            v0Val = vVals[0] = verts[v0Index + 3];
            v1Val = vVals[1] = verts[v1Index + 3];
            v2Val = vVals[2] = verts[v2Index + 3];
            v3Val = vVals[3] = verts[v3Index + 3];

            cellState = (v0Val > 0) << 3 |
                        (v1Val > 0) << 2 |
                        (v2Val > 0) << 1 |
                        (v3Val > 0);

            if(cellState == 0)continue;

            edgeIndexTop    = cellIndex + (cellSizeX + 1) * i;
            edgeIndexRight  = edgeIndexTop   + cellSizeX + 1;
            edgeIndexBottom = edgeIndexRight + cellSizeX;
            edgeIndexLeft   = edgeIndexRight - 1;

            entryTopLu = ISOBAND_TOP_LU[cellState];

            //cell upper left
            k = 0;
            if(i == 0 && j == 0)
            {

                while(k < entryTopLu.length)
                {
                    entryTopLu0 = entryTopLu[k  ];
                    entryTopLu1 = entryTopLu[k+1];
                    entryTopLu2 = entryTopLu[k+2];
                    entryTopLu3 = entryTopLu[k+3];

                    //get edge vertex 0 according to topological entry
                    //TODO collapse
                    edgeIndexTemp = entryTopLu0 == 0 ? edgeIndexTop :
                                    entryTopLu0 == 1 ? edgeIndexRight :
                                    entryTopLu0 == 2 ? edgeIndexBottom :
                                    edgeIndexLeft;

                    this._intrpl(cell[entryTopLu0],cell[entryTopLu1],edges,edgeIndexTemp * 3);
                    indices.push(edgeIndexTemp);

                    //get edge vertex 1 according to topological entry
                    //TODO collapse
                    edgeIndexTemp = entryTopLu2 == 0 ? edgeIndexTop :
                                    entryTopLu2 == 1 ? edgeIndexRight :
                                    entryTopLu2 == 2 ? edgeIndexBottom :
                                    edgeIndexLeft;

                    this._intrpl(cell[entryTopLu2],cell[entryTopLu3],edges,edgeIndexTemp * 3);
                    indices.push(edgeIndexTemp);

                    k += 4;
                }
            }

            //cells first row after upper left
            //TODO collapse
            if(i == 0 && j > 0)
            {

                while(k < entryTopLu.length)
                {
                    entryTopLu0 = entryTopLu[k  ];
                    entryTopLu1 = entryTopLu[k+1];
                    entryTopLu2 = entryTopLu[k+2];
                    entryTopLu3 = entryTopLu[k+3];

                    //check if edge is on adjacent left side, and push index of edge,
                    //if not, calculate edge, push index of new edge


                    //check first vertex is on left edge
                    if(entryTopLu0 == 3)
                    {
                        //assign previous calculated edge vertex from previous cell
                        indices.push(edgeIndexLeft);

                    }
                    else //calculate edge vertex
                    {
                        edgeIndexTemp = entryTopLu0 == 0 ? edgeIndexTop :
                                        entryTopLu0 == 1 ? edgeIndexRight :
                                        edgeIndexBottom;

                        this._intrpl(cell[entryTopLu0],cell[entryTopLu1],edges,edgeIndexTemp * 3);
                        indices.push(edgeIndexTemp);
                    }

                    //check second vertex is on left edge

                    if(entryTopLu2 == 3)
                    {
                        indices.push(edgeIndexLeft);
                    }
                    else //calculate edge vertex
                    {
                        edgeIndexTemp = entryTopLu2 == 0 ? edgeIndexTop :
                                        entryTopLu2 == 1 ? edgeIndexRight :
                                        edgeIndexBottom;

                        this._intrpl(cell[entryTopLu2],cell[entryTopLu3],edges,edgeIndexTemp * 3);
                        indices.push(edgeIndexTemp);
                    }


                    k += 4;
                }
            }

            //cells first column after upper left
            //TODO collapse
            if(i != 0 && j == 0)
            {

                while(k < entryTopLu.length)
                {

                    //check if edge is on adjacent top side, and push index of edge,
                    //if not, calculate edge, push index of new edge

                    entryTopLu0 = entryTopLu[k  ];
                    entryTopLu1 = entryTopLu[k+1];
                    entryTopLu2 = entryTopLu[k+2];
                    entryTopLu3 = entryTopLu[k+3];

                    //check first vertex is on top edge
                    if(entryTopLu0 == 0)
                    {
                        indices.push(edgeIndexTop);
                    }
                    else
                    {
                        edgeIndexTemp = entryTopLu0 == 1 ? edgeIndexRight :
                                        entryTopLu0 == 2 ? edgeIndexBottom :
                                        edgeIndexLeft;

                        this._intrpl(cell[entryTopLu0],cell[entryTopLu1],edges,edgeIndexTemp * 3);
                        indices.push(edgeIndexTemp)
                    }

                    //check first vertex is on top edge
                    if(entryTopLu2 == 0)
                    {
                        indices.push(edgeIndexTop);
                    }
                    else
                    {
                        edgeIndexTemp = entryTopLu2 == 1 ? edgeIndexRight :
                                        entryTopLu2 == 2 ? edgeIndexBottom :
                                        edgeIndexLeft;

                        this._intrpl(cell[entryTopLu2],cell[entryTopLu3],edges,edgeIndexTemp * 3);
                        indices.push(edgeIndexTemp)
                    }

                    k += 4;
                }

            }

            //check all other cells
            //TODO collapse
            if(i != 0 && j != 0)
            {

                //check if edge is on adjacent left side, and push index of edge,
                //if not, calculate edge, push index of new edge

                while(k < entryTopLu.length)
                {
                    entryTopLu0 = entryTopLu[k  ];
                    entryTopLu1 = entryTopLu[k+1];
                    entryTopLu2 = entryTopLu[k+2];
                    entryTopLu3 = entryTopLu[k+3];

                    //check first vertex is on left edge
                    if(entryTopLu0 == 3)
                    {
                        indices.push(edgeIndexLeft);
                    }
                    else if(entryTopLu0 == 0)//maybe upper cell?
                    {
                        indices.push(edgeIndexTop);
                    }
                    else //calculate edge vertex
                    {
                        edgeIndexTemp = entryTopLu0 == 1 ? edgeIndexRight : edgeIndexBottom;

                        this._intrpl(cell[entryTopLu0],cell[entryTopLu1],edges,edgeIndexTemp * 3);
                        indices.push(edgeIndexTemp);
                    }

                    //check second vertex is on left edge
                    if(entryTopLu2 == 3)
                    {
                        indices.push(edgeIndexLeft);
                    }
                    else if(entryTopLu2 == 0)//maybe upper cell?
                    {
                        indices.push(edgeIndexTop);
                    }
                    else //calculate edge vertex
                    {
                        edgeIndexTemp = entryTopLu2 == 1 ? edgeIndexRight : edgeIndexBottom;

                        this._intrpl(cell[entryTopLu2],cell[entryTopLu3],edges,edgeIndexTemp * 3);
                        indices.push(edgeIndexTemp);
                    }


                    k += 4;
                }
            }
        }
    }

    //temp
    this._indices = this.__appUintTypeEnabled ?  new Uint32Array(indices) :  new Uint16Array(indices);
};

//visual debug need isoline/isoband switch
ISOBand.prototype._draw = function(gl)
{
    var edges   = this._edges,
        colors  = gl.bufferColors(gl.getColorBuffer(),new Float32Array(edges.length/3*4)),
        indices =  this._indices;

     gl.drawElements(edges,null,colors,null,indices,gl.getDrawMode(),indices.length,0,gl.UNSIGNED_SHORT);
};


ISOBand.prototype._intrpl = function(index0,index1,out,offset)
{
    var verts = this._verts;

    var v0x = verts[index0  ],
        v0y = verts[index0+1],
        v0z = verts[index0+2],
        v0v = verts[index0+3];

    var v1x = verts[index1  ],
        v1y = verts[index1+1],
        v1z = verts[index1+2],
        v1v = verts[index1+3];


    if(v0v == 0)
    {
        out[offset+0] = v1x;
        out[offset+1] = v1y;
        out[offset+2] = v1z;

        return;
    }
    else if(v1v == 0)
    {
        out[offset+0] = v0x;
        out[offset+1] = v0y;
        out[offset+2] = v0z;

        return;
    }


    if(this._interpolateValues)
    {
        var v10v = v1v - v0v;

        out[offset+0] = -v0v * (v1x - v0x) / v10v + v0x;
        out[offset+1] = -v0v * (v1y - v0y) / v10v + v0y;
        out[offset+2] = -v0v * (v1z - v0z) / v10v + v0z;
    }
    else
    {
        out[offset+0] =  (v1x - v0x) * 0.5 + v0x;
        out[offset+1] =  (v1y - v0y) * 0.5 + v0y;
        out[offset+2] =  (v1z - v0z) * 0.5 + v0z;
    }
};


ISOBand.prototype.getVertices      = function(){return this._verts;};
ISOBand.prototype.getVerticesSizeX = function(){return this._vertSizeX;};
ISOBand.prototype.getVerticesSizeZ = function(){return this._vertSizeZ;};
ISOBand.prototype.getCells         = function(){return this._cells;};
ISOBand.prototype.getCellsSizeX    = function(){return this._cellSizeX;};
ISOBand.prototype.getCellsSizeZ    = function(){return this._cellSizeZ;};
ISOBand.prototype.getEdges         = function(){return this._edges;};
ISOBand.prototype.getIndices       = function(){return this._indices;};

/*---------------------------------------------------------------------------------------------------------*/
// TOPOLOGICAL
/*---------------------------------------------------------------------------------------------------------*/

//TODO merge
ISOBand.TOP_TABLE =
    [
        [],
        [ 2, 3, 3, 0],
        [ 1, 2, 2, 3],
        [ 1, 2, 3, 0],
        [ 0, 1, 1, 2],
        [ 0, 1, 1, 2, 2, 3, 3, 0],
        [ 0, 1, 2, 3],
        [ 0, 1, 3, 0],
        [ 0, 1, 3, 0],
        [ 0, 1, 2, 3],
        [ 0, 1, 1, 2, 2, 3, 3, 0],
        [ 0, 1, 1, 2],
        [ 1, 2, 3, 0],
        [ 1, 2, 2, 3],
        [ 2, 3, 3, 0],
        []
    ];

/*---------------------------------------------------------------------------------------------------------*/
// TRIANGE
/*---------------------------------------------------------------------------------------------------------*/

//TODO merge
ISOBand.TRI_TABLE =
    [
        [],
        [ 1, 0, 0, 3, 1, 1],
        [ 1, 0, 0, 2, 1, 1],
        [ 1, 0, 0, 2, 0, 3, 0, 3, 1, 1 ,1 ,0 ],
        [ 1, 0, 0, 1, 1, 1],
        [ 1, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 2, 0, 3, 1, 3, 1, 3, 1, 0, 1, 1],
        [ 1, 0, 0, 1, 1, 1, 0, 1, 0, 2, 1, 1],
        [ 1, 0, 0, 1, 0, 2, 0, 2, 1, 1, 1, 0, 0, 2, 0, 3, 1, 1 ],
        [ 0, 0, 1, 0, 1, 1],
        [ 0, 0, 1, 0, 0, 3, 1, 0, 1, 1, 0, 3],
        [ 0, 0, 1, 0, 1, 3, 1, 0, 1, 1, 1, 3, 1, 1, 0, 2, 1, 2, 1, 2, 1, 3, 1, 1 ],
        [ 0, 0, 1, 0, 0, 3, 1, 0, 1, 1, 0, 3, 1, 1, 0, 2, 0, 3],
        [ 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
        [ 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 3, 0, 0],
        [ 0, 0, 0, 1, 1, 1, 0, 1, 0, 2, 1, 0, 1, 0, 1, 1, 0, 1],
        [ 0, 0, 0, 1, 0, 3, 0, 1, 0, 2, 0, 3]
    ];


module.exports = ISOBand;

},{"./fGeom3d":7}],9:[function(require,module,exports){
var Vec3   = require('../math/fVec3'),
    Vec4   = require('../math/fVec4'),
    Geom3d = require('./fGeom3d');


//This is just an initial version
function ISOSurface(sizeX,sizeY,sizeZ)
{
    this._vertSizeX = null;
    this._vertSizeY = null;
    this._vertSizeZ = null;

    switch(arguments.length)
    {
        case 1:
            this._vertSizeX = this._vertSizeY = this._vertSizeZ = arguments[0];
            break;
        case 3:
            this._vertSizeX = arguments[0];
            this._vertSizeY = arguments[1];
            this._vertSizeZ = arguments[2];
            break;
        default :
            this._vertSizeX = this._vertSizeY = this._vertSizeZ = 3;
            break;
    }

    this._cubeSizeX = this._vertSizeX - 1;
    this._cubeSizeY = this._vertSizeY - 1;
    this._cubeSizeZ = this._vertSizeZ - 1;

    this._delayedClear = false;

    //TODO:FIX!!
    this._func      = function(x,y,z,arg0,arg1,arg2){return 0;};
    this._funcArg0  = 0;
    this._funcArg1  = 0;
    this._funcArg2  = 0;
    this._isoLevel  = 0;

    //TODO: unroll
    this._verts = new Array(this._vertSizeX*this._vertSizeY*this._vertSizeZ);
    this._cubes = new Array(this._cubeSizeX*this._cubeSizeY*this._cubeSizeZ);

    this._numTriangles = 0;

    var SIZE_OF_TRIANGLE   = 3,
        SIZE_OF_CUBE_EDGES = 12;
    var MAX_BUFFER_LEN     = this._cubes.length * 4;

    this._bVertices = new Float32Array((MAX_BUFFER_LEN)*SIZE_OF_TRIANGLE*Vec3.SIZE);
    this._bNormals  = new Float32Array((MAX_BUFFER_LEN)*SIZE_OF_TRIANGLE*Vec3.SIZE);
    this._bColors   = new Float32Array((MAX_BUFFER_LEN)*SIZE_OF_TRIANGLE*Vec4.SIZE);

    this._tempVertices = new Array(SIZE_OF_CUBE_EDGES*Vec3.SIZE);
    this._tempNormals  = new Array(SIZE_OF_CUBE_EDGES);

    this._scaleXYZ = [1,1,1];

    this._genSurface();

}

ISOSurface.prototype = Object.create(Geom3d.prototype);


/*---------------------------------------------------------------------------------------------------------*/
//
//
//           2 ------- 3    Vertex order
//          /|        /|
//         / |       / |
//        6 ------- 7  |
//        |  0 -----|- 1
//        | /       | /
//        |/        |/
//        4 ------- 5
//
//
//           2 ------> 3    March order
//              \
//                \
//        6 ------> 7
//           0 ------> 1
//             \
//               \
//        4 ------> 5
//
//


ISOSurface.prototype.update = function()
{

    /*---------------------------------------------------------------------------------------------------------*/

    var verts = this._verts;

    var cubeSizeX  = this._cubeSizeX,
        cubeSizeY  = this._cubeSizeY,
        cubeSizeZ  = this._cubeSizeZ,
        cubeSizeZY = cubeSizeZ * cubeSizeY;

    var cubes = this._cubes,
        cube;

    var marchIndex;

    var EDGE_TABLE = ISOSurface.EDGE_TABLE,
        TRI_TABLE  = ISOSurface.TRI_TABLE;

    var v0,v1,v2,v3,v4,v5,v6,v7;
    var val0,val1,val2,val3,val4,val5,val6,val7;

    var cubeIndex;
    var isoLevel = this._isoLevel;
    var bits;

    var bVertices   = this._bVertices,
        bNormals    = this._bNormals,
        bNormalsLen = bNormals.length,
        bVertIndex;

    var vertIndex0, vertIndex1, vertIndex2,
        vertIndex3, vertIndex4, vertIndex5,
        vertIndex6, vertIndex7, vertIndex8;

    var v0x,v0y,v0z,
        v1x,v1y,v1z,
        v2x,v2y,v2z;

    var e2x, e2y, e2z,
        e1x, e1y, e1z;

    var v0Index,
        v1Index,
        v2Index;

    var nx, ny, nz,
        vbx, vby, vbz;


    var i, j, k;

    this._numTriangles = 0;

    /*---------------------------------------------------------------------------------------------------------*/

    i = -1;
    while(++i<bNormalsLen)bNormals[i]=0.0;


    i = -1;
    while(++i < cubeSizeZ)
    {
        j = -1;
        while(++j < cubeSizeY)
        {
            k = -1;
            while(++k < cubeSizeX)
            {
                /*---------------------------------------------------------------------------------------------------------*/

                marchIndex = i * cubeSizeZY + j * cubeSizeZ + k;
                cube       = cubes[marchIndex];

                //access vertices of cube
                v0 = verts[cube[0]];
                v1 = verts[cube[1]];
                v2 = verts[cube[2]];
                v3 = verts[cube[3]];
                v4 = verts[cube[4]];
                v5 = verts[cube[5]];
                v6 = verts[cube[6]];
                v7 = verts[cube[7]];

                val0 = v0[3];
                val1 = v1[3];
                val2 = v2[3];
                val3 = v3[3];
                val4 = v4[3];
                val5 = v5[3];
                val6 = v6[3];
                val7 = v7[3];

                /*---------------------------------------------------------------------------------------------------------*/

                cubeIndex = 0;

                if(val0<isoLevel) cubeIndex |= 1;
                if(val1<isoLevel) cubeIndex |= 2;
                if(val2<isoLevel) cubeIndex |= 8;
                if(val3<isoLevel) cubeIndex |= 4;
                if(val4<isoLevel) cubeIndex |= 16;
                if(val5<isoLevel) cubeIndex |= 32;
                if(val6<isoLevel) cubeIndex |= 128;
                if(val7<isoLevel) cubeIndex |= 64;

                bits = EDGE_TABLE[cubeIndex];

                if(bits === 0)continue;

                /*---------------------------------------------------------------------------------------------------------*/

                var tempVertices = this._tempVertices,
                    tempNormals  = this._tempNormals;

                if (bits & 1)
                {
                    this._intrpl(v0, v1, tempVertices, 0);
                    this._normal(tempVertices,0,tempNormals,0);
                }
                if (bits & 2)
                {
                    this._intrpl(v1, v3, tempVertices, 1);
                    this._normal(tempVertices,1,tempNormals,1);
                }
                if (bits & 4)
                {
                    this._intrpl(v2, v3, tempVertices, 2);
                    this._normal(tempVertices,2,tempNormals,2);
                }
                if (bits & 8)
                {
                    this._intrpl(v0, v2, tempVertices, 3);
                    this._normal(tempVertices,3,tempNormals,3);
                }

                if (bits & 16)
                {
                    this._intrpl(v4, v5, tempVertices, 4);
                    this._normal(tempVertices,4,tempNormals,4);
                }
                if (bits & 32)
                {
                    this._intrpl(v5, v7, tempVertices, 5);
                    this._normal(tempVertices,5,tempNormals,5);
                }
                if (bits & 64)
                {
                    this._intrpl(v6, v7, tempVertices, 6);
                    this._normal(tempVertices,6,tempNormals,6);
                }
                if (bits & 128)
                {
                    this._intrpl(v4, v6, tempVertices, 7);
                    this._normal(tempVertices,7,tempNormals,7);
                }

                if (bits & 256)
                {
                    this._intrpl(v0, v4, tempVertices, 8);
                    this._normal(tempVertices,8,tempNormals,8);
                }
                if (bits & 512)
                {
                    this._intrpl(v1, v5, tempVertices, 9);
                    this._normal(tempVertices,9,tempNormals,9);
                }
                if (bits & 1024)
                {
                    this._intrpl(v3, v7, tempVertices, 10);
                    this._normal(tempVertices,10,tempNormals,10);
                }
                if (bits & 2048)
                {
                    this._intrpl(v2, v6, tempVertices, 11);
                    this._normal(tempVertices,11,tempNormals,11);
                }


                /*---------------------------------------------------------------------------------------------------------*/

                var l = 0;
                cubeIndex <<= 4;


                while(TRI_TABLE[cubeIndex + l] != -1)
                {
                    /*---------------------------------------------------------------------------------------------------------*/

                    //get indices of triangle vertices
                    v0Index = TRI_TABLE[cubeIndex + l    ] * 3;
                    v1Index = TRI_TABLE[cubeIndex + l + 1] * 3;
                    v2Index = TRI_TABLE[cubeIndex + l + 2] * 3;

                    bVertIndex = this._numTriangles * 9;

                    vertIndex0 = bVertIndex;
                    vertIndex1 = bVertIndex+1;
                    vertIndex2 = bVertIndex+2;
                    vertIndex3 = bVertIndex+3;
                    vertIndex4 = bVertIndex+4;
                    vertIndex5 = bVertIndex+5;
                    vertIndex6 = bVertIndex+6;
                    vertIndex7 = bVertIndex+7;
                    vertIndex8 = bVertIndex+8;

                    //store triangle vertices in 'global' vertex buffer + local caching
                    v0x = bVertices[vertIndex0] = tempVertices[v0Index];
                    v0y = bVertices[vertIndex1] = tempVertices[v0Index+1];
                    v0z = bVertices[vertIndex2] = tempVertices[v0Index+2];

                    v1x = bVertices[vertIndex3] = tempVertices[v1Index];
                    v1y = bVertices[vertIndex4] = tempVertices[v1Index+1];
                    v1z = bVertices[vertIndex5] = tempVertices[v1Index+2];

                    v2x = bVertices[vertIndex6] = tempVertices[v2Index];
                    v2y = bVertices[vertIndex7] = tempVertices[v2Index+1];
                    v2z = bVertices[vertIndex8] = tempVertices[v2Index+2];

                    /*---------------------------------------------------------------------------------------------------------*/

                    //calc face normals - per face - naive TODO:FIXME!
                    /*
                    vbx = v1x;
                    vby = v1y;
                    vbz = v1z;

                    e1x = v0x-vbx;
                    e1y = v0y-vby;
                    e1z = v0z-vbz;

                    e2x = v2x-vbx;
                    e2y = v2y-vby;
                    e2z = v2z-vbz;

                    nx = e1y * e2z - e1z * e2y;
                    ny = e1z * e2x - e1x * e2z;
                    nz = e1x * e2y - e1y * e2x;

                    bNormals[vertIndex0] += nx;
                    bNormals[vertIndex1] += ny;
                    bNormals[vertIndex2] += nz;
                    bNormals[vertIndex3] += nx;
                    bNormals[vertIndex4] += ny;
                    bNormals[vertIndex5] += nz;
                    bNormals[vertIndex6] += nx;
                    bNormals[vertIndex7] += ny;
                    bNormals[vertIndex8] += nz;

                    */

                    bNormals[vertIndex0] = tempNormals[v0Index  ];
                    bNormals[vertIndex1] = tempNormals[v0Index+1];
                    bNormals[vertIndex2] = tempNormals[v0Index+2];
                    bNormals[vertIndex3] = tempNormals[v1Index  ];
                    bNormals[vertIndex4] = tempNormals[v1Index+1];
                    bNormals[vertIndex5] = tempNormals[v1Index+2];
                    bNormals[vertIndex6] = tempNormals[v2Index  ];
                    bNormals[vertIndex7] = tempNormals[v2Index+1];
                    bNormals[vertIndex8] = tempNormals[v2Index+2];

                    /*---------------------------------------------------------------------------------------------------------*/

                    l+=3;
                    this._numTriangles++;
                }

                /*---------------------------------------------------------------------------------------------------------*/


            }
        }
    }
};


/*---------------------------------------------------------------------------------------------------------*/

ISOSurface.prototype._intrpl = function(v0,v1,vertList,index)
{
    index *= 3;

    var v0v = v0[3],
        v1v = v1[3];

    var isoLevel = this._isoLevel;

    if(Math.abs(isoLevel - v0v) < 0.00001)
    {
        vertList[index    ] = v0[0];
        vertList[index + 1] = v0[1];
        vertList[index + 2] = v0[2];
        return;
    }

    if(Math.abs(isoLevel - v1v) < 0.00001)
    {
        vertList[index    ] = v1[0];
        vertList[index + 1] = v1[1];
        vertList[index + 2] = v1[2];
        return;
    }

    if(Math.abs(v0v - v1v) < 0.00001)
    {
        vertList[index    ] = v1[0];
        vertList[index + 1] = v1[1];
        vertList[index + 2] = v1[2];
        return;
    }


    var intrpl  = (isoLevel - v0v) / (v1v - v0v);

    var v0x = v0[0],
        v0y = v0[1],
        v0z = v0[2];

    vertList[index    ] = v0x + (v1[0] - v0x) * intrpl;
    vertList[index + 1] = v0y + (v1[1] - v0y) * intrpl;
    vertList[index + 2] = v0z + (v1[2] - v0z) * intrpl;
};

/*---------------------------------------------------------------------------------------------------------*/

ISOSurface.prototype._normal = function(vertList,vertIndex,normList,normIndex)
{
    vertIndex *= 3;

    var x = vertList[vertIndex   ],
        y = vertList[vertIndex+1],
        z = vertList[vertIndex+2];

    var arg0 = this._funcArg0,
        arg1 = this._funcArg1,
        arg2 = this._funcArg2;

    var eps = 0.0003;

    var val = this._func(x,y,z,arg0,arg1,arg2);

    var nx = this._func(x + eps,y , z, arg0, arg1, arg2) - val,
        ny = this._func(x, y + eps, z, arg0, arg1, arg2) - val,
        nz = this._func(x, y, z + eps, arg0, arg1, arg2) - val,
        d  = 1 / Math.sqrt(nx*nx+ny*ny+nz*nz);


    normIndex *= 3;

    normList[normIndex]   = x*d*-1;
    normList[normIndex+1] = y*d*-1;
    normList[normIndex+2] = z*d*-1;

};

/*---------------------------------------------------------------------------------------------------------*/

ISOSurface.prototype.setCloseSides = function(bool){}

ISOSurface.prototype.setFunction = function(func,isoLevel)
{
    var funcArgsLength = func.length;

    if(funcArgsLength < 3)throw 'Function should satisfy function(x,y,z){}';
    if(funcArgsLength > 6)throw 'Function has to many arguments. Arguments length should not exceed 6. E.g function(x,y,z,arg0,arg1,arg2).';

    var funcString = func.toString(),
        funcArgs   = funcString.slice(funcString.indexOf('(') + 1, funcString.indexOf(')')).split(','),
        funcBody   = funcString.slice(funcString.indexOf('{') + 1, funcString.lastIndexOf('}'));

    this._func     = new Function(funcArgs[0], funcArgs[1], funcArgs[2],
                                  funcArgs[3] || 'arg0', funcArgs[4] || 'arg1', funcArgs[5] || 'arg2',
                                  funcBody);
    this._isoLevel = isoLevel || 0;
};

ISOSurface.prototype.setFunctionUnsafe = function(func,isoLevel)
{
    this._func     = func;
    this._isoLevel = isoLevel || 0;
};

ISOSurface.prototype.getFunction = function(){return this._func;};
ISOSurface.prototype.setISOLevel = function(isoLevel){this._isoLevel = isoLevel;};

ISOSurface.prototype.applyFunction   = function()         {this.applyFunction3f(0,0,0);};
ISOSurface.prototype.applyFunction1f = function(arg0)     {this.applyFunction3f(arg0,0,0);};
ISOSurface.prototype.applyFunction2f = function(arg0,arg1){this.applyFunction3f(arg0,arg1,0);};

ISOSurface.prototype.applyFunction3f = function(arg0,arg1,arg2)
{
    var vertSizeX  = this._vertSizeX,
        vertSizeY  = this._vertSizeY,
        vertSizeZ  = this._vertSizeZ,
        vertSizeYX = vertSizeY * vertSizeX;

    var verts = this._verts,
        vert, vertsIndex;

    var i, j, k;

    this._funcArg0 = arg0;
    this._funcArg1 = arg1;
    this._funcArg2 = arg2;

    i = -1;

    while(++i < vertSizeZ)
    {
        j = -1;
        while(++j < vertSizeY)
        {
            k = -1;
            while(++k < vertSizeX)
            {
                vertsIndex = i * vertSizeYX + j * vertSizeX + k;
                vert       = verts[vertsIndex];
                vert[3]    = this._func(vert[0],vert[1],vert[2],arg0,arg1,arg2);
            }
        }
    }
};

/*---------------------------------------------------------------------------------------------------------*/


ISOSurface.prototype._genSurface = function()
{
    var vertSizeX  = this._vertSizeX,
        vertSizeY  = this._vertSizeY,
        vertSizeZ  = this._vertSizeZ,
        vertSizeZY = vertSizeZ * vertSizeY,
        vertSizeXY = vertSizeX * vertSizeY;

    var verts = this._verts,
        vertsIndex;

    var cubeSizeX  = this._cubeSizeX,
        cubeSizeY  = this._cubeSizeY,
        cubeSizeZ  = this._cubeSizeZ,
        cubeSizeZY = cubeSizeY * cubeSizeZ;

    var cubes = this._cubes,
        cellsIndex;

    var scaleXYZ = this._scaleXYZ;

    var i, j, k;

    i = -1;

    while(++i < vertSizeZ)
    {
        j = -1;
        while(++j < vertSizeY)
        {
            k = -1;
            while(++k < vertSizeX)
            {
                vertsIndex        = i * vertSizeZY + j * vertSizeZ + k;

                verts[vertsIndex] = [(-0.5 + ( k / (vertSizeX - 1))) * scaleXYZ[0],
                                     (-0.5 + ( j / (vertSizeY - 1))) * scaleXYZ[1],
                                     (-0.5 + ( i / (vertSizeZ - 1))) * scaleXYZ[2],
                    -1];


                if(i < cubeSizeX && j < cubeSizeY && k  < cubeSizeZ)
                {
                    cellsIndex = i * cubeSizeZY + j * cubeSizeX + k;

                    cubes[cellsIndex] = [
                        vertsIndex,
                        vertsIndex + 1,
                        vertsIndex + vertSizeZ,
                        vertsIndex + vertSizeZ + 1,

                        vertsIndex + vertSizeXY,
                        vertsIndex + vertSizeXY + 1,
                        vertsIndex + vertSizeZ + vertSizeXY,
                        vertsIndex + vertSizeZ + vertSizeXY + 1
                    ];

                }
            }
        }
    }

};

/*---------------------------------------------------------------------------------------------------------*/

ISOSurface.prototype._draw = function(gl)
{
    gl.disableDefaultTexCoordsAttribArray();
    gl.enableDefaultNormalAttribArray();

    var _gl = gl.gl;

    var glArrayBuffer = _gl.ARRAY_BUFFER,
        glFloat       = _gl.FLOAT;

    var vertices = this._bVertices,
        normals  = this._bNormals,
        colors   = this._bColors;

    var vblen = vertices.byteLength,
        nblen = normals.byteLength,
        cblen = colors.byteLength;

    var offsetV = 0,
        offsetN = offsetV + vblen,
        offsetC = offsetN + nblen;

    _gl.bufferData(glArrayBuffer, vblen + nblen + cblen, _gl.DYNAMIC_DRAW);

    _gl.bufferSubData(glArrayBuffer, offsetV,  vertices);
    _gl.bufferSubData(glArrayBuffer, offsetN,  normals);
    _gl.bufferSubData(glArrayBuffer, offsetC,  colors);

    _gl.vertexAttribPointer(gl.getDefaultVertexAttrib(), 3, glFloat, false, 0, offsetV);
    _gl.vertexAttribPointer(gl.getDefaultNormalAttrib(), 3, glFloat, false, 0, offsetN);
    _gl.vertexAttribPointer(gl.getDefaultColorAttrib(),  4, glFloat, false, 0, offsetC);

    gl.setMatricesUniform();
    _gl.drawArrays(_gl.TRIANGLES,0,this._numTriangles * 3);
};

/*---------------------------------------------------------------------------------------------------------*/

ISOSurface.EDGE_TABLE = new Int32Array(
    [
        0x0  , 0x109, 0x203, 0x30a, 0x406, 0x50f, 0x605, 0x70c,
        0x80c, 0x905, 0xa0f, 0xb06, 0xc0a, 0xd03, 0xe09, 0xf00,
        0x190, 0x99 , 0x393, 0x29a, 0x596, 0x49f, 0x795, 0x69c,
        0x99c, 0x895, 0xb9f, 0xa96, 0xd9a, 0xc93, 0xf99, 0xe90,
        0x230, 0x339, 0x33 , 0x13a, 0x636, 0x73f, 0x435, 0x53c,
        0xa3c, 0xb35, 0x83f, 0x936, 0xe3a, 0xf33, 0xc39, 0xd30,
        0x3a0, 0x2a9, 0x1a3, 0xaa , 0x7a6, 0x6af, 0x5a5, 0x4ac,
        0xbac, 0xaa5, 0x9af, 0x8a6, 0xfaa, 0xea3, 0xda9, 0xca0,
        0x460, 0x569, 0x663, 0x76a, 0x66 , 0x16f, 0x265, 0x36c,
        0xc6c, 0xd65, 0xe6f, 0xf66, 0x86a, 0x963, 0xa69, 0xb60,
        0x5f0, 0x4f9, 0x7f3, 0x6fa, 0x1f6, 0xff , 0x3f5, 0x2fc,
        0xdfc, 0xcf5, 0xfff, 0xef6, 0x9fa, 0x8f3, 0xbf9, 0xaf0,
        0x650, 0x759, 0x453, 0x55a, 0x256, 0x35f, 0x55 , 0x15c,
        0xe5c, 0xf55, 0xc5f, 0xd56, 0xa5a, 0xb53, 0x859, 0x950,
        0x7c0, 0x6c9, 0x5c3, 0x4ca, 0x3c6, 0x2cf, 0x1c5, 0xcc ,
        0xfcc, 0xec5, 0xdcf, 0xcc6, 0xbca, 0xac3, 0x9c9, 0x8c0,
        0x8c0, 0x9c9, 0xac3, 0xbca, 0xcc6, 0xdcf, 0xec5, 0xfcc,
        0xcc , 0x1c5, 0x2cf, 0x3c6, 0x4ca, 0x5c3, 0x6c9, 0x7c0,
        0x950, 0x859, 0xb53, 0xa5a, 0xd56, 0xc5f, 0xf55, 0xe5c,
        0x15c, 0x55 , 0x35f, 0x256, 0x55a, 0x453, 0x759, 0x650,
        0xaf0, 0xbf9, 0x8f3, 0x9fa, 0xef6, 0xfff, 0xcf5, 0xdfc,
        0x2fc, 0x3f5, 0xff , 0x1f6, 0x6fa, 0x7f3, 0x4f9, 0x5f0,
        0xb60, 0xa69, 0x963, 0x86a, 0xf66, 0xe6f, 0xd65, 0xc6c,
        0x36c, 0x265, 0x16f, 0x66 , 0x76a, 0x663, 0x569, 0x460,
        0xca0, 0xda9, 0xea3, 0xfaa, 0x8a6, 0x9af, 0xaa5, 0xbac,
        0x4ac, 0x5a5, 0x6af, 0x7a6, 0xaa , 0x1a3, 0x2a9, 0x3a0,
        0xd30, 0xc39, 0xf33, 0xe3a, 0x936, 0x83f, 0xb35, 0xa3c,
        0x53c, 0x435, 0x73f, 0x636, 0x13a, 0x33 , 0x339, 0x230,
        0xe90, 0xf99, 0xc93, 0xd9a, 0xa96, 0xb9f, 0x895, 0x99c,
        0x69c, 0x795, 0x49f, 0x596, 0x29a, 0x393, 0x99 , 0x190,
        0xf00, 0xe09, 0xd03, 0xc0a, 0xb06, 0xa0f, 0x905, 0x80c,
        0x70c, 0x605, 0x50f, 0x406, 0x30a, 0x203, 0x109, 0x0
    ]);

ISOSurface.TRI_TABLE = new Int32Array(
    [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1,
        3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1,
        3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1,
        3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1,
        9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1,
        1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1,
        9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1,
        2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1,
        8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1,
        9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1,
        4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1,
        3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1,
        1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1,
        4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1,
        4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1,
        9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1,
        1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1,
        5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1,
        2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1,
        9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1,
        0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1,
        2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1,
        10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1,
        4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1,
        5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1,
        5, 4, 8, 5, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1,
        9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1,
        0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1,
        1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1,
        10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1,
        8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1,
        2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1,
        7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1,
        9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1,
        2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1,
        11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1,
        9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1,
        5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1,
        11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1,
        11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1,
        1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1,
        9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1,
        5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1,
        2, 3, 11, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1,
        0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1,
        5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1,
        6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1,
        0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1,
        3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1,
        6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1,
        5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1,
        1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1,
        10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1,
        6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1,
        1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1,
        8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1,
        7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1,
        3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1,
        5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1,
        0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1,
        9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1,
        8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1,
        5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1,
        0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1,
        6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1,
        10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1,
        10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1,
        8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1,
        1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1,
        3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1,
        0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1,
        10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1,
        0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1,
        3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1,
        6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1,
        9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1,
        8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1,
        3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1,
        6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1,
        0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1,
        10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1,
        10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1,
        1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1,
        2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1,
        7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1,
        7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1,
        2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1,
        1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1,
        11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1,
        8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1,
        0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1,
        7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1,
        10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1,
        2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1,
        6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1,
        7, 2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1,
        2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1,
        1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1,
        10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1,
        10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1,
        0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1,
        7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1,
        6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1,
        8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1,
        9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1,
        6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1,
        1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1,
        4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1,
        10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1,
        8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1,
        0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1,
        1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1,
        8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1,
        10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1,
        4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1,
        10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1,
        5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1,
        11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1,
        9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1,
        6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1,
        7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1,
        3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1,
        7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1,
        9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1,
        3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1,
        6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1,
        9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1,
        1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1,
        4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1,
        7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1,
        6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1,
        3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1,
        0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1,
        6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1,
        1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1,
        0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1,
        11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1,
        6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1,
        5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1,
        9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1,
        1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1,
        1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1,
        10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1,
        0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1,
        5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1,
        10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1,
        11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1,
        0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1,
        9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1,
        7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1,
        2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1,
        8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1,
        9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1,
        9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1,
        1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1,
        9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1,
        9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1,
        5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1,
        0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1,
        10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1,
        2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1,
        0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11, -1,
        0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1,
        9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1,
        5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1,
        3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1,
        5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1,
        8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1,
        0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1,
        9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1,
        0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1,
        1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1,
        3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1,
        4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1,
        9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1,
        11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1,
        11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1,
        2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1,
        9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1,
        3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1,
        1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1,
        4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1,
        4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1,
        0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1,
        3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1,
        3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1,
        0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1,
        9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1,
        1, 10, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
    ]);

module.exports = ISOSurface;
},{"../math/fVec3":35,"../math/fVec4":36,"./fGeom3d":7}],10:[function(require,module,exports){

module.exports =
{

    //TODO: clean up

    isPointLeft : function(x0,y0,x1,y1,x2,y2)
    {
        return ( x1 - x0 ) * ( y2 - y0 ) - (x2 - x0) * (y1 - y0);
    },

    //http://alienryderflex.com/intersect/
    isIntersectionf : function(ax,ay,bx,by,cx,cy,dx,dy,out)
    {
        var distAB,
            cos,
            sin,
            newX,
            posab;

        if (ax == bx && ay == by ||
            cx == dx && cy == dy)
            return false;

        bx -= ax;
        by -= ay;
        cx -= ax;
        cy -= ay;
        dx -= ax;
        dy -= ay;

        distAB = 1 / (Math.sqrt(bx*bx+by*by) || 1);

        cos  = bx * distAB;
        sin  = by * distAB;
        newX = cx * cos + cy * sin;
        cy   = cy * cos - cx * sin;
        cx   = newX;
        newX = dx * cos + dy * sin;
        dy   = dy * cos - dx * sin;
        dx   = newX;

        if (cy == dy) return false;

        posab  = dx + ( cx - dx ) * dy / ( dy - cy );

        if(out)
        {
            out[0] = ax + posab * cos;
            out[1] = ay + posab * sin;
        }

        return true;
    },

    isIntersection : function(l0,l1,out)
    {
        return this.isIntersectionf(l0[0],l0[1],l0[2],l0[3],l1[0],l0[1],l1[2],l1[3],out);
    } ,

    isSegmentIntersectionf : function(ax,ay,bx,by,cx,cy,dx,dy,out)
    {
        var distab,
            cos,
            sin,
            newX,
            posab;

        if (ax == bx && ay == by ||
            cx == dx && cy == dy)
            return false;

        if (ax==cx && ay==cy || bx==cx && by==cy
            ||  ax==dx && ay==dy || bx==dx && by==dy) {
            return false; }

        bx -= ax;
        by -= ay;
        cx -= ax;
        cy -= ay;
        dx -= ax;
        dy -= ay;

        distab= Math.sqrt(bx*bx+by*by);

        cos  = bx / distab;
        sin  = by / distab;
        newX = cx * cos + cy * sin;
        cy   = cy * cos - cx * sin;
        cx   = newX;
        newX = dx * cos + dy * sin;
        dy   = dy * cos - dx * sin;
        dx   = newX;

        if(cy < 0.0 && dy < 0.0 || cy >= 0.0 && dy >= 0.0)return false;

        posab  = dx + ( cx - dx ) * dy / ( dy - cy );

        if(posab < 0.0 || posab > distab)return false;

        if(out)
        {
            out[0] = ax + posab * cos;
            out[1] = ay + posab * sin;
        }

        return true;
    }


};
},{}],11:[function(require,module,exports){



function LineBuffer2d(kgl,size)
{
    this._gl      = kgl;

    this._vbo     = null;
    this.vertices = null;
    this.colors   = null;

    this._vertIndex = 0;
    this._colIndex  = 0;

    if(size)this.allocate(size);
}

/*---------------------------------------------------------------------------------------------------------*/

//probably shouldnt do this
LineBuffer2d.prototype.bind   = function()
{
    var kgl = this._gl,
        gl    = kgl.gl;

    kgl.disableDefaultNormalAttribArray();
    kgl.disableDefaultTexCoordsAttribArray();
    gl.bindBuffer(gl.ARRAY_BUFFER,this._vbo);
};

LineBuffer2d.prototype.unbind = function()
{
    var kgl = this._gl;

    kgl.enableDefaultNormalAttribArray();
    kgl.enableDefaultTexCoordsAttribArray();
    kgl.bindDefaultVBO();
};

LineBuffer2d.prototype.pushVertex3f = function(x,y,z)
{
    var vertices = this.vertices;

    //if(this._safeAllocate && this._vertIndex > vertices.length - 3)this.allocate(vertices.length * 1.1);

    vertices[this._vertIndex++] = x;
    vertices[this._vertIndex++] = y;
    vertices[this._vertIndex++] = z;
};

LineBuffer2d.prototype.pushColor4f = function(r,g,b,a)
{
    var colors = this.colors;

    colors[this._colIndex++] = r;
    colors[this._colIndex++] = g;
    colors[this._colIndex++] = b;
    colors[this._colIndex++] = a;
};

LineBuffer2d.prototype.setVertex3f = function(x,y,z,index3)
{
    index3*=3;
    var vertices = this.vertices;

    vertices[index3  ] = x;
    vertices[index3+1] = y;
    vertices[index3+2] = z;
};

LineBuffer2d.prototype.setColor4f = function(r,g,b,a,index4)
{
    index4*=4;
    var colors = this.colors;

    colors[index4  ] = r;
    colors[index4+1] = g;
    colors[index4+2] = b;
    colors[index4+3] = a;
};

LineBuffer2d.prototype.pushVertex    = function(v){this.pushVertex3f(v[0],v[1],v[2]);};
LineBuffer2d.prototype.pushColor     = function(c){this.pushColor4f(c[0],c[1],c[2],c[3]);};
LineBuffer2d.prototype.setVertex     = function(v,index){this.setVertex3f(v[0],v[1],v[2],index);};
LineBuffer2d.prototype.setColor      = function(c,index){this.setColor4f(c[0],c[1],c[2],c[3],index);};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer2d.prototype.buffer = function()
{
    var glkl          = this._gl,
        gl            = glkl.gl,
        glArrayBuffer = gl.ARRAY_BUFFER,
        glFloat       = gl.FLOAT;



    var vblen = this.vertices.byteLength,
        cblen = this.colors.byteLength;

    var offsetV = 0,
        offsetC = offsetV + vblen;

    gl.bufferData(glArrayBuffer,vblen + cblen, gl.DYNAMIC_DRAW);
    gl.bufferSubData(glArrayBuffer,offsetV,this.vertices);
    gl.bufferSubData(glArrayBuffer,offsetC,this.colors);
    gl.vertexAttribPointer(glkl.getDefaultVertexAttrib(),glkl.SIZE_OF_VERTEX,glFloat,false,0,offsetV);
    gl.vertexAttribPointer(glkl.getDefaultColorAttrib(), glkl.SIZE_OF_COLOR, glFloat,false,0,offsetC);
};

LineBuffer2d.prototype.draw = function(first,count)
{
    var kgl = this._gl,
        gl    = kgl.gl;

   kgl.setMatricesUniform();
   gl.drawArrays(kgl.getDrawMode(),
                 first || 0,
                 count || this.vertices.length / kgl.SIZE_OF_VERTEX);
};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer2d.prototype.reset = function()
{
    this._vertIndex = 0;
    this._colIndex  = 0;
};

LineBuffer2d.prototype.dispose  = function()
{
    this._gl.gl.deleteBuffer(this._vbo);
    this.vertices = null;
    this.colors   = null;
    this.reset();
};

LineBuffer2d.prototype.allocate = function(size)
{
    var kgl = this._gl,
        gl    = kgl.gl;

    //need to deleteBuffer, instead of reusing it, otherwise error, hm
    if(this._vbo){gl.deleteBuffer(this._vbo);}this._vbo = gl.createBuffer();
    this.vertices = this.vertices || new Float32Array(0);
    this.colors   = this.colors   || new Float32Array(0);

    var vertLen = this.vertices.length,
        colsLen = this.colors.length;

    if(vertLen < size)
    {
        var temp;

        temp = new Float32Array(size);
        temp.set(this.vertices);
        temp.set(new Float32Array(temp.length - vertLen),vertLen);
        this.vertices = temp;

        temp = new Float32Array(size / 3 * 4);
        temp.set(this.colors);
        temp.set(new Float32Array(temp.length - colsLen),colsLen);
        this.colors = temp;
  }
};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer2d.prototype.getSizeAllocated = function(){return this.vertices.length;};
LineBuffer2d.prototype.getSizePushed    = function(){return this._vertIndex;};

module.exports = LineBuffer2d;


},{}],12:[function(require,module,exports){
var Geom3d = require('./fGeom3d'),
    Mat44  = require('../math/fMat44'),
    Vec3   = require('../math/fVec3');

//TODO:
//Fix shared normals on caps
//


LineBuffer3d = function(points,numSegments,diameter,sliceSegmentFunc,closed)
{
    Geom3d.apply(this,arguments);

    numSegments = numSegments || 10;
    diameter    = diameter    || 0.25;

    this._closedCaps   = (typeof closed === 'undefined') ? true : closed;
    this._numSegments  = numSegments;

    //caches vertices transformed by slicesegfunc for diameter scaling
    //...,vnorm0x,vnorm0y,vnorm0z,vnorm0xScaled,,vnorm0yScaled,vnorm0zScaled,...
    this._verticesNorm = null;
    this.points        = null;

    this._sliceSegFunc = sliceSegmentFunc ||
                        (function(i,j,numPoints,numSegments)
                         {
                             var step  = Math.PI * 2 / numSegments,
                                 angle = step * j;

                             return [Math.cos(angle),Math.sin(angle)];
                         });

    this._initDiameter = diameter;

    this._tempVec0 = Vec3.make();
    this._bPoint0  = Vec3.make();
    this._bPoint1  = Vec3.make();
    this._bPoint01 = Vec3.make();
    this._axisY    = Vec3.AXIS_Y();

    /*---------------------------------------------------------------------------------------------------------*/

    if(points)this.setPoints(points);

};

LineBuffer3d.prototype = Object.create(Geom3d.prototype);

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer3d.prototype.setPoints = function(arr)
{
    this.points = new Float32Array(arr);

    if(!(this.vertices && this.vertices.length == arr.length))
    {
        var numSegments = this._numSegments,
            numPoints   = this._numPoints = arr.length / 3;
        var len         = numPoints * numSegments * 3;

        this._verticesNorm = new Float32Array(len * 2);
        this.vertices      = new Float32Array(len);
        this.normals       = new Float32Array(len);
        this.colors        = new Float32Array(len / 3 * 4);

        this.setNumSegments(numSegments);
    }
};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer3d.prototype.applySliceSegmentFunc = function(func,baseDiameter)
{
    baseDiameter = baseDiameter || 0.25;

    var numPoints    = this._numPoints,
        numSegments  = this._numSegments,
        verticesNorm = this._verticesNorm;

    var funcRes;

    var index;
    var i, j, k;

    i = -1;
    while(++i < numPoints)
    {
        j = -1;
        index = i * numSegments;

        while(++j < numSegments)
        {
            k    = (index + j) * 3 * 2;

            funcRes = func(i,j,numPoints,numSegments);

            verticesNorm[k+0] = funcRes[0];
            verticesNorm[k+2] = funcRes[1];

            verticesNorm[k+3] = verticesNorm[k+0] * baseDiameter;
            verticesNorm[k+5] = verticesNorm[k+2] * baseDiameter;
        }
    }

    this._sliceSegFunc = func;

};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer3d.prototype.setPoint3f = function(index,x,y,z)
{
    index *= 3;

    var points = this.points;

    points[index  ] = x;
    points[index+1] = y;
    points[index+2] = z;
};

LineBuffer3d.prototype.setPoint = function(index,v)
{
    index *= 3;

    var points = this.points;

    points[index  ] = v[0];
    points[index+1] = v[1];
    points[index+2] = v[2];
};

LineBuffer3d.prototype.getPoint = function(index,out)
{
    out    = out || this._tempVec0;
    index *= 3;

    var points = this.points;

    out[0] = points[index  ];
    out[1] = points[index+1];
    out[2] = points[index+2];

    return out;
};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer3d.prototype.setUnitDiameter = function(value)
{
    var numSegments  = this._numSegments,
        verticesNorm = this._verticesNorm;

    var offset = numSegments * 3 * 2;

    var i = 0,
        l = this._numPoints * offset;

    while(i < l)
    {
        verticesNorm[i + 3] = verticesNorm[i + 0] * value;
        verticesNorm[i + 5] = verticesNorm[i + 2] * value;
        i+=6;
    }
};

LineBuffer3d.prototype.setDiameter = function(index,value)
{
    var numSegments  = this._numSegments,
        verticesNorm = this._verticesNorm;

    var offset = numSegments * 3 * 2;

    var i = index * offset,
        l = i + offset;

    while (i < l)
    {
        verticesNorm[i + 3] = verticesNorm[i + 0] * value;
        verticesNorm[i + 5] = verticesNorm[i + 2] * value;
        i += 6;
    }
};

//TODO: Cleanup / unroll ...
LineBuffer3d.prototype.setNumSegments = function(numSegments)
{
    numSegments = numSegments < 2 ? 2 : numSegments;

    var numPoints = this._numPoints;
    var indices   = this.indices = [];
    var texCoords;

    var i,j;
    var v0,v1,v2,v3;
    var nh,nv;
    var index, indexSeg, indexTex;
    var len;

    if(numSegments > 2)
    {

        len = numSegments - 1;

        i = -1;
        while (++i < numPoints - 1)
        {

            index = i * numSegments;
            j = -1;
            while (++j < len)
            {
                indexSeg = index + j;

                v0 = indexSeg;
                v1 = indexSeg + 1;
                v2 = indexSeg + numSegments + 1;
                v3 = indexSeg + numSegments;

                indices.push(v0,v1,v3,
                             v1,v2,v3);
            }


            v0 = index + len;
            v1 = index;
            v2 = index + len + 1;
            v3 = index + numSegments + len;

            indices.push(v0,v1,v3,
                         v1,v2,v3);

        }
    }
    else
    {
        i = -1;
        while(++i < numPoints - 1)
        {
            index = i * 2;
            indices.push(index,    index + 1,index + 2,
                         index + 1,index + 3,index + 2);

        }
    }

    len = numPoints * numSegments * 3 ;

    texCoords = this.texCoords = new Float32Array(len / 3 * 2);

    i = -1;
    while(++i < numPoints)
    {
        index = i * numSegments;
        nh    = i / (numPoints - 1);

        j = -1;
        while(++j < numSegments)
        {
            indexTex = (index + j) * 2;
            nv       = 1 - j / (numSegments - 1);

            texCoords[indexTex]   = nh;
            texCoords[indexTex+1] = nv;
        }
    }


    this.setCloseCaps(this._closedCaps);
    this.applySliceSegmentFunc(this._sliceSegFunc,this._initDiameter);
};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer3d.prototype.update = function()
{
    var numPoints   = this._numPoints,
        numSegments = this._numSegments;

    var points       = this.points,
        vertices     = this.vertices,
        verticesNorm = this._verticesNorm;

    var tempVec = this._tempVec0;

    var p0  = this._bPoint0,
        p1  = this._bPoint1,
        p01 = this._bPoint01,
        up  = this._axisY;

    var mat    = Mat44.make(),
        matRot = Mat44.make();

    var index,index3,index6;

    //direction from current point -> next point, prev point -> current point
    var dir01,dir_10;
    var angle,axis;

    //BEGIN - calculate first point
    Vec3.set3f(p0,points[0],points[1],points[2]);
    Vec3.set3f(p1,points[3],points[4],points[5]);

    dir01 = Vec3.safeNormalize(Vec3.subbed(p1,p0));
    angle = Math.acos(Vec3.dot(dir01,up));
    axis  = Vec3.safeNormalize(Vec3.cross(up,dir01));

    Mat44.identity(mat);
    mat[12] = p0[0];
    mat[13] = p0[1];
    mat[14] = p0[2];

    Mat44.makeRotationOnAxis(angle,axis[0],axis[1],axis[2],matRot);
    mat = Mat44.multPost(mat,matRot);

    j = -1;
    while(++j < numSegments)
    {
        index3 = j * 3;
        index6 = j * 6;

        tempVec[0] = verticesNorm[index6+3];
        tempVec[1] = verticesNorm[index6+4];
        tempVec[2] = verticesNorm[index6+5];

        Mat44.multVec3(mat,tempVec);

        vertices[index3  ] = tempVec[0];
        vertices[index3+1] = tempVec[1];
        vertices[index3+2] = tempVec[2];
    }
    //END - calculate first point


    //calc first prev dir
    Vec3.set3f(p0, points[3],points[4],points[5]);
    Vec3.set3f(p01,points[0],points[1],points[2]);
    dir_10 = Vec3.safeNormalize(Vec3.subbed(p0,p01));

    var i3;
    var i = 0;
    var j;
    while(++i < numPoints - 1)
    {
        //set current point
        i3 = i * 3;
        p0[0] = points[i3  ];
        p0[1] = points[i3+1];
        p0[2] = points[i3+2];

        //set next point
        i3 = (i + 1) * 3;
        p1[0] = points[i3  ];
        p1[1] = points[i3+1];
        p1[2] = points[i3+2];

        //calculate direction
        dir01  = Vec3.safeNormalize(Vec3.subbed(p1,p0));

        //interpolate with previous direction
        dir01[0] = dir01[0] * 0.5 + dir_10[0] * 0.5;
        dir01[1] = dir01[1] * 0.5 + dir_10[1] * 0.5;
        dir01[2] = dir01[2] * 0.5 + dir_10[2] * 0.5;

        //get dir angle + axis
        angle = Math.acos(Vec3.dot(dir01,up));
        axis  = Vec3.safeNormalize(Vec3.cross(up,dir01));

        //reset transformation matrix
        Mat44.identity(mat);

        //set translation
        mat[12] = p0[0];
        mat[13] = p0[1];
        mat[14] = p0[2];

        //set rotation
        Mat44.makeRotationOnAxis(angle,axis[0],axis[1],axis[2],matRot);

        //multiply matrices
        mat = Mat44.multPost(mat,matRot);

        j = -1;
        while(++j < numSegments)
        {
            index  = (i * numSegments + j);
            index3 = index * 3;
            index6 = index * 6;

            //lookup vertex
            tempVec[0] = verticesNorm[index6+3];
            tempVec[1] = verticesNorm[index6+4];
            tempVec[2] = verticesNorm[index6+5];

            //transform vertex copy by matrix
            Mat44.multVec3(mat,tempVec);

            //reassign transformed vertex
            vertices[index3  ] = tempVec[0];
            vertices[index3+1] = tempVec[1];
            vertices[index3+2] = tempVec[2];
        }

        //assign current direction to prev
        dir_10[0] = dir01[0];
        dir_10[1] = dir01[1];
        dir_10[2] = dir01[2];
    }

    var len = points.length;

    //BEGIN - calculate last point
    Vec3.set3f(p0,points[len - 6],points[len - 5],points[len - 4]);
    Vec3.set3f(p1,points[len - 3],points[len - 2],points[len - 1]);

    dir01 = Vec3.safeNormalize(Vec3.subbed(p1,p0));
    angle = Math.acos(Vec3.dot(dir01,up));
    axis  = Vec3.safeNormalize(Vec3.cross(up,dir01));

    Mat44.identity(mat);
    mat[12] = p1[0];
    mat[13] = p1[1];
    mat[14] = p1[2];

    Mat44.makeRotationOnAxis(angle,axis[0],axis[1],axis[2],matRot);
    mat = Mat44.multPost(mat,matRot);

    i  = (i * numSegments);

    j = -1;
    while(++j < numSegments)
    {
        index  = i + j;
        index3 = index * 3;
        index6 = index * 6;

        tempVec[0] = verticesNorm[index6+3];
        tempVec[1] = verticesNorm[index6+4];
        tempVec[2] = verticesNorm[index6+5];

        Mat44.multVec3(mat,tempVec);

        vertices[index3  ] = tempVec[0];
        vertices[index3+1] = tempVec[1];
        vertices[index3+2] = tempVec[2];
    }
    //END - calculate last point
};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer3d.prototype.setSegVTexCoordMapping = function(scale,offset){this.setSegTexCoordMapping(1,0,scale,offset || 0);};
LineBuffer3d.prototype.setSegHTexCoordMapping = function(scale,offset){this.setSegTexCoordMapping(scale,offset || 0,1,0);};

LineBuffer3d.prototype.setSegTexCoordMapping = function (scaleH, offsetH, scaleV, offsetV)
{
    var numPoints     = this._numPoints,
        numSegments   = this._numSegments,
        numSegments_1 = numSegments - 1;

    var texCoords = this.texCoords;
    var i, j, index, indexTex;
    var nh, nv;

    i = -1;
    while (++i < numPoints)
    {
        index = i * numSegments;
        nh = (i / (numPoints - 1)) * scaleH - offsetH;

        j = -1;
        while (++j < numSegments)
        {
            indexTex = (index + j) * 2;
            nv = (1 - j / numSegments_1) * scaleV - offsetV;

            texCoords[indexTex  ] = nh;
            texCoords[indexTex + 1] = nv;
        }
    }
};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer3d.prototype.setCloseCaps = function(bool)
{
    if(this._numSegments == 2)return;

    var indices = this.indices,
        temp    = new Array(this.indices.length);

    var i = -1;while(++i<temp.length)temp[i] = indices[i];

    var numPoints   = this._numPoints,
        numSegments = this._numSegments;
    var len;


    if(bool)
    {

        len = numSegments - 2;
        i = -1;while(++i < len)temp.push(0,i+1,i+2);

        var j;
        len += (numPoints - 1) * numSegments + 1;
        i   = j = len - numSegments + 1;
        while(++i < len)temp.push(j,i,i+1);
    }
    else
    {
        temp = temp.slice(0,indices.length - (numSegments - 2) * 2 * 3);
    }

    this.indices = new Uint16Array(temp);
    this.updateVertexNormals();
    this._closedCaps = bool;
};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer3d.prototype.getNumSegments = function(){return this._numSegments;};
LineBuffer3d.prototype.getNumPoints   = function(){return this._numPoints;};

/*---------------------------------------------------------------------------------------------------------*/

LineBuffer3d.prototype._draw = function(gl,count,offset)
{
    var indices = this.indices;
    gl.drawElements(this.vertices,this.normals,gl.bufferColors(gl.getColorBuffer(),this.colors),this.texCoords,indices,gl.getDrawMode(),count || indices.length, offset || 0 );
};

module.exports = LineBuffer3d;

},{"../math/fMat44":31,"../math/fVec3":35,"./fGeom3d":7}],13:[function(require,module,exports){
var Vec2   = require('../math/fVec2'),
    Vec3   = require('../math/fVec3'),
    Color  = require('../util/fColor'),
    Geom3d = require('./fGeom3d');

ParametricSurface = function(size)
{
    Geom3d.apply(this,null);

    this.funcX = function(u,v,t){return u;};
    this.funcY = function(u,v,t){return 0;};
    this.funcZ = function(u,v,t){return v;};
    this.ur    = [-1,1];
    this.vr    = [-1,1];
    this.size  = null;

    this.setSize(size);

};

ParametricSurface.prototype = Object.create(Geom3d.prototype);

ParametricSurface.prototype.setSize = function(size,unit)
{
    unit = unit || 1;

    this.size = size;

    var length  = size * size;

    this.vertices  = new Float32Array(length * Vec3.SIZE);
    this.normals   = new Float32Array(length * Vec3.SIZE);
    this.colors    = new Float32Array(length * Color.SIZE);
    this.texCoords = new Float32Array(length * Vec2.SIZE);

    var indices = [];

    var a, b, c, d;
    var i,j;

    i = -1;
    while(++i < size - 1)
    {
        j = -1;
        while(++j < size - 1)
        {
            a = j     + size * i;
            b = (j+1) + size * i;
            c = j     + size * (i+1);
            d = (j+1) + size * (i+1);

            indices.push(a,b,c);
            indices.push(b,d,c);
        }
    }

    this.indices = new Uint16Array(indices);

    this.updateVertexNormals();
};

ParametricSurface.prototype.setFunctions = function(funcX,funcY,funcZ,vr,ur)
{
    this.funcX = funcX;
    this.funcY = funcY;
    this.funcZ = funcZ;
    this.vr   = vr;
    this.ur   = ur;
};

ParametricSurface.prototype.applyFunctions = function()
{
    this.applyFunctionsWithArg(0);
};

//Override
ParametricSurface.prototype.applyFunctionsWithArg = function(arg)
{
    var size  = this.size;

    var funcX = this.funcX,
        funcY = this.funcY,
        funcZ = this.funcZ;

    var urLower = this.ur[0],
        urUpper = this.ur[1],
        vrLower = this.vr[0],
        vrUpper = this.vr[1];

    var i, j, u, v;

    var vertices = this.vertices;

    var index,indexVertices;

    var temp0 = urUpper - urLower,
        temp1 = vrUpper - vrLower,
        temp2 = size - 1;

    i = -1;
    while(++i < size)
    {
        j = -1;
        while(++j < size)
        {
            index = (j + size * i);
            indexVertices = index * 3;

            u = (urLower + temp0 * (j / temp2));
            v = (vrLower + temp1 * (i / temp2));

            vertices[indexVertices    ] = funcX(u,v,arg);
            vertices[indexVertices + 1] = funcY(u,v,arg);
            vertices[indexVertices + 2] = funcZ(u,v,arg);
        }
    }
};

ParametricSurface.prototype.pointOnSurface = function(u,v)
{
    return this.pointOnSurfaceWithArg(u,v,0);
};

ParametricSurface.prototype.pointOnSurfaceWithArg = function(u,v,arg)
{
    return Vec3.make(this.funcX(u,v,arg),
                     this.funcY(u,v,arg),
                     this.funcZ(u,v,arg));
};

module.exports = ParametricSurface;


},{"../math/fVec2":34,"../math/fVec3":35,"../util/fColor":40,"./fGeom3d":7}],14:[function(require,module,exports){
var fMath      = require('../math/fMath'),
    Line2dUtil = require('./fLine2dUtil');

module.exports =
{
    /*---------------------------------------------------------------------------------------------------------*/

    makeVertexCountFitted : function(polygon,count)
    {
        var diff    = polygon.length * 0.5 - count;

        return diff < 0 ? this.makeVertexCountIncreased(polygon, Math.abs(diff)) :
               diff > 0 ? this.makeVertexCountDecreased(polygon, diff) :
               polygon;
    },


    //TODO: modulo loop
    makeVertexCountIncreased : function(polygon,count)
    {
        count = (typeof count == 'undefined') ? 1 : count;

        var out = polygon.slice();
        if(count <= 0 )return polygon;

        var i = -1,j;
        var len;
        var max;

        var jc,jn;

        var x, y, mx, my;
        var dx,dy,d;

        var edgeSIndex,
            edgeEIndex;

        while(++i < count)
        {
            max = -Infinity;
            len = out.length * 0.5;

            edgeSIndex = edgeEIndex = 0;

            j = -1;
            while(++j < len - 1)
            {
                jc = j * 2;
                jn = (j + 1) * 2;

                dx = out[jn    ] - out[jc    ];
                dy = out[jn + 1] - out[jc + 1];
                d  = dx * dx + dy * dy;

                if(d > max){max = d;edgeSIndex = j;}
            }

            jc = j * 2;
            dx = out[0] - out[jc    ];
            dy = out[1] - out[jc + 1];
            d  = dx * dx + dy * dy;

            edgeSIndex = (d > max) ? j : edgeSIndex;
            edgeEIndex = edgeSIndex == len - 1 ? 0 : edgeSIndex + 1;

            edgeSIndex*= 2;
            edgeEIndex*= 2;

            x = out[edgeSIndex    ];
            y = out[edgeSIndex + 1];

            mx = x + (out[edgeEIndex    ] - x) * 0.5;
            my = y + (out[edgeEIndex + 1] - y) * 0.5;

            out.splice(edgeEIndex,0,mx,my);
        }

        return out;

    },


    //TODO: modulo loop
    makeVertexCountDecreased : function(polygon,count)
    {
        count = (typeof count == 'undefined') ? 1 : count;

        var out = polygon.slice();
        if((out.length * 0.5 - count) < 3 || count == 0)return out;

        var i = -1, j;
        var len;
        var min;

        var jc,jn;
        var dx,dy,d;

        var edgeSIndex,
            edgeEIndex;

        while(++i < count)
        {

            min = Infinity;
            len = out.length * 0.5;

            edgeSIndex = edgeEIndex = 0;

            j = -1;
            while(++j < len - 1)
            {
                jc = j * 2;
                jn = (j + 1) * 2;

                dx = out[jn    ] - out[jc    ];
                dy = out[jn + 1] - out[jc + 1];
                d  = dx * dx + dy * dy;

                if(d < min){min = d;edgeSIndex = j;}
            }

            jc = j * 2;
            dx = out[0] - out[jc    ];
            dy = out[1] - out[jc + 1];
            d  = dx * dx + dy * dy;

            edgeSIndex = (d < min) ? j : edgeSIndex;
            edgeEIndex = edgeSIndex == len - 1 ? 0 : edgeSIndex + 1;

            out.splice(edgeEIndex * 2,2);

        }

        return out;

    },

    /*---------------------------------------------------------------------------------------------------------*/


    makeEdgesSubdivided : function(polygon,count,out)
    {
        count = count || 1;

        var i, j, k;
        var i2,i4;

        var len;
        var x, y, mx, my;


        if(out)
        {
            out.length = polygon.length;
            i = -1;while(++i < polygon.length){out[i] = polygon[i];}
        }
        else out = polygon.slice();

        j = -1;
        while(++j < count)
        {

            len = out.length * 0.5 -1;
            i = -1;
            while(++i < len)
            {
                i2 = i * 2;
                i4 = (i * 2) * 2;
                x  = out[i4];
                y  = out[i4 + 1];

                i2 = i2 + 1;
                i4 = i2 * 2;
                mx = x + (out[i4    ] - x) * 0.5;
                my = y + (out[i4 + 1] - y) * 0.5;

                out.splice(i4,0,mx,my);
            }

            i2 = i   * 2;
            i4 = i2 * 2;

            x  = out[i4];
            y  = out[i4 + 1];
            mx = x + (out[0] - x) * 0.5;
            my = y + (out[1] - y) * 0.5;

            out.splice((i2 + 1) * 2,0,mx,my);
        }

        return out;
    },

    /*---------------------------------------------------------------------------------------------------------*/


    makeSmoothedLinear : function(polygon,count,out)
    {
        count = count || 1;

        var px,py,dx,dy;

        var i, j, k;

        var temp    = polygon.slice(),
            tempLen = temp.length;

        if(out)out.length = tempLen  * 2;
        else out = new Array(tempLen  * 2);

        j = -1;
        while(++j < count)
        {
            tempLen    = temp.length;
            out.length = tempLen * 2;

            i = 0;
            while(i < tempLen)
            {
                px = temp[i    ];
                py = temp[i + 1] ;
                k  = (i + 2) % tempLen;
                dx = temp[k    ] - px;
                dy = temp[k + 1] - py;

                k = i * 2;
                out[k  ] = px + dx * 0.25;
                out[k+1] = py + dy * 0.25;
                out[k+2] = px + dx * 0.75;
                out[k+3] = py + dy * 0.75;

                i+=2;
            }


            temp = out.slice();
        }

        return out;

    },

    /*---------------------------------------------------------------------------------------------------------*/

    makeOptHeading : function(polygon,tolerance)
    {
        if(polygon.length < 4)return polygon;

        tolerance = tolerance || fMath.EPSILON;

        var temp = [];

        var len = polygon.length / 2 - 1;

        var px = polygon[0],
            py = polygon[1],
            x, y;

        var ph = Math.atan2(polygon[3] - py,polygon[2] - px),
            ch;

        temp.push(px,py);

        var i = 0,i2;

        while(++i < len)
        {
            i2 = i * 2;
            x = polygon[i2  ];
            y = polygon[i2+1];

            i2 = (i + 1) * 2;
            ch = Math.atan2(polygon[i2+1] - y,
                            polygon[i2  ] - x);

            if(Math.abs(ph - ch) > tolerance)temp.push(x,y);

            px = x;
            py = y;
            ph = ch;
        }

        x = polygon[polygon.length - 2];
        y = polygon[polygon.length - 1];

        ch = Math.atan2(polygon[1] - y, polygon[0] - x);

        if(Math.abs(ph - ch) > tolerance)temp.push(x,y);

        return temp;
    },


    makeOptEdgeLength : function(polygon,edgeLength)
    {
        var temp = [];
        var len  = polygon.length * 0.5 - 1;

        var dx,dy;
        var px,py;
        var x, y;

        var index;

        var edgeLengthSq = edgeLength * edgeLength;

        px = polygon[0];
        py = polygon[1];

        temp.push(px,py);
        var i = 0;
        while(++i < len)
        {
            index = i * 2;

            x =  polygon[index  ];
            y =  polygon[index+1];

            dx = x - px;
            dy = y - py;

            if((dx * dx + dy * dy) >= edgeLengthSq)
            {
                px = x;
                py = y;

                temp.push(x,y);
            }
        }

        x = polygon[polygon.length-2];
        y = polygon[polygon.length-1];

        px = polygon[0];
        py = polygon[1];

        dx = x - px;
        dy = y - py;

        if((dx * dx + dy * dy) >= edgeLengthSq)temp.push(x,y);

        return temp;
    },

    /*---------------------------------------------------------------------------------------------------------*/


    //http://alienryderflex.com/polygon_perimeter/
    makePerimeter : function(polygon,out)
    {
        var TWO_PI   = Math.PI * 2,
            PI       = Math.PI;

        var corners  = polygon.length * 0.5;
        var MAX_SEGS = corners * 4;

        if(corners > MAX_SEGS) return null;

        out.length = 0;

        var segS = new Array(MAX_SEGS * 2),
            segE = new Array(MAX_SEGS * 2),
            segAngle   = new Array(MAX_SEGS);

        var intersects = new Array(2),
            intersectX,intersectY;

        var startX    = polygon[0],
            startY    = polygon[1],
            lastAngle = PI;

        var indexi,indexj,
            indexSeg,indexSegi,indexSegj,
            pix,piy,pjx,pjy;

        var a, b, c, d, e, f,
            angleDif, bestAngleDif;

        var i, j = corners - 1, segs = 0;

        i = -1;
        while(++i < corners)
        {
            indexi = i * 2;
            indexj = j * 2;

            pix = polygon[indexi  ];
            piy = polygon[indexi+1];
            pjx = polygon[indexj  ];
            pjy = polygon[indexj+1];

            if (pix != pjx || piy != pjy)
            {
                indexSeg = segs * 2;

                segS[indexSeg  ] = pix;
                segS[indexSeg+1] = piy;
                segE[indexSeg  ] = pjx;
                segE[indexSeg+1] = pjy;

                segs++;
            }

            j = i;

            if (piy > startY || piy == startY && pix < startX)
            {
                startX = pix;
                startY = piy;
            }
        }

        if (segs == 0) return false;

        var isSegmentIntersectionf = Line2dUtil.isSegmentIntersectionf;

        var segSxi,segSyi,
            segSxj,segSyj;

        var segExi,segEyi,
            segExj,segEyj;

        i = -1;
        while(++i < segs - 1)
        {
            indexSegi = i * 2;

            segSxi = segS[indexSegi  ];
            segSyi = segS[indexSegi+1];
            segExi = segE[indexSegi  ];
            segEyi = segE[indexSegi+1];

            j = i;
            while(++j < segs)
            {
                indexSegj = j * 2;

                segSxj = segS[indexSegj  ];
                segSyj = segS[indexSegj+1];
                segExj = segE[indexSegj  ];
                segEyj = segE[indexSegj+1];

                if (isSegmentIntersectionf(
                    segSxi,segSyi,segExi,segEyi,
                    segSxj,segSyj,segExj,segEyj,intersects))
                {

                    intersectX = intersects[0];
                    intersectY = intersects[1];

                    if ((intersectX != segSxi || intersectY != segSyi) &&
                        (intersectX != segExi || intersectY != segEyi))
                    {
                        if(segs == MAX_SEGS) return false;

                        indexSeg = segs * 2;

                        segS[indexSeg  ] = segSxi;
                        segS[indexSeg+1] = segSyi;
                        segE[indexSeg  ] = intersectX;
                        segE[indexSeg+1] = intersectY;

                        segs++;

                        segS[indexSegi  ] = intersectX;
                        segS[indexSegi+1] = intersectY;
                    }

                    if ((intersectX != segSxj || intersectY != segSyj) &&
                        (intersectX != segExj || intersectY != segEyj))
                    {
                        if(segs == MAX_SEGS) return false;

                        indexSeg = segs * 2;

                        segS[indexSeg  ] = segSxj;
                        segS[indexSeg+1] = segSyj;
                        segE[indexSeg  ] = intersectX;
                        segE[indexSeg+1] = intersectY;

                        segs++;

                        segS[indexSegj  ] = intersectX;
                        segS[indexSegj+1] = intersectY;
                    }
                }
            }
        }


        var segDiffx,
            segDiffy,
            segLen;

        i = -1;
        while(++i < segs)
        {
            indexSegi = i * 2;
            segDiffx = segE[indexSegi  ] - segS[indexSegi  ];
            segDiffy = segE[indexSegi+1] - segS[indexSegi+1];

            segLen   = Math.sqrt(segDiffx * segDiffx + segDiffy * segDiffy) || 1;

            segAngle[i] = (segDiffy >= 0.0) ?
                           Math.acos(segDiffx/segLen) :
                          (Math.acos(-segDiffx/segLen) + PI);

        }

        c = startX;
        d = startY;
        a = c - 1;
        b = d;
        e = 0;
        f = 0;

        corners = 1;

        out.push(c,d);

        while (true)
        {
            bestAngleDif = TWO_PI;

            for (i = 0; i < segs; i++)
            {
                indexSegi = i * 2;

                segSxi = segS[indexSegi  ];
                segSyi = segS[indexSegi+1];
                segExi = segE[indexSegi  ];
                segEyi = segE[indexSegi+1];


                if (segSxi == c && segSyi == d &&
                    (segExi !=a || segEyi != b))
                {
                    angleDif = lastAngle - segAngle[i];

                    while (angleDif >= TWO_PI) angleDif -= TWO_PI;
                    while (angleDif < 0      ) angleDif += TWO_PI;

                    if (angleDif < bestAngleDif)
                    {
                        bestAngleDif = angleDif;
                        e = segExi;
                        f = segEyi;
                    }
                }
                if (segExi == c && segEyi == d &&
                    (segSxi !=a || segSyi != b))
                {
                    angleDif = lastAngle - segAngle[i] + PI;

                    while (angleDif >= TWO_PI) angleDif -= TWO_PI;
                    while (angleDif <  0     ) angleDif += TWO_PI;

                    if (angleDif < bestAngleDif)
                    {
                        bestAngleDif = angleDif;
                        e = segSxi;
                        f = segSyi;
                    }
                }
            }

            if (corners > 1 &&
                c == out[0] && d == out[1] &&
                e == out[2] && f == out[3])
            {
                corners--;
                return true;
            }

            if (bestAngleDif == TWO_PI ||
                corners == MAX_SEGS)
            {
                return false;
            }

            corners++;
            out.push(e,f);

            lastAngle -= bestAngleDif + PI;

            a = c;
            b = d;
            c = e;
            d = f;
        }
    },

    /*---------------------------------------------------------------------------------------------------------*/


    //http://alienryderflex.com/polygon_inset/
    makeInset : function(polygon,distance)
    {
        if(polygon.length <= 2)return null;

        var num = polygon.length * 0.5 - 1;

        var sx = polygon[0],
            sy = polygon[1];

        var a, b,
            c = polygon[polygon.length - 2],
            d = polygon[polygon.length - 1],
            e = sx,
            f = sy;

        var index0,index1;

        var temp = new Array(2);

        var i = -1;
        while (++i < num)
        {
            a = c;
            b = d;
            c = e;
            d = f;

            index0 = i * 2;
            index1 = (i+1)*2;

            e = polygon[index1    ];
            f = polygon[index1 + 1];

            temp[0] = polygon[index0];
            temp[1] = polygon[index0 + 1];

            this.makeInsetCorner(a, b, c, d, e, f, distance, temp);
            polygon[index0    ] = temp[0];
            polygon[index0 + 1] = temp[1];
        }

        index0 = i * 2;

        temp[0] = polygon[index0    ];
        temp[1] = polygon[index0 + 1];

        this.makeInsetCorner(c, d, e, f, sx, sy, distance, temp);
        polygon[index0    ] = temp[0];
        polygon[index0 + 1] = temp[1];

        return polygon;
    },

    makeInsetCorner : function(a,b,c,d,e,f,distance,out)
    {
        var  c1 = c,
            d1 = d,
            c2 = c,
            d2 = d,
            dx1, dy1, dist1,
            dx2, dy2, dist2,
            insetX, insetY ;

        var EPSILON = 0.0001;

        dx1   = c - a;
        dy1   = d - b;
        dist1 = Math.sqrt(dx1*dx1+dy1*dy1);

        dx2   = e - c;
        dy2   = f - d;
        dist2 = Math.sqrt(dx2*dx2+dy2*dy2);

        if(dist1 < EPSILON || dist2  < EPSILON)return;

        dist1 = 1.0 / dist1;
        dist2 = 1.0 / dist2;

        insetX = dy1 * dist1 * distance;
        a     += insetX;
        c1    += insetX;

        insetY =-dx1 * dist1 * distance;
        b     += insetY;
        d1    += insetY;

        insetX = dy2 * dist2 * distance;
        e     += insetX;
        c2    += insetX;

        insetY =-dx2 * dist2 * distance;
        f     += insetY;
        d2    += insetY;

        if (c1 == c2 && d1==d2)
        {
            out[0] = c1;
            out[1] = d1;
            return; }

        var temp = new Array(2);

        if (Line2dUtil.isIntersectionf(a,b,c1,d1,c2,d2,e,f,temp))
        {
            out[0] = temp[0];
            out[1] = temp[1];
        }
    },

    /*---------------------------------------------------------------------------------------------------------*/

    isPointInPolygon : function(x,y,points)
    {
        var wn = 0;
        var len = points.length / 2;

        var index0,
            index1;


        var i = -1;
        while(++i < len - 1)
        {
            index0 = i * 2;
            index1 = (i + 1) * 2;

            if(points[index0+1] <= y)
            {
                if(points[index1+1] > y)
                {
                    if(Line2dUtil.isPointLeft(points[index0],points[index0 + 1],
                                              points[index1],points[index1 + 1],
                                              x,y)>0)++wn;
                }
            }
            else
            {
                if(points[index1+1] <= y)
                {
                    if(Line2dUtil.isPointLeft(points[index0],points[index0 + 1],
                                              points[index1],points[index1 + 1],
                                              x,y)<0)--wn;

                }
            }
        }

        return wn;

    },

    /*---------------------------------------------------------------------------------------------------------*/


    makeVerticesReversed : function(polygon){ return polygon.reverse();},


    makePolygon3dFloat32 : function(polygon,scale)
    {
        scale = scale || 1.0;

        var polyLen = polygon.length * 0.5,
            out     = new Float32Array(polyLen * 3);
        var index0,index1;

        var i = -1;
        while(++i < polyLen)
        {
            index0 = i * 3;
            index1 = i * 2;

            out[index0  ] = polygon[index1  ] * scale;
            out[index0+1] = 0.0;
            out[index0+2] = polygon[index1+1] * scale;
        }

        return out;
    }

    /*---------------------------------------------------------------------------------------------------------*/

    /*
    //Sutherland-Hodgman
    makeClippingSH : function(polygon,clippingPolygon)
    {
        var len0 = polygon.length * 0.5,
            len1 = clippingPolygon.length ;


        var Line2dUtil = Foam.Line2dUtil;

        var out = [];

        var clipEdgeSx,clipEdgeSy,
            clipEdgeEx,clipEdgeEy;

        var polyEdgeSx, polyEdgeSy,
            polyEdgeEx, polyEdgeEy;

        var polyVertIsOnLeft;

        console.log(clippingPolygon);

        var i, j;

        var i2, j2, i4;

        i = 0;
        while(i < len1)
        {
            clipEdgeSx = clippingPolygon[i  ];
            clipEdgeSy = clippingPolygon[i+1];

            i2 = (i + 2) % len1;
            clipEdgeEx = clippingPolygon[i2];
            clipEdgeEy = clippingPolygon[i2+1];


            i+=2;
        }
       // while(++i <)



        return out;

    },

    makeClippingV : function(polygon,clippingPolygon)
    {

    },

    makeScanFill : function(polygon)
    {

    }

    */




};
},{"../math/fMath":32,"./fLine2dUtil":10}],15:[function(require,module,exports){
var fMath = require('../math/fMath'),
    Vec3  = require('../math/fVec3'),
    Mat44 = require('../math/fMat44');

//TODO: Add close, smooth in out intrpl, pre post points
function Spline()
{
    this.points     = null;
    this.vertices   = null;

    this._detail    = 20;
    this._tension   = 0;
    this._bias      = 0;
    this._numPoints = null;
    this._numVerts  = null;

    this._tempVec0  = Vec3.make();
    this._tempVec1  = Vec3.make();
    this._tempMat0  = Mat44.make();
    this._tempMat1  = Mat44.make();
    this._tempMat2  = Mat44.make();

    this._axisY     = Vec3.AXIS_Y();
};

Spline.prototype.setPoint3f = function(index,x,y,z)
{
    var points = this.points;

    index*=3;
    points[index  ] = x;
    points[index+1] = y;
    points[index+2] = z;
};

Spline.prototype.setPoints =  function(arr)
{
    var num         = this._numPoints = arr.length / 3,
        numVerts    = this._numVerts  = (num - 1) * (this._detail - 1) + 1;

    this.points     = new Float32Array(arr);
    this.vertices   = new Float32Array(numVerts * 3);
};

Spline.prototype.update = function()
{
    var detail    = this._detail,
        detail_1  = detail - 1,
        points    = this.points,
        numPoints = this._numPoints,
        vertices  = this.vertices;

    var tension       = this._tension,
        bias          = this._bias,
        hermiteIntrpl = fMath.hermiteIntrpl;

    var i, j, t;
    var len = numPoints - 1;

    var index,index_1,index1,index2,
        vertIndex;

    var x, y, z;

    i = -1;
    while(++i < len)
    {
        index    = i;

        index1   = Math.min((index + 1),len) * 3;
        index2   = Math.min((index + 2),len) * 3;
        index_1  = Math.max(0,(index - 1))   * 3;
        index   *= 3;

        j = -1;
        while(++j < detail_1)
        {
            t = j / detail_1;

            x = hermiteIntrpl(points[index_1],
                              points[index  ],
                              points[index1 ],
                              points[index2 ],
                              t,tension,bias);

            y = hermiteIntrpl(points[index_1 + 1],
                              points[index   + 1],
                              points[index1  + 1],
                              points[index2  + 1],
                              t,tension,bias);

            z = hermiteIntrpl(points[index_1 + 2],
                              points[index   + 2],
                              points[index1  + 2],
                              points[index2  + 2],
                              t,tension,bias);

            vertIndex = (i * detail_1 + j) * 3;

            vertices[vertIndex  ] = x;
            vertices[vertIndex+1] = y;
            vertices[vertIndex+2] = z;
        }
    }

    var vertLen   = vertices.length,
        pointsLen = points.length;

    vertices[vertLen-3] = points[pointsLen-3];
    vertices[vertLen-2] = points[pointsLen-2];
    vertices[vertLen-1] = points[pointsLen-1];

};

Spline.prototype.setDetail  = function(detail) {this._detail  = detail;};
Spline.prototype.setTension = function(tension){this._tension = tension;};
Spline.prototype.setBias    = function(bias)   {this._bias    = bias;};

Spline.prototype.getNumPoints   = function(){return this._numPoints;};
Spline.prototype.getNumVertices = function(){return this._numVerts;};

Spline.prototype.getVec3OnPoints = function(val,out)
{
    out = out || this._tempVec0;

    var points    = this.points,
        numPoints = this._numPoints,
        len       = numPoints - 1;

    var index  = Math.floor(numPoints * val),
        index1 = Math.min(index + 1, len);

        index *= 3;
        index1*= 3;

    var localIntrpl    = (val % (1 / numPoints)) * numPoints,
        localIntrplInv = 1.0 - localIntrpl;

    out[0] = points[index  ] * localIntrplInv + points[index1  ] * localIntrpl;
    out[1] = points[index+1] * localIntrplInv + points[index1+1] * localIntrpl;
    out[2] = points[index+2] * localIntrplInv + points[index1+2] * localIntrpl;

    return out;

};

Spline.prototype.getVec3OnSpline = function(val,out)
{
    out = out || this._tempVec0;

    var vertices = this.vertices,
        numVerts = this._numVerts,
        len      = numVerts - 1;

    var index  = Math.min(Math.floor(numVerts * val),len),
        index1 = Math.min(index + 1,len);

    var localIntrpl    = (val % (1.0 / numVerts)) * numVerts,
        localIntrplInv = 1.0 - localIntrpl;

    index  *= 3;
    index1 *= 3;

    out[0] = vertices[index  ] * localIntrplInv + vertices[index1  ] * localIntrpl;
    out[1] = vertices[index+1] * localIntrplInv + vertices[index1+1] * localIntrpl;
    out[2] = vertices[index+2] * localIntrplInv + vertices[index1+2] * localIntrpl;

    return out;
};



//hm
Spline.prototype.getPointsLineLengthSq = function()
{
    var points    = this.points;

    var dx = 0,
        dy = 0,
        dz = 0;

    var i = points.length;
    while(i > 6)
    {
        dx += points[i-3] - points[i-6];
        dy += points[i-2] - points[i-5];
        dz += points[i-1] - points[i-4];

        i-=3;
    }

    return dx*dx+dy*dy+dz*dz;

};

Spline.prototype.getSplineLineLengthSq = function()
{
    var vertices = this.vertices;

    var dx = 0,
        dy = 0,
        dz = 0;

    var i = vertices.length;
    while(i > 6)
    {
        dx += vertices[i-3] - vertices[i-6];
        dy += vertices[i-2] - vertices[i-5];
        dz += vertices[i-1] - vertices[i-4];

        i-=3;
    }

    return dx*dx+dy*dy+dz*dz;
};

Spline.prototype.getPointsLineLength = function(){return Math.sqrt(this.getPointsLineLengthSq());};
Spline.prototype.getSplinePointsLength = function(){return Math.sqrt(this.getSplineLineLengthSq())};

module.exports = Spline;



},{"../math/fMat44":31,"../math/fMath":32,"../math/fVec3":35}],16:[function(require,module,exports){
var Vec3  = require('../math/fVec3'),
    Mat44 = require('../math/fMat44'),
    MatGL = require('./gl/fMatGL');

function CameraBasic()
{
    this.position = Vec3.make();
    this._target  = Vec3.make();
    this._up      = Vec3.AXIS_Y();

    this._fov  = 0;
    this._near = 0;
    this._far  = 0;

    this._aspectRatioLast = 0;

    this._modelViewMatrixUpdated  = false;
    this._projectionMatrixUpdated = false;

    this.projectionMatrix = Mat44.make();
    this.modelViewMatrix  = Mat44.make();
}

CameraBasic.prototype.setPerspective = function(fov,windowAspectRatio,near,far)
{
    this._fov  = fov;
    this._near = near;
    this._far  = far;

    this._aspectRatioLast = windowAspectRatio;

    this.updateProjectionMatrix();
};



CameraBasic.prototype.setTarget         = function(v)    {Vec3.set(this._target,v);this._modelViewMatrixUpdated = false;};
CameraBasic.prototype.setTarget3f       = function(x,y,z){Vec3.set3f(this._target,x,y,z);this._modelViewMatrixUpdated = false;};
CameraBasic.prototype.setPosition       = function(v)    {Vec3.set(this.position,v);this._modelViewMatrixUpdated = false;};
CameraBasic.prototype.setPosition3f     = function(x,y,z){Vec3.set3f(this.position,x,y,z);this._modelViewMatrixUpdated = false;};
CameraBasic.prototype.setUp             = function(v)    {Vec3.set(this._up,v);this._modelViewMatrixUpdated = false;};
CameraBasic.prototype.setUp3f           = function(x,y,z){ Vec3.set3f(this._up,x,y,z);this._modelViewMatrixUpdated = false;};

CameraBasic.prototype.setNear           = function(near)       {this._near = near;this._projectionMatrixUpdated = false;};
CameraBasic.prototype.setFar            = function(far)        {this._far  = far;this._projectionMatrixUpdated = false;};
CameraBasic.prototype.setFov            = function(fov)        {this._fov  = fov;this._projectionMatrixUpdated = false;};
CameraBasic.prototype.setAspectRatio    = function(aspectRatio){this._aspectRatioLast = aspectRatio;this._projectionMatrixUpdated = false;};

CameraBasic.prototype.updateModelViewMatrix   = function(){if(this._modelViewMatrixUpdated)return;MatGL.lookAt(this.modelViewMatrix,this.position,this._target,this._up); this._modelViewMatrixUpdated = true;};
CameraBasic.prototype.updateProjectionMatrix = function(){if(this._projectionMatrixUpdated)return;MatGL.perspective(this.projectionMatrix,this._fov,this._aspectRatioLast,this._near,this._far);this._projectionMatrixUpdated = true;};

CameraBasic.prototype.updateMatrices = function(){this.updateModelViewMatrix();this.updateProjectionMatrix();};

CameraBasic.prototype.toString = function(){return '{position= ' + Vec3.toString(this.position) +
                                                     ', target= ' + Vec3.toString(this._target) +
                                                     ', up= '     + Vec3.toString(this._up) + '}'};

module.exports = CameraBasic;



},{"../math/fMat44":31,"../math/fVec3":35,"./gl/fMatGL":20}],17:[function(require,module,exports){
var fError           = require('../system/fError'),
    ProgVertexShader = require('./gl/shader/fProgVertexShader'),
    ProgFragShader   = require('./gl/shader/fProgFragShader'),
    ProgLoader       = require('./gl/shader/fProgLoader'),
    ShaderLoader     = require('./gl/shader/fShaderLoader'),
    Platform         = require('../system/fPlatform'),
    Vec2             = require('../math/fVec2'),
    Vec3             = require('../math/fVec3'),
    Vec4             = require('../math/fVec4'),
    Mat33            = require('../math/fMat33'),
    Mat44            = require('../math/fMat44'),
    Color            = require('../util/fColor'),
    Texture          = require('./gl/fTexture');


function FGL(context3d,context2d)
{
    /*---------------------------------------------------------------------------------------------------------*/
    // Init
    /*---------------------------------------------------------------------------------------------------------*/

    var gl = this.gl = context3d;

    /*---------------------------------------------------------------------------------------------------------*/
    // create shaders/program + bind
    /*---------------------------------------------------------------------------------------------------------*/

    /*
    var progVertexShader = ShaderLoader.loadShaderFromString(gl, ProgVertexShader, gl.VERTEX_SHADER),
        progFragShader   = ShaderLoader.loadShaderFromString(gl, ((Platform.getTarget() == Platform.WEB) ?
                                                                  ShaderLoader.PrefixShaderWeb : '') +
                                                                  ProgFragShader, gl.FRAGMENT_SHADER);



    var programScene =  ProgLoader.loadProgram(gl,progVertexShader,progFragShader);
    */



    var platform = Platform.getTarget();

    var programScene = this._programScene = gl.createProgram();

    var progVertShader = gl.createShader(gl.VERTEX_SHADER),
        progFragShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(progVertShader, ProgVertexShader);
    gl.compileShader(progVertShader);

    if(!gl.getShaderParameter(progVertShader,gl.COMPILE_STATUS))
        throw gl.getShaderInfoLog(progVertShader);

    gl.shaderSource(progFragShader, ((platform == Platform.WEB) ? ShaderLoader.PrefixShaderWeb : '') + ProgFragShader);
    gl.compileShader(progFragShader);

    if(!gl.getShaderParameter(progFragShader,gl.COMPILE_STATUS))
        throw gl.getShaderInfoLog(progFragShader);

    gl.bindAttribLocation(programScene,0,'aVertexPosition');

    gl.attachShader(programScene, progVertShader);
    gl.attachShader(programScene, progFragShader);
    gl.linkProgram( programScene);

    if(!gl.getProgramParameter(programScene,gl.LINK_STATUS))
        throw gl.getProgramInfoLog(programScene);

    gl.useProgram(programScene);



    /*---------------------------------------------------------------------------------------------------------*/
    // Bind & enable shader attributes & uniforms
    /*---------------------------------------------------------------------------------------------------------*/


    this._aVertexPosition   = gl.getAttribLocation(programScene,'aVertexPosition');
    this._aVertexNormal     = gl.getAttribLocation(programScene,'aVertexNormal');
    this._aVertexColor      = gl.getAttribLocation(programScene,'aVertexColor');
    this._aVertexTexCoord   = gl.getAttribLocation(programScene,'aVertexTexCoord');

    this._uModelViewMatrix  = gl.getUniformLocation(programScene,'uModelViewMatrix');
    this._uProjectionMatrix = gl.getUniformLocation(programScene,'uProjectionMatrix');
    this._uNormalMatrix     = gl.getUniformLocation(programScene,'uNormalMatrix');
    this._uTexImage         = gl.getUniformLocation(programScene,'uTexImage');

    this._uPointSize        = gl.getUniformLocation(programScene,'uPointSize');

    this._uUseLighting      = gl.getUniformLocation(programScene,'uUseLighting');
    this._uUseMaterial      = gl.getUniformLocation(programScene,'uUseMaterial');
    this._uUseTexture       = gl.getUniformLocation(programScene,'uUseTexture');

    this._uAmbient          = gl.getUniformLocation(programScene,'uAmbient');


    gl.enableVertexAttribArray(this._aVertexPosition);
    gl.enableVertexAttribArray(this._aVertexNormal);
    gl.enableVertexAttribArray(this._aVertexColor);
    gl.enableVertexAttribArray(this._aVertexTexCoord);

    /*---------------------------------------------------------------------------------------------------------*/
    // Set Shader initial values
    /*---------------------------------------------------------------------------------------------------------*/


    this.LIGHT_0    = 0;
    this.LIGHT_1    = 1;
    this.LIGHT_2    = 2;
    this.LIGHT_3    = 3;
    this.LIGHT_4    = 4;
    this.LIGHT_5    = 5;
    this.LIGHT_6    = 6;
    this.LIGHT_7    = 7;
    this.MAX_LIGHTS = 8;

    this.MODEL_PHONG       = 0;
    this.MODEL_ANTISOPTRIC = 1;
    this.MODEL_FRESNEL     = 2;
    this.MODEL_BLINN       = 3;
    this.MODEL_FLAT        = 4;




    var l = this.MAX_LIGHTS;



    var uLightPosition             = this._uLightPosition             = new Array(l),
        uLightAmbient              = this._uLightAmbient              = new Array(l),
        uLightDiffuse              = this._uLightDiffuse              = new Array(l),
        uLightSpecular             = this._uLightSpecular             = new Array(l),
        uLightAttenuationConstant  = this._uLightAttenuationConstant  = new Array(l),
        uLightAttenuationLinear    = this._uLightAttenuationLinear    = new Array(l),
        uLightAttenuationQuadratic = this._uLightAttenuationQuadratic = new Array(l);

    var light;

    var i = -1;
    while(++i < l)
    {
        light = 'uLights['+i+'].';


        uLightPosition[i]             = gl.getUniformLocation(programScene,light + 'position');
        uLightAmbient[i]              = gl.getUniformLocation(programScene,light + 'ambient');
        uLightDiffuse[i]              = gl.getUniformLocation(programScene,light + 'diffuse');
        uLightSpecular[i]             = gl.getUniformLocation(programScene,light + 'specular');

        uLightAttenuationConstant[i]  = gl.getUniformLocation(programScene,light + 'constantAttenuation');
        uLightAttenuationLinear[i]    = gl.getUniformLocation(programScene,light + 'linearAttenuation');
        uLightAttenuationQuadratic[i] = gl.getUniformLocation(programScene,light + 'quadraticAttenuation');

        gl.uniform4fv(uLightPosition[i], new Float32Array([0,0,0,0]));
        gl.uniform3fv(uLightAmbient[i],  new Float32Array([0,0,0]));
        gl.uniform3fv(uLightDiffuse[i],  new Float32Array([0,0,0]));

        gl.uniform1f(uLightAttenuationConstant[i], 1.0);
        gl.uniform1f(uLightAttenuationLinear[i],   0.0);
        gl.uniform1f(uLightAttenuationQuadratic[i],0.0);
    }

    this._uMaterialEmission  = gl.getUniformLocation(programScene,'uMaterial.emission');
    this._uMaterialAmbient   = gl.getUniformLocation(programScene,'uMaterial.ambient');
    this._uMaterialDiffuse   = gl.getUniformLocation(programScene,'uMaterial.diffuse');
    this._uMaterialSpecular  = gl.getUniformLocation(programScene,'uMaterial.specular');
    this._uMaterialShininess = gl.getUniformLocation(programScene,'uMaterial.shininess');

    gl.uniform4f(this._uMaterialEmission, 0.0,0.0,0.0,1.0);
    gl.uniform4f(this._uMaterialAmbient,  1.0,0.5,0.5,1.0);
    gl.uniform4f(this._uMaterialDiffuse,  0.0,0.0,0.0,1.0);
    gl.uniform4f(this._uMaterialSpecular, 0.0,0.0,0.0,1.0);
    gl.uniform1f(this._uMaterialShininess,10.0);


    this._tempLightPos = Vec4.make();

    gl.uniform1f(this._uUseMaterial, 0.0);
    gl.uniform1f(this._uUseLighting, 0.0);
    gl.uniform1f(this._uUseMaterial, 0.0);
    gl.uniform1f(this._uPointSize,   1.0);


    /*---------------------------------------------------------------------------------------------------------*/
    // Bind constants
    /*---------------------------------------------------------------------------------------------------------*/

    this.ACTIVE_ATTRIBUTES= 35721; this.ACTIVE_TEXTURE= 34016; this.ACTIVE_UNIFORMS= 35718; this.ALIASED_LINE_WIDTH_RANGE= 33902; this.ALIASED_POINT_SIZE_RANGE= 33901; this.ALPHA= 6406; this.ALPHA_BITS= 3413; this.ALWAYS= 519 ; this.ARRAY_BUFFER= 34962 ; this.ARRAY_BUFFER_BINDING= 34964 ; this.ATTACHED_SHADERS= 35717 ; this.BACK= 1029 ; this.BLEND= 3042 ; this.BLEND_COLOR= 32773 ; this.BLEND_DST_ALPHA= 32970 ; this.BLEND_DST_RGB= 32968 ; this.BLEND_EQUATION= 32777 ; this.BLEND_EQUATION_ALPHA= 34877 ; this.BLEND_EQUATION_RGB= 32777 ; this.BLEND_SRC_ALPHA= 32971 ; this.BLEND_SRC_RGB= 32969 ; this.BLUE_BITS= 3412 ; this.BOOL= 35670 ; this.BOOL_VEC2= 35671 ; this.BOOL_VEC3= 35672 ; this.BOOL_VEC4= 35673 ; this.BROWSER_DEFAULT_WEBGL= 37444 ; this.BUFFER_SIZE= 34660 ; this.BUFFER_USAGE= 34661 ; this.BYTE= 5120 ; this.CCW= 2305 ; this.CLAMP_TO_EDGE= 33071 ; this.COLOR_ATTACHMENT0= 36064 ; this.COLOR_BUFFER_BIT= 16384 ; this.COLOR_CLEAR_VALUE= 3106 ; this.COLOR_WRITEMASK= 3107 ; this.COMPILE_STATUS= 35713 ; this.COMPRESSED_TEXTURE_FORMATS= 34467 ; this.CONSTANT_ALPHA= 32771 ; this.CONSTANT_COLOR= 32769 ; this.CONTEXT_LOST_WEBGL= 37442 ; this.CULL_FACE= 2884 ; this.CULL_FACE_MODE= 2885 ; this.CURRENT_PROGRAM= 35725 ; this.CURRENT_VERTEX_ATTRIB= 34342 ; this.CW= 2304 ; this.DECR= 7683 ; this.DECR_WRAP= 34056 ; this.DELETE_STATUS= 35712 ; this.DEPTH_ATTACHMENT= 36096 ; this.DEPTH_BITS= 3414 ; this.DEPTH_BUFFER_BIT= 256 ; this.DEPTH_CLEAR_VALUE= 2931 ; this.DEPTH_COMPONENT= 6402 ; this.DEPTH_COMPONENT16= 33189 ; this.DEPTH_FUNC= 2932 ; this.DEPTH_RANGE= 2928 ; this.DEPTH_STENCIL= 34041 ; this.DEPTH_STENCIL_ATTACHMENT= 33306 ; this.DEPTH_TEST= 2929 ; this.DEPTH_WRITEMASK= 2930 ; this.DITHER= 3024 ; this.DONT_CARE= 4352 ; this.DST_ALPHA= 772 ; this.DST_COLOR= 774 ; this.DYNAMIC_DRAW= 35048 ; this.ELEMENT_ARRAY_BUFFER= 34963 ; this.ELEMENT_ARRAY_BUFFER_BINDING= 34965 ; this.EQUAL= 514 ; this.FASTEST= 4353 ; this.FLOAT= 5126 ; this.FLOAT_MAT2= 35674 ; this.FLOAT_MAT3= 35675 ; this.FLOAT_MAT4= 35676 ; this.FLOAT_VEC2= 35664 ; this.FLOAT_VEC3= 35665 ; this.FLOAT_VEC4= 35666 ; this.FRAGMENT_SHADER= 35632 ; this.FRAMEBUFFER= 36160 ; this.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME= 36049 ; this.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE= 36048 ; this.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE= 36051 ; this.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL= 36050 ; this.FRAMEBUFFER_BINDING= 36006 ; this.FRAMEBUFFER_COMPLETE= 36053 ; this.FRAMEBUFFER_INCOMPLETE_ATTACHMENT= 36054 ; this.FRAMEBUFFER_INCOMPLETE_DIMENSIONS= 36057 ; this.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT= 36055 ; this.FRAMEBUFFER_UNSUPPORTED= 36061 ; this.FRONT= 1028 ; this.FRONT_AND_BACK= 1032 ; this.FRONT_FACE= 2886 ; this.FUNC_ADD= 32774 ; this.FUNC_REVERSE_SUBTRACT= 32779 ; this.FUNC_SUBTRACT= 32778 ; this.GENERATE_MIPMAP_HINT= 33170 ; this.GEQUAL= 518 ; this.GREATER= 516 ; this.GREEN_BITS= 3411 ; this.HIGH_FLOAT= 36338 ; this.HIGH_INT= 36341 ; this.INCR= 7682 ; this.INCR_WRAP= 34055 ; this.INT= 5124 ; this.INT_VEC2= 35667 ; this.INT_VEC3= 35668 ; this.INT_VEC4= 35669 ; this.INVALID_ENUM= 1280 ; this.INVALID_FRAMEBUFFER_OPERATION= 1286 ; this.INVALID_OPERATION= 1282 ; this.INVALID_VALUE= 1281 ; this.INVERT= 5386 ; this.KEEP= 7680 ; this.LEQUAL= 515 ; this.LESS= 513 ; this.LINEAR= 9729 ; this.LINEAR_MIPMAP_LINEAR= 9987 ; this.LINEAR_MIPMAP_NEAREST= 9985 ; this.LINES= 1 ; this.LINE_LOOP= 2 ; this.LINE_STRIP= 3 ; this.LINE_WIDTH= 2849; this.LINK_STATUS= 35714; this.LOW_FLOAT= 36336 ; this.LOW_INT= 36339 ; this.LUMINANCE= 6409 ; this.LUMINANCE_ALPHA= 6410; this.MAX_COMBINED_TEXTURE_IMAGE_UNITS= 35661 ; this.MAX_CUBE_MAP_TEXTURE_SIZE= 34076 ; this.MAX_FRAGMENT_UNIFORM_VECTORS= 36349 ; this.MAX_RENDERBUFFER_SIZE= 34024 ; this.MAX_TEXTURE_IMAGE_UNITS= 34930 ; this.MAX_TEXTURE_SIZE= 3379 ; this. MAX_VARYING_VECTORS= 36348 ; this.MAX_VERTEX_ATTRIBS= 34921 ; this.MAX_VERTEX_TEXTURE_IMAGE_UNITS= 35660 ; this.MAX_VERTEX_UNIFORM_VECTORS= 36347 ; this.MAX_VIEWPORT_DIMS= 3386 ; this.MEDIUM_FLOAT= 36337 ; this.MEDIUM_INT= 36340 ; this.MIRRORED_REPEAT= 33648 ; this.NEAREST= 9728 ; this.NEAREST_MIPMAP_LINEAR= 9986 ; this.NEAREST_MIPMAP_NEAREST= 9984 ; this.NEVER= 512 ; this.NICEST= 4354 ; this.NONE= 0 ; this.NOTEQUAL= 517 ; this.NO_ERROR= 0 ; this.ONE= 1 ; this.ONE_MINUS_CONSTANT_ALPHA= 32772 ; this.ONE_MINUS_CONSTANT_COLOR= 32770 ; this.ONE_MINUS_DST_ALPHA= 773 ; this.ONE_MINUS_DST_COLOR= 775 ; this.ONE_MINUS_SRC_ALPHA= 771 ; this.ONE_MINUS_SRC_COLOR= 769 ; this.OUT_OF_MEMORY= 1285 ; this.PACK_ALIGNMENT= 3333 ; this.POINTS= 0 ; this.POLYGON_OFFSET_FACTOR= 32824 ; this.POLYGON_OFFSET_FILL= 32823 ; this.POLYGON_OFFSET_UNITS= 10752 ; this.RED_BITS= 3410 ; this.RENDERBUFFER= 36161 ; this.RENDERBUFFER_ALPHA_SIZE= 36179 ; this.RENDERBUFFER_BINDING= 36007 ; this.RENDERBUFFER_BLUE_SIZE= 36178 ; this.RENDERBUFFER_DEPTH_SIZE= 36180 ; this.RENDERBUFFER_GREEN_SIZE= 36177 ; this.RENDERBUFFER_HEIGHT= 36163 ; this.RENDERBUFFER_INTERNAL_FORMAT= 36164 ; this.RENDERBUFFER_RED_SIZE= 36176 ; this.RENDERBUFFER_STENCIL_SIZE= 36181 ; this.RENDERBUFFER_WIDTH= 36162 ; this.RENDERER= 7937 ; this.REPEAT= 10497 ; this.REPLACE= 7681 ; this.RGB= 6407 ; this.RGB5_A1= 32855 ; this.RGB565= 36194 ; this.RGBA= 6408 ; this.RGBA4= 32854 ; this.SAMPLER_2D= 35678 ; this.SAMPLER_CUBE= 35680 ; this.SAMPLES= 32937 ; this.SAMPLE_ALPHA_TO_COVERAGE= 32926 ; this.SAMPLE_BUFFERS= 32936 ; this.SAMPLE_COVERAGE= 32928 ; this.SAMPLE_COVERAGE_INVERT= 32939 ; this.SAMPLE_COVERAGE_VALUE= 32938 ; this.SCISSOR_BOX= 3088 ; this.SCISSOR_TEST= 3089 ; this.SHADER_TYPE= 35663 ; this.SHADING_LANGUAGE_VERSION= 35724 ; this.SHORT= 5122 ; this.SRC_ALPHA= 770 ; this.SRC_ALPHA_SATURATE= 776 ; this.SRC_COLOR= 768 ; this.STATIC_DRAW= 35044 ; this.STENCIL_ATTACHMENT= 36128 ; this.STENCIL_BACK_FAIL= 34817 ; this.STENCIL_BACK_FUNC= 34816 ; this.STENCIL_BACK_PASS_DEPTH_FAIL= 34818 ; this.STENCIL_BACK_PASS_DEPTH_PASS= 34819 ; this.STENCIL_BACK_REF= 36003 ; this.STENCIL_BACK_VALUE_MASK= 36004 ; this.STENCIL_BACK_WRITEMASK= 36005 ; this.STENCIL_BITS= 3415 ; this.STENCIL_BUFFER_BIT= 1024 ; this.STENCIL_CLEAR_VALUE= 2961 ; this.STENCIL_FAIL= 2964 ; this.STENCIL_FUNC= 2962 ; this.STENCIL_INDEX= 6401 ; this.STENCIL_INDEX8= 36168 ; this.STENCIL_PASS_DEPTH_FAIL= 2965 ; this.STENCIL_PASS_DEPTH_PASS= 2966 ; this.STENCIL_REF= 2967 ; this.STENCIL_TEST= 2960 ; this.STENCIL_VALUE_MASK= 2963 ; this.STENCIL_WRITEMASK= 2968 ; this.STREAM_DRAW= 35040 ; this.SUBPIXEL_BITS= 3408 ; this.TEXTURE= 5890 ; this.TEXTURE0= 33984 ; this.TEXTURE1= 33985 ; this.TEXTURE2= 33986 ; this.TEXTURE3= 33987 ; this.TEXTURE4= 33988 ; this.TEXTURE5= 33989 ; this.TEXTURE6= 33990 ; this.TEXTURE7= 33991 ; this.TEXTURE8= 33992 ; this.TEXTURE9= 33993 ; this.TEXTURE10= 33994 ; this.TEXTURE11= 33995 ; this.TEXTURE12= 33996 ; this.TEXTURE13= 33997 ; this.TEXTURE14= 33998 ; this.TEXTURE15= 33999 ; this.TEXTURE16= 34000 ; this.TEXTURE17= 34001 ; this.TEXTURE18= 34002 ; this.TEXTURE19= 34003 ; this.TEXTURE20= 34004 ; this.TEXTURE21= 34005 ; this.TEXTURE22= 34006 ; this.TEXTURE23= 34007 ; this.TEXTURE24= 34008 ; this.TEXTURE25= 34009 ; this.TEXTURE26= 34010 ; this.TEXTURE27= 34011 ; this.TEXTURE28= 34012 ; this.TEXTURE29= 34013 ; this.TEXTURE30= 34014 ; this.TEXTURE31= 34015 ; this.TEXTURE_2D= 3553 ; this.TEXTURE_BINDING_2D= 32873 ; this.TEXTURE_BINDING_CUBE_MAP= 34068 ; this.TEXTURE_CUBE_MAP= 34067 ; this.TEXTURE_CUBE_MAP_NEGATIVE_X= 34070 ; this.TEXTURE_CUBE_MAP_NEGATIVE_Y= 34072 ; this.TEXTURE_CUBE_MAP_NEGATIVE_Z= 34074 ; this.TEXTURE_CUBE_MAP_POSITIVE_X= 34069 ; this.TEXTURE_CUBE_MAP_POSITIVE_Y= 34071 ; this.TEXTURE_CUBE_MAP_POSITIVE_Z= 34073 ; this.TEXTURE_MAG_FILTER= 10240 ; this.TEXTURE_MIN_FILTER= 10241 ; this.TEXTURE_WRAP_S= 10242 ; this.TEXTURE_WRAP_T= 10243 ; this.TRIANGLES= 4 ; this.TRIANGLE_FAN= 6 ; this.TRIANGLE_STRIP= 5 ; this.UNPACK_ALIGNMENT= 3317 ; this.UNPACK_COLORSPACE_CONVERSION_WEBGL= 37443 ; this.UNPACK_FLIP_Y_WEBGL= 37440 ; this.UNPACK_PREMULTIPLY_ALPHA_WEBGL= 37441 ; this.UNSIGNED_BYTE= 5121 ; this.UNSIGNED_INT= 5125 ; this.UNSIGNED_SHORT= 5123 ; this.UNSIGNED_SHORT_4_4_4_4= 32819 ; this.UNSIGNED_SHORT_5_5_5_1= 32820 ; this.UNSIGNED_SHORT_5_6_5= 33635 ; this.VALIDATE_STATUS= 35715 ; this.VENDOR= 7936 ; this.VERSION= 7938 ; this.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING= 34975 ; this.VERTEX_ATTRIB_ARRAY_ENABLED= 34338 ; this.VERTEX_ATTRIB_ARRAY_NORMALIZED= 34922 ; this.VERTEX_ATTRIB_ARRAY_POINTER= 34373 ; this.VERTEX_ATTRIB_ARRAY_SIZE= 34339 ; this.VERTEX_ATTRIB_ARRAY_STRIDE= 34340 ; this.VERTEX_ATTRIB_ARRAY_TYPE= 34341 ; this.VERTEX_SHADER= 35633 ; this.VIEWPORT= 2978 ; this.ZERO = 0 ;


    var SIZE_OF_VERTEX    = Vec3.SIZE,
        SIZE_OF_COLOR     = Color.SIZE,
        SIZE_OF_TEX_COORD = Vec2.SIZE;

    this.SIZE_OF_VERTEX    = SIZE_OF_VERTEX;
    this.SIZE_OF_NORMAL    = SIZE_OF_VERTEX;
    this.SIZE_OF_COLOR     = SIZE_OF_COLOR;
    this.SIZE_OF_TEX_COORD =  SIZE_OF_TEX_COORD;

    var SIZE_OF_FACE    = this.SIZE_OF_FACE   = SIZE_OF_VERTEX;

    var SIZE_OF_QUAD     = this.SIZE_OF_QUAD     = SIZE_OF_VERTEX * 4,
        SIZE_OF_TRIANGLE = this.SIZE_OF_TRIANGLE = SIZE_OF_VERTEX * 3,
        SIZE_OF_LINE     = this.SIZE_OF_LINE     = SIZE_OF_VERTEX * 2,
        SIZE_OF_POINT    = this.SIZE_OF_POINT    = SIZE_OF_VERTEX;

    var ELLIPSE_DETAIL_MAX = this.ELLIPSE_DETAIL_MAX = 30;
    this.ELLIPSE_DETAIL_MIN = 3;

    /*---------------------------------------------------------------------------------------------------------*/
    // Init shared buffers
    /*---------------------------------------------------------------------------------------------------------*/

    this.REPEAT        = gl.REPEAT;
    this.CLAMP         = gl.CLAMP;
    this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE;

    this._texMode  = this.REPEAT;
    this._texSet   = false;

    this._texEmpty = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D,this._texEmpty);
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([1,1,1,1]));
    gl.uniform1f(this._uUseTexture,0.0);

    this._tex      = null;

    this._defaultVBO = gl.createBuffer();
    this._defaultIBO = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER,         this._defaultVBO);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._defaultIBO);

    /*---------------------------------------------------------------------------------------------------------*/
    // Init flags and caches
    /*---------------------------------------------------------------------------------------------------------*/

    this._bUseLighting         = false;
    this._bUseMaterial         = false;
    this._bUseTexture          = false;

    this._bUseBillboarding     = false;

    this._bUseDrawArrayBatch        = false;
    this._bUseDrawElementArrayBatch = false;
    this._drawFuncLast = null;

    this._bBatchVertices  = [];
    this._bBatchNormals   = [];
    this._bBatchColors    = [];
    this._bBatchTexCoords = [];
    this._bBatchIndices   = [];

    this._batchVerticesF32Last  = null;
    this._batchNormalsF32Last   = null;
    this._batchColorsF32Last    = null;
    this._batchTexCoordsF32Last = null;
    this._batchIndicesU16Last   = null;

    this._bBatchVerticesNum = 0;

    this._bBVecRight = Vec3.make();
    this._bBVecUp    = Vec3.make();
    this._bBVertices = new Float32Array(4 * 3);

    this._bBVec0 = Vec3.make();
    this._bBVec1 = Vec3.make();
    this._bBVec2 = Vec3.make();
    this._bBVec3 = Vec3.make();

    this._rectWidthLast    = 0;
    this._rectHeightLast   = 0;


    /*---------------------------------------------------------------------------------------------------------*/
    // Init Matrices
    /*---------------------------------------------------------------------------------------------------------*/

    this._camera    = null;

    this._mModeView = Mat44.make();
    this._mNormal   = Mat33.make();

    this._mTemp0 = Mat44.make();
    this._mTemp1 = Mat44.make();
    this._mTemp2 = Mat44.make();

    this._mStack = [];

    this._drawMode = this.LINES;

    /*---------------------------------------------------------------------------------------------------------*/
    // Init Buffers
    /*---------------------------------------------------------------------------------------------------------*/

    this._bEmpty3f = new Float32Array([0,0,0]);

    this._bColor4f   = Color.WHITE();
    this._bColorBg4f = Color.BLACK();

    this._bVertex   = null;
    this._bNormal   = null;
    this._bColor    = null;
    this._bTexCoord = null;
    this._bIndex    = null;

    this._bVertexPoint = new Float32Array(SIZE_OF_POINT);
    this._bColorPoint  = new Float32Array(SIZE_OF_COLOR);

    this._bVertexLine  = new Float32Array(SIZE_OF_LINE);
    this._bColorLine   = new Float32Array(2 * SIZE_OF_COLOR);

    this._bVertexTriangle          = new Float32Array(SIZE_OF_TRIANGLE);
    this._bNormalTriangle          = new Float32Array(SIZE_OF_TRIANGLE);
    this._bColorTriangle           = new Float32Array(3 * SIZE_OF_COLOR);
    this._bIndexTriangle           = new Uint16Array([0,1,2]);
    this._bTexCoordTriangleDefault = new Float32Array([0.0,0.0,1.0,0.0,1.0,1.0]);
    this._bTexCoordTriangle        = new Float32Array(this._bTexCoordTriangleDefault.length);

    this._bVertexQuad          = new Float32Array(SIZE_OF_QUAD);
    this._bNormalQuad          = new Float32Array(SIZE_OF_QUAD);
    this._bColorQuad           = new Float32Array(4 * SIZE_OF_COLOR);
    this._bIndexQuad           = new Uint16Array([0,1,2,1,2,3]);
    this._bTexCoordQuadDefault = new Float32Array([0.0,0.0,1.0,0.0,1.0,1.0,0.0,1.0]);
    this._bTexCoordQuad        = new Float32Array(this._bTexCoordQuadDefault.length);

    this._bVertexRect = new Float32Array(SIZE_OF_QUAD);
    this._bNormalRect = new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0]);
    this._bColorRect  = new Float32Array(4 * SIZE_OF_COLOR);

    this._bVertexEllipse   = new Float32Array(SIZE_OF_VERTEX * ELLIPSE_DETAIL_MAX);
    this._bNormalEllipse   = new Float32Array(this._bVertexEllipse.length);
    this._bColorEllipse    = new Float32Array(SIZE_OF_COLOR  * ELLIPSE_DETAIL_MAX);
    this._bTexCoordEllipse = new Float32Array(SIZE_OF_TEX_COORD * ELLIPSE_DETAIL_MAX);

    this._bVertexCircle   = new Float32Array(SIZE_OF_VERTEX * ELLIPSE_DETAIL_MAX);
    this._bNormalCircle   = new Float32Array(this._bVertexCircle.length);
    this._bColorCircle    = new Float32Array(SIZE_OF_COLOR * ELLIPSE_DETAIL_MAX);
    this._bTexCoordCircle = new Float32Array(SIZE_OF_TEX_COORD * ELLIPSE_DETAIL_MAX);

    this._bVertexCube       = new Float32Array([-0.5,-0.5, 0.5,
                                                0.5,-0.5, 0.5,
                                                0.5, 0.5, 0.5,
                                                -0.5, 0.5, 0.5,
                                                -0.5,-0.5,-0.5,
                                                -0.5, 0.5,-0.5,
                                                  0.5, 0.5,-0.5, 0.5,-0.5,-0.5,-0.5, 0.5,-0.5,-0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,-0.5,-0.5,-0.5,-0.5, 0.5,-0.5,-0.5, 0.5,-0.5, 0.5,-0.5,-0.5, 0.5,0.5,-0.5,-0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5, 0.5,-0.5, 0.5,-0.5,-0.5,-0.5,-0.5,-0.5, 0.5,-0.5, 0.5, 0.5,-0.5, 0.5,-0.5]);
    this._bVertexCubeScaled = new Float32Array(new Array(this._bVertexCube.length));
    this._bColorCube    = new Float32Array(this._bVertexCube.length / SIZE_OF_VERTEX * SIZE_OF_COLOR);
    this._bNormalCube   = new Float32Array([0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0] );
    this._bIndexCube    = new Uint16Array([  0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9,10, 8,10,11, 12,13,14,12,14,15, 16,17,18,16,18,19, 20,21,22,20,22,23]);
    this._bTexCoordCube = new Float32Array(this._bVertexCube.length/3*2);//TODO: add

    this._circleDetailLast = 10.0;
    this._sphereDetailLast = 10.0;
    this._sphereScaleLast  = -1;
    this._cubeScaleLast    = -1;

    this._bVertexSphere       = null;
    this._bVertexSphereScaled = null;
    this._bNormalSphere       = null;
    this._bColorSphere        = null;
    this._bIndexSphere        = null;
    this._bTexCoordsSphere    = null;

    this._bScreenCoords = [0,0];
    this._bPoint0       = [0,0,0];
    this._bPoint1       = [0,0,0];

    this._axisX = Vec3.AXIS_X();
    this._axisY = Vec3.AXIS_Y();
    this._axisZ = Vec3.AXIS_Z();

    this._lineBoxWidth  = 1;
    this._lineBoxHeight = 1;
    this._lineCylinderRadius = 0.5;

    this._genSphere();
    this._genCircle();

    /*---------------------------------------------------------------------------------------------------------*/
    // Init presets
    /*---------------------------------------------------------------------------------------------------------*/

    gl.enable(gl.BLEND);
    gl.enable(gl.DEPTH_TEST);

    this.ambient(Color.BLACK());

}

/*---------------------------------------------------------------------------------------------------------*/
// Light
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.useLighting  = function(bool){this.gl.uniform1f(this._uUseLighting,bool ? 1.0 : 0.0);this._bUseLighting = bool;};
FGL.prototype.getLighting  = function()    {return this._bUseLighting;};

FGL.prototype.light = function(light)
{
    var id = light.getId(),
        gl = this.gl;

    var tempVec4    = this._tempLightPos;
        tempVec4[0] = light.position[0];
        tempVec4[1] = light.position[1];
        tempVec4[2] = light.position[2];
        tempVec4[3] = light.position[3];

    var lightPosEyeSpace = Mat44.multVec4(this._camera.modelViewMatrix,tempVec4);

    gl.uniform4fv(this._uLightPosition[id], lightPosEyeSpace);
    gl.uniform3fv(this._uLightAmbient[id],  light.ambient);
    gl.uniform3fv(this._uLightDiffuse[id],  light.diffuse);
    gl.uniform3fv(this._uLightSpecular[id], light.specular);

    gl.uniform1f(this._uLightAttenuationConstant[id],   light.constantAttentuation);
    gl.uniform1f(this._uLightAttenuationLinear[id],     light.linearAttentuation);
    gl.uniform1f(this._uLightAttenuationQuadratic[id],  light.quadricAttentuation);
};

//FIX ME
FGL.prototype.disableLight = function(light)
{
    var id = light.getId(),
        gl = this.gl;

    var bEmpty = this._bEmpty3f;

    gl.uniform3fv(this._uLightAmbient[id],  bEmpty);
    gl.uniform3fv(this._uLightDiffuse[id],  bEmpty);
    gl.uniform3fv(this._uLightSpecular[id], bEmpty);

    gl.uniform1f(this._uLightAttenuationConstant[id], 1.0);
    gl.uniform1f(this._uLightAttenuationLinear[id],   0.0);
    gl.uniform1f(this._uLightAttenuationQuadratic[id],0.0);
};

/*---------------------------------------------------------------------------------------------------------*/
// Texture
/*---------------------------------------------------------------------------------------------------------*/

//TODO: do it the plask way

FGL.prototype.useTexture  = function(bool){this.gl.uniform1f(this._uUseTexture, bool ? 1.0 : 0.0);this._bUseTexture = bool;};

FGL.prototype.loadTextureWithImage = function(img)
{
    var gl = this.gl,
        glTex = gl.createTexture();
    glTex.image = img;

    var tex = new Texture(glTex);
    this._bindTexImage(tex._tex);

    return tex;

};

FGL.prototype.loadTexture = function(src,texture,callback)
{
    var gl  = this.gl,
        glTex = gl.createTexture();
    glTex.image = new Image();

    glTex.image.addEventListener('load',function()
    {
        texture.setTexSource(this._bindTexImage(glTex));
        callback();
    });

    glTex.image.src = src;
};

FGL.prototype._bindTexImage = function(glTex)
{
    if(!glTex.image)throw ('Texture image is null.');

    var width  = glTex.image.width,
        height = glTex.image.height;

    if((width&(width-1)!=0))       {throw 'Texture image width is not power of 2.'; }
    else if((height&(height-1))!=0){throw 'Texture image height is not power of 2.';}

    var gl = this.gl;

    gl.bindTexture(gl.TEXTURE_2D,glTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, glTex.image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.bindTexture(gl.TEXTURE_2D,null);


    return glTex;
};

FGL.prototype.texture = function(texture)
{
    var gl = this.gl;

    this._tex = texture._tex;
    gl.bindTexture(gl.TEXTURE_2D,this._tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._texMode );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._texMode );
    gl.uniform1i(this._uTexImage,0);
};

FGL.prototype.disableTextures = function()
{
    var gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D,this._texEmpty);
    gl.vertexAttribPointer(this._aVertexTexCoord,Vec2.SIZE,gl.FLOAT,false,0,0);
    gl.uniform1f(this._uUseTexture,0.0);
};

/*---------------------------------------------------------------------------------------------------------*/
// Material
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.useMaterial = function(bool){this.gl.uniform1f(this._uUseMaterial,bool ? 1.0 : 0.0);this._bUseMaterial = bool;};

FGL.prototype.material = function(material)
{
    var gl = this.gl;

    //gl.uniform4fv(this._uMaterialEmission,  material.emission);
    gl.uniform4fv(this._uMaterialAmbient,   material.ambient);
    gl.uniform4fv(this._uMaterialDiffuse,   material.diffuse);
    gl.uniform4fv(this._uMaterialSpecular,  material.specular);
    gl.uniform1f( this._uMaterialShininess, material.shininess);
};

/*---------------------------------------------------------------------------------------------------------*/
// Camera
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.setCamera = function(camera){this._camera = camera;};

/*---------------------------------------------------------------------------------------------------------*/
// Matrix stack
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.loadIdentity = function(){this._mModelView = Mat44.identity(this._camera.modelViewMatrix);};
FGL.prototype.pushMatrix   = function(){this._mStack.push(Mat44.copy(this._mModelView));};
FGL.prototype.popMatrix    = function()
{
    var stack = this._mStack;

    if(stack.length == 0)throw ('Invalid pop!');
    this._mModelView = stack.pop();

    return this._mModelView;
};

FGL.prototype.setMatricesUniform = function()
{
    var gl = this.gl;

    gl.uniformMatrix4fv(this._uModelViewMatrix,false,this._mModelView);
    gl.uniformMatrix4fv(this._uProjectionMatrix,false,this._camera.projectionMatrix);

    if(!this._bUseLighting)return;

    Mat44.toMat33Inversed(this._mModelView,this._mNormal);
    Mat33.transpose(this._mNormal,this._mNormal);

    gl.uniformMatrix3fv(this._uNormalMatrix,false,this._mNormal);
};

/*---------------------------------------------------------------------------------------------------------*/
// Matrix stack transformations
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.translate     = function(v)          {Mat44.multPost(this._mModelView,Mat44.makeTranslate(v[0],v[1],v[2],Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.translate3f   = function(x,y,z)      {Mat44.multPost(this._mModelView,Mat44.makeTranslate(x,y,z,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.translateX    = function(x)          {Mat44.multPost(this._mModelView,Mat44.makeTranslate(x,0,0,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.translateY    = function(y)          {Mat44.multPost(this._mModelView,Mat44.makeTranslate(0,y,0,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.translateZ    = function(z)          {Mat44.multPost(this._mModelView,Mat44.makeTranslate(0,0,z,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.scale         = function(v)          {Mat44.multPost(this._mModelView,Mat44.makeScale(v[0],v[1],v[2],Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.scale1f       = function(n)          {Mat44.multPost(this._mModelView,Mat44.makeScale(n,n,n,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.scale3f       = function(x,y,z)      {Mat44.multPost(this._mModelView,Mat44.makeScale(x,y,z,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.scaleX        = function(x)          {Mat44.multPost(this._mModelView,Mat44.makeScale(x,1,1,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.scaleY        = function(y)          {Mat44.multPost(this._mModelView,Mat44.makeScale(1,y,1,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.scaleZ        = function(z)          {Mat44.multPost(this._mModelView,Mat44.makeScale(1,1,z,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.rotate        = function(v)          {Mat44.multPost(this._mModelView,Mat44.makeRotationXYZ(v[0],v[1],v[2],Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.rotate3f      = function(x,y,z)      {Mat44.multPost(this._mModelView,Mat44.makeRotationXYZ(x,y,z,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.rotateX       = function(x)          {Mat44.multPost(this._mModelView,Mat44.makeRotationX(x,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.rotateY       = function(y)          {Mat44.multPost(this._mModelView,Mat44.makeRotationY(y,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.rotateZ       = function(z)          {Mat44.multPost(this._mModelView,Mat44.makeRotationZ(z,Mat44.identity(this._mTemp0)),this._mModelView);};
FGL.prototype.rotateAxis    = function(angle,v)    {Mat44.multPost(this._mModelView,Mat44.makeRotationOnAxis(angle,v[0],v[1],v[2]),this._mModelView);};
FGL.prototype.rotateAxis3f  = function(angle,x,y,z){Mat44.multPost(this._mModelView,Mat44.makeRotationOnAxis(angle,x,y,z),this._mModelView);};

/*---------------------------------------------------------------------------------------------------------*/
// convenience draw
/*---------------------------------------------------------------------------------------------------------*/


FGL.prototype.drawElements = function(vertexFloat32Array,normalFloat32Array,colorFloat32Array,uvFloat32Array,indexArray,mode,count,offset,type,drawType)
{
    var gl = this.gl;

    this.bufferArrays(vertexFloat32Array,normalFloat32Array,colorFloat32Array,uvFloat32Array);
    this.setMatricesUniform();
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,indexArray,drawType || gl.DYNAMIC_DRAW);
    gl.drawElements(mode  || this.TRIANGLES,
                    count || indexArray.length,
                    type  || gl.UNSIGNED_SHORT,
                    offset || 0);
};


FGL.prototype.drawArrays = function(vertexFloat32Array,normalFloat32Array,colorFloat32Array,uvFloat32Array,mode,first,count)
{

    this.bufferArrays(vertexFloat32Array,normalFloat32Array,colorFloat32Array,uvFloat32Array);
    this.setMatricesUniform();
    this.gl.drawArrays(mode  || this._drawMode,
                       first || 0,
                       count || vertexFloat32Array.length / this.SIZE_OF_VERTEX);
};

FGL.prototype.drawGeometry = function(geom,count,offset) {geom._draw(this,count,offset);};

/*---------------------------------------------------------------------------------------------------------*/
// convenience filling default vbo
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.bufferArrays = function(vertexFloat32Array,normalFloat32Array,colorFloat32Array,texCoordFloat32Array,glDrawMode)
{
    var na = normalFloat32Array   ? true : false,
        ca = colorFloat32Array    ? true : false,
        ta = texCoordFloat32Array ? true : false;

    var aVertexNormal   = this._aVertexNormal,
        aVertexColor    = this._aVertexColor,
        aVertexTexCoord = this._aVertexTexCoord;

    var gl            = this.gl,
        glArrayBuffer = gl.ARRAY_BUFFER,
        glFloat       = gl.FLOAT;

    glDrawMode = glDrawMode || gl.DYNAMIC_DRAW;

    var vblen =      vertexFloat32Array.byteLength,
        nblen = na ? normalFloat32Array.byteLength : 0,
        cblen = ca ? colorFloat32Array.byteLength   : 0,
        tblen = ta ? texCoordFloat32Array.byteLength : 0;

    var offsetV = 0,
        offsetN = offsetV + vblen,
        offsetC = offsetN + nblen,
        offsetT = offsetC + cblen;

    gl.bufferData(glArrayBuffer, vblen + nblen + cblen + tblen, glDrawMode);

    gl.bufferSubData(glArrayBuffer, offsetV, vertexFloat32Array);
    gl.vertexAttribPointer(this._aVertexPosition, this.SIZE_OF_VERTEX, glFloat, false, 0, offsetV);

    if(!na){ gl.disableVertexAttribArray(aVertexNormal);}
    else
    {
        gl.enableVertexAttribArray(aVertexNormal);
        gl.bufferSubData(glArrayBuffer,offsetN,normalFloat32Array);
        gl.vertexAttribPointer(aVertexNormal,this.SIZE_OF_NORMAL,glFloat,false,0,offsetN);
    }

    if(!ca){ gl.disableVertexAttribArray(aVertexColor); }
    {
        gl.enableVertexAttribArray(aVertexColor);
        gl.bufferSubData(glArrayBuffer, offsetC, colorFloat32Array);
        gl.vertexAttribPointer(aVertexColor, this.SIZE_OF_COLOR,  glFloat, false, 0, offsetC);
    }

    if(!ta){ gl.disableVertexAttribArray(aVertexTexCoord);}
    else
    {
        gl.enableVertexAttribArray(aVertexTexCoord);
        gl.bufferSubData(glArrayBuffer,offsetT,texCoordFloat32Array);
        gl.vertexAttribPointer(aVertexTexCoord,this.SIZE_OF_TEX_COORD,glFloat,false,0,offsetT);
    }
};


FGL.prototype.bufferColors = function(color,buffer)
{
    //if(this._bUseMaterial || this._bUseTexture)return null;

    //hm, fix me
    if(this._bUseMaterial || this._bUseTexture)return buffer;

    var i = 0;

    if(color.length == 4)
    {
        while(i < buffer.length)
        {
            buffer[i]  =color[0];
            buffer[i+1]=color[1];
            buffer[i+2]=color[2];
            buffer[i+3]=color[3];
            i+=4;
        }
    }
    else
    {
        if(color.length != buffer.length)
        {
            throw new Error(fError.COLORS_IN_WRONG_SIZE);
        }

        while(i < buffer.length)
        {
            buffer[i]   = color[i];
            buffer[i+1] = color[i+1];
            buffer[i+2] = color[i+2];
            buffer[i+3] = color[i+3];
            i+=4;
        }
    }

    return buffer;
};

FGL.prototype.bufferVertices = function(vertices,buffer)
{
    if(vertices.length != buffer.length)throw (fError.VERTICES_IN_WRONG_SIZE + buffer.length + '.');
    var i = -1;while(++i < buffer.length)buffer[i] = vertices[i];
    return buffer;
};

/*---------------------------------------------------------------------------------------------------------*/
// Helpers
/*---------------------------------------------------------------------------------------------------------*/


FGL.prototype._scaleVertices = function(vert0,scale,vert1)
{
    if(!scale)return vert0;
    var i = -1, l = vert0.length;while(++i < l)vert1[i] = vert0[i] * scale;return vert1;
};


/*---------------------------------------------------------------------------------------------------------*/
// Batch
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype._putComp = function(orig,target)
{

};

FGL.prototype.beginDrawArrayBatch = function()
{
    this._bUseDrawArrayBatch = true;


};

FGL.prototype.endDrawArrayBatch = function()
{
    this._bUseDrawArrayBatch = false;

};

FGL.prototype.drawArrayBatch = function()
{

};

FGL.prototype.beginDrawElementArrayBatch = function()
{
    this._bUseDrawElementArrayBatch = true;

    this._bBatchVertices.length  = 0;
    this._bBatchNormals.length   = 0;
    this._bBatchColors.length    = 0;
    this._bBatchTexCoords.length = 0;
    this._bBatchIndices.length   = 0;
};

FGL.prototype.endDrawElementArrayBatch = function(){this._bUseDrawElementArrayBatch = false;};
FGL.prototype.getElementArrayBatch     = function(){return [this._bBatchVertices,this._bBatchNormals,this._bBatchColors,this._bBatchTexCoords,this._bBatchIndices];};

FGL.prototype._pushElementArrayBatch = function(vertexFloat32Array,normalFloat32Array,colorFloat32Array,texCoordsFloat32Array,indexUint16Array)
{
    var mTemp0 = Mat44.identity(this._mTemp0),
        mTemp1 = Mat44.identity(this._mTemp1),
        mTemp2 = Mat44.identity(this._mTemp2);

    var modelViewMat    = Mat44.set(mTemp0, this._mModelView),
        transMatrix     = Mat44.mult(modelViewMat,Mat44.invert(this._camera.modelViewMatrix,mTemp2),mTemp1);

    var offsetIndex = this._bBatchVertices.length / 3;
    var offset,length,index;

    var batchVertices        = this._bBatchVertices,
        batchVerticesOffset  = batchVertices.length;
        batchVertices.length+= vertexFloat32Array.length;

        offset = batchVerticesOffset;
        length = batchVertices.length;
        index  = 0;

    while(offset < length)
    {
        batchVertices[offset  ] = vertexFloat32Array[index  ];
        batchVertices[offset+1] = vertexFloat32Array[index+1];
        batchVertices[offset+2] = vertexFloat32Array[index+2];

        Mat44.multVec3AI(transMatrix,batchVertices,offset);

        offset+=3;
        index +=3;
    }

    if(normalFloat32Array   )this._putBatch(this._bBatchNormals,normalFloat32Array);
    if(colorFloat32Array    )this._putBatch(this._bBatchColors,colorFloat32Array);
    if(texCoordsFloat32Array)this._putBatch(this._bBatchTexCoords,texCoordsFloat32Array);

    var batchIndices        = this._bBatchIndices,
        batchIndicesOffset  = batchIndices.length;
        batchIndices.length+= indexUint16Array.length;

        offset = batchIndicesOffset;
        length = batchIndices.length;
        index  = 0;

    while(offset < length){batchIndices[offset] = indexUint16Array[index] + offsetIndex;offset++;index++;}
};

FGL.prototype.drawElementArrayBatch = function(batch)
{
    if(batch)
    {
        this.drawElements(batch[0],
                          batch[1],
                          batch[2],
                          batch[3],
                          batch[4],
                          this.getDrawMode());

        return;
    }

    var batchVertices,
        batchNormals,
        batchColors,
        batchTexCoords,
        batchIndices;

    if(this._drawFuncLast == this.drawElementArrayBatch)
    {
        batchVertices  = this._batchVerticesF32Last;
        batchNormals   = this._batchNormalsF32Last;
        batchColors    = this._batchColorsF32Last;
        batchTexCoords = this._batchTexCoordsF32Last;
        batchIndices   = this._batchIndicesU16Last;
    }
    else
    {
        batchVertices  = this._batchVerticesF32Last  = new Float32Array(this._bBatchVertices);
        batchNormals   = this._batchNormalsF32Last   = new Float32Array(this._bBatchNormals);
        batchColors    = this._batchColorsF32Last    = new Float32Array(this._bBatchColors);
        batchTexCoords = this._batchTexCoordsF32Last = new Float32Array(this._bBatchTexCoords);
        batchIndices   = this._batchIndicesU16Last   = new Uint16Array( this._bBatchIndices);
  }


    this.drawElements(batchVertices,
                      batchNormals,
                      batchColors,
                      batchTexCoords,
                      batchIndices,
                      this.getDrawMode());


    this._drawFuncLast = this.drawElementArrayBatch;
};

FGL.prototype._putBatch = function(batchArray,dataArray)
{
    var batchOffset   = batchArray.length;
    batchArray.length+= dataArray.length;

    var len = batchArray.length;
    var index = 0;

    while(batchOffset < len){batchArray[batchOffset++] = dataArray[index++];}
};




/*---------------------------------------------------------------------------------------------------------*/
// Convenience Methods color
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.ambient   = function(color){this.gl.uniform3f(this._uAmbient,color[0],color[1],color[2]);};
FGL.prototype.ambient3f = function(r,g,b){this.gl.uniform3f(this._uAmbient,r,g,b);};
FGL.prototype.ambient1f = function(k)    {this.gl.uniform1f(this._uAmbient,k);};

FGL.prototype.color   = function(color)  {this._bColor = Color.set(this._bColor4f,color);};
FGL.prototype.color4f = function(r,g,b,a){this._bColor = Color.set4f(this._bColor4f,r,g,b,a);};
FGL.prototype.color3f = function(r,g,b)  {this._bColor = Color.set3f(this._bColor4f,r,g,b);};
FGL.prototype.color2f = function(k,a)    {this._bColor = Color.set2f(this._bColor4f,k,a);};
FGL.prototype.color1f = function(k)      {this._bColor = Color.set1f(this._bColor4f,k);};
FGL.prototype.colorfv = function(array)  {this._bColor = array;};

FGL.prototype.clearColor = function(color){this.clear4f(color[0],color[1],color[2],color[3]);};
FGL.prototype.clear      = function()     {this.clear4f(0,0,0,1);};
FGL.prototype.clear3f    = function(r,g,b){this.clear4f(r,g,b,1);};
FGL.prototype.clear2f    = function(k,a)  {this.clear4f(k,k,k,a);};
FGL.prototype.clear1f    = function(k)    {this.clear4f(k,k,k,1.0);};
FGL.prototype.clear4f   = function(r,g,b,a)
{
    var c  = Color.set4f(this._bColorBg4f,r,g,b,a);
    var gl = this.gl;
    gl.clearColor(c[0],c[1],c[2],c[3]);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};


FGL.prototype.getColorBuffer = function(){return this._bColor;};
FGL.prototype.getClearBuffer = function(){return this._bColorBg4f;};

/*---------------------------------------------------------------------------------------------------------*/
// Methods draw properties
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.drawMode = function(mode){this._drawMode = mode;};
FGL.prototype.getDrawMode = function(){return this._drawMode;};

FGL.prototype.sphereDetail = function(detail)
{
    if(detail == this._sphereDetailLast)return;
    this._sphereDetailLast = detail;
    this._genSphere();
};

FGL.prototype.circleDetail = function(detail)
{
    if(detail == this._circleDetailLast )return;
    this._circleDetailLast  = Math.max(this.ELLIPSE_DETAIL_MIN,Math.min(detail,this.ELLIPSE_DETAIL_MAX));
    this._cirlceVertexCount = this._circleDetailLast * 3;
    this._genCircle();
};

FGL.prototype.lineWidth = function(size){this.gl.lineWidth(size);};

FGL.prototype.useBillboard = function(bool){this._bUseBillboarding = bool;};
FGL.prototype.pointSize = function(value){this.gl.uniform1f(this._uPointSize,value);};


/*---------------------------------------------------------------------------------------------------------*/
// Methods draw primitives
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.point = function(vector)
{
    if(vector.length == 0)return;

    var bColorPoint = this._bColorPoint,
        bColor      = this._bColor;

    bColorPoint[0] = bColor[0];
    bColorPoint[1] = bColor[1];
    bColorPoint[2] = bColor[2];
    bColorPoint[3] = bColor[3];

    var gl = this.gl,
        glArrayBuffer = gl.ARRAY_BUFFER,
        glFloat       = gl.FLOAT;

    var vblen = vector.byteLength,
        cblen = bColor.byteLength;

    var offsetV = 0,
        offsetC = vblen;

    gl.bufferData(glArrayBuffer,vblen + cblen,gl.STATIC_DRAW);

    gl.bufferSubData(glArrayBuffer, offsetV, vector);
    gl.bufferSubData(glArrayBuffer, offsetC, bColor);

    gl.disableVertexAttribArray(this._aVertexNormal);
    gl.disableVertexAttribArray(this._aVertexTexCoord);

    gl.vertexAttribPointer(this._aVertexPosition, this.SIZE_OF_VERTEX, glFloat, false, 0, offsetV);
    gl.vertexAttribPointer(this._aVertexColor,    this.SIZE_OF_COLOR,  glFloat, false, 0, offsetC);

    this.setMatricesUniform();
    gl.drawArrays(this._drawMode,0,1);

    gl.enableVertexAttribArray(this._aVertexNormal);
    gl.enableVertexAttribArray(this._aVertexTexCoord);

    this._drawFuncLast = this.point;
};

FGL.prototype.points = function(vertices,colors)
{
    if(vertices.length == 0)return;

    colors = colors || this.bufferColors(this._bColor4f,new Float32Array(vertices.length / 3 * 4));

    var gl            = this.gl,
        glArrayBuffer = gl.ARRAY_BUFFER,
        glFloat       = gl.FLOAT;

    var vblen = vertices.byteLength,
        cblen = colors.byteLength;

    var offsetV = 0,
        offsetC = vblen;

    gl.bufferData(glArrayBuffer,vblen + cblen,gl.STATIC_DRAW);

    gl.bufferSubData(glArrayBuffer, offsetV, vertices);
    gl.bufferSubData(glArrayBuffer, offsetC, colors);

    gl.disableVertexAttribArray(this._aVertexNormal);
    gl.disableVertexAttribArray(this._aVertexTexCoord);

    gl.vertexAttribPointer(this._aVertexPosition, this.SIZE_OF_VERTEX, glFloat, false, 0, offsetV);
    gl.vertexAttribPointer(this._aVertexColor,    this.SIZE_OF_COLOR,  glFloat, false, 0, offsetC);

    this.setMatricesUniform();
    gl.drawArrays(this._drawMode,0,vertices.length/3);

    gl.enableVertexAttribArray(this._aVertexNormal);
    gl.enableVertexAttribArray(this._aVertexTexCoord);

    this._drawFuncLast = this.points;
};

FGL.prototype.point3f = function(x,y,z){this._bVertexPoint[0] = x;this._bVertexPoint[1] = y;this._bVertexPoint[2] = z;this.point(this._bVertexPoint);};
FGL.prototype.point2f = function(x,y)  {this._bVertexPoint[0] = x;this._bVertexPoint[1] = y;this._bVertexPoint[2] = 0;this.point(this._bVertexPoint);};
FGL.prototype.pointv  = function(arr)  {this._bVertexPoint[0] = arr[0];this._bVertexPoint[1] = arr[1];this._bVertexPoint[2] = arr[2];this.point(this._bVertexPoint);};

/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.linef = function(x0,y0,z0,x1,y1,z1)
{
    var v = this._bVertexLine;
    v[0] = x0;v[1] = y0;v[2] = z0;
    v[3] = x1;v[4] = y1;v[5] = z1;

    this.drawArrays(v,null,this.bufferColors(this._bColor,this._bColorLine),null,this._drawMode);

    this._drawFuncLast = this.linef;
};

FGL.prototype.line  = function(vertices)
{
    if(vertices.length == 0)return;
    this.drawArrays(this.bufferArrays(vertices,this._bVertexLine),null,this.bufferColors(this._bColor,this._bColorLine),null,this._drawMode,0, 2);

    this._drawFuncLast = this.line;
};

FGL.prototype.linev = function(vertices)
{
    if(vertices.length == 0)return;
    var v = new Float32Array(vertices),
        l = vertices.length / this.SIZE_OF_VERTEX;
    this.drawArrays(v,null,this.bufferColors(this._bColor, new Float32Array(l*this.SIZE_OF_COLOR)),null,this._drawMode,0, l);

    this._drawFuncLast = this.linev;
};

FGL.prototype.line2fv = function(v0,v1){this.linef(v0[0],v0[1],v0[2],v1[0],v1[1],v1[2]);};

/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.quadf = function(x0,y0,z0,x1,y1,z1,x2,y2,z2,x3,y3,z3)
{
    var v = this._bVertexQuad;

    v[ 0] = x0;v[ 1] = y0;v[ 2] = z0;
    v[ 3] = x1;v[ 4] = y1;v[ 5] = z1;
    v[ 6] = x2;v[ 7] = y2;v[ 8] = z2;
    v[ 9] = x3;v[10] = y3;v[11] = z3;

    this.drawArrays(v,null,this.bufferColors(this._bColor,this._bColorQuad),null,this._drawMode,0,4);

    this._drawFuncLast = this.quadf;
};

FGL.prototype.quadv = function(v0,v1,v2,v3)
{
    this.quadf(v0[0],v0[1],v0[2],v1[0],v1[1],v1[2],v2[0],v2[1],v2[2],v3[0],v3[1],v3[2]);
};

FGL.prototype.quad = function(vertices,normals,texCoords)
{
    this.drawArrays(this.bufferArrays(vertices,this._bVertexQuad),normals,this.bufferColors(this._bColor,this._bColorQuad),texCoords,this._drawMode,0,4);

    this._drawFuncLast = this.quad;
};

/*---------------------------------------------------------------------------------------------------------*/

//TODO:cleanup
FGL.prototype.rect = function(width,height)
{
    height = height || width;

    var vertices = this._bVertexRect;

    if(this._bUseBillboarding)
    {
        //23
        //01

        var modelViewMatrix = this._mModelView;

        var vecRightX = modelViewMatrix[0],
            vecRightY = modelViewMatrix[4],
            vecRightZ = modelViewMatrix[8];

        var vecUpX = modelViewMatrix[1],
            vecUpY = modelViewMatrix[5],
            vecUpZ = modelViewMatrix[9];


        vertices[ 0] = (-vecRightX - vecUpX) * width;
        vertices[ 1] = (-vecRightY - vecUpY) * width;
        vertices[ 2] = (-vecRightZ - vecUpZ) * width;

        vertices[ 3] = (vecRightX - vecUpX) * width;
        vertices[ 4] = (vecRightY - vecUpY) * width;
        vertices[ 5] = (vecRightZ - vecUpZ) * width;

        vertices[ 6] = (vecRightX + vecUpX) * width;
        vertices[ 7] = (vecRightY + vecUpY) * width;
        vertices[ 8] = (vecRightZ + vecUpZ) * width;

        vertices[ 9] = (-vecRightX + vecUpX) * width;
        vertices[10] = (-vecRightY + vecUpY) * width;
        vertices[11] = (-vecRightZ + vecUpZ) * width;

    }
    else if(width != this._rectWidthLast || height != this._rectHeightLast)
    {
        vertices[0] = vertices[1] = vertices[2] = vertices[4] = vertices[5] = vertices[7] = vertices[9] = vertices[10] = 0;
        vertices[3] = vertices[6] = width; vertices[8] = vertices[11] = height;

        this._rectWidthLast  = width;
        this._rectHeightLast = height;
    }

    this.drawArrays(vertices,this._bNormalRect,this.bufferColors(this._bColor,this._bColorRect),this._bTexCoordQuadDefault,this._drawMode,0,4);

    this._drawFuncLast = this.rect;
};

/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.triangle = function(v0,v1,v2)
{
    var v = this._bVertexTriangle;
    v[0] = v0[0];v[1] = v0[1];v[2] = v0[2];
    v[3] = v1[0];v[4] = v1[1];v[5] = v1[2];
    v[6] = v2[0];v[7] = v2[1];v[8] = v2[2];

    this.drawArrays(v,null,this.bufferColors(this._bColor,this._bColorTriangle),null,this._drawMode,0,3);

    this._drawFuncLast = this.triangle;
};

FGL.prototype.trianglef = function(v0,v1,v2,v3,v4,v5,v6,v7,v8)
{
    var v = this._bVertexTriangle;
    v[0] = v0;v[1] = v1;v[2] = v2;
    v[3] = v3;v[4] = v4;v[5] = v5;
    v[6] = v6;v[7] = v7;v[8] = v8;

    this.drawArrays(v,null,this.bufferColors(this._bColor,this._bColorTriangle),null,this._drawMode,0,3);

    this._drawFuncLast = this.trianglef;
};

FGL.prototype.trianglev = function(vertices,normals,texCoords)
{
    this.drawArrays(this.bufferArrays(vertices,this._bVertexTriangle),normals,this.bufferColors(this._bColor,this._bColorTriangle),texCoords,this._drawMode,0,3);
    this._drawFuncLast = this.trianglev;
};

/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.circle3f = function(x,y,z,radius)
{
    radius = radius || 0.5;

    this.pushMatrix();
    this.translate3f(x,y,z);
    this.scale1f(radius);
    this.drawArrays(this._bVertexCircle,this._bNormalCircle,this.bufferColors(this._bColor,this._bColorCircle),this._bTexCoordCircle,this.getDrawMode(),0,this._circleDetailLast);
    this.popMatrix();

    this._drawFuncLast = this.linef;
};

FGL.prototype.cirlce2f = function(x,y,radius){this.circle3f(x,0,y,radius);};
FGL.prototype.circle = function(radius){this.circle3f(0,0,0,radius)};
FGL.prototype.circlev = function(v,radius){this.circle3f(v[0],v[1],v[2],radius);};
FGL.prototype.circles = function(centers,radii){};

/*---------------------------------------------------------------------------------------------------------*/
// Geometry gen
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype._genSphere = function()
{
    var segments = this._sphereDetailLast;

    var vertices  = [],
        normals   = [],
        texCoords = [],
        indices   = [];

    var theta,thetaSin,thetaCos;
    var phi,phiSin,phiCos;

    var x,y,z;
    var u,v;

    var i = -1,j;

    var index,
        indexVertices,
        indexNormals,
        indexTexCoords;

    while(++i <= segments)
    {
        theta = i * Math.PI / segments;
        thetaSin = Math.sin(theta);
        thetaCos = Math.cos(theta);

        j = -1;
        while(++j <= segments)
        {
            phi    = j * 2 * Math.PI / segments;
            phiSin = Math.sin(phi);
            phiCos = Math.cos(phi);

            x = phiCos * thetaSin;
            y = thetaCos;
            z = phiSin * thetaSin;

            index          = j + segments * i;
            indexVertices  = indexNormals = index * 3;
            indexTexCoords = index * 2;

            normals.push(x,y,z);
            vertices.push(x,y,z);

            u = 1 - j / segments;
            v = 1 - i / segments;

            texCoords.push(u,v);

        }


    }

    var index0,index1,index2;

    i = -1;
    while(++i < segments)
    {
        j = -1;
        while(++j < segments)
        {
            index0 = j + i * (segments + 1);
            index1 = index0 + segments + 1;
            index2 = index0 + 1;

            indices.push(index0,index1,index2);

            index2 = index0 + 1;
            index0 = index1;
            index1 = index0 + 1;

            indices.push(index0,index1,index2);
        }
    }

    this._bVertexSphere       = new Float32Array(vertices);
    this._bVertexSphereScaled = new Float32Array(vertices);
    this._bNormalSphere       = new Float32Array(normals);
    this._bColorSphere        = new Float32Array(segments * segments * 4);
    this._bTexCoordsSphere    = new Float32Array(indices);
    this._bIndexSphere        = new Uint16Array(indices);
};

FGL.prototype._genCircle = function()
{
    var cx = 0,
        cy = 0;

    var d = this._circleDetailLast,
        v = this._bVertexCircle,
        l = d * 3;

    var i = 0;

    var theta = 2 * Math.PI / d,
        c = Math.cos(theta),
        s = Math.sin(theta),
        t;

    var ox = 1,
        oy = 0;

    while(i < l)
    {
        v[i  ] = ox + cx;
        v[i+1] = 0;
        v[i+2] = oy + cy;

        t  = ox;
        ox = c * ox - s * oy;
        oy = s * t  + c * oy;

        i+=3;
    }
};

/*---------------------------------------------------------------------------------------------------------*/
// default vbo/ibo / shader attributes
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.getDefaultVBO  = function(){return this._defaultVBO;};
FGL.prototype.getDefaultIBO  = function(){return this._defaultIBO;};
FGL.prototype.bindDefaultVBO = function(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this._defaultVBO);};
FGL.prototype.bindDefaultIBO = function(){this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this._defaultIBO);};

FGL.prototype.getDefaultVertexAttrib   = function(){return this._aVertexPosition;};
FGL.prototype.getDefaultNormalAttrib   = function(){return this._aVertexNormal;};
FGL.prototype.getDefaultColorAttrib    = function(){return this._aVertexColor;};
FGL.prototype.getDefaultTexCoordAttrib = function(){return this._aVertexTexCoord;};

FGL.prototype.enableDefaultVertexAttribArray     = function(){this.gl.enableVertexAttribArray(this._aVertexPosition);};
FGL.prototype.enableDefaultNormalAttribArray     = function(){this.gl.enableVertexAttribArray(this._aVertexNormal);};
FGL.prototype.enableDefaultColorAttribArray      = function(){this.gl.enableVertexAttribArray(this._aVertexColor);};
FGL.prototype.enableDefaultTexCoordsAttribArray  = function(){this.gl.enableVertexAttribArray(this._aVertexTexCoord);};

FGL.prototype.disableDefaultVertexAttribArray    = function(){this.gl.disableVertexAttribArray(this._aVertexPosition);};
FGL.prototype.disableDefaultNormalAttribArray    = function(){this.gl.disableVertexAttribArray(this._aVertexNormal);};
FGL.prototype.disableDefaultColorAttribArray     = function(){this.gl.disableVertexAttribArray(this._aVertexColor);};
FGL.prototype.disableDefaultTexCoordsAttribArray = function(){this.gl.disableVertexAttribArray(this._aVertexTexCoord);};

/*---------------------------------------------------------------------------------------------------------*/
// convenience draw
/*---------------------------------------------------------------------------------------------------------*/

//TODO:remove

FGL.prototype.box = function(width,height,depth)
{
    this.pushMatrix();
    this.scale3f(width,height,depth);
    this.drawElements(this._bVertexCube,this._bNormalCube,this.bufferColors(this._bColor,this._bColorCube),this._bTexCoordCube,this._bIndexCube,this._drawMode);
    this.popMatrix();

    this._drawFuncLast = this.box;
};

FGL.prototype.cube = function(size)
{
    size = size || 1;

    var cubeScaleLast    = this._cubeScaleLast,
        cubeVerticesLast = this._bVertexCubeScaled;

    if(this._bUseDrawElementArrayBatch)
    {
        this._pushElementArrayBatch((size == cubeScaleLast) ? cubeVerticesLast :
                                    this._scaleVertices(this._bVertexCube,size,cubeVerticesLast),
                                    this._bNormalCube,
                                    this.bufferColors(this._bColor,this._bColorCube),
                                    this._bTexCoordCube,
                                    this._bIndexCube);

    }
    else
    {
        this.drawElements((size == cubeScaleLast) ? cubeVerticesLast :
                          this._scaleVertices(this._bVertexCube,size,cubeVerticesLast),
                          this._bNormalCube,
                          this.bufferColors(this._bColor,this._bColorCube),
                          this._bTexCoordCube,
                          this._bIndexCube,
                          this._drawMode);

    }


    this._cubeScaleLast = size;
    this._drawFuncLast  = this.cube;

};

FGL.prototype.sphere = function(size)
{
    size = size || 1;

    var sphereScaleLast      = this._sphereScaleLast,
        sphereVerticesScaled = this._bVertexSphereScaled;

    if(this._bUseDrawElementArrayBatch)
    {
        this._pushElementArrayBatch((size == sphereScaleLast) ? sphereVerticesScaled :
                                    this._scaleVertices(this._bVertexSphere,size,sphereVerticesScaled),
                                    this._bNormalSphere,
                                    this.bufferColors(this._bColor,this._bColorSphere),
                                    this._bTexCoordsSphere,
                                    this._bIndexSphere);
    }
    else
    {
        this.drawElements((size == sphereScaleLast) ? sphereVerticesScaled :
                          this._scaleVertices(this._bVertexSphere,size,sphereVerticesScaled),
                          this._bNormalSphere,
                          this.bufferColors(this._bColor,this._bColorSphere),
                          this._bTexCoordsSphere,
                          this._bIndexSphere,
                          this._drawMode);

    }

    this._sphereScaleLast = size;
    this._drawFuncLast    = this.sphere;
};

//TODO: remove !!!!!!!!!!!!!!!

FGL.prototype.lineBox = function(v0,v1){this.lineBoxf(v0[0],v0[1],v0[2],v1[0],v1[1],v1[2]);};

FGL.prototype.lineBoxf = function(x0,y0,z0,x1,y1,z1)
{


    var p0 = this._bPoint0,
        p1 = this._bPoint1,
        up = this._axisY;

    Vec3.set3f(p0,x0,y0,z0);
    Vec3.set3f(p1,x1,y1,z1);

    var len = Vec3.distance(p0,p1),
        mid = Vec3.scale(Vec3.added(p0,p1),0.5),
        dir = Vec3.normalize(Vec3.subbed(p1,p0)),
        c   = Vec3.dot(dir,up);

    var angle = Math.acos(c),
        axis  = Vec3.normalize(Vec3.cross(up,dir));

    this.pushMatrix();
    this.translate(mid);
    this.rotateAxis(angle,axis);
    this.box(this._lineBoxWidth,len,this._lineBoxHeight);
    this.popMatrix();
};

/*---------------------------------------------------------------------------------------------------------*/
// convenience bindings gl
/*---------------------------------------------------------------------------------------------------------*/

FGL.prototype.enable                = function(id){this.gl.enable(id);};
FGL.prototype.disable               = function(id){this.gl.disable(id);};

FGL.prototype.blendColor            = function(r,g,b,a){this.gl.blendColor(r,g,b,a);};
FGL.prototype.blendEquation         = function(mode){this.gl.blendEquation(mode);};
FGL.prototype.blendEquationSeparate = function(sfactor,dfactor){this.gl.blendEquationSeparate(sfactor,dfactor);};
FGL.prototype.blendFunc             = function(sfactor,dfactor){this.gl.blendFunc(sfactor,dfactor);};
FGL.prototype.blendFuncSeparate     = function(srcRGB,dstRGB,srcAlpha,dstAlpha){this.gl.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);};
FGL.prototype.depthFunc             = function(func){this.gl.depthFunc(func);};
FGL.prototype.sampleCoverage        = function(value,invert){this.gl.sampleCoverage(value,invert);};
FGL.prototype.stencilFunc           = function(func,ref,mask){this.gl.stencilFunc(func,ref,mask);};
FGL.prototype.stencilFuncSeparate   = function(face,func,ref,mask){this.gl.stencilFuncSeparate(face,func,ref,mask);};
FGL.prototype.stencilOp             = function(fail,zfail,zpass){this.gl.stencilOp(fail,zfail,zpass);};
FGL.prototype.stencilOpSeparate     = function(face,fail,zfail,zpass){this.gl.stencilOpSeparate(face,fail,zfail,zpass);};

/*---------------------------------------------------------------------------------------------------------*/
// World -> Screen
/*---------------------------------------------------------------------------------------------------------*/

//TODO: Fix me
FGL.prototype.getScreenCoord3f = function(x,y,z)
{
    var mpm = Mat44.mult(this._camera.projectionMatrix,this._mModelView);
    var p3d = Mat44.multVec3(mpm,Vec3.make(x,y,z));

    var bsc = this._bScreenCoords;
    bsc[0] = (((p3d[0] + 1) * 0.5) * window.innerWidth);
    bsc[1] = (((1 - p3d[1]) * 0.5) * window.innerHeight);

    return bsc;
};

FGL.prototype.getScreenCoord = function(v)
{
    return this.getScreenCoord3f(v[0],v[1],v[1]);
};




FGL.prototype.getModelViewMatrix  = function(){return this._mModelView;};
FGL.prototype.getProjectionMatrix = function(){return this._camera.projectionMatrix;};







module.exports = FGL;
},{"../math/fMat33":30,"../math/fMat44":31,"../math/fVec2":34,"../math/fVec3":35,"../math/fVec4":36,"../system/fError":38,"../system/fPlatform":39,"../util/fColor":40,"./gl/fTexture":24,"./gl/shader/fProgFragShader":25,"./gl/shader/fProgLoader":26,"./gl/shader/fProgVertexShader":27,"./gl/shader/fShaderLoader":28}],18:[function(require,module,exports){
var Vec3  = require('../../math/fVec3'),
    Light = require('./fLight');

function DirectionalLight(id)
{
    Light.apply(this,arguments);
}

DirectionalLight.prototype = Object.create(Light.prototype);

DirectionalLight.prototype.setDirection   = function(v)    {Vec3.set(this.direction,v);};
DirectionalLight.prototype.setDirection3f = function(x,y,z){Vec3.set3f(this.direction,x,y,z);};

DirectionalLight.prototype.lookAt         = function(position,target)
{
    this.setPosition(position);
    this.setDirection(Vec3.normalize(Vec3.subbed(target,position)));
};

module.exports = DirectionalLight;
},{"../../math/fVec3":35,"./fLight":19}],19:[function(require,module,exports){
var Vec3 = require('../../math/fVec3'),
    Vec4 = require('../../math/fVec4');

function Light(id)
{
    this._id   = id;

    this.ambient  = new Float32Array([1,1,1]);
    this.diffuse  = new Float32Array([1,1,1]);
    this.specular = new Float32Array([1,1,1]);

    this.position             = Vec4.ZERO();
    this.direction            = null;
    this.spotExponent         = null;
    this.spotCutOff           = null;

    this.constantAttentuation = 1.0;
    this.linearAttentuation   = 0;
    this.quadricAttentuation  = 0.01;
}


Light.prototype.setAmbient     = function(color)  {this.ambient[0] = color[0];this.ambient[1] = color[1];this.ambient[2] = color[2];};
Light.prototype.setAmbient3f   = function(r,g,b)  {this.ambient[0] = r;this.ambient[1] = g;this.ambient[2] = b;};

Light.prototype.setDiffuse     = function(color)  {this.diffuse[0] = color[0];this.diffuse[1] = color[1];this.diffuse[2] = color[2];};
Light.prototype.setDiffuse3f   = function(r,g,b)  {this.diffuse[0] = r;this.diffuse[1] = g;this.diffuse[2] = b;};

Light.prototype.setSpecular    = function(color)  {this.specular[0] = color[0];this.specular[1] = color[1];this.specular[2] = color[2];};
Light.prototype.setSpecular3f  = function(r,g,b)  {this.specular[0] = r;this.specular[1] = g;this.specular[2] = b;};

Light.prototype.setPosition    = function(v)    {Vec4.set3f(this.position,v[0],v[1],v[2]);};
Light.prototype.setPosition3f  = function(x,y,z){Vec3.set3f(this.position,x,y,z);};

Light.prototype.getId = function(){return this._id;};

module.exports = Light;
},{"../../math/fVec3":35,"../../math/fVec4":36}],20:[function(require,module,exports){
var Mat44 = require('../../math/fMat44');

module.exports =
{
    perspective : function(m,fov,aspect,near,far)
    {
        var f  = 1.0 / Math.tan(fov*0.5),
            nf = 1.0 / (near-far);

        m[0] = f / aspect;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;
        m[4] = 0;
        m[5] = f;
        m[6] = 0;
        m[7] = 0;
        m[8] = 0;
        m[9] = 0;
        m[10] = (far + near) * nf;
        m[11] = -1;
        m[12] = 0;
        m[13] = 0;
        m[14] = (2 * far * near) * nf;
        m[15] = 0;

        return m;

    },

    frustum : function(m,left,right,bottom,top,near,far)
    {
        var rl = 1 / (right - left),
            tb = 1 / (top - bottom),
            nf = 1 / (near - far);


        m[ 0] = (near * 2) * rl;
        m[ 1] = 0;
        m[ 2] = 0;
        m[ 3] = 0;
        m[ 4] = 0;
        m[ 5] = (near * 2) * tb;
        m[ 6] = 0;
        m[ 7] = 0;
        m[ 8] = (right + left) * rl;
        m[ 9] = (top + bottom) * tb;
        m[10] = (far + near) * nf;
        m[11] = -1;
        m[12] = 0;
        m[13] = 0;
        m[14] = (far * near * 2) * nf;
        m[15] = 0;

        return m;
    },

    lookAt : function(m,eye,target,up)
    {
        var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
            eyex = eye[0],
            eyey = eye[1],
            eyez = eye[2],
            upx = up[0],
            upy = up[1],
            upz = up[2],
            targetx = target[0],
            tartety = target[1],
            targetz = target[2];

        if (Math.abs(eyex - targetx) < 0.000001 &&
            Math.abs(eyey - tartety) < 0.000001 &&
            Math.abs(eyez - targetz) < 0.000001) {
            return Mat44.identity(m);
        }

        z0 = eyex - targetx;
        z1 = eyey - tartety;
        z2 = eyez - targetz;

        len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
        z0 *= len;
        z1 *= len;
        z2 *= len;

        x0 = upy * z2 - upz * z1;
        x1 = upz * z0 - upx * z2;
        x2 = upx * z1 - upy * z0;
        len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
        if (!len) {
            x0 = 0;
            x1 = 0;
            x2 = 0;
        } else {
            len = 1 / len;
            x0 *= len;
            x1 *= len;
            x2 *= len;
        }

        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;

        len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
        if (!len) {
            y0 = 0;
            y1 = 0;
            y2 = 0;
        } else {
            len = 1 / len;
            y0 *= len;
            y1 *= len;
            y2 *= len;
        }

        m[ 0] = x0;
        m[ 1] = y0;
        m[ 2] = z0;
        m[ 3] = 0;
        m[ 4] = x1;
        m[ 5] = y1;
        m[ 6] = z1;
        m[ 7] = 0;
        m[ 8] = x2;
        m[ 9] = y2;
        m[10] = z2;
        m[11] = 0;
        m[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        m[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        m[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        m[15] = 1;

        return m;
    }
};
},{"../../math/fMat44":31}],21:[function(require,module,exports){
var Color = require('../../util/fColor');

function Material(ambient,diffuse,specular,shininess,emission)
{
    ambient   = ambient   || Color.make(1.0,0.5,0.5,1.0);
    diffuse   = diffuse   || Color.BLACK();
    specular  = specular  || Color.BLACK();
    shininess = shininess || 10.0;
    emission  = emission  || Color.BLACK;

    this.emission  = emission;
    this.ambient   = ambient;
    this.diffuse   = diffuse;
    this.specular  = specular;
    this.shininess = shininess;
}

Material.prototype.setEmission   = function(color)  {this.emission = color;};
Material.prototype.setEmission3f = function(r,g,b)  {this.emission[0] = r;this.emission[1] = g;this.emission[2] = b;};
Material.prototype.setEmission4f = function(r,g,b,a){this.emission[0] = r;this.emission[1] = g;this.emission[2] = b;this.emission[3] = a;};

Material.prototype.setAmbient   = function(color)  {this.ambient = color;};
Material.prototype.setAmbient3f = function(r,g,b)  {this.ambient[0] = r;this.ambient[1] = g;this.ambient[2] = b;};
Material.prototype.setAmbient4f = function(r,g,b,a){this.ambient[0] = r;this.ambient[1] = g;this.ambient[2] = b;this.ambient[3] = a;};

Material.prototype.setDiffuse   = function(color)  {this.diffuse = color;};
Material.prototype.setDiffuse3f = function(r,g,b)  {this.diffuse[0] = r;this.diffuse[1] = g;this.diffuse[2] = b;};
Material.prototype.setDiffuse4f = function(r,g,b,a){this.diffuse[0] = r;this.diffuse[1] = g;this.diffuse[2] = b;this.diffuse[3] = a;};

Material.prototype.setSpecular   = function(color)  {this.specular = color;};
Material.prototype.setSpecular3f = function(r,g,b)  {this.specular[0] = r;this.specular[1] = g;this.specular[2] = b;};
Material.prototype.setSpecular4f = function(r,g,b,a){this.specular[0] = r;this.specular[1] = g;this.specular[2] = b;this.specular[3] = a;};


Material.prototype.getEmission  = function(){return Color.copy(this.emission);};
Material.prototype.getAmbient   = function(){return Color.copy(this.ambient);};
Material.prototype.getDiffuse   = function(){return Color.copy(this.diffuse);};
Material.prototype.getSpecular  = function(){return Color.copy(this.specular);};
Material.prototype.getShininess = function(){return this.shininess;};

module.exports = Material;

},{"../../util/fColor":40}],22:[function(require,module,exports){
var Light = require('./fLight');

function PointLight(id)
{
    Light.apply(this,arguments);
}

PointLight.prototype = Object.create(Light.prototype);

module.exports = PointLight;
},{"./fLight":19}],23:[function(require,module,exports){
var DirectionalLight = require('./fDirectionalLight');

function SpotLight(id)
{
    DirectionalLight.apply(this,arguments);
}

SpotLight.prototype = Object.create(DirectionalLight.prototype);

SpotLight.prototype.setExponent = function(){};
SpotLight.prototype.setCutOff   = function(){};

module.exports = SpotLight;
},{"./fDirectionalLight":18}],24:[function(require,module,exports){

function Texture()
{
    this._tex = null;
    this._width = null;
    this._height = null;

    if(arguments.length == 1)this.setTexSource(arguments[0]);
}

Texture.prototype.setTexSource = function(glTex)
{
    var tex = this._tex = glTex;
    this._width  = tex.image.width;
    this._height = tex.image.height;
};

Texture.prototype.getWidth  = function(){return this._width;};
Texture.prototype.getHeight = function(){return this._height;};

module.exports = Texture;
},{}],25:[function(require,module,exports){
module.exports ="varying vec4 vVertexPosition;varying vec3 vVertexNormal;varying vec4 vVertexColor;varying vec2 vVertexTexCoord;uniform float uUseLighting;uniform float uUseMaterial;uniform float uUseTexture;uniform mat3 uNormalMatrix;uniform vec3 uAmbient;uniform sampler2D uTexImage;const int MAX_LIGHTS = 8;struct Light{ vec4 position; vec3 ambient; vec3 diffuse; vec3 specular; vec4 halfVector; vec3 spotDirection; float spotExponent; float spotCutoff; float spotCosCutoff; float constantAttenuation; float linearAttenuation; float quadraticAttenuation;};struct Material{ vec4 emission; vec4 ambient; vec4 diffuse; vec4 specular; float shininess;};struct ColorComponent{ vec4 ambient; vec4 diffuse; vec4 specular; float shininess;};vec4 phongModel(vec4 position, vec3 normal, ColorComponent color, Light light){ vec3 diff = light.position.xyz - position.xyz; vec3 s = normalize(diff); vec3 v = normalize(-position.xyz); vec3 r = reflect(-s, normal); float sDotN = max(dot(s, normal), 0.0); float dist = length(diff.xyz); float att = 1.0 / (light.constantAttenuation + light.linearAttenuation * dist + light.quadraticAttenuation * dist * dist); vec3 ambient = uAmbient * light.ambient * color.ambient.rgb; vec3 diffuse = light.diffuse * color.diffuse.rgb * sDotN ; vec3 specular = ((sDotN > 0.0) ? light.specular * pow(max(dot(r, v), 0.0), color.shininess) : vec3(0.0)); return vec4(ambient*att+ diffuse*att + specular*att,color.ambient.a);}uniform Light uLights[8];uniform Material uMaterial;void main(void){ float useLightingInv = 1.0 - uUseLighting; float useMaterialInv = 1.0 - uUseMaterial; float useTextureInv = 1.0 - uUseTexture; vec3 tVertexNormal = (gl_FrontFacing ? -1.0 : 1.0) * normalize(uNormalMatrix * vVertexNormal); vec4 vertexColor = vVertexColor * useMaterialInv; vec4 textureColor = texture2D(uTexImage,vVertexTexCoord); vec4 resultColor = vertexColor * useTextureInv + textureColor * uUseTexture; ColorComponent color = ColorComponent(uMaterial.ambient * uUseMaterial + resultColor, uMaterial.diffuse * uUseMaterial + resultColor, uMaterial.specular * uUseMaterial + resultColor, uMaterial.shininess * uUseMaterial + useMaterialInv); vec4 lightingColor = vec4(0,0,0,0); for(int i = 0;i < MAX_LIGHTS;i++) { lightingColor+=phongModel(vVertexPosition,tVertexNormal,color,uLights[i]); } gl_FragColor = uUseLighting * lightingColor + useLightingInv * (vVertexColor * useTextureInv + textureColor * uUseTexture);}";
},{}],26:[function(require,module,exports){
module.exports =
{
    loadProgram : function(gl,vertexShader,fragmentShader)
    {
        var program = gl.createProgram();

        gl.attachShader(program,vertexShader);
        gl.attachShader(program,fragmentShader);
        gl.linkProgram(program);

        if(!gl.getProgramParameter(program,gl.LINK_STATUS))
        {
            gl.deleteProgram(program);
            program = null;
        }

        return program;
    }
};
},{}],27:[function(require,module,exports){
module.exports ="attribute vec3 aVertexPosition;attribute vec3 aVertexNormal;attribute vec4 aVertexColor;attribute vec2 aVertexTexCoord;varying vec4 vVertexPosition;varying vec3 vVertexNormal;varying vec4 vVertexColor;varying vec2 vVertexTexCoord;uniform mat4 uModelViewMatrix;uniform mat4 uProjectionMatrix;uniform float uPointSize;void main(void){ vVertexPosition = uModelViewMatrix * vec4(aVertexPosition, 1.0); vVertexNormal = aVertexNormal; vVertexColor = aVertexColor; vVertexTexCoord = aVertexTexCoord; gl_Position = uProjectionMatrix * vVertexPosition; gl_PointSize = uPointSize;}";
},{}],28:[function(require,module,exports){
module.exports =
{
    PrefixShaderWeb : 'precision mediump float;',

    loadShaderFromString : function(gl,sourceString,type)
    {
        var shader = gl.createShader(type);

        gl.shaderSource(shader,sourceString);
        gl.compileShader(shader);

        if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))
        {
            throw gl.getShaderInfoLog(shader);
        }

        return shader;
    }


};
},{}],29:[function(require,module,exports){
var Vec3  = require('../../math/fVec3'),
    Color = require('../../util/fColor');

var fGLUtil = {};

fGLUtil.__bVertexGrid    = [];
fGLUtil.__bVertexGridF32 = null;
fGLUtil.__bColorGridLast = Color.BLACK();
fGLUtil.__bColorGridF32  = null;
fGLUtil.__gridSizeLast   = -1;
fGLUtil.__gridUnitLast   = -1;

fGLUtil.__bVertexGridCube    = [];
fGLUtil.__bVertexGridCubeF32 = null;
fGLUtil.__bColorGridCubeLast = Color.BLACK;
fGLUtil.__bColorGridCubeF32  = null;
fGLUtil.__gridCubeSizeLast   = -1;
fGLUtil.__gridCubeUnitLast   = -1;

fGLUtil.__bVertexAxesF32 = new Float32Array([0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1]);
fGLUtil.__bColorAxesF32  = new Float32Array([1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1]);
fGLUtil.__axesUnitLast = -1;


fGLUtil.drawGrid = function(fgl,size,unit)
{
    unit = unit || 1;

    if(unit != this.__gridUnitLast)
    {
        var bVertexGrid = this.__bVertexGrid;

        if(size != this.__gridSizeLast)
        {
            this.__genGridVertices(bVertexGrid,'__bVertexGridF32','__bColorGridF32',size);
            this.__gridSizeLast = size;
        }

        this.__scaleGridVertices(bVertexGrid,this.__bVertexGridF32,unit);
    }

    var bColorGrid32 = this.__bColorGridF32;
    var colorLast    = this.__bColorGridLast,
        colorfGL     = fgl.getColorBuffer();

    fgl.drawArrays(this.__bVertexGridF32,
                   null,
                   Color.equals(colorfGL,colorLast) ?
                   bColorGrid32 :
                   fgl.bufferColors(colorfGL,bColorGrid32),
                   null,
                   fgl.LINES);

    this.__gridSizeLast = size;
    this.__gridUnitLast = unit;

    Color.set(colorLast,colorfGL);
};

fGLUtil.__genGridVertices = function(verticesArr,verticesArrF32String,colorsArrF32String,size)
{
    var l = verticesArr.length = (size + 1) * 12;

    var i  = 0,
        sh = size * 0.5,
        ui;

    while(i < l)
    {
        ui = i / 12;

        verticesArr[i   ] = verticesArr[i+8 ] = -sh;
        verticesArr[i+1 ] = verticesArr[i+4 ] = verticesArr[i+7 ] = verticesArr[i+10] = 0;
        verticesArr[i+2 ] = verticesArr[i+5 ] = verticesArr[i+6 ] = verticesArr[i+9 ] =-sh + ui;
        verticesArr[i+3 ] = verticesArr[i+11] = sh;

        i += 12;
    }

    this[verticesArrF32String] = new Float32Array(verticesArr);
    this[colorsArrF32String]   = new Float32Array(l / 3 * 4);
};

fGLUtil.__scaleGridVertices = function(verticesArr,verticesArrF32,unit)
{
    var i = -1;
    var l = verticesArr.length;

    while(++i < l)verticesArrF32[i] = verticesArr[i] * unit;
};

fGLUtil.drawAxes = function(fgl,unit)
{
    unit = unit || 1;

    var bVerticesAxes = this.__bVertexAxesF32;
    var drawModeLast  = fgl.getDrawMode();

    if(unit != this.__axesUnitLast){bVerticesAxes[3 ] = bVerticesAxes[10] = bVerticesAxes[17] = unit;}

    fgl.drawMode(drawModeLast);
    fgl.drawArrays(bVerticesAxes,null,this.__bColorAxesF32,null,fgl.LINES);

    this.__axesUnitLast = unit;
    fgl.drawMode(drawModeLast);
};

fGLUtil.drawGridCube = function(fgl,size,unit)
{
    unit = unit || 1;

    if(unit != this.__gridCubeUnitLast)
    {
        var bVertexGrid = this.__bVertexGridCube;

        if(size != this.__gridCubeSizeLast)
        {
            this.__genGridVertices(bVertexGrid,'__bVertexGridCubeF32','__bColorGridCubeF32',size);
            this.__gridCubeSizeLast = size;
        }

        this.__scaleGridVertices(bVertexGrid,this.__bVertexGridCubeF32,unit);
    }

    var bColorGrid32 = this.__bColorGridCubeF32;
    var colorLast    = this.__bColorGridCubeLast,
        colorfGL     = fgl.getColorBuffer();

    var bVertexGridCubeF32 = this.__bVertexGridCubeF32,
        color              = Color.equals(colorfGL,colorLast) ?
                             bColorGrid32 :
                             fgl.bufferColors(colorfGL,bColorGrid32);

    var sh  = size * 0.5 * unit,
        pih = Math.PI * 0.5;

    //TODO: merge

    fgl.pushMatrix();
    fgl.translate3f(0,-sh,0);
    fgl.drawArrays(bVertexGridCubeF32,null,color,null,fgl.LINES);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(0,sh,0);
    fgl.rotate3f(0,pih,0);
    fgl.drawArrays(bVertexGridCubeF32,null,color,null,fgl.LINES);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(0,0,-sh);
    fgl.rotate3f(pih,0,0);
    fgl.drawArrays(bVertexGridCubeF32,null,color,null,fgl.LINES);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(0,0,sh);
    fgl.rotate3f(pih,0,0);
    fgl.drawArrays(bVertexGridCubeF32,null,color,null,fgl.LINES);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(sh,0,0);
    fgl.rotate3f(pih,0,pih);
    fgl.drawArrays(bVertexGridCubeF32,null,color,null,fgl.LINES);
    fgl.popMatrix();

    fgl.pushMatrix();
    fgl.translate3f(-sh,0,0);
    fgl.rotate3f(pih,0,pih);
    fgl.drawArrays(bVertexGridCubeF32,null,color,null,fgl.LINES);
    fgl.popMatrix();

    this.__gridCubeSizeLast = size;
    this.__gridCubeUnitLast = unit;

    Color.set(colorLast,colorfGL);
};


fGLUtil.pyramid = function(kgl,size)
{
    kgl.pushMatrix();
    kgl.scale3f(size,size,size);
    kgl.drawElements(this.__bVertexPyramid,this.__bNormalPyramid,kgl.bufferColors(kgl._bColor,this.__bColorPyramid),null,this.__bIndexPyramid,kgl._drawMode);
    kgl.popMatrix();
};



fGLUtil.octahedron = function(kgl,size)
{
    kgl.pushMatrix();
    kgl.scale3f(size,size,size);
    kgl.drawElements(this.__bVertexOctahedron, this.__bNormalOctahedron,kgl.bufferColors(kgl._bColor, this.__bColorOctahedron),null, this.__bIndexOctahedron,kgl._drawMode);
    kgl.popMatrix();
};

fGLUtil.__bVertexOctahedron = new Float32Array([-0.707,0,0, 0,0.707,0, 0,0,-0.707, 0,0,0.707, 0,-0.707,0, 0.707,0,0]);
fGLUtil.__bNormalOctahedron = new Float32Array([1, -1.419496076238147e-9, 1.419496076238147e-9, -1.419496076238147e-9, -1, 1.419496076238147e-9, -1.419496076238147e-9, -1.419496076238147e-9, 1, 1.419496076238147e-9, 1.419496076238147e-9, -1, -1.419496076238147e-9, 1, 1.419496076238147e-9, -1, -1.419496076238147e-9, 1.419496076238147e-9]);
fGLUtil.__bColorOctahedron  = new Float32Array(fGLUtil.__bVertexOctahedron.length / Vec3.SIZE * Color.SIZE);
fGLUtil.__bIndexOctahedron  = new Uint16Array([3,4,5,3,5,1,3,1,0,3,0,4,4,0,2,4,2,5,2,0,1,5,2,1]);
fGLUtil.__bVertexPyramid    = new Float32Array([ 0.0,1.0,0.0,-1.0,-1.0,1.0,1.0,-1.0,1.0,0.0,1.0,0.0,1.0,-1.0,1.0,1.0,-1.0,-1.0,0.0,1.0,0.0,1.0,-1.0,-1.0,-1.0,-1.0,-1.0,0.0,1.0,0.0,-1.0,-1.0,-1.0,-1.0,-1.0,1.0,-1.0,-1.0,1.0,1.0,-1.0,1.0,1.0,-1.0,-1.0,-1.0,-1.0,-1.0]);
fGLUtil.__bNormalPyramid    = new Float32Array([0, -0.4472135901451111, -0.8944271802902222, 0, -0.4472135901451111, -0.8944271802902222, 0, -0.4472135901451111, -0.8944271802902222, -0.8944271802902222, -0.4472135901451111, 0, -0.8944271802902222, -0.4472135901451111, 0, -0.8944271802902222, -0.4472135901451111, 0, 0, -0.4472135901451111, 0.8944271802902222, 0, -0.4472135901451111, 0.8944271802902222, 0, -0.4472135901451111, 0.8944271802902222, 0.8944271802902222, -0.4472135901451111, 0, 0.8944271802902222, -0.4472135901451111, 0, 0.8944271802902222, -0.4472135901451111, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0]);
fGLUtil.__bColorPyramid     = new Float32Array(fGLUtil.__bVertexPyramid.length / Vec3.SIZE * Color.SIZE);
fGLUtil.__bIndexPyramid     = new Uint16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,12,15,14]);

module.exports = fGLUtil;
},{"../../math/fVec3":35,"../../util/fColor":40}],30:[function(require,module,exports){

//for node debug
var Mat33 =
{
    make : function()
    {
        return new Float32Array([1,0,0,
                                 0,1,0,
                                 0,0,1]);
    },

    transpose : function(out,a)
    {

        if (out === a) {
            var a01 = a[1], a02 = a[2], a12 = a[5];
            out[1] = a[3];
            out[2] = a[6];
            out[3] = a01;
            out[5] = a[7];
            out[6] = a02;
            out[7] = a12;
        } else {
            out[0] = a[0];
            out[1] = a[3];
            out[2] = a[6];
            out[3] = a[1];
            out[4] = a[4];
            out[5] = a[7];
            out[6] = a[2];
            out[7] = a[5];
            out[8] = a[8];
        }

        return out;
    }

};

module.exports = Mat33;
},{}],31:[function(require,module,exports){
var fMath = require('./fMath'),
    Mat33 = require('./fMat33');

//for node debug
var Mat44 =
{
    make : function()
    {
        return new Float32Array([ 1, 0, 0, 0,
                                  0, 1, 0, 0,
                                  0, 0, 1, 0,
                                  0, 0, 0, 1 ]);
    },

    set : function(m0,m1)
    {
        m0[ 0] = m1[ 0];
        m0[ 1] = m1[ 1];
        m0[ 2] = m1[ 2];
        m0[ 3] = m1[ 3];

        m0[ 4] = m1[ 4];
        m0[ 5] = m1[ 5];
        m0[ 6] = m1[ 6];
        m0[ 7] = m1[ 7];

        m0[ 8] = m1[ 8];
        m0[ 9] = m1[ 9];
        m0[10] = m1[10];
        m0[11] = m1[11];

        m0[12] = m1[12];
        m0[13] = m1[13];
        m0[14] = m1[14];
        m0[15] = m1[15];



        return m0;
    },

    identity : function(m)
    {
        m[ 0] = 1; m[ 1] = m[ 2] = m[ 3] = 0;
        m[ 5] = 1; m[ 4] = m[ 6] = m[ 7] = 0;
        m[10] = 1; m[ 8] = m[ 9] = m[11] = 0;
        m[15] = 1; m[12] = m[13] = m[14] = 0;

        return m;
    },

    copy : function(m)
    {
        return new Float32Array(m);
    },

    makeScale : function(sx,sy,sz,m)
    {
        m = m || this.make();

        m[0]  = sx;
        m[5]  = sy;
        m[10] = sz;

        return m;
    },

    makeTranslate : function(tx,ty,tz,m)
    {
        m = m || this.make();

        m[12] = tx;
        m[13] = ty;
        m[14] = tz;

        return m;
    },

    makeRotationX : function(a,m)
    {
        m = m || this.make();

        var sin = Math.sin(a),
            cos = Math.cos(a);

        m[5]  = cos;
        m[6]  = -sin;
        m[9]  = sin;
        m[10] = cos;

        return m;
    },

    makeRotationY : function(a,m)
    {
        m = m || this.make();

        var sin = Math.sin(a),
            cos = Math.cos(a);

        m[0] = cos;
        m[2] = sin;
        m[8] = -sin;
        m[10]= cos;

        return m;
    },

    makeRotationZ : function(a,m)
    {
        m = m || this.make();

        var sin = Math.sin(a),
            cos = Math.cos(a);

        m[0] = cos;
        m[1] = sin;
        m[4] = -sin;
        m[5] = cos;

        return m;
    },

    makeRotationXYZ : function(ax,ay,az,m)
    {
        m = m || this.make();

        var cosx = Math.cos(ax),
            sinx = Math.sin(ax),
            cosy = Math.cos(ay),
            siny = Math.sin(ay),
            cosz = Math.cos(az),
            sinz = Math.sin(az);

        m[ 0] =  cosy*cosz;
        m[ 1] = -cosx*sinz+sinx*siny*cosz;
        m[ 2] =  sinx*sinz+cosx*siny*cosz;

        m[ 4] =  cosy*sinz;
        m[ 5] =  cosx*cosz+sinx*siny*sinz;
        m[ 6] = -sinx*cosz+cosx*siny*sinz;

        m[ 8] = -siny;
        m[ 9] =  sinx*cosy;
        m[10] =  cosx*cosy;


        return m;
    },

    //temp from glMatrix
    makeRotationOnAxis : function(rot,x,y,z,out)
    {
        var len = Math.sqrt(x * x + y * y + z * z);

        if(Math.sqrt(x * x + y * y + z * z) < fMath.EPSILON) { return null; }

        var s, c, t,
            a00, a01, a02, a03,
            a10, a11, a12, a13,
            a20, a21, a22, a23,
            b00, b01, b02,
            b10, b11, b12,
            b20, b21, b22;


        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;

        s = Math.sin(rot);
        c = Math.cos(rot);
        t = 1 - c;

        out = out || Mat44.make();

        a00 = 1; a01 = 0; a02 = 0; a03 = 0;
        a10 = 0; a11 = 1; a12 = 0; a13 = 0;
        a20 = 0; a21 = 0; a22 = 1; a23 = 0;

        b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
        b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
        b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

        out[0 ] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1 ] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2 ] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3 ] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4 ] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5 ] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6 ] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7 ] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8 ] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9 ] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;

        return out;
},

    multPre : function(m0,m1,m)
    {
        m = m || this.make();

        var m000 = m0[ 0],m001 = m0[ 1],m002 = m0[ 2],m003 = m0[ 3],
            m004 = m0[ 4],m005 = m0[ 5],m006 = m0[ 6],m007 = m0[ 7],
            m008 = m0[ 8],m009 = m0[ 9],m010 = m0[10],m011 = m0[11],
            m012 = m0[12],m013 = m0[13],m014 = m0[14],m015 = m0[15];

        var m100 = m1[ 0],m101 = m1[ 1],m102 = m1[ 2],m103 = m1[ 3],
            m104 = m1[ 4],m105 = m1[ 5],m106 = m1[ 6],m107 = m1[ 7],
            m108 = m1[ 8],m109 = m1[ 9],m110 = m1[10],m111 = m1[11],
            m112 = m1[12],m113 = m1[13],m114 = m1[14],m115 = m1[15];

        m[ 0] = m000*m100 + m001*m104 + m002*m108 + m003*m112;
        m[ 1] = m000*m101 + m001*m105 + m002*m109 + m003*m113;
        m[ 2] = m000*m102 + m001*m106 + m002*m110 + m003*m114;
        m[ 3] = m000*m103 + m001*m107 + m002*m111 + m003*m115;

        m[ 4] = m004*m100 + m005*m104 + m006*m108 + m007*m112;
        m[ 5] = m004*m101 + m005*m105 + m006*m109 + m007*m113;
        m[ 6] = m004*m102 + m005*m106 + m006*m110 + m007*m114;
        m[ 7] = m004*m103 + m005*m107 + m006*m111 + m007*m115;

        m[ 8] = m008*m100 + m009*m104 + m010*m108 + m011*m112;
        m[ 9] = m008*m101 + m009*m105 + m010*m109 + m011*m113;
        m[10] = m008*m102 + m009*m106 + m010*m110 + m011*m114;
        m[11] = m008*m103 + m009*m107 + m010*m111 + m011*m115;

        m[12] = m012*m100 + m013*m104 + m014*m108 + m015*m112;
        m[13] = m012*m101 + m013*m105 + m014*m109 + m015*m113;
        m[14] = m012*m102 + m013*m106 + m014*m110 + m015*m114;
        m[15] = m012*m103 + m013*m107 + m014*m111 + m015*m115;




        return m;
    },

    mult : function(m0,m1,m)
    {
        return this.multPre(m0,m1);
    },

    multPost : function(m0,m1,m)
    {
        return this.multPre(m1,m0,m);
    },

    invert : function(m,o)
    {
        o = o || m;

        var det;

        var m00 = m[ 0], m01 = m[ 1], m02 = m[ 2], m03 = m[ 3],
            m04 = m[ 4], m05 = m[ 5], m06 = m[ 6], m07 = m[ 7],
            m08 = m[ 8], m09 = m[ 9], m10 = m[10], m11 = m[11],
            m12 = m[12], m13 = m[13], m14 = m[14], m15 = m[15];

        //TODO: add caching

        o[ 0] = m05 * m10 * m15 -
            m05 * m11 * m14 -
            m09 * m06 * m15 +
            m09 * m07 * m14 +
            m13 * m06 * m11 -
            m13 * m07 * m10;

        o[ 4] = -m04 * m10 * m15 +
            m04 * m11 * m14 +
            m08 * m06 * m15 -
            m08 * m07 * m14 -
            m12 * m06 * m11 +
            m12 * m07 * m10;

        o[ 8] = m04 * m09 * m15 -
            m04 * m11 * m13 -
            m08 * m05 * m15 +
            m08 * m07 * m13 +
            m12 * m05 * m11 -
            m12 * m07 * m09;

        o[12] = -m04 * m09 * m14 +
            m04 * m10 * m13 +
            m08 * m05 * m14 -
            m08 * m06 * m13 -
            m12 * m05 * m10 +
            m12 * m06 * m09;

        o[ 1] = -m01 * m10 * m15 +
            m01 * m11 * m14 +
            m09 * m02 * m15 -
            m09 * m03 * m14 -
            m13 * m02 * m11 +
            m13 * m03 * m10;

        o[ 5] = m00 * m10 * m15 -
            m00 * m11 * m14 -
            m08 * m02 * m15 +
            m08 * m03 * m14 +
            m12 * m02 * m11 -
            m12 * m03 * m10;

        o[ 9] = -m00 * m09 * m15 +
            m00 * m11 * m13 +
            m08 * m01 * m15 -
            m08 * m03 * m13 -
            m12 * m01 * m11 +
            m12 * m03 * m09;

        o[13] = m00 * m09 * m14 -
            m00 * m10 * m13 -
            m08 * m01 * m14 +
            m08 * m02 * m13 +
            m12 * m01 * m10 -
            m12 * m02 * m09;

        o[ 2] = m01 * m06 * m15 -
            m01 * m07 * m14 -
            m05 * m02 * m15 +
            m05 * m03 * m14 +
            m13 * m02 * m07 -
            m13 * m03 * m06;

        o[ 6] = -m00 * m06 * m15 +
            m00 * m07 * m14 +
            m04 * m02 * m15 -
            m04 * m03 * m14 -
            m12 * m02 * m07 +
            m12 * m03 * m06;

        o[10] = m00 * m05 * m15 -
            m00 * m07 * m13 -
            m04 * m01 * m15 +
            m04 * m03 * m13 +
            m12 * m01 * m07 -
            m12 * m03 * m05;

        o[14] = -m00 * m05 * m14 +
            m00 * m06 * m13 +
            m04 * m01 * m14 -
            m04 * m02 * m13 -
            m12 * m01 * m06 +
            m12 * m02 * m05;

        o[ 3] = -m01 * m06 * m11 +
            m01 * m07 * m10 +
            m05 * m02 * m11 -
            m05 * m03 * m10 -
            m09 * m02 * m07 +
            m09 * m03 * m06;

        o[ 7] = m00 * m06 * m11 -
            m00 * m07 * m10 -
            m04 * m02 * m11 +
            m04 * m03 * m10 +
            m08 * m02 * m07 -
            m08 * m03 * m06;

        o[11] = -m00 * m05 * m11 +
            m00 * m07 * m09 +
            m04 * m01 * m11 -
            m04 * m03 * m09 -
            m08 * m01 * m07 +
            m08 * m03 * m05;

        o[15] = m00 * m05 * m10 -
            m00 * m06 * m09 -
            m04 * m01 * m10 +
            m04 * m02 * m09 +
            m08 * m01 * m06 -
            m08 * m02 * m05;

        det = m00 * o[0] + m01 * o[4] + m02 * o[8] + m03 * o[12];

        if (det == 0) return null;

        det = 1.0 / det;

        o[ 0] *= det;
        o[ 1] *= det;
        o[ 2] *= det;
        o[ 3] *= det;
        o[ 4] *= det;
        o[ 5] *= det;
        o[ 6] *= det;
        o[ 7] *= det;
        o[ 8] *= det;
        o[ 9] *= det;
        o[10] *= det;
        o[11] *= det;
        o[12] *= det;
        o[13] *= det;
        o[14] *= det;
        o[15] *= det;

        return o;
    },


    inverted : function(m)
    {
        /*
        var inv = this.make();
        var det;

        var m00 = m[ 0], m01 = m[ 1], m02 = m[ 2], m03 = m[ 3],
            m04 = m[ 4], m05 = m[ 5], m06 = m[ 6], m07 = m[ 7],
            m08 = m[ 8], m09 = m[ 9], m10 = m[10], m11 = m[11],
            m12 = m[12], m13 = m[13], m14 = m[14], m15 = m[15];

        inv[ 0] =  m05  * m10  * m15 -
                   m05  * m11  * m14 -
                   m09  * m06  * m15 +
                   m09  * m07  * m14 +
                   m13  * m06  * m11 -
                   m13  * m07  * m10;

        inv[ 4] = -m04  * m10  * m15 +
                   m04  * m11  * m14 +
                   m08  * m06  * m15 -
                   m08  * m07  * m14 -
                   m12  * m06  * m11 +
                   m12  * m07  * m10;

        inv[ 8] =  m04  * m09  * m15 -
                   m04  * m11  * m13 -
                   m08  * m05  * m15 +
                   m08  * m07  * m13 +
                   m12  * m05  * m11 -
                   m12  * m07  * m09;

        inv[12] = -m04  * m09  * m14 +
                   m04  * m10  * m13 +
                   m08  * m05  * m14 -
                   m08  * m06  * m13 -
                   m12  * m05  * m10 +
                   m12  * m06  * m09;

        inv[ 1] = -m01  * m10  * m15 +
                   m01  * m11  * m14 +
                   m09  * m02  * m15 -
                   m09  * m03  * m14 -
                   m13  * m02  * m11 +
                   m13  * m03  * m10;

        inv[ 5] =  m00  * m10  * m15 -
                   m00  * m11  * m14 -
                   m08  * m02  * m15 +
                   m08  * m03  * m14 +
                   m12  * m02  * m11 -
                   m12  * m03  * m10;

        inv[ 9] = -m00  * m09  * m15 +
                   m00  * m11  * m13 +
                   m08  * m01  * m15 -
                   m08  * m03  * m13 -
                   m12  * m01  * m11 +
                   m12  * m03  * m09;

        inv[13] =  m00  * m09  * m14 -
                   m00  * m10  * m13 -
                   m08  * m01  * m14 +
                   m08  * m02  * m13 +
                   m12  * m01  * m10 -
                   m12  * m02  * m09;

        inv[ 2] =  m01  * m06  * m15 -
                   m01  * m07  * m14 -
                   m05  * m02  * m15 +
                   m05  * m03  * m14 +
                   m13  * m02  * m07 -
                   m13  * m03  * m06;

        inv[ 6] = -m00  * m06  * m15 +
                   m00  * m07  * m14 +
                   m04  * m02  * m15 -
                   m04  * m03  * m14 -
                   m12  * m02  * m07 +
                   m12  * m03  * m06;

        inv[10] =  m00  * m05  * m15 -
                   m00  * m07  * m13 -
                   m04  * m01  * m15 +
                   m04  * m03  * m13 +
                   m12  * m01  * m07 -
                   m12  * m03  * m05;

        inv[14] = -m00  * m05  * m14 +
                   m00  * m06  * m13 +
                   m04  * m01  * m14 -
                   m04  * m02  * m13 -
                   m12  * m01  * m06 +
                   m12  * m02  * m05;

        inv[ 3] = -m01  * m06  * m11 +
                   m01  * m07  * m10 +
                   m05  * m02  * m11 -
                   m05  * m03  * m10 -
                   m09  * m02  * m07 +
                   m09  * m03  * m06;

        inv[ 7] =  m00  * m06  * m11 -
                   m00  * m07  * m10 -
                   m04  * m02  * m11 +
                   m04  * m03  * m10 +
                   m08  * m02  * m07 -
                   m08  * m03  * m06;

        inv[11] = -m00  * m05  * m11 +
                   m00  * m07  * m09 +
                   m04  * m01  * m11 -
                   m04  * m03  * m09 -
                   m08  * m01  * m07 +
                   m08  * m03  * m05;

        inv[15] =  m00  * m05  * m10 -
                   m00  * m06  * m09 -
                   m04  * m01  * m10 +
                   m04  * m02  * m09 +
                   m08  * m01  * m06 -
                   m08  * m02  * m05;

        det = m00 * inv[0] + m01 * inv[4] + m02 * inv[8] + m03 * inv[12];

        if(det == 0) return null;

        det = 1.0 / det;

        inv[ 0]*=det;
        inv[ 1]*=det;
        inv[ 2]*=det;
        inv[ 3]*=det;
        inv[ 4]*=det;
        inv[ 5]*=det;
        inv[ 6]*=det;
        inv[ 7]*=det;
        inv[ 8]*=det;
        inv[ 9]*=det;
        inv[10]*=det;
        inv[11]*=det;
        inv[12]*=det;
        inv[13]*=det;
        inv[14]*=det;
        inv[15]*=det;


        return inv;

        */

        return this.invert(this.copy(m));


    },

    transposed : function(m)
    {
        var mo = this.make();

        mo[0 ] = m[0 ];
        mo[1 ] = m[4 ];
        mo[2 ] = m[8 ];
        mo[3 ] = m[12];

        mo[4 ] = m[1 ];
        mo[5 ] = m[5 ];
        mo[6 ] = m[9 ];
        mo[7 ] = m[13];

        mo[8 ] = m[2 ];
        mo[9 ] = m[6 ];
        mo[10] = m[10];
        mo[11] = m[14];

        mo[12] = m[3 ];
        mo[13] = m[7 ];
        mo[14] = m[11];
        mo[15] = m[15];

        return mo;
    },

    toMat33Inversed : function(mat44,mat33)
    {
        var a00 = mat44[0], a01 = mat44[1], a02 = mat44[2];
        var a10 = mat44[4], a11 = mat44[5], a12 = mat44[6];
        var a20 = mat44[8], a21 = mat44[9], a22 = mat44[10];

        var b01 = a22*a11-a12*a21;
        var b11 = -a22*a10+a12*a20;
        var b21 = a21*a10-a11*a20;

        var d = a00*b01 + a01*b11 + a02*b21;
        if (!d) { return null; }
        var id = 1/d;


        if(!mat33) { mat33 = Mat33.make(); }

        mat33[0] = b01*id;
        mat33[1] = (-a22*a01 + a02*a21)*id;
        mat33[2] = (a12*a01 - a02*a11)*id;
        mat33[3] = b11*id;
        mat33[4] = (a22*a00 - a02*a20)*id;
        mat33[5] = (-a12*a00 + a02*a10)*id;
        mat33[6] = b21*id;
        mat33[7] = (-a21*a00 + a01*a20)*id;
        mat33[8] = (a11*a00 - a01*a10)*id;

        return mat33;


    },

    multVec3 : function(m,v)
    {
        var x = v[0],
            y = v[1],
            z = v[2];

        v[0] = m[ 0] * x + m[ 4] * y + m[ 8] * z + m[12];
        v[1] = m[ 1] * x + m[ 5] * y + m[ 9] * z + m[13];
        v[2] = m[ 2] * x + m[ 6] * y + m[10] * z + m[14];

        return v;
    },

    mutlVec3A : function(m,a,i)
    {
        i *= 3;

        var x = a[i  ],
            y = a[i+1],
            z = a[i+2];

        a[i  ] = m[ 0] * x + m[ 4] * y + m[ 8] * z + m[12];
        a[i+1] = m[ 1] * x + m[ 5] * y + m[ 9] * z + m[13];
        a[i+2] = m[ 2] * x + m[ 6] * y + m[10] * z + m[14];
    },

    multVec3AI : function(m,a,i)
    {
        var x = a[i  ],
            y = a[i+1],
            z = a[i+2];

        a[i  ] = m[ 0] * x + m[ 4] * y + m[ 8] * z + m[12];
        a[i+1] = m[ 1] * x + m[ 5] * y + m[ 9] * z + m[13];
        a[i+2] = m[ 2] * x + m[ 6] * y + m[10] * z + m[14];
    },

    multVec4 : function(m,v)
    {
        var x = v[0],
            y = v[1],
            z = v[2],
            w = v[3];

        v[0] = m[ 0] * x + m[ 4] * y + m[ 8] * z + m[12] * w;
        v[1] = m[ 1] * x + m[ 5] * y + m[ 9] * z + m[13] * w;
        v[2] = m[ 2] * x + m[ 6] * y + m[10] * z + m[14] * w;
        v[3] = m[ 3] * x + m[ 7] * y + m[11] * z + m[15] * w;

        return v;


    },

    multVec4A : function(m,a,i)
    {
        i *= 3;

        var x = a[i  ],
            y = a[i+1],
            z = a[i+2],
            w = a[i+3];

        a[i  ] = m[ 0] * x + m[ 4] * y + m[ 8] * z + m[12] * w;
        a[i+1] = m[ 1] * x + m[ 5] * y + m[ 9] * z + m[13] * w;
        a[i+2] = m[ 2] * x + m[ 6] * y + m[10] * z + m[14] * w;
        a[i+3] = m[ 3] * x + m[ 7] * y + m[11] * z + m[15] * w;

    },

    multVec4AI : function(m,a,i)
    {
        var x = a[i  ],
            y = a[i+1],
            z = a[i+2],
            w = a[i+3];

        a[i  ] = m[ 0] * x + m[ 4] * y + m[ 8] * z + m[12] * w;
        a[i+1] = m[ 1] * x + m[ 5] * y + m[ 9] * z + m[13] * w;
        a[i+2] = m[ 2] * x + m[ 6] * y + m[10] * z + m[14] * w;
        a[i+3] = m[ 3] * x + m[ 7] * y + m[11] * z + m[15] * w;

    },

    isFloatEqual : function(m0,m1)
    {
        var i = -1;
        while(++i<16)
        {
            if(!fMath.isFloatEqual(m0[i],m1[i]))return false;
        }
        return true;

    },

    toString : function(m)
    {
        return '[' + m[ 0] + ', ' + m[ 1] + ', ' + m[ 2] + ', ' + m[ 3] + ',\n' +
            ' ' + m[ 4] + ', ' + m[ 5] + ', ' + m[ 6] + ', ' + m[ 7] + ',\n' +
            ' ' + m[ 8] + ', ' + m[ 9] + ', ' + m[10] + ', ' + m[11] + ',\n' +
            ' ' + m[12] + ', ' + m[13] + ', ' + m[14] + ', ' + m[15] + ']';
    }
};

module.exports = Mat44;
},{"./fMat33":30,"./fMath":32}],32:[function(require,module,exports){
var fMath =
{
    PI          : Math.PI,
    HALF_PI     : Math.PI * 0.5,
    QUARTER_PI  : Math.PI * 0.25,
    TWO_PI      : Math.PI * 2,
    EPSILON     : 0.0001,

    lerp        : function(a,b,v){return (a*(1-v))+(b*v);},
    cosIntrpl   : function(a,b,v){v = (1 - Math.cos(v * Math.PI)) * 0.5;return (a * (1-v) + b * v);},
    cubicIntrpl : function(a,b,c,d,v)
    {
        var a0,b0,c0,d0,vv;

        vv = v * v;
        a0 = d - c - a + b;
        b0 = a - b - a0;
        c0 = c - a;
        d0 = b;

        return a0*v*vv+b0*vv+c0*v+d0;
    },

    hermiteIntrpl : function(a,b,c,d,v,tension,bias)
    {
        var v0, v1, v2, v3,
            a0, b0, c0, d0;

        tension = (1.0 - tension) * 0.5;

        var biasp = 1 + bias,
            biasn = 1 - bias;

        v2  = v * v;
        v3  = v2 * v;

        v0  = (b - a) * biasp * tension;
        v0 += (c - b) * biasn * tension;
        v1  = (c - b) * biasp * tension;
        v1 += (d - c) * biasn * tension;

        a0  = 2 * v3 - 3 * v2 + 1;
        b0  = v3 - 2 * v2 + v;
        c0  = v3 - v2;
        d0  = -2 * v3 + 3 * v2;

        return a0 * b + b0 * v0 + c0 * v1 + d0 * c;
    },

    randomFloat : function()
    {
        var r;

        switch (arguments.length)
        {
            case 0: r = Math.random();break;
            case 1: r = Math.random() * arguments[0];break;
            case 2: r = arguments[0] + (arguments[1]-arguments[0]) * Math.random();break;
        }

        return r;
    },

    randomInteger : function()
    {
        var r;

        switch (arguments.length)
        {
            case 0: r = 0.5 + Math.random();break;
            case 1: r = 0.5 + Math.random()*arguments[0];break;
            case 2: r = arguments[0] + ( 1 + arguments[1] - arguments[0]) * Math.random();break;
        }

        return Math.floor(r);
    },

    constrain : function()
    {
        var r;

        switch (arguments.length)
        {
            case 2: arguments[0] = (arguments[0] > arguments[1]) ? arguments[1] : arguments[0];break;
            case 3: arguments[0] = (arguments[0] > arguments[2]) ? arguments[2] : (arguments[0] < arguments[1]) ? arguments[1] :arguments[0];break;
        }

        return arguments[0];
    },

    normalize             : function(value,start,end){return (value - start) / (end - start);},
    map                   : function(value,inStart,inEnd,outStart,outEnd){return outStart + (outEnd - outStart) * normalize(value,inStart,inEnd);},
    sin                   : function(value){return Math.sin(value);},
    cos                   : function(value){return Math.cos(value);},
    clamp                 : function(value,min,max){return Math.max(min,Math.min(max,value));},
    saw                   : function(n){return 2 * (n  - Math.floor(0.5 + n ));},
    tri                   : function(n){return 1-4*Math.abs(0.5-this.frac(0.5*n+0.25));},
    rect                  : function(n){var a = Math.abs(n);return (a > 0.5) ? 0 : (a == 0.5) ? 0.5 : (a < 0.5) ? 1 : -1;},
    frac                  : function(n){return n - Math.floor(n);},
    sgn                   : function(n){return n/Math.abs(n);},
    abs                   : function(n){return Math.abs(n);},
    min                   : function(n){return Math.min(n);},
    max                   : function(n){return Math.max(n);},
    atan                  : function(n){return Math.atan(n);},
    atan2                 : function(y,x){return Math.atan2(y,x);},
    round                 : function(n){return Math.round(n);},
    floor                 : function(n){return Math.floor(n);},
    tan                   : function(n){return Math.tan(n);},
    rad2deg               : function(radians){return radians * (180 / Math.PI);},
    deg2rad               : function(degree){return degree * (Math.PI / 180); },
    sqrt                  : function(value){return Math.sqrt(value);},
    GreatestCommonDivisor : function(a,b){return (b == 0) ? a : this.GreatestCommonDivisor(b, a % b);},
    isFloatEqual          : function(a,b){return (Math.abs(a-b)<this.EPSILON);},
    isPowerOfTwo          : function(a){return (a&(a-1))==0;},
    swap                  : function(a,b){var t = a;a = b; b = a;},
    pow                   : function(x,y){return Math.pow(x,y);},
    log                   : function(n){return Math.log(n);},
    cosh                  : function(n){return (Math.pow(Math.E,n) + Math.pow(Math.E,-n))*0.5;},
    exp                   : function(n){return Math.exp(n);},
    stepSmooth            : function(n){return n*n*(3-2*n);},
    stepSmoothSquared     : function(n){return this.stepSmooth(n) * this.stepSmooth(n);},
    stepSmoothInvSquared  : function(n){return 1-(1-this.stepSmooth(n))*(1-this.stepSmooth(n));},
    stepSmoothCubed       : function(n){return this.stepSmooth(n)*this.stepSmooth(n)*this.stepSmooth(n)*this.stepSmooth(n);},
    stepSmoothInvCubed    : function(n){return 1-(1-this.stepSmooth(n))*(1-this.stepSmooth(n))*(1-this.stepSmooth(n))*(1-this.stepSmooth(n));},
    stepSquared           : function(n){return n*n;},
    stepInvSquared        : function(n){return 1-(1-n)*(1-n);},
    stepCubed             : function(n){return n*n*n*n;},
    stepInvCubed          : function(n){return 1-(1-n)*(1-n)*(1-n)*(1-n);},
    catmullrom            : function(a,b,c,d,i){ return a * ((-i + 2) * i - 1) * i * 0.5 +
                                                        b * (((3 * i - 5) * i) * i + 2) * 0.5 +
                                                        c * ((-3 * i + 4) * i + 1) * i * 0.5 +
                                                        d * ((i - 1) * i * i) * 0.5;}
};


module.exports = fMath;
},{}],33:[function(require,module,exports){
var Quaternion =
{
    make     : function(n,v){return new Float32Array([n, v[0],v[1],v[2]]);},
    make4f   : function(n,x,y,z){return new Float32Array([n,x,y,z]);},
    zero     : function(){return new Float32Array([0,0,0,0]);},
    set      : function(q0,q1)
    {
        q0[0] = q1[0];
        q0[1] = q1[1];
        q0[2] = q1[2];
        q0[3] = q1[3];
    },

    set4f    : function(q,n,x,y,z)
    {
        q[0] = n;
        q[1] = x;
        q[2] = y;
        q[3] = z;

    },

    copy     : function(q){return new Float32Array(q);},

    length   : function(q){var n = q[0],x = q[1],y = q[2],z = q[3]; return Math.sqrt(n*n+x*x+y*y+z*z);},
    vector   : function(q){return new Float32Array(q[1],q[2],q[3]);},
    scalar   : function(q){return q[0];},



    add : function(q0,q1)
    {
        q0[0] = q0[0] + q1[0];
        q0[1] = q0[1] + q1[1];
        q0[2] = q0[2] + q1[2];
        q0[3] = q0[3] + q1[3];
    },

    sub : function(q0,q1)
    {
        q0[0] = q0[0] - q1[0];
        q0[1] = q0[1] - q1[1];
        q0[2] = q0[2] - q1[2];
        q0[3] = q0[3] - q1[3];
    },

    scale : function(q,n)
    {
        q[0] *= n;
        q[1] *= n;
        q[2] *= n;
        q[3] *= n;
    },

    conjugate : function(q)
    {
        q[1]*=-1;
        q[2]*=-1;
        q[3]*=-1;
    },

    mult : function(q0,q1)
    {
        var n0 = q0[0],
            x0 = q0[1],
            y0 = q0[2],
            z0 = q0[3],
            n1 = q1[0],
            x1 = q1[1],
            y1 = q1[2],
            z1 = q1[3];

        q0[0] = n0 * n1 - x0 * x1 - y0 * y1 - z0 * z1;
        q0[1] = n0 * x1 - x0 * n1 - y0 * z1 - z0 * y1;
        q0[2] = n0 * y1 - y0 * n1 - z0 * x1 - x0 * z1;
        q0[3] = n0 * z1 - z0 * n1 - x0 * y1 - y0 * z1;
    },

    multVec : function(q,v)
    {
        var qn = q[0],
            qx = q[1],
            qy = q[2],
            qz = q[3];

        var x = v[0],
            y = v[1],
            z = v[2];

        q[0] = -(qx*x + qy*y + qz*z);
        q[1] = qn * x + qy * z - qz * y;
        q[2] = qn * y + qz * x - qx * z;
        q[3] = qn * z + qx * y - qy * x;
    },

    angle : function(q)
    {
        return 2 * acos(q[0]);
    },

    axis : function(q)
    {
        var x = q[0],
            y = q[1],
            z = q[2];

        var l = Math.sqrt(x*x + y*y + z*z);

        return l != 0 ? new Float32Array([x/l,y/l,z/l]) : new Float32Array([0,0,0]);
    },

    //TODO: INLINE ALL!!

    rotate : function(q0,q1)
    {
        this.set(q0,this.mult(this.mult(this.copy(q0),q1),
                    this.conjugate(this.copy(q0))));
    },

    rotateVec : function(q,v)
    {
        var t = this.zero();
        this.set(t,this.multVec3(this.multVec3(this.copy(q),v),this.conjugate(this.copy(q))));
    },

    fromAngles : function(ax,ay,az)
    {
        var q = this.zero();

        var cyaw,cpitch,croll,syaw,spitch,sroll;
        var cyawcpitch,syawspitch,cyawspitch,syawcpitch;

        cyaw   = Math.cos(az * 0.5);
        cpitch = Math.cos(ay * 0.5);
        croll  = Math.cos(ax * 0.5);
        syaw   = Math.sin(az * 0.5);
        spitch = Math.sin(ay * 0.5);
        sroll  = Math.sin(ax * 0.5);

        cyawcpitch = cyaw * cpitch;
        syawspitch = syaw * spitch;
        cyawspitch = cyaw * spitch;
        syawcpitch = syaw * cpitch;

        return new Float32Array([ cyawcpitch * croll + syawspitch * sroll,
                                  cyawcpitch * sroll - syawspitch * croll,
                                  cyawspitch * croll + syawcpitch * sroll,
                                  syawcpitch * croll - cyawspitch * sroll ]);

    },

    anglesFrom : function(q)
    {
        var qn = q[0],
            qx = q[1],
            qy = q[2],
            qz = q[3];

        var r11,r21,r31,r32,r33,r12,r13;
        var q00,q11,q22,q33;
        var temp;
        var v = new Float32Array(3);

        q00 = qn * qn;
        q11 = qx * qx;
        q22 = qy * qy;
        q33 = qz * qz;

        r11 = q00 + q11 - q22 - q33;
        r21 = 2 * ( qx + qy + qn * qz);
        r31 = 2 * ( qx * qz - qn * qy);
        r32 = 2 * ( qy * qz + qn * qx);
        r33 = q00 - q11 - q22 + q33;

        temp = Math.abs(r31);
        if(temp > 0.999999)
        {
            r12 = 2 * (qx * qy - qn * qz);
            r13 = 2 * (qx * qz - qn * qy);

            v[0] = 0.0;
            v[1] = (-(Math.PI * 0.5) *  r32 / temp);
            v[2] = Math.atan2(-r12,-r31*r13);
            return v;
        }

        v[0] = Math.atan2(r32,r33);
        v[1] = Math.asin(-31);
        v[2] = Math.atan2(r21,r11);
        return v;
   }
};

module.exports = Quaternion;
},{}],34:[function(require,module,exports){
var Vec2 =
{
    SIZE : 2,

    make : function()
    {
        return new Float32Array([0,0]);
    }
};

module.exports = Vec2;
},{}],35:[function(require,module,exports){
var Vec3 =
{
    SIZE   : 3,
    ZERO   : function(){return new Float32Array([0,0,0])},
    AXIS_X : function(){return new Float32Array([1,0,0])},
    AXIS_Y : function(){return new Float32Array([0,1,0])},
    AXIS_Z : function(){return new Float32Array([0,0,1])},

    make : function(x,y,z)
    {
        return new Float32Array([ x || 0.0,
            y || 0.0,
            z || 0.0]);
    },

    set : function(v0,v1)
    {
        v0[0] = v1[0];
        v0[1] = v1[1];
        v0[2] = v1[2];

        return v0;
    },

    set3f :  function(v,x,y,z)
    {
        v[0] = x;
        v[1] = y;
        v[2] = z;

        return v;
    },

    copy :  function(v)
    {
        return new Float32Array(v);
    },

    add : function(v0,v1)
    {
        v0[0] += v1[0];
        v0[1] += v1[1];
        v0[2] += v1[2];

        return v0;
    },

    sub : function(v0,v1)
    {
        v0[0] -= v1[0];
        v0[1] -= v1[1];
        v0[2] -= v1[2];

        return v0;
    },

    scale : function(v,n)
    {
        v[0]*=n;
        v[1]*=n;
        v[2]*=n;

        return v;
    },

    dot : function(v0,v1)
    {
        return v0[0]*v1[0] + v0[1]*v1[1] + v0[2]*v1[2];
    },

    cross: function(v0,v1)
    {
        var x0 = v0[0],
            y0 = v0[1],
            z0 = v0[2],
            x1 = v1[0],
            y1 = v1[1],
            z1 = v1[2];

        return new Float32Array([y0 * z1 - y1 * z0,
                                 z0 * x1 - z1 * x0,
                                 x0 * y1 - x1 * y0]);
    },

    lerp : function(v0,v1,f)
    {
        var x0 = v0[0],
            y0 = v0[1],
            z0 = v0[2];

        v0[0] = x0 * (1.0 - f) + v1[0] * f;
        v0[1] = y0 * (1.0 - f) + v1[1] * f;
        v0[2] = z0 * (1.0 - f) + v1[2] * f;


    },

    lerped : function(v0,v1,f)
    {
        return this.lerp(this.copy(v0),v1,f);
    },



    lerp3f : function(v,x,y,z,f)
    {
        var vx = v[0],
            vy = v[1],
            vz = v[2];

        v[0] = vx * (1.0 - f) + x * f;
        v[1] = vy * (1.0 - f) + y * f;
        v[2] = vz * (1.0 - f) + z * f;
    },


    length : function(v)
    {
        var x = v[0],
            y = v[1],
            z = v[2];

        return Math.sqrt(x*x+y*y+z*z);
    },

    lengthSq :  function(v)
    {
        var x = v[0],
            y = v[1],
            z = v[2];

        return x*x+y*y+z*z;
    },

    safeNormalize : function(v)
    {
        var x = v[0],
            y = v[1],
            z = v[2];

        var d = Math.sqrt(x*x+y*y+z*z);
        d = d || 1;

        var l  = 1/d;

        v[0] *= l;
        v[1] *= l;
        v[2] *= l;

        return v;
    },

    normalize : function(v)
    {
        var x = v[0],
            y = v[1],
            z = v[2];

        var l  = 1/Math.sqrt(x*x+y*y+z*z);

        v[0] *= l;
        v[1] *= l;
        v[2] *= l;

        return v;
    },

    distance : function(v0,v1)
    {
        var x = v0[0] - v1[0],
            y = v0[1] - v1[1],
            z = v0[2] - v1[2];

        return Math.sqrt(x*x+y*y+z*z);
    },

    distance3f : function(v,x,y,z)
    {
        return Math.sqrt(v[0] * x + v[1] * y + v[2] * z);
    },

    distanceSq : function(v0,v1)
    {
        var x = v0[0] - v1[0],
            y = v0[1] - v1[1],
            z = v0[2] - v1[2];

        return x*x+y*y+z*z;
    },

    distanceSq3f : function(v,x,y,z)
    {
        return v[0] * x + v[1] * y + v[2] * z;
    },

    limit : function(v,n)
    {
        var x = v[0],
            y = v[1],
            z = v[2];

        var dsq = x*x + y*y + z*z,
            lsq = n * n;

        if((dsq > lsq) && lsq > 0)
        {
            var nd = n/Math.sqrt(dsq);

            v[0] *= nd;
            v[1] *= nd;
            v[2] *= nd;
        }

        return v;
    },

    invert : function(v)
    {
        v[0]*=-1;
        v[1]*=-1;
        v[2]*=-1;

        return v;
    },

    added  : function(v0,v1)
    {
        return this.add(this.copy(v0),v1);
    },

    subbed : function(v0,v1)
    {
        return this.sub(this.copy(v0),v1);
    },

    scaled : function(v,n)
    {
        return this.scale(this.copy(v),n);
    },

    normalized : function(v)
    {
        return this.normalize(this.copy(v));
    },

    toString : function(v)
    {
        return '[' + v[0] + ',' + v[1] + ',' + v[2] + ']';
    }

};

module.exports = Vec3;




},{}],36:[function(require,module,exports){

//TODO:FINISH
var Vec4 =
{
    SIZE : 4,
    ZERO : function(){return new Float32Array([0,0,0,1.0])},

    make : function(x,y,z,w)
    {
        return new Float32Array([ x || 0.0,
            y || 0.0,
            z || 0.0,
            w || 1.0]);
    },

    fromVec3 : function(v)
    {
        return new Float32Array([ v[0], v[1], v[2] , 1.0]);
    },

    set : function(v0,v1)
    {
        v0[0] = v1[0];
        v0[1] = v1[1];
        v0[2] = v1[2];
        v0[3] = v1[3];

        return v0;
    },

    set3f :  function(v,x,y,z)
    {
        v[0] = x;
        v[1] = y;
        v[2] = z;

        return v;
    },

    set4f : function(v,x,y,z,w)
    {
        v[0] = x;
        v[1] = y;
        v[2] = z;
        v[3] = w;

        return v;

    },

    copy :  function(v)
    {
        return new Float32Array(v);
    },

    add : function(v0,v1)
    {
        v0[0] += v1[0];
        v0[1] += v1[1];
        v0[2] += v1[2];
        v0[3] += v1[3];

        return v0;
    },

    sub : function(v0,v1)
    {
        v0[0] -= v1[0];
        v0[1] -= v1[1];
        v0[2] -= v1[2];
        v0[3] -= v1[3];

        return v0;
    },

    scale : function(v,n)
    {
        v[0]*=n;
        v[1]*=n;
        v[2]*=n;
        v[3]*=n;

        return v;
    },

    dot : function(v0,v1)
    {
        return v0[0]*v1[0] + v0[1]*v1[1] + v0[2]*v1[2];
    },

    cross: function(v0,v1)
    {
        var x0 = v0[0],
            y0 = v0[1],
            z0 = v0[2],
            x1 = v1[0],
            y1 = v1[1],
            z1 = v1[2];

        return new Float32Array([y0*z1-y1*z0,z0*x1-z1*x0,x0*y1-x1*y0]);
    },

    slerp : function(v0,v1,f)
    {
        var x0 = v0[0],
            y0 = v0[1],
            z0 = v0[2],
            x1 = v1[0],
            y1 = v1[1],
            z1 = v1[2];

        var d = Math.max(-1.0,Math.min((x0*x1 + y0*y1 + z0*z1),1.0)),
            t = Math.acos(d) * f;

        var x = x0 - (x1 * d),
            y = y0 - (y1 * d),
            z = z0 - (z1 * d);

        var l = 1/Math.sqrt(x*x+y*y+z*z);

        x*=l;
        y*=l;
        z*=l;

        var ct = Math.cos(t),
            st = Math.sin(t);

        var xo = x0 * ct + x * st,
            yo = y0 * ct + y * st,
            zo = z0 * ct + z * st;

        return new Float32Array([xo,yo,zo]);
    },

    length : function(v)
    {
        var x = v[0],
            y = v[1],
            z = v[2],
            w = v[3];

        return Math.sqrt(x*x+y*y+z*z+w*w);
    },

    lengthSq :  function(v)
    {
        var x = v[0],
            y = v[1],
            z = v[2],
            w = v[3];

        return x*x+y*y+z*z+w*w;
    },

    normalize : function(v)
    {
        var x = v[0],
            y = v[1],
            z = v[2],
            w = v[3];

        var l  = 1/Math.sqrt(x*x+y*y+z*z+w*w);

        v[0] *= l;
        v[1] *= l;
        v[2] *= l;
        v[3] *= l;

        return v;
    },

    distance : function(v0,v1)
    {
        var x = v0[0] - v1[0],
            y = v0[1] - v1[1],
            z = v0[2] - v1[2];

        return Math.sqrt(x*x+y*y+z*z);
    },

    distanceSq : function(v0,v1)
    {
        var x = v0[0] - v1[0],
            y = v0[1] - v1[1],
            z = v0[2] - v1[2];

        return x*x+y*y+z*z;
    },

    limit : function(v,n)
    {
        var x = v[0],
            y = v[1],
            z = v[2];

        var dsq = x*x + y*y + z*z,
            lsq = n * n;

        if((dsq > lsq) && lsq > 0)
        {
            var nd = n/Math.sqrt(dsq);

            v[0] *= nd;
            v[1] *= nd;
            v[2] *= nd;
        }

        return v;
    },

    invert : function(v)
    {
        v[0]*=-1;
        v[1]*=-1;
        v[2]*=-1;

        return v;
    },

    added  : function(v0,v1)
    {
        return this.add(this.copy(v0),v1);
    },

    subbed : function(v0,v1)
    {
        return this.sub(this.copy(v0),v1);
    },

    scaled : function(v,n)
    {
        return this.scale(this.copy(v),n);
    },

    normalized : function(v)
    {
        return this.normalize(this.copy(v));
    },

    toString : function(v)
    {
        return '[' + v[0] + ',' + v[1] + ',' + v[2] + ']';
    }

};

module.exports = Vec4;
},{}],37:[function(require,module,exports){
module.exports =
{
    APP_WIDTH  : 800,
    APP_HEIGHT : 600,

    APP_FPS : 30,

    APP_PLASK_WINDOW_TITLE : '',
    APP_PLASK_TYPE  : '3d',
    APP_PLASK_VSYNC : 'false',
    APP_PLASK_MULTISAMPLE : true,

    CAMERA_FOV : 45,
    CAMERA_NEAR : 0.1,
    CAMERA_FAR  : 100

};
},{}],38:[function(require,module,exports){
module.exports =
{
    METHOD_NOT_IMPLEMENTED: 'Method not implemented in target platform.',
    CLASS_IS_SINGLETON:     'Application is singleton. Get via getInstance().',
    APP_NO_SETUP:           'No setup method added to app.',
    APP_NO_UPDATE :         'No update method added to app.',
    PLASK_WINDOW_SIZE_SET:  'Plask window size can only be set on startup.',
    WRONG_PLATFORM:         'Wrong Platform.',
    VERTICES_IN_WRONG_SIZE: 'Vertices array has wrong length. Should be ',
    COLORS_IN_WRONG_SIZE:   'Color array length not equal to number of vertices.'
};
},{}],39:[function(require,module,exports){
var Platform = {WEB:0,PLASK:1};
    Platform._target = null;

Platform.getTarget  = function()
{
    if(!this._target)this._target = (typeof window !== 'undefined' && typeof document !== 'undefined') ? this.WEB :
                                    (typeof require == "function" && require) ? this.PLASK :
                                     null;
    return this._target;
};

module.exports = Platform;
},{}],40:[function(require,module,exports){
var fMath = require('../math/fMath');

module.exports =
{
    SIZE  : 4,

    BLACK : function(){return new Float32Array([0,0,0,1])},
    WHITE : function(){return new Float32Array([1,1,1,1])},
    RED   : function(){return new Float32Array([1,0,0,1])},
    GREEN : function(){return new Float32Array([0,1,0,1])},
    BLUE  : function(){return new Float32Array([0,0,1,1])},

    make : function(r,g,b,a){return new Float32Array([ r,g,b,a]);},
    copy : function(c){return this.make(c[0],c[1],c[2],c[3]);},

    set : function(c0,c1)
    {
        c0[0] = c1[0];
        c0[1] = c1[1];
        c0[2] = c1[2];
        c0[3] = c1[3];

        return c0;
    },

    set4f : function(c,r,g,b,a)
    {
        c[0] = r;
        c[1] = g;
        c[2] = b;
        c[3] = a;

        return c;
    },

    set3f : function(c,r,g,b)
    {
        c[0] = r;
        c[1] = g;
        c[2] = b;
        c[3] = 1.0;

        return c;
    },

    set2f : function(c,k,a)
    {
        c[0] = c[1] = c[2] = k;
        c[3] = a;

        return c;
    },

    set1f : function(c,k)
    {
        c[0] = c[1] = c[2] = k;
        c[3] = 1.0;

        return c;
    },

    set4i    : function(c,r,g,b,a){return this.set4f(c,r/255.0,g/255.0,b/255.0,a);},
    set3i    : function(c,r,g,b)  {return this.set3f(c,r/255.0,g/255.0,b/255.0);},
    set2i    : function(c,k,a)    {return this.set2f(c,k/255.0,a);},
    set1i    : function(c,k)      {return this.set1f(c,k/255.0);},
    toArray  : function(c)        {return c.toArray();},
    toString : function(c)        {return '['+c[0]+','+c[1]+','+c[2]+','+c[3]+']';},

    interpolated : function(c0,c1,f)
    {
        var c  = new Float32Array(4),
            fi = 1.0 - f;

        c[0] = c0[0] * fi + c1[0] * f;
        c[1] = c0[1] * fi + c1[1] * f;
        c[2] = c0[2] * fi + c1[2] * f;
        c[3] = c0[3] * fi + c1[3] * f;

        return c;
    },

    equals : function(c0,c1)
    {
        return fMath.isFloatEqual(c0[0],c1[0]) &&
               fMath.isFloatEqual(c0[1],c1[1]) &&
               fMath.isFloatEqual(c0[2],c1[2]) &&
               fMath.isFloatEqual(c0[3],c1[3]);
    }



};
},{"../math/fMath":32}],41:[function(require,module,exports){
var Vec2   = require('../math/fVec2'),
    fError = require('../system/fError');

function Mouse()
{
    if(Mouse.__instance)throw new Error(fError.CLASS_IS_SINGLETON);

    this._position     = Vec2.make();
    this._positionLast = Vec2.make();

    Mouse.__instance = this;
}

Mouse.prototype.getPosition     = function(){return this._position;};
Mouse.prototype.getPositionLast = function(){return this._positionLast;};
Mouse.prototype.getX            = function(){return this._position[0];};
Mouse.prototype.getY            = function(){return this._position[1];};
Mouse.prototype.getXLast        = function(){return this._positionLast[0];};
Mouse.prototype.getYLast        = function(){return this._positionLast[1];};

Mouse.__instance = null;
Mouse.getInstance = function(){return Mouse._instance;};

module.exports = Mouse;
},{"../math/fVec2":34,"../system/fError":38}],42:[function(require,module,exports){
module.exports =
{
    toArray : function(float32Array){return Array.prototype.slice.call(float32Array);}
};
},{}],43:[function(require,module,exports){

},{}]},{},[1])
;