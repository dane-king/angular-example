'use strict';

angular.module('code.guide')
.service('atomService',function(){
        var ratings=function(){
            return [{id:1, name:'xxxx',score:10,comments:'yyyy'},{id:1, name:'tttt',score:8,comments:'ssss'}]
        };
        var ranges=function(){
            return [{id:1,min:1,max:10,type:'skill'},{id:2,min:1,max:5,type:'appearance'}]
        };
        return {
            ratings:ratings,
            ranges:ranges
        }
    });