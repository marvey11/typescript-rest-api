module.exports = [
    {
        name: "default",
        type: "mariadb",
        host: "localhost",
        port: 3306,
        username: "codescape",
        password: "codescape",
        database: "test",
        synchronize: true,
        entities: ["src/entities/*.entity.ts"]
    }
];
