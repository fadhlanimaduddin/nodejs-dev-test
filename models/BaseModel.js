const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname, '../data.json');

class BaseModel {
    constructor() {
        if (!fs.existsSync(dataFilePath)) {
            fs.writeFileSync(dataFilePath, JSON.stringify([]));
        }
    }

    _readData() {
        const rawData = fs.readFileSync(dataFilePath);
        return JSON.parse(rawData);
    }

    _writeData(data) {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    }

    create(item) {
        const data = this._readData();
        item.id = data.length > 0 ? Math.max(...data.map(d => d.id)) + 1 : 1;
        data.push(item);
        this._writeData(data);
        return item;
    }

    readAll() {
        return this._readData();
    }

    readById(id) {
        const data = this._readData();
        return data.find(item => item.id === id);
    }

    update(id, updatedFields) {
        const data = this._readData();
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            data[index] = { ...data[index], ...updatedFields };
            this._writeData(data);
            return data[index];
        }
        return null;
    }

    delete(id) {
        const data = this._readData();
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            const deletedItem = data.splice(index, 1)[0];
            this._writeData(data);
            return deletedItem;
        }
        return null;
    }
}

module.exports = BaseModel;