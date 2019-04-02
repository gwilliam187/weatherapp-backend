import NodeCouchDb from 'node-couchdb';

const couch_ip_addr = "192.168.200.134";

const couch = new NodeCouchDb({
    host: couch_ip_addr,
    protocol: "http",
    port: 5984,
    auth:{
        user: 'admin',
        password : 'password'
    }
})

export const addUser = (userName)=>{
    couch.createDatabase(userName).then(()=>{
        console.log("Created Successfully")
        const ddoc = {
            "_id": "_design/viewAll",
            "views": {
              "bydate": {
                "reduce": "_count",
                "map": "function(doc) {\n  if (doc.type === 'click') {\n emit(doc.x, doc.y);\n  }\n}"
              }
            },
            "language": "javascript"
          }
    },
        err=>{
            console.log(err)
        }
    )
}

export const removeUser = (userName)=>{
    couch.dropDatabase(userName).then(()=>{
        console.log("Deleted")
    },
    err=>{
        console.log(err)
    })
}

export const viewUserCities = (userName)=>{
    couch.get(userName, "").then((data)=>{
        console.dir(data);
    })
}