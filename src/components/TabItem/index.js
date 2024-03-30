import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, changeTheActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    changeTheActiveTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={onClickTab}
        type="button"
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
