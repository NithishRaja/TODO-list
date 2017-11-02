var cluster = require('cluster');

var server = require("./server");

function startWorker(){
  var worker = cluster.fork();
  console.log('CLUSTER: Worker %d started', worker.id);
}
if(cluster.isMaster){
  require('os').cpus().forEach(function(){
    startWorker()
  });
  cluster.on('disconnect', function(worker){
    console.log('CLUSTER: Worker %d disconnected from the cluster.', worker.id);
  });
  cluster.on('exit', function(worker, code, signal){
    console.log('CLUSTER: Worker %d died with exit code %d (%s)', worker.id, code, signal);
    startWorker();
  });
}else{
  server.listen(server.get("port"), function(err){
    if(err) return console.log(err);
    console.log("Server is running on port %d, press Ctrl+C to close", server.get("port"));
  });
}
