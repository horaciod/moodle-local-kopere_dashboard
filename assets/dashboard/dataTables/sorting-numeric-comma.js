jQuery.extend(jQuery.fn.dataTableExt.oSort,{"numeric-comma-pre":function(c){var b=(c=="-")?0:c.replace(/,/,".");return parseFloat(b)},"numeric-comma-asc":function(d,c){return((d<c)?-1:((d>c)?1:0))},"numeric-comma-desc":function(d,c){return((d<c)?1:((d>c)?-1:0))}});