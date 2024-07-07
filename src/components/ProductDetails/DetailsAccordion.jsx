const DetailsAccordion = ({ itemId, details }) => {
    const accordionId = "accordion" + itemId;
    const collapseId = "collapse" + itemId;

    return (
        <div className="accordion" id={accordionId}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#" + collapseId}
                        aria-expanded="true"
                        aria-controls={collapseId}
                    >
                        <strong>Details</strong>
                    </button>
                </h2>
                <div id={collapseId} className="accordion-collapse collapse " data-bs-parent={"#" + accordionId}>
                    <div className="accordion-body">{details}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailsAccordion;
