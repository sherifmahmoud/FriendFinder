$('document').ready(function () {
    var questions = [
        'Your mind is always buzzing with unexplored ideas and plans',
        'Generally speaking, you rely more on your experience than your imagination',
        'You find it easy to stay relaxed and focused even when there is some pressure',
        'You rarely do something just out of sheer curiosity',
        'People can rarely upset you',
        'It is often difficult for you to relate to other people’s feelings',
        'In a discussion, truth should be more important than people’s sensitivities',
        'You rarely get carried away by fantasies and ideas',
        'You think that everyone’s views should be respected regardless of whether they are supported by facts or not',
        'You feel more energetic after spending time with a group of people'
    ];

    //generate choices dynamically
    questions.forEach(function (question, index) {
        $('#questions').append($('<h3>').text(`Question ${index + 1}`));
        var h6Tag = $('<h6>').text(question);
        //create the drop down control giving it an id for e.g. id='Q1'
        var dropDown = $('<select>').attr("id", `Q${index + 1}`);
        //add the 5 choices to the drop down list
        for (var i = 1; i <= 5; i++) {

            var text = `${i}`;
            if (i === 1) {
                text += ' (Strongly Disagree)';
            }
            if (i === 5) {
                text += ' (Strongly Agree)';
            }
            var optionElement = $('<option>').attr('value', i);
            optionElement.text(text);
            dropDown.append(optionElement);
        }
        $('#questions').append(h6Tag);
        $('#questions').append(dropDown);
        $('#questions').append($('<br>'));
        $('#questions').append($('<br>'));
    });
    var submit_button = $('<button>').attr('id', 'submit');
    submit_button.text('Submit');
    $('#questions').append(submit_button);

    //Handle the click of the Submit button created dynamically
    $(document).on('click', 'button', function () {
        var friend = {
            name: $('#name').val(),
            photo: $('#photoLink').val(),
            scores: []
        }
        for (var i = 0; i < 10; i++) {
            friend.scores.push($(`#Q${i + 1}`).val());
        }
        //submit the user's info
        $.post('/api/friends', friend, function (data) {
            //display that match modally
            $()
            $("#myModal").modal();
        });
    });
});