import dotEnv from "dotenv";
dotEnv.config();

const config = {
  server: {
    port: 8080,
  },
  http: {
    timeout: 10000,
    base_url: process.env.NODE_BASE_URL || "http://localhost:8080/api",
    withCredentials: process.env.AUTH_ENABLED === "true",
  },
  auth: {
    auth_enabled: process.env.AUTH_ENABLED === "true",
    allowedOrigins: process.env.FRONT_END_URL || 'http://localhost:3000',
    jwt: {
      jwt_encryption_key: "drawing-app-secret",
      jwt_config: {
        algorithm: "HS256",
        expiresIn: "2d",
      },
    },
    cookie: {},
  },


  database: {
    connection_string: process.env.DATABASE_CONNECTION_STRING || 'mongodb+srv://admin:admin@cluster0.824is.mongodb.net/?retryWrites=true&w=majority',
    database_config: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

export default config;
