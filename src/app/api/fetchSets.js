export async function getSets() {
    const response = await fetch("https://ratapi.vercel.app/api/products/sets", {
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

export const addSets = async (body) => {
    await fetch('https://ratapi.vercel.app/api/products/sets', {
        method: 'POST',
        //
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}
//
//
// export const putMaterials = async (changedMaterialsId, title, category, price) => {
//     await fetch('https://ratapi.vercel.app/api/materials', {
//         method: 'PUT',
//         //
//         body: JSON.stringify({
//             oldTitle: changedMaterialsId,
//             title: title,
//             category: category.value,
//             categoryTitle: category.label,
//             price: price
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=utf-8'
//         }
//     })
// }
//
// export const deleteMaterials = async (id) => {
//     await fetch('https://ratapi.vercel.app/api/materials/' + id, {
//         method: 'DELETE',
//         headers: {
//             'Content-type': 'application/json; charset=utf-8'
//         }
//     })
// }