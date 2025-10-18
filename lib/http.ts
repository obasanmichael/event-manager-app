// import axios from "axios";

// const http = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL + '/rest/v1',
//     headers: {
//         apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
//     }
// });

// const HttpService = {
//   get: (url: string, config = {}) => http.get(url, config),
//   post: (url: string, data:  any, config = {}) => http.post(url, data, config),
//   patch: (url: string, data: any, config = {}) => http.patch(url, data, config),
//   delete: (url: string, config = {}) => http.delete(url, config),
// };

// export default HttpService;