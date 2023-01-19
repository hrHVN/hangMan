const ordListe = null;//restGetList('abs');
ordListeFunc()

function ordListeFunc() {
    const alfabet = ['abs', 'bro', 'c', 'dus', 'emn', 'fa', 'gru', 'he']//,'i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z','æ','ø','å'];
    const random = () => Math.floor(Math.random() * (alfabet.length - 1 + 1) + 0);

    const theList = restGetList(alfabet[random()]);
    console.log(theList);
}

// Ref APi https://ord.uib.no/
export function restGetList(searchWord) {
    // Get a list of words 
    $.ajax({
        type: "GET",
        url: `https://ord.uib.no/api/suggest?q=${searchWord}&dict=bm%2Cnn&n=50&include=efi&dform=int`,
        success: function (response) {
            let a = response.a['exact'];
            let b = [];
            for (let element in a) {
                b.push(a[element][0]);
            };
            return b;
        }
    });
}
