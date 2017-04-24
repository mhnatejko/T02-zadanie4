function createData() {
 
    var data = {};
    return {
        get: function(){
            return data[key];
        },
        set: function(key, val){
            data[key] = val;
        };
    };
     
};
 
var data = createData({});
data.set("name", "Janek");
console.log( data.get("name") );






