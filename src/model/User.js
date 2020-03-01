class UserModel {
    constructor(){
        
    }

    save(data){
        const saveData = [];
        const item = data['id'];
        saveData.push(data);
        localStorage.setItem(item, JSON.stringify(saveData));        
    }

    update(data){
        var item = data['id'];
        var elTrUpdateUsu = document.querySelector(`tr#${item}`);
        elTrUpdateUsu.remove();

        var userView = new UserView();
        userView.assembleNameList(data, userView.buttons(item));

        localStorage.removeItem(item);
        localStorage.setItem(item, JSON.stringify(data));
    }

    delete(id){
        var elTrRemove = document.querySelector(`tr#${id}`);

        elTrRemove.remove();
        localStorage.removeItem(id);
    }

    read(){

        var itens = localStorage.length;
        var tbLocalStorage = [];
        var readData = new UserView();

        for (var i = 0; i < itens; i++) {
            tbLocalStorage = localStorage.getItem(localStorage.key(i));
            readData.assembleNameList(JSON.parse(tbLocalStorage), readData.buttons(localStorage.key(i)));
        }

    }
}