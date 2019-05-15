var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Story about the Sorcerer',
        img: './img/Harry-Potter.jpg'
    },
    {
        id: 2,
        title: 'Lion King',
        desc: 'Story about the King of savannah',
        img: './img/Lion_King.jpg'
    },
    {
        id: 3,
        title: 'Big Bang Theory',
        desc: 'Story about group of scientist in real world',
        img: './img/bbt.jpg'
    },
    {
        id: 4,
        title: 'Game of Thrones',
        desc: 'Story about fight for throne of seven kingdoms',
        img: './img/game_of_thrones.jpg'
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.img,
        }),
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Film list'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));