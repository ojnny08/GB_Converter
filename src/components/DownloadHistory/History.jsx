import './History.css'

const History = ({ convertedFiles }) => {
    if (convertedFiles.length === 0) return (
        <p className="history-empty">No files converted yet.</p>
    )

    return (
        <ul className="history-list">
            {convertedFiles.map((file, index) => (
                <li key={index} className="history-item">
                    <span className="history-name">{file.name}</span>
                    <span className="history-size">{(file.size / 1024).toFixed(1)} KB</span>
                </li>
            ))}
        </ul>
    )
}

export default History
