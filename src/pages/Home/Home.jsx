import Dropzone from "../../components/UploadFile/Dropzone";
import DownloadBox from "../../components/ConvertedFiles/DownloadBox";
import ConvertToTxt from "../../utils/convert";
import { useState } from "react";
import './Home.css';

const Home = () => {
    const [files, setFiles] = useState([])
	const [convertedFiles, setConvertedFiles] = useState([])

	const handleConvert = async (files) => {
		const result = await ConvertToTxt(files)
		setConvertedFiles(prev => [...prev, ...result])
		setFiles([])
	}

    return (
        <div className="layout">
            {/* Top Bar */}
            <header className="topbar">
                <div className="topbar-logo">
                    <span className="topbar-logo-icon">⇄</span>
                    <span className="topbar-title">FileConverter</span>
                </div>
                <nav className="topbar-nav">
                    <a href="#">Docs</a>
                    <a href="#">About</a>
                </nav>
            </header>

            <div className="body">
                {/* Left Sidebar */}
                <aside className="sidebar">
                    <nav className="sidebar-nav">
                        <a href="#" className="sidebar-item active">
                            <span className="sidebar-icon">⬆</span>
                            Convert
                        </a>
                        <a href="#" className="sidebar-item">
                            <span className="sidebar-icon">🕐</span>
                            History
                        </a>
                        <a href="#" className="sidebar-item">
                            <span className="sidebar-icon">⚙</span>
                            Settings
                        </a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="main">
                    <div className="main-inner">
                        <h2 className="main-heading">Convert your files</h2>
                        <p className="main-sub">Upload any file and convert it to your desired format.</p>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleConvert(files)
                            const formData = new FormData(e.currentTarget)
                            const file = formData.get("my-file")
                            console.log(file)
                        }}>
                            <Dropzone name="my-file" required files={files} setFiles={setFiles} />
                            <button className="submit-btn" type="submit">Convert</button>
                        </form>
						<DownloadBox convertedFiles={convertedFiles}/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home
