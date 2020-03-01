class Utils {

    generateCode(){
        var id = `_${Math.round(Math.random() * (10000 - 3))}`;
        return id;
    }

    cleanFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
    }

    cleanFieldsAddress() {
        document.querySelector('#idAddressModal').value = '';
        document.querySelector('#nameAddressModal').value = '';
        document.querySelector('#emailAddressModal').value = '';
        document.querySelector('#AddressModal').value = '';
        document.querySelector('#numberAddressModal').value = '';
        document.querySelector('#cityAddressModal').value = '';
        document.querySelector('#ufAddressModal').value = '';
    }

    messageEvent(type, h4Message, message) {
        
        var elDivMessage = document.createElement('div');
        var elHrMessage = document.createElement('hr');
        var elH4Message = document.createElement('h4');
        var elPMessage = document.createElement('p');

        var txtH4Message = document.createTextNode(h4Message);
        var txtPMessage = document.createTextNode(message);

        elDivMessage.setAttribute('class', type);
        elDivMessage.setAttribute('role', 'alert');

        elH4Message.appendChild(txtH4Message);
        elPMessage.appendChild(txtPMessage);

        elDivMessage.appendChild(elH4Message);
        elDivMessage.appendChild(elHrMessage);
        elDivMessage.appendChild(elPMessage);
        
        elMessage.appendChild(elDivMessage);

        setTimeout(() => {
            elMessage.removeChild(elDivMessage);
        }, 3000);

    }

}