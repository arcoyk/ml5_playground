// Create a new word2vec method
const wv = ml5.word2vec('data/word2vec1000.json', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Find the closest word to 'rainbow'
wordVectors.nearest('dog', (err, results) => {
  console.log(results);
});

function nearest(w) {
    return wv.nearest(w, 100, (e, r) => {
        if (r) {
            console.log(r);
        } else {
            console.log("error");
        }
    });
}

function asto(s1, s2, t1) {
    // Returns t2 for t1, which is s2 for s1
}