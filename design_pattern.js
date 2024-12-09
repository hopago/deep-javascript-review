/** 모듈 패턴
 * 서버 개발, 라이브러리, API 개발 등에 쓰임
 * 대표 예시: jQuery
 */

/*
var $;
$.get("/api").done(function (result) {
    var hopago = result;
    console.log(hopago)
})
*/

// 하나의 대표 글로벌 변수 안에 여러 함수를 두는 것이 모듈 패턴의 기본

// 모듈 패턴의 기본 패턴
(function (global) {
    global.myLib = {
        helloWorld: () => console.log("Hello World"),
        hello: {
            world: () => console.log("Hello World")
        }
    };
})(globalThis);

global.myLib.hello.world();

var myLib2 = (function () {
    var myLib2 = {
        helloWorld: () => console.log("Hello World"),
        hello: {
            world: () => console.log("Hello World")
        }
    };
    return myLib2;
})();

myLib2.hello.world();

var myLib3 = (function () {
    return {
        helloWorld: () => console.log("Hello World"),
        hello: {
            world: () => console.log("Hello World")
        }
    }
})();

myLib3.helloWorld();

// 네임스페이스 생성 방법
(function (globalThis) {
    var _myLib = globalThis.myLib;
    if (!_myLib) {
        _myLib = {}
    }
    if (!_myLib.hopago) {
        _myLib.hopago = {};
    }
    _myLib.hopago.sayHello = function () {
        console.log("Hopago")
    }
})(globalThis);

globalThis.myLib.hopago.sayHello()

// jQuery 활용 예시

var jQuery = (function (init) {
    class jQuery {
        constructor(selector, context) {
            return new jQuery.fn.init(selector, context);
        }
    }
    jQuery.fn = init = jQuery.fn.init = function (selector, context) {
        return new jQuery.fn.init(selector, context);
    }
    init.prototype = jQuery.fn;
    return jQuery;
})();

var $ = jQuery();
console.log($("selector"));

// 이벤트 델리게이션
/** 이벤트 버블링
 * 특정 이벤트를 상위 DOM으로 전달
 * 자식 DOM 요소에서 발생한 이벤트는 포괄적으로 부모 DOM 요소에서도 발생한 것으로 인지될 수 있다
 * 이벤트 전파 단계는 [캡쳐링] - [대상] - [버블링]
 * 버블링 - 캡쳐링은 정반대로 동작
 * 버블링: 특정 DOM에서 이벤트가 발생 - 상위의 부모 DOM으로 전파
 * 캡쳐링: 최상위 부모 DOM - 가장 하위 DOM
 */

/** 이벤트 전달과 DOM 이벤트 처리
 * 이벤트 객체 전달 경로 정의 - 이벤트 대상에 이벤트 객체 전달 - 전파 경로의 마지막은 이벤트 대상
 * 이벤트 캡쳐 - 전달 - 버블링
 * DOM에서 이벤트가 발생 - DOM.dispatchEvent()를 통해 이벤트 전달 - propagation path에 따라 전달 수행
 * 전달 경로 중단에 있는 DOM이 삭제되더라도 이벤트는 전달된다
 */

var controlVideo = document.getElementById("controlPanel"),
    selectControlVideo = document.getElementById("controlVideo")
var proxyClickEventHandler = (function () {
    var cache = {};
    return function (command) {
        var video;
        if (controlVideo.hasOwnProperty(command)) {
            if (cache.hasOwnProperty(selectControlVideo.value)) {
                video = cache[selectControlVideo.value]
            } else {
                video = controlVideo.getVideoById(selectControlVideo.value)
                cache[selectControlVideo.value] = video;
            }
            controlVideo[command].call(this, video)
        }
    }
})();
proxyClickEventHandler(target.id)

/** 시나리오: 
 * selectControlVideo.value === "video2" -> 
 * target.id === "play" -> proxyClickEventHandler("play") -> 
 * video는 video2 -> controlVideo["play"].call(this, video) 
 */

