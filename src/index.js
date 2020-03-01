const elFormButton = document.querySelector('#btnInclude');
const elMessage = document.querySelector('#message');

/* Read Local Storage */
const readLocalStorage = new UserModel();
readLocalStorage.read();


/* Save Local Storage */
elFormButton.addEventListener("click", function (e) {
    e.preventDefault();

    const userController = new UserController();
    const data = userController.generateSave();

    const userModel = new UserModel();
    const userSave = userModel.save(data);

    const userView = new UserView();
    userView.assembleNameList(data, userView.buttons(data['id']));

    const newCleanFields = new Utils();
    newCleanFields.cleanFields();

    var message = new Utils();
    message.messageEvent('alert alert-success alert-dismissible fade show', 'Incluído com Sucesso!', `O nome ${data['name']} ${data['email']}, está salvo, tanto na TR como no Local Storage.`)
});

/* Update Local Storage User */
var elModalButtonUpdate = document.querySelector('#btnEditModal');

elModalButtonUpdate.addEventListener("click", function(){
    $('#editTr').modal('hide');

    var updateController = new UserController();
    var data = updateController.generatetUpdate();

    var updateUser = new UserModel();
    updateUser.update(data);

    var message = new Utils();
    message.messageEvent('alert alert-primary alert-dismissible fade show', 'Alterado com Sucesso!', `O nome ${data['name']} ${data['email']}, está alterado, tanto na TR como no Local Storage.`)
});

/* Update Local Storage Address */
var elModalButtonAddress = document.querySelector('#btnEditAddressModal');

elModalButtonAddress.addEventListener("click", function() {
    $('#editAddressTr').modal('hide');

    var addressController = new AddressController();
    var data = addressController.generateAddress();
    
    var addressModel = new AddressModel();
    addressModel.update(data);

    var message = new Utils();
    message.messageEvent('alert alert-primary alert-dismissible fade show', 'Endereço Incluído com Sucesso!', `O endereço, para o nome ${data['name']} ${data['email']}, está incluído, tanto na TR como no Local Storage.`)
});



