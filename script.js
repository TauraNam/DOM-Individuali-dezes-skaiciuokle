function ilgioPakeitimas() {
    let ilgioSuvestine = document.getElementById('rezultatas-ilgis')

    let pasirinktasIlgis = document.getElementById('ilgioPasirinkimas').value

    ilgioSuvestine.innerText = pasirinktasIlgis

    kubaturosNustatymas()
    sumosSkaiciavimas()
}



function plocioPakeitimas() {
    let plocioSuvestine = document.getElementById('rezultatas-plotis')

    let pasirinktasPlotis = document.getElementById('plocioPasirinkimas').value

    plocioSuvestine.innerText = pasirinktasPlotis

    kubaturosNustatymas()
    sumosSkaiciavimas()
}
    
    function aukscioPakeitimas() {
        let aukscioSuvestine = document.getElementById('rezultatas-aukstis')

        let pasirinktasAukstis = document.getElementById('aukscioPasirinkimas').value

        aukscioSuvestine.innerText = pasirinktasAukstis

        kubaturosNustatymas()
        sumosSkaiciavimas()
    }

    function kiekioPakeitimas() {
        let pasirinktasKiekis = document.getElementById('kiekis').value

        if (pasirinktasKiekis < 0 || pasirinktasKiekis == 'e') {
            document.getElementById('error').style.display = 'block'
        } else {
             document.getElementById('error').style.display = 'none'
        }

        let kiekioSuvestine = document.getElementById('rezultatas-kiekis')

        kiekioSuvestine.innerText = pasirinktasKiekis

        sumosSkaiciavimas()
    }


    function kubaturosNustatymas() {
        kubaturosSuvestine = document.getElementById('rezultatas-kubatura')

        let pasirinktasAukstis = document.getElementById('aukscioPasirinkimas').value

        let pasirinktasIlgis = document.getElementById('ilgioPasirinkimas').value

        let pasirinktasPlotis =document.getElementById('plocioPasirinkimas').value

        kubaturosSuvestine.innerText = (pasirinktasAukstis * pasirinktasIlgis * pasirinktasPlotis) / 1000000000
    }

    function sumosSkaiciavimas() {
        let kaina = 100;
        document.getElementById('rezultatas-viso').innerText = (kaina * document.getElementById('rezultatas-kubatura').innerText * document.getElementById('kiekis').value).toFixed(2) + '€'

    }
