class UserController {

    generateSave() {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;

        const newId = new Utils();
        const id = newId.generateCode();

        return { id, name, email };
    }

    generateUpdate() {
        var id = document.querySelector('#idModal').value;
        var name = document.querySelector('#nameModal').value;
        var email = document.querySelector('#emailModal').value;

        return { id, name, email };
    }

    startUser(id) {
        var elTrEdit = document.querySelector(`#${id}`);

        var txtName = elTrEdit.querySelector('#Name').innerHTML;
        var txtEmail = elTrEdit.querySelector('#Email').innerHTML;

        document.querySelector('#idModal').value = id;
        document.querySelector('#nameModal').value = txtName;
        document.querySelector('#emailModal').value = txtEmail;
    }

    startUserAddress(id) {
        var elTrEdit = document.querySelector(`#${id}`);

        var txtName = elTrEdit.querySelector('#Name').innerHTML;
        var txtEmail = elTrEdit.querySelector('#Email').innerHTML;

        document.querySelector('#idAddressModal').value = id;
        document.querySelector('#nameAddressModal').value = txtName;
        document.querySelector('#emailAddressModal').value = txtEmail;
    }

}