function load() {
    const sezione1 = document.getElementById("tabalberi1");
    const sezione2 = document.getElementById("tabalberi2");

    for (let i = 0; i < datiAlberi.alberi.length; i++) {
        const html = 
            '<li class="list-style">' +
                '<img src="'+ datiAlberi.alberi[i].immagine +'" alt="" class="secimgsection">' +
                '<div style="text-align: left;">' +
                    '<h3 class="subtitle-plantsection">'+ datiAlberi.alberi[i].nome + '</h3>' +
                    '<p>'+ datiAlberi.alberi[i].descrizione +'</p>' +
                '</div>' +
            '</li>';

        sezione1.innerHTML += html;
        sezione2.innerHTML += html;
    }
}

load();