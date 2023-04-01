
// The code above requests our Flask routes, which handle data insertion, and then user our JSON-stringified user details
export default function APIService(){
    // Insert an article
    async function InsertUser(body){
        return fetch(`http://localhost:5000/api/v2/users/register`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}
