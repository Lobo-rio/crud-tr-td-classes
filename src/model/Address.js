class AddressModel{

    update(data){
        const saveData = [];
        const item = data['id'];
        saveData.push(data);
        localStorage.setItem(item, JSON.stringify(saveData));
    }

    read(id){
        var tbLocalStorage = JSON.parse(localStorage.getItem(id));
        return tbLocalStorage;
    }
}