// //This is for the Blogs(Home) Page

// import { onSnapshot, orderBy } from "firebase/firestore"

// export const FetchBlogs =  async () => {
//     const colRef = collection(db, 'Blogs');
//     const q = query(colRef, orderBy('createdAt'))
//     onSnapshot(q, (snapshot) => {
//         const posts = [];
//         snapshot.docs.forEach(doc => {
//             posts.push({...doc.data()})
//         });
// })

//     console.log(typeof posts);

// }


