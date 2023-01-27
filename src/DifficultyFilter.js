function DifficultyFilter ({filteredHikes}){

    return(
        <div>
            <div className="containerTwo">
                <button className="btn" onClick = {()=> filteredHikes ("easy")}>Easy</button>
                <button className="btn" onClick = {()=> filteredHikes ('medium')}>Medium</button>
                <button className="btn" onClick = {()=> filteredHikes ('hard')}>Hard</button>
            </div>
        </div>
    )
}

export default DifficultyFilter; 