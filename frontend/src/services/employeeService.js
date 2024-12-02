//Step 1: create the functions
//Step 2: useEffect 

// Utility Function to call the API 

const url = "http://localhost:8084/api/v1/emp/employees";

// First functions 
export async function getEmployees() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
}

export async function postEmployees(employee) {
    try {
        const empTest = JSON.stringify(employee)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: empTest 
        });
        
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error.message);
    }
}

export async function putEmployees(id, data) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(data)
        
        });
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error.message);
    }
}

async function getEmployeesId(id) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "GET",
        
        });
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
    } catch (error) {
        console.error(error.message);
    }
}

export async function deleteEmployee(id) {
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({_id: id}) 
        });
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
}
