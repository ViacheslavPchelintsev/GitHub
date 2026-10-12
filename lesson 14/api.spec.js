beforeEach(() => {
    console.log('...test executing...');
});

afterEach(() => {
    console.log('...test executed...');
});

const axios = require('axios');

describe('Training API Test', () => {
    test('GET 1 API test', async () => {
     const response = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=2", 
     );
     expect(response.status).toBe(200);
     console.log(response.data);
    });
    test('POST 1 API test', async () => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: 'testing API',
            body: 'Some weird text',
            userId: 11
        });
        expect(response.status).toBe(201);
        console.log(response.data);
    });
    test('GET 2 API test', async () => {
     const response = await axios.get("https://jsonplaceholder.typicode.com/comments", 
        {
        params: {
            postId: 2,
            id: 10
        }
     } 
     );
     expect(response.status).toBe(200);
     expect(response.data[0].postId).toBe(2);
     expect(response.data[0].id).toBe(10);
     expect(response.data[0].name).toContain("deleniti");
     console.log(response.data);
    });
    test('GET 404 API test', async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments/1000");
        } catch (error) {
            expect(error.response.status).toBe(404);
            console.log(error.response.data);
        }
    });
    test('POST 2 API test', async () => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        userId: 1,
        id: 101,
        title: 'testing API 2',
        body: 'Some weird text 2'
    });
    expect(response.status).toBe(201);
    console.log(response.data);
});
});


