export async function GetMaterialsCategories() {
    const response = await fetch("https://ratapi.vercel.app/api/materials-categories", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        let res = await response.json();
        // console.log(res)
        // setPending(false)
        return res
    }
}

export const addMaterialsCategory = async (slug, title) => {
    await fetch('https://ratapi.vercel.app/api/materials-categories', {
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


export const putMaterialsCategory = async (slug, oldSlug, title) => {
    await fetch('https://ratapi.vercel.app/api/materials-categories', {
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

export const deleteMaterialsCategory = async (slug) => {
    await fetch('https://ratapi.vercel.app/api/materials-categories/' + slug, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}