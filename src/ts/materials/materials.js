
TS.phofacmatcol = function(color) {
   return ts.phofacmat(ts.flashapar(ts.colpar({}, color)), ts.smoshapar(ts.colpar({}, color)));
};

TS.phofacmatcoltraopa = function(color, transparent, opacity) {
   var res = ts.phofacmat(
           ts.flashapar(ts.coltraopapar({}, color, transparent, opacity)),
           ts.smoshapar(ts.coltraopapar({}, color, transparent, opacity)));
   return res;
};
