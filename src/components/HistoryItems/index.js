import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="row">
        <div className="history-item-container">
          <img src={logoUrl} alt="domain logo" className="logo-url" />
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domaine-url">{domainUrl}</p>
          </div>
        </div>
        <button
          data-testid="delete"
          className="button"
          type="button"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
