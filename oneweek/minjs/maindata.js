app.controller("main",["$scope","$http",function(t,n){n({url:"http://localhost:8080/datajson"}).then(function(n){t.data=n},function(t){return-1})}]);