import dotenv from 'dotenv';
dotenv.config();

const config = {
    db: {
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    },
    themoviedb: {
        apiKey: process.env.THEMOVIEDB_API_KEY,
        baseUrl: process.env.THEMOVIEDB_BASE_URL,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    }
}

export default config;