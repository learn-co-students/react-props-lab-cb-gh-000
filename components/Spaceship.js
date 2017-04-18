const React = require('react');


class Spaceship extends React.Component {

    render() {
        var a = this.props.hasRockets ? "salim" : "jaabiri"
        return (<div>
            <h1 style={{ color: this.props.colors[0] }}>{this.props.name}</h1>
            <h3 style={{ color: this.props.colors[1] }}> {this.props.speed}</h3>
            <h2>{a}</h2>
            <ul>
                {
                    this.props.colors.map((color, i) => {
                        return (<li key={i}>{color}</li>)
                    })
                }
            </ul>
        </div>)
    }


}
Spaceship.defaultProps = {
   hasRockets:false,
   colors:['black', 'red']
}
module.exports = Spaceship;
