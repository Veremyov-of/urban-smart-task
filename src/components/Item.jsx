//style
import '../css/item.css';

export default function Item(props) {
    const item = props.item;
    return (<h1>{item.login}</h1>);
}