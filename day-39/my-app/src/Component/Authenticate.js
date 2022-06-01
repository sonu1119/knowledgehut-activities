export function Success(props) {
    let name = props.name;
    return (
        <div>
            <h2>Success component</h2>
            <div>Hello {name} You have logged in successfully</div>
        </div>
    );
}
