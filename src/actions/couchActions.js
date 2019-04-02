import NodeCouchDb from 'node-couchdb';
import axios from 'axios';

import { setUsers } from './userActions';
import { SET_USER_CITY, RESET_USER_CITY } from './actionTypes';

const couch_ip_addr = "192.168.200.154";

const couch = new NodeCouchDb({
    host: couch_ip_addr,
    protocol: "http",
    port: 5984,
    auth:{
        user: 'admin',
        password : 'password'
    }
})

export const viewAllUsers = () => async(dispatch)=>{
    console.log("called")
    await axios.get("http://"+couch_ip_addr+":5984/_all_dbs").then((res)=>{
            let arr = Array();
            res.data.map((d)=>{
                if  (d.charAt(0)!=='_'){
                    arr.push(d);
                }
            })
            dispatch(setUsers(arr));
        }
    )
}

export const addUser = (userName)=>(dispatch)=>{
    console.log(userName+" created")
    couch.createDatabase(userName).then(()=>{
        console.log("Created Successfully")
        const ddoc = {
            "_id": "_design/viewAll",
            "views": {
              "viewAll-index": {
                "map": "function (doc) {\n  emit(doc._id, doc.cityName);\n}"
              }
            },
            "language": "javascript"
          }
        couch.insert(userName, ddoc).then(()=>{
            console.log("design document created")
            dispatch({type: "ADD_USER", payload: userName})
            window.location.reload();
        }, err=>console.log(err))
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

export const viewUserCities = (userName)=> (dispatch)=>{
    const viewURL = "_design/viewAll/_view/viewAll-index"
    couch.get(userName, viewURL).then((data)=>{
        console.log(data.data)
        dispatch({type: RESET_USER_CITY})
        dispatch({type: SET_USER_CITY, payload: data.data})
    }, err=> console.log(err))
}

export const removeCityFromUser = (userName, cityRef)=>{
    couch.get(userName, cityRef).then((data)=>{
        couch.del(userName, cityRef, data.data._rev).then(()=>console.log("deleted"), err=>console.log(err))
    }, err=>console.log(err))
}

export const addCityToUser = (userName, cityObj)=>{
    if  (cityObj.cityName && cityObj._id && cityObj.isPublic)
        couch.insert(userName, cityObj).then(()=>console.log("inserted"), err=>console.log(err))
}

export const updateCityToUser = (userName, cityRef, newCityObj)=>{
    couch.get(userName, cityRef).then((data)=>{
        couch.update(userName, {
            _id : cityRef,
            _rev : data.data._rev,
            cityName: newCityObj.cityName,
            isPublic : newCityObj.isPublic
        }).then(()=>console.log("updated"), err=>console.log(err))
    })
}