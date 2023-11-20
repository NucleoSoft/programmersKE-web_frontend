// import axios from "axios";

// export const handleCompile = () => {
//     setProcessing(true);
//     const formData = {
//         language_id: language.id,
//         source_code: btoa(code),
//         stdin: btoa(customInput),
//     };
//     const options = {
//         method: "POST",
//         url: process.env.REACT_APP_RAPID_API_URL,
//         params: { base64_encoded: "true", fields: "*" },
//         headers: {
//             "content-type": "application/json",
//             "Content-Type": "application/json",
//             "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
//             "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//         },
//         data: formData,
//     };

//     axios
//         .request(options)
//         .then(function (response) {
//             console.log("res.data", response.data);
//             const token = response.data.token;
//             checkStatus(token);
//         })
//         .catch((err) => {
//             let error = err.response ? err.response.data : err;
//             setProcessing(false);
//             console.log(error);
//         });
// };