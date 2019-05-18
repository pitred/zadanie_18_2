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

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return React.createElement('li', {},
            React.createElement(MovieTitle, {
                title: this.props.movie.title
            }),
            React.createElement(MovieDesc, {
                desc: this.props.movie.desc
            }),
            React.createElement(MovieImg, {
                img: this.props.movie.img
            })
        );
    }
});
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.desc);
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('img', {
            src: this.props.img
        })
    }
})

var MovieList = React.createClass({
    propTypes: {
        list: React.PropTypes.array.isRequired,
    },
    render: function () {
        var films = this.props.list.map(function (movie) {
            return React.createElement(Movie, {
                movie: movie,
                key: movie.id
            })
        })
        return React.createElement('ul', {}, films);
    }
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Film list'),
        React.createElement(MovieList, {
            list: movies
        })
    );

ReactDOM.render(element, document.getElementById('app'));