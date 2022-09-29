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
            title: 'Success',
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
    referenceExoplanets(){
        Swal.fire({
            title: 'Exoplanets',
            icon: 'info',
            confirmButtonColor: '#610094',
            confirmButtonText: 'Ok',
            background:'#000000',
            color: '#610094',
            html:`
            <label>To understand this table, before you need to read this table</label>
            <table class="table-kepler">
            <tr>
                <td>KOI</td>
                <td>Object of Interest number</td>
            </tr>
            <tr>
                <td>A</td>
                <td>Semi-major axis (AU)</td>
            </tr>
            <tr>
                <td>RPLANET	</td>
                <td>Planetary radius (Earth radii)</td>
            </tr>
            <tr>
                <td>RSTAR</td>
                <td>Stellar radius (Sol radii)</td>
            </tr>
            <tr>
                <td>TSTAR</td>
                <td>Effective temperature of host star as reported in KIC (k)</td>
            </tr>
            <tr>
                <td>KMAG</td>
                <td>Kepler magnitude (kmag)</td>
            </tr>
            <tr>
                <td>TPLANET</td>
                <td>Equilibrium temperature of planet, per Borucki et al. (k)</td>
            </tr>
            <tr>
                <td>T0</td>
                <td>Time of transit center (BJD-2454900)</td>
            </tr>
            <tr>
                <td>UT0</td>
                <td>Uncertainty in time of transit center (+-jd)</td>
            </tr>
            <tr>
                <td>PER</td>
                <td>Period (days)</td>
            </tr>
            <tr>
                <td>UPER</td>
                <td>Uncertainty in period (+-days)</td>
            </tr>
            <tr>
                <td>DEC</td>
                <td>Declination (@J200)</td>
            </tr>
            <tr>
                <td>RA</td>
                <td>Right ascension (@J200)</td>
            </tr>
            <tr>
                <td>MSTAR</td>
                <td>Derived stellar mass (msol)</td>
            </tr>

        </table>
            `
          })
    }
}