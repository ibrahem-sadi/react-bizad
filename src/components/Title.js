function Title(props) {
    const { mainTxt } = props;

    return (
        <header>
            <div className=" p-3 pb-md-4 mx-auto text-center bg-dark">
                <h1 className="display-4 fw-normal text-white bg-dark">
                    {mainTxt}
                </h1>
                {
                    props.children
                }
            </div>
        </header>
    );
}

export default Title;