function SelectANum({ options, value, onSelect }) {
    return (
        <select value={value} onChange={(e) => onSelect(e.target.value, value)}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default SelectANum;
