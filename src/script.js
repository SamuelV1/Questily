var excel2json = require('excel2json');
var fs = require('fs') 

excel2json.parse('test.xlsx', [], function(err, sheetDatas) {
    excel2json.toJson(sheetDatas, function(err, result) {
        fs.writeFileSync('test.json', JSON.stringify(result, null, 4));
    });
}); 