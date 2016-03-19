(function(){
    'use strict';

    angular
        .module('Module')
        .controller('ControllerCtrl', ControllerCtrl)

    function ControllerCtrl(Dependencies){
        var vm = this;
        
        init();

        function init(){
        }

    }

}());