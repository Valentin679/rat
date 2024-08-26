export async function GetMaterials() {
    const response = await fetch("https://ratapi.vercel.app/api/materials", {
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

export const addMaterials = async (id, title, minimal_availability,category_id,category_title) => {
    await fetch('https://ratapi.vercel.app/api/materials', {
        method: 'POST',
        //
        body: JSON.stringify({
            _id: id,
            title,
            minimal_availability,
            category_id,
            category_title


        }),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}


export const putMaterials = async (slug, oldSlug, title) => {
    await fetch('https://ratapi.vercel.app/api/materials', {
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

export const deleteMaterials = async (slug) => {
    await fetch('https://ratapi.vercel.app/api/materials' + slug, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}