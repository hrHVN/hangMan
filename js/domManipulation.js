function scoreBoard(objectList) {
    // Sort the array based on decending score 
    objectList.sort((a, b) => b.score - a.score);
    // Clear the table
    $('#scoreBoardTable tbody').html('');
    // Set the max visible scores
    let listLength = objectList.length > 20 ? 20 : objectList.length;
    // Populate DomTable
    for (let i = 0; i < listLength; i++) {
        $('#scoreBoardTable tbody').append(`<tr>\
            <td>${i + 1}</td>\
            <td scope="row">${objectList[i].name}</td>\
            <td>${objectList[i].score} (${objectList.difficulty})</td>\
            <td>${objectList[i].secret}</td>\
            <td>${objectList[i].target}</td>\
            <td class="visually-hidden">${objectList[i].hash}<td>\
            </tr>\
        `);
    };
}

class Populate {
    // Populate the <p>-tags (secretWord, guessed list, sucess list, default = html)
    // needs rewriting for better generalpurpouse usage
    progress(caseType, data) {
        switch (caseType) {
            case 'secret':
                $('#secretWordProgress').text(data);
                break;

            case 'guessed':
                for (let w in data) {
                    $('#yourGuesses').append(`<p class="btn btn-outline-danger">${w}</p>`);
                }
                break;

            case 'succes':
                for (let w in data) {
                    $('#yourGuesses').append(`<p class="btn btn-success">${w}</p>`);
                }
                break;
            default:
                $(caseType).html(data);
                break;
        }
    }

    // Draw the noose based on a numeric value
    // draws the game console -> Might export to own class
    grapchics() { }

    // Display in the <tFoot> current score
    setPlaceMent(playerObject, playerPlacement) {
        $('#scoreBoardTable tfoot').html(`<tr class="table-active">\
        <td>${playerPlacement}</td>\
        <td scope="row">${playerObject.name}</td>\
        <td>${playerObject.score} (${playerObject.difficulty})</td>\
        <td>${playerObject.secret}</td>\
        <td>${playerObject.target}</td>\
        <td class="visually-hidden">${playerObject.hash}<td>\
        </tr>`);
    }

    getGameDifficulty() {
        let dom = new Populate();
        let result = null;
        const form = '<label for="Asian">Asian</label>\
        <input type="checkbox" name="Asian" value="Asian">\
        <label for="Hard">Hard</label>\
        <input type="checkbox" name="Hard" value="Hard">\
        <label for="Medium">Medium</label>\
        <input type="checkbox" name="Medium" value="Medium">\
        <label for="Easy">Easy</label>\
        <input type="checkbox" name="Easy" value="Easy">';

        dom.progress('#ConsoleLog', form)

        // $('#ConsoleLog input').on('click', function () {
        //     $('#ConsoleLog input').not(this).prop('checked', false);
        //     result = $('input:checked').val();
        // });

        // return result;
    }
}

export { Populate, scoreBoard };