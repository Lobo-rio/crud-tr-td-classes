class AddressController {

    generateAddress() {
        var id = document.querySelector('#idAddressModal').value;
        var name = document.querySelector('#nameAddressModal').value;
        var email = document.querySelector('#emailAddressModal').value;
        var address = document.querySelector('#AddressModal').value;
        var number = document.querySelector('#numberAddressModal').value;
        var city = document.querySelector('#cityAddressModal').value;
        var uf = document.querySelector('#ufAddressModal').value;

        return { id, name, email, address, number, city, uf };
    }

    startAddress(datas){
        var newData = Array.prototype.concat(datas);
        

        newData.forEach(data => {

            var address = data['address'];
            var number = data['number'];
            var city = data['city'];
            var uf = data['uf'];
            
            if (typeof address !== 'undefined') {
                document.querySelector('#AddressModal').value = address;
            };
            if (typeof number !== 'undefined') {
                document.querySelector('#numberAddressModal').value = number;
            };
            if (typeof city !== 'undefined') {
                document.querySelector('#cityAddressModal').value = city;
            };
            if (typeof uf !== 'undefined') {
                document.querySelector('#ufAddressModal').value = uf;
            };


        });

        
    }

    
}