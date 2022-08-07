import Swal from "sweetalert2";

export class modals {
    errorModal(message: string) {
        Swal.fire({
            title: 'Ops',
            text: message,
            icon: 'error',
            confirmButtonColor: '#610094',
            confirmButtonText: 'Ok',
            background:'#000000',
            color: '#610094',
          })
    }
    successModal(message:string){
        Swal.fire({
            title: 'Nice Dude',
            text: message,
            icon: 'success',
            confirmButtonColor: '#610094',
            confirmButtonText: 'Ok',
            background:'#000000',
            color: '#610094',
          })
    }

    infoModal(message:string){
        Swal.fire({
            title: 'Info',
            text: message,
            icon: 'info',
            confirmButtonColor: '#610094',
            confirmButtonText: 'Ok',
            background:'#000000',
            color: '#610094',
          })
    }
}