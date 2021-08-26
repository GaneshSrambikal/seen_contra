import axios from 'axios'

 export const fetchData = () =>{
    const userPromise= fetchUser();
    return {
        users : wrapPromise(userPromise)
    }
}

const wrapPromise =(promise) =>{
    // status
    let status = 'pending';
    // store result
    let result;
    // suspender
    let suspender = promise.then(
        res => {
            status = 'success';
            result = res;
        },
        err =>{
            status = 'error';
            result = err;
        }
    )
    return {
        read(){
            if(status === 'pending'){
                throw suspender;
            } else if(status === 'error'){
                throw result;
            }else if(status === 'success'){
                return result;
            }
        }
    }

}

const fetchUser = () =>{
    console.log('Fetching User...');
    return axios
        .get('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.data)
        .catch(err => console.log(err))
}
