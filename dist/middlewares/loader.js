"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createLoader=void 0;var a=function(a){return a&&a.__esModule?a:{default:a}}(require("dataloader"));exports.createLoader=b=>{let c=new a.default(async a=>{let c=await b.find({_id:{$in:a}});return a.map(a=>c.filter(({id:b})=>b===a))});return{load:async a=>c.load(a),loadMany:async a=>c.loadMany(a),clear:a=>c.clear(a),clearAll:()=>c.clearAll()}}
//# sourceMappingURL=loader.js.map