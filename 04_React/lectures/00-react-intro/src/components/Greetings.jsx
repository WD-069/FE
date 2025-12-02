export default function Greeting(props) {
    return (
        <p className={props.name ? 'highlight' : ''}>
            Hello {props.name ? props.name : 'Guest'}
        </p>
    );
}
