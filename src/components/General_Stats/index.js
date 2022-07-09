const GeneralStats = () => {
    return (
        <header>
            <h1>General Stats</h1>
            <div class="general-table">
                <List>Total Book Count:</List>
                <List>There are currently {value} books borrowed</List>
                <List>There are currently {value} accounts registered 
                with this library.</List>
            </div>
        </header>
    )
}
