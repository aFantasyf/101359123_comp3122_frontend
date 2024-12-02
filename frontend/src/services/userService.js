

const url = 'http://localhost:8084/api/v1/user'

export async function signUp(info){
    try {
        const infoj = JSON.stringify(info)
        const response = await fetch(`${url}/signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: infoj
        })
        console.log("This is user response", response)

        if(!response){
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json()
        return json
    } catch(e) {
        console.error(e.message)
    }
}


export async function logIn(data){
    try{
        const dataj = JSON.stringify(data)
        console.log("dataj:" , dataj)
        const response = await fetch(`${url}/login`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:dataj
        })
        if(!response.ok){
            console.log("Login failed with status:", response.status);
            return null;
        }
        const json = await response.json()
        console.log("json:", json)
        return json
    } catch (e){
        console.log(e.message)
        return null
    }
}
