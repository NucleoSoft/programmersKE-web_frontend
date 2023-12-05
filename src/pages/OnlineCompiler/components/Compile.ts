import axios from 'axios';

export async function handleCompile() {
    const code = 'console.log("Hello, World!");'; // Replace with your code

    try {
        const response = await axios.post(import.meta.env.VITE_X_RAPID_API_URL, {
            source_code: code,
            language_id: 63, // Replace with your language_id
            stdin: "", // Replace with your stdin
        }, {
            headers: {
                'x-rapidapi-host': import.meta.env.VITE_X_RAPID_API_HOST,
                'x-rapidapi-key': import.meta.env.VITE_X_RAPID_API_KEY,
            }
        });

        console.log(response.data); // Handle the response data as needed
    } catch (error) {
        console.error(error); // Handle the error
    }
}