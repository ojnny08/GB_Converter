import './DownloadBox.css'
import { formatSize } from '../../utils/formatSize'

const DownloadBox = ({ convertedFiles }) => {
    if (convertedFiles.length === 0) return null

    const handleDownloadAll = () => {
        convertedFiles.forEach((file) => {
            const a = document.createElement('a')
            a.href = file.url
            a.download = file.name
            a.click()
        })
    }

    return (
        <div className="download-box">
            <ul className="download-list">
                {convertedFiles.map((file, index) => (
                    <li key={index} className="download-item">
                        <span className="download-name">{file.name}</span>
                        <span className="download-size">{formatSize(file.size)}</span>
                    </li>
                ))}
            </ul>
            <button className="download-btn" onClick={handleDownloadAll}>
                Download All
            </button>
        </div>
    )
}

export default DownloadBox
