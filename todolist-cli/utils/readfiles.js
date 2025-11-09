import fs, { write } from "fs";

export const readData = (path) => {
    if (!fs.existsSync(path)) return [];

    const data = fs.readFileSync(path, "utf-8")

    if(!data.trim()) return [];

    try{
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
    }
}

export const writeData = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2))
};
