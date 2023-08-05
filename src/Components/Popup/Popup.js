import "./Popup.css"
const Popup = ({onClose, text, description}) =>
     {
        return (
            <div className="popup" id="popup">
            <div className="text" id="text">{text}</div>
            <div className="description" id="description">{description}</div>
            <div className="pop-button" id="pop-button">
                <button onClick={onClose}>Confirm</button>
            </div>
            </div>
        );
    }
export default Popup;