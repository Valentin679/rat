export async function GetCategories() {
    const response = await fetch("https://ratapi.vercel.app/api/categories", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        let res = await response.json();
        console.log(res)
        // setPending(false)
        return res
    }
}

export const addCategory = async (slug, title) => {
    await fetch('http://localhost:8800/api/categories', {
        method: 'POST',
        //
        body: JSON.stringify({
            _id: slug,
            title: title,
            slug: slug
        }),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}


export const putCategory = async (slug, oldSlug, title) => {
    await fetch('http://localhost:8800/api/categories', {
        method: 'PUT',
        //
        body: JSON.stringify({
            title: title,
            slug: slug,
            oldSlug: oldSlug,

        }),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}