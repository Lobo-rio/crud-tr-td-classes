class UserView {
    constructor() {
        this.elTbody = document.querySelector('#registrationName')
    }

    
    assembleNameList(datas, startButtons) {

        var tbNew = Array.prototype.concat(datas);
        tbNew.forEach(data => {
            var buttonEdit = `${data['id']}Edit`;
            var buttonRemove = `${data['id']}Remove`;
            var buttonEditAddress = `${data['id']}EditAddress`;

            this.startLine(data, startButtons);
            this.eventsButtons(buttonEdit, buttonRemove, buttonEditAddress);

        });

    }
    
    startLine(data, startButtons) {
        var tags = this.initTags();
        
        tags['elTr'].setAttribute('id', `${data['id']}`);

        tags['elThId'].setAttribute('scope', 'row');
        tags['txtId'] = document.createTextNode(data['id']);
        tags['elThId'].appendChild(tags['txtId']);

        tags['elTdName'].setAttribute('id', 'Name');
        tags['txtName'] = document.createTextNode(data['name']);
        tags['elTdName'].appendChild(tags['txtName']);

        tags['elTdEmail'].setAttribute('id', 'Email');
        tags['txtEmail'] = document.createTextNode(data['email']);
        tags['elTdEmail'].appendChild(tags['txtEmail']);


        tags['elTr'].appendChild(tags['elThId']);
        tags['elTr'].appendChild(tags['elTdName']);
        tags['elTr'].appendChild(tags['elTdEmail']);

        startButtons.forEach(oneButton => {

            var button = this.initButtons(oneButton);

            button.setAttribute('data-id', data['id']);

            tags['elTdOptions'].appendChild(button);
            tags['elTr'].appendChild(tags['elTdOptions']);

        });

        this.elTbody.appendChild(tags['elTr']);
    }

    initTags() {
        var elTr = document.createElement('tr');
        var elThId = document.createElement('th');
        var elTdName = document.createElement('td');
        var elTdEmail = document.createElement('td');
        var elTdOptions = document.createElement('td');

        var txtId;
        var txtName;
        var txtEmail;

        return { elTr, elThId, elTdName, elTdEmail, elTdOptions, txtId, txtName, txtEmail };
    }

    buttons(id) {

        var startButtons = [
            {
                "id": `${id}Edit`,
                "class": "btn btn-outline-primary mr-1",
                "icons": "fa fa-edit",
                "data-toggle": "modal",
                "data-target": "#editTr"
            },
            {
                "id": `${id}Remove`,
                "class": "btn btn-outline-danger mr-1",
                "icons": "fa fa-trash-o"
            },
            {
                "id": `${id}EditAddress`,
                "class": "btn btn-outline-primary",
                "icons": "fa fa-plus-square",
                "data-toggle": "modal",
                "data-target": "#editTrAddress"
            }
        ];

        return startButtons;
    }

    initButtons(oneButton) {
        var elButton = document.createElement('button');
        var elIcon = document.createElement('i');

        elButton.setAttribute('id', oneButton['id']);
        elButton.setAttribute('class', oneButton['class']);

        elIcon.setAttribute('class', oneButton['icons']);
        elButton.appendChild(elIcon);

        return elButton;
    }

    eventsButtons(buttonEdit, buttonRemove, buttonEditAddress) {
        var elButtonEdit = document.querySelector(`#${buttonEdit}`);
        var elButtonRemove = document.querySelector(`#${buttonRemove}`);
        var elButtonEditAddress = document.querySelector(`#${buttonEditAddress}`);

        elButtonRemove.addEventListener("click", function () {
            var id = this.dataset.id;
            var idMessage = false;
            if (confirm("Você realmente deseja excluir a linha (TR - " + id + ")?")) {
                var delUsu = new UserModel();
                delUsu.delete(id);
                idMessage = true;
            }
            if (idMessage) {
                var message = new Utils();
                message.messageEvent('alert alert-danger alert-dismissible fade show', 'Excluído com Sucesso!', `O ID ${id} , está excluído, tanto na TR como no Local Storage.`)
            }
        });

        elButtonEdit.addEventListener("click", function () {
            var id = this.dataset.id;
            var initUser = new UserController();
            initUser.startUser(id);

            $('#editTr').modal('show');
            
        });

        elButtonEditAddress.addEventListener("click", function () {
            var id = this.dataset.id;
            var cleanAddress = new Utils();
            cleanAddress.cleanFieldsAddress();

            var initUser = new UserController();
            initUser.startUserAddress(id);

            var addressReadModel = new AddressModel();
            var dataAddress = addressReadModel.read(id);

            var initAddress = new AddressController();
            initAddress.startAddress(dataAddress);

            $('#editAddressTr').modal('show');
            
        });
    }

    

}