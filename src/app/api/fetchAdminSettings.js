export async function getAdminMenu() {
    const response = await fetch("https://ratapi.vercel.app/api/settings", {
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

// export const addMaterials = async (id, title, price, category) => {
//     await fetch('https://ratapi.vercel.app/api/materials', {
//         method: 'POST',
//         //
//         body: JSON.stringify({
//             title,
//             price,
//             category: category.value,
//             categoryTitle: category.label
//
//
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=utf-8'
//         }
//     })
// }
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