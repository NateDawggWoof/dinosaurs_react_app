const baseUrl = "http://localhost:5000/api/dinosaurs/"

export const getDinosaurs = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const postDinosaur = (payload) => {
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteDinosaur = (id) => {
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}

export const updateDinosaur = (payload) => {
    return fetch(baseUrl + payload._id, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Types': 'application/json' }
    })
}
