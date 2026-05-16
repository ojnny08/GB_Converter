import { useNavigate } from 'react-router-dom'
import HistoryList from '../../components/DownloadHistory/History'
import '../Home/Home.css'

const History = ({ convertedFiles }) => {
    const nav = useNavigate()

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
                        <a className="sidebar-item" onClick={() => nav('/')}>
                            <span className="sidebar-icon">⬆</span>
                            Convert
                        </a>
                        <a className="sidebar-item active" onClick={() => nav('/history')}>
                            <span className="sidebar-icon">🕐</span>
                            History
                        </a>
                        <a className="sidebar-item">
                            <span className="sidebar-icon">⚙</span>
                            Settings
                        </a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="main">
                    <div className="main-inner">
                        <h2 className="main-heading">History</h2>
                        <p className="main-sub">Files you have converted this session.</p>
                        <HistoryList convertedFiles={convertedFiles} />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default History
