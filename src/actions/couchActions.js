import NodeCouchDb from 'node-couchdb';
import axios from 'axios';

import { setUsers } from './userActions';
import { removeCity } from './citiesActions';
import { SET_USER_CITY, RESET_USER_CITY, DELETE_CITY_SUCCESS, SET_USER_CITY_REVS, REMOVE_USER, REMOVE_CITY, ADD_CITY, MODIFY_CITY } from './actionTypes';

// const couch_ip_addr = "128.199.140.182";
// const couch_ip_addr = "192.168.200.154"
const couch_ip_addr = 'sgu.pdm-commsult.intranet';

const couch = new NodeCouchDb({
    host: couch_ip_addr,
    protocol: "http",
    port: 5984,
    auth:{
        user: 'admin',
        // password : '!QAZxsw2'
        password: 'password'
    }
})

export const viewAllUsers = () => async(dispatch)=>{
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
                    "map": "function (doc) {\n  emit(doc._id, {'_id': doc._id, '_rev': doc._rev, 'cityName': doc.cityName, 'isPublic': doc.isPublic, 'fromBackend': doc.fromBackend});\n}"
                }
            },
            "language": "javascript",
            "fromBackend": false
        };
        couch.insert(userName, ddoc).then(()=>{
            console.log("design document created")
            dispatch({type: "ADD_USER", payload: userName})
            //window.location.reload();
        }, err=>console.log(err))
    },
        err=>{
            console.log(err)
        }
    )
}

export const removeUser = userName=>async(dispatch)=>{
    await couch.dropDatabase(userName).then(async()=>{
        console.log("Deleted "+userName)
        dispatch({type: REMOVE_USER, payload: userName })
    },
    err=>{
        console.log(err)
    })
}

export const viewUserCities = (userName)=> (dispatch)=>{
    const viewURL = "_design/viewAll/_view/viewAll-index"
    couch.get(userName, viewURL).then((data)=>{
        dispatch({type: RESET_USER_CITY})
        dispatch({ type: SET_USER_CITY, payload: data.data })
    }, err=> console.log(err))
}

export const removeCityFromUser = (userName, cityRef)=>(dispatch)=>{
    couch.get(userName, cityRef).then((data)=>{
        couch.update(userName, {
            _id : cityRef,
            _rev : data.data._rev,
            cityName: cityRef,
            isPublic : true,
            _deleted: true
        }).then(()=>{
            console.log("deleted");
            dispatch({type: REMOVE_CITY, payload: cityRef})
        }, err=>{
            dispatch({type: REMOVE_CITY, payload: cityRef})
        })
    }, err=>console.log(err))
}

export const addCityToUser = (userName, cityObj)=>async(dispatch)=>{
    if  (cityObj.cityName && cityObj._id && cityObj.isPublic)
        couch.insert(userName, cityObj).then(()=>{
            console.log("inserted")
            dispatch({type: ADD_CITY, payload: {
                id : cityObj._id,
                key: cityObj._id,
                value: cityObj
            } })
        }, err=>console.log(err))
}

export const updateCityToUser = (userName, cityRef, newCityObj)=>async(dispatch)=>{
    couch.get(userName, cityRef).then((data)=>{
        couch.update(userName, {
            _id : cityRef,
            _rev : data.data._rev,
            cityName: newCityObj.value,
            isPublic : true
        }).then(()=>{
            console.log("updated")
            dispatch({type: MODIFY_CITY, payload:{
                id : newCityObj.id,
                value: newCityObj.value,
                key: newCityObj.value
            }})
        }, err=>console.log(err))
    })
}

export const fetchCityRevs = id => async (dispatch, getState) => {
    const { selectedUser } = getState();
    id = encodeURIComponent(id);

    const baseUrl = `http://${ couch_ip_addr }:5984/${ selectedUser }/${ id }`;
    const url = `${ baseUrl }?revs_info=true`;

    const res = await axios.get(url);
    const availableRevs = res.data._revs_info.filter(currRev => {
        return currRev.status === 'available';
    });
    console.log(availableRevs);

    const cityRevsPromises = availableRevs.map(async currRev => {
        const url = `${baseUrl}?rev=${ currRev.rev }`;
        const res = await axios.get(url);
        return res.data;
    })

    Promise.all(cityRevsPromises).then(values => {
        dispatch(setCityRevs(values));
    });
}

export const setCityRevs = cityRevs => {
    return {
        type: SET_USER_CITY_REVS,
        payload: cityRevs
    };
};