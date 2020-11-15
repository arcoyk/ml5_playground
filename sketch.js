var v = "dog";

function nearest(w) {
    return wv.nearest(w, 100, (e, r) => {
        if (r) {
            console.log(r);
        } else {
            console.log("error");
        }
    });
}

function a(t) {
    var e = document.createElement("div");
    e.innerText = t;
    d = document.getElementById("main");
    d.insertBefore(e, d.firstChild);
}

window.onload = () => {
    a("Loading model...");
    wv = ml5.word2vec('data/word2vec1000.json', ()=> {
        setInterval(ar, 1000);
    });
};

function ar() {
    a(v);
    wv.nearest(v, 3, (e, rs) => {
        for (var r of rs) {
            a(JSON.stringify(r));
        }
        v = _.sample(rs).word;
        console.log(v);
    });
}