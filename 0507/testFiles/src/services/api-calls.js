
const root = "https://dummyjson.com/"

export async function LoginMe (credentials) {

    console.log(credentials, "here are the credentials....")

    let rawData = await fetch(`${root}auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: credentials.name,
          password: credentials.password,
          expiresInMins: 30, // optional, defaults to 60
        })
      })
      
    let data = await rawData.json()
    return data;
}

