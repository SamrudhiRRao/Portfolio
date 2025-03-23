function Message() {
    const name ='Sam';
    if (name)
        return <h1> Hello {name}!</h1>;
    return <h1> Hello There! </h1>;
}

export default Message;